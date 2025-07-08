/**
 * @jest-environment jsdom
 */

import { animationPreloader } from '../animation-preloader';

// Mock sessionStorage
const mockSessionStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

Object.defineProperty(window, 'sessionStorage', {
  value: mockSessionStorage,
});

// Mock matchMedia for reduced motion
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('AnimationPreloader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockSessionStorage.getItem.mockReturnValue(null);
  });

  describe('isSessionLoaded', () => {
    it('returns false when session is not loaded', () => {
      mockSessionStorage.getItem.mockReturnValue(null);
      expect(animationPreloader.isSessionLoaded()).toBe(false);
    });

    it('returns true when session is loaded', () => {
      mockSessionStorage.getItem.mockReturnValue('true');
      expect(animationPreloader.isSessionLoaded()).toBe(true);
    });
  });

  describe('markSessionLoaded', () => {
    it('sets session storage correctly', () => {
      animationPreloader.markSessionLoaded();
      expect(mockSessionStorage.setItem).toHaveBeenCalledWith('animation-session-loaded', 'true');
    });
  });

  describe('prefersReducedMotion', () => {
    it('returns false when user does not prefer reduced motion', () => {
      expect(animationPreloader.prefersReducedMotion()).toBe(false);
    });

    it('returns true when user prefers reduced motion', () => {
      (window.matchMedia as jest.Mock).mockImplementation(query => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }));

      expect(animationPreloader.prefersReducedMotion()).toBe(true);
    });
  });

  describe('shouldShowLoader', () => {
    it('returns false when user prefers reduced motion', async () => {
      (window.matchMedia as jest.Mock).mockImplementation(query => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }));

      const result = await animationPreloader.shouldShowLoader();
      expect(result).toBe(false);
    });

    it('returns false when session is already loaded', async () => {
      mockSessionStorage.getItem.mockReturnValue('true');
      
      const result = await animationPreloader.shouldShowLoader();
      expect(result).toBe(false);
    });
  });

  describe('getOptimalLoaderDuration', () => {
    it('returns 600ms for reduced motion', () => {
      (window.matchMedia as jest.Mock).mockImplementation(query => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }));

      expect(animationPreloader.getOptimalLoaderDuration()).toBe(600);
    });

    it('returns 800ms for normal users', () => {
      expect(animationPreloader.getOptimalLoaderDuration()).toBe(800);
    });
  });
});