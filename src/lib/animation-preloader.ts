"use client";

interface PreloadOptions {
  timeout?: number;
  enableCache?: boolean;
  skipOnSlowConnection?: boolean;
  signal?: AbortSignal;
}

class AnimationPreloader {
  private static instance: AnimationPreloader;
  private loadedKey = 'animations-preloaded';
  private sessionKey = 'animation-session-loaded';
  
  static getInstance(): AnimationPreloader {
    if (!AnimationPreloader.instance) {
      AnimationPreloader.instance = new AnimationPreloader();
    }
    return AnimationPreloader.instance;
  }

  // Check if animations were already loaded in this session
  isSessionLoaded(): boolean {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem(this.sessionKey) === 'true';
  }

  // Mark animations as loaded for this session
  markSessionLoaded(): void {
    if (typeof window === 'undefined') return;
    sessionStorage.setItem(this.sessionKey, 'true');
  }

  // Check if user prefers reduced motion
  prefersReducedMotion(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // Check connection speed
  isSlowConnection(): boolean {
    if (typeof navigator === 'undefined') return false;
    // @ts-ignore - NetworkInformation is experimental
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (!connection) return false;
    
    // Consider 2G/slow-2g as slow
    return connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g';
  }

  // Preload critical resources
  async preloadCriticalResources(signal?: AbortSignal): Promise<void> {
    const promises: Promise<void>[] = [];

    // Preload fonts
    promises.push(this.preloadFonts(signal));
    
    // Preload critical CSS
    promises.push(this.preloadCriticalCSS(signal));
    
    // Check if Framer Motion is ready
    promises.push(this.waitForFramerMotion(signal));

    await Promise.allSettled(promises);
  }

  private async preloadFonts(signal?: AbortSignal): Promise<void> {
    if (typeof document === 'undefined') return;
    if (signal?.aborted) throw new Error('Aborted');
    
    const fontPromises: Promise<FontFace>[] = [];
    
    // Check if Inter font is loaded
    if (document.fonts) {
      const interRegular = new FontFace('Inter', 'url(/fonts/inter-var.woff2)', {
        weight: '100 900',
        display: 'swap'
      });
      
      fontPromises.push(
        interRegular.load().then(font => {
          if (signal?.aborted) throw new Error('Aborted');
          document.fonts.add(font);
          return font;
        })
      );
    }

    await Promise.allSettled(fontPromises);
  }

  private async preloadCriticalCSS(signal?: AbortSignal): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof document === 'undefined') {
        resolve();
        return;
      }

      if (signal?.aborted) {
        reject(new Error('Aborted'));
        return;
      }

      const abortListener = () => reject(new Error('Aborted'));
      signal?.addEventListener('abort', abortListener);

      // Wait for CSS to be fully parsed
      if (document.readyState === 'loading') {
        const handleLoaded = () => {
          signal?.removeEventListener('abort', abortListener);
          resolve();
        };
        document.addEventListener('DOMContentLoaded', handleLoaded, { once: true });
      } else {
        signal?.removeEventListener('abort', abortListener);
        resolve();
      }
    });
  }

  private async waitForFramerMotion(signal?: AbortSignal): Promise<void> {
    return new Promise((resolve, reject) => {
      if (signal?.aborted) {
        reject(new Error('Aborted'));
        return;
      }

      // Check if motion is already available
      if (typeof window !== 'undefined' && (window as any).motion) {
        resolve();
        return;
      }

      const abortListener = () => {
        clearInterval(checkInterval);
        clearTimeout(timeoutId);
        reject(new Error('Aborted'));
      };
      
      signal?.addEventListener('abort', abortListener);

      // Wait for module to be ready
      const checkInterval = setInterval(() => {
        if (signal?.aborted) {
          clearInterval(checkInterval);
          return;
        }
        
        if (typeof window !== 'undefined' && (window as any).motion) {
          clearInterval(checkInterval);
          clearTimeout(timeoutId);
          signal?.removeEventListener('abort', abortListener);
          resolve();
        }
      }, 50);

      // Timeout after 3 seconds
      const timeoutId = setTimeout(() => {
        clearInterval(checkInterval);
        signal?.removeEventListener('abort', abortListener);
        resolve();
      }, 3000);
    });
  }

  // Main preload function with intelligent loading
  async shouldShowLoader(options: PreloadOptions = {}): Promise<boolean> {
    const {
      timeout = 3000,
      enableCache = true,
      skipOnSlowConnection = true,
      signal
    } = options;

    // Skip loader if user prefers reduced motion
    if (this.prefersReducedMotion()) {
      return false;
    }

    // Skip loader if already loaded in session
    if (enableCache && this.isSessionLoaded()) {
      return false;
    }

    // Skip loader on slow connections (optional)
    if (skipOnSlowConnection && this.isSlowConnection()) {
      this.markSessionLoaded(); // Don't show again this session
      return false;
    }

    // For first-time load, check if resources need loading
    const startTime = performance.now();
    
    try {
      if (signal?.aborted) throw new Error('Aborted');
      
      await Promise.race([
        this.preloadCriticalResources(signal),
        new Promise((resolve, reject) => {
          const timeoutId = setTimeout(resolve, timeout);
          signal?.addEventListener('abort', () => {
            clearTimeout(timeoutId);
            reject(new Error('Aborted'));
          });
        })
      ]);
      
      if (signal?.aborted) throw new Error('Aborted');
      
      const loadTime = performance.now() - startTime;
      
      // If resources loaded quickly (< 500ms), skip loader
      if (loadTime < 500) {
        this.markSessionLoaded();
        return false;
      }
      
      // Show loader for slower loads
      return true;
      
    } catch (error) {
      if (error instanceof Error && error.message === 'Aborted') {
        return false; // Component was unmounted, don't show loader
      }
      console.warn('Animation preloader error:', error);
      // On error, show minimal loader
      return true;
    }
  }

  // Get optimal loader duration based on load performance
  getOptimalLoaderDuration(): number {
    if (this.isSlowConnection()) return 1200; // Longer for slow connections
    if (this.prefersReducedMotion()) return 600; // Shorter for reduced motion
    return 800; // Standard duration
  }

  // Mark preloading as complete
  completePreload(): void {
    this.markSessionLoaded();
  }
}

// Export singleton instance
export const animationPreloader = AnimationPreloader.getInstance();

// Utility hook for React components
export function useAnimationPreloader(options?: PreloadOptions) {
  return {
    shouldShowLoader: (opts?: PreloadOptions) => animationPreloader.shouldShowLoader(opts || options),
    isSessionLoaded: animationPreloader.isSessionLoaded.bind(animationPreloader),
    completePreload: animationPreloader.completePreload.bind(animationPreloader),
    getOptimalDuration: animationPreloader.getOptimalLoaderDuration.bind(animationPreloader),
    prefersReducedMotion: animationPreloader.prefersReducedMotion.bind(animationPreloader),
  };
}