// Unified Design System for VerifyHire Platform

export const designSystem = {
  // Color Palette
  colors: {
    // Primary colors
    primary: {
      black: '#000000',
      white: '#ffffff',
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6', 
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      }
    },
    
    // Accent colors for status/actions
    accent: {
      alert: {
        light: '#fca5a5', // red-300
        default: '#ef4444', // red-500
        dark: '#dc2626', // red-600
      },
      warning: {
        light: '#fdba74', // orange-300
        default: '#f97316', // orange-500
        dark: '#ea580c', // orange-600
      },
      success: {
        light: '#86efac', // green-300
        default: '#22c55e', // green-500
        dark: '#16a34a', // green-600
      },
      info: {
        light: '#93c5fd', // blue-300
        default: '#3b82f6', // blue-500
        dark: '#2563eb', // blue-600
      },
      premium: {
        light: '#c084fc', // purple-300
        default: '#a855f7', // purple-500
        dark: '#9333ea', // purple-600
      }
    },

    // Glassmorphism effects
    glass: {
      light: 'rgba(255, 255, 255, 0.1)',
      medium: 'rgba(255, 255, 255, 0.2)',
      heavy: 'rgba(255, 255, 255, 0.3)',
      border: 'rgba(255, 255, 255, 0.2)',
    }
  },

  // Typography Scale
  typography: {
    // Display headings (hero sections)
    display: {
      xl: 'text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight',
      lg: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight',
      md: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight',
    },
    
    // Section headings
    heading: {
      xl: 'text-3xl md:text-4xl font-bold leading-tight',
      lg: 'text-2xl md:text-3xl font-bold leading-tight',
      md: 'text-xl md:text-2xl font-semibold leading-tight',
      sm: 'text-lg md:text-xl font-semibold leading-tight',
    },
    
    // Body text
    body: {
      lg: 'text-lg md:text-xl leading-relaxed',
      md: 'text-base md:text-lg leading-relaxed',
      sm: 'text-sm md:text-base leading-relaxed',
      xs: 'text-xs md:text-sm leading-relaxed',
    },
    
    // Labels and captions
    label: {
      lg: 'text-sm font-medium',
      md: 'text-xs font-medium',
      sm: 'text-xs font-normal',
    }
  },

  // Spacing Scale
  spacing: {
    section: 'py-20 md:py-24 lg:py-32',
    container: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
    card: 'p-6 md:p-8',
    button: 'px-6 py-3 md:px-8 md:py-4',
    gap: {
      xs: 'gap-2',
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
      xl: 'gap-12',
    }
  },

  // Component Styles
  components: {
    // Cards
    card: {
      base: 'rounded-2xl border backdrop-blur-xl shadow-2xl',
      glass: 'bg-white/10 border-white/20',
      solid: 'bg-gray-900/90 border-gray-800',
      hover: 'hover:scale-105 hover:shadow-3xl transition-all duration-300',
    },
    
    // Buttons
    button: {
      primary: 'rounded-xl bg-gradient-to-r from-white to-gray-100 text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300',
      secondary: 'rounded-xl border border-white/20 bg-white/10 text-white font-medium backdrop-blur-xl hover:bg-white/20 transition-all duration-300',
      ghost: 'rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300',
    },
    
    // Badges
    badge: {
      primary: 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-xl',
      accent: 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
      success: 'bg-green-500/20 text-green-300 border border-green-500/30',
      warning: 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
      info: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
    },
    
    // Status indicators
    indicator: {
      success: 'w-2 h-2 bg-green-400 rounded-full',
      warning: 'w-2 h-2 bg-orange-400 rounded-full',
      error: 'w-2 h-2 bg-red-400 rounded-full',
      info: 'w-2 h-2 bg-blue-400 rounded-full',
    }
  },

  // Animation presets
  animations: {
    fadeIn: 'transition-opacity duration-700 ease-out',
    slideUp: 'transition-transform duration-700 ease-out',
    scale: 'transition-transform duration-300 ease-out',
    glow: 'transition-shadow duration-300 ease-out',
  },

  // Layout patterns
  layouts: {
    // Standard section layout
    section: 'relative overflow-hidden',
    sectionInner: 'relative z-10',
    
    // Grid patterns
    featureGrid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    statsGrid: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    contentGrid: 'grid grid-cols-1 lg:grid-cols-2 items-center',
    
    // Flex patterns
    centerFlex: 'flex items-center justify-center',
    spaceBetween: 'flex items-center justify-between',
    stackFlex: 'flex flex-col space-y-6',
  }
} as const;

// Helper function to get consistent class combinations
export const getComponentClasses = {
  section: () => `${designSystem.layouts.section} ${designSystem.spacing.section}`,
  container: () => designSystem.spacing.container,
  card: (variant: 'glass' | 'solid' = 'glass') => 
    `${designSystem.components.card.base} ${designSystem.components.card[variant]} ${designSystem.components.card.hover}`,
  button: (variant: 'primary' | 'secondary' | 'ghost' = 'primary') =>
    `${designSystem.components.button[variant]} ${designSystem.spacing.button}`,
  badge: (variant: 'primary' | 'success' | 'warning' | 'info' = 'primary') =>
    variant === 'primary' 
      ? designSystem.components.badge.primary
      : `${designSystem.components.badge.accent} ${designSystem.components.badge[variant]}`,
  heading: (size: 'xl' | 'lg' | 'md' | 'sm' = 'lg') =>
    designSystem.typography.heading[size],
  body: (size: 'lg' | 'md' | 'sm' | 'xs' = 'md') =>
    designSystem.typography.body[size],
};

export default designSystem;