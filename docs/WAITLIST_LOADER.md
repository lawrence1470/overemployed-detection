# Waitlist Loader Component

## Overview
The `WaitlistLoader` component provides a smooth, engaging loading experience when users submit the waitlist form. It's based on the `PremiumLoader` but specifically designed for form submissions.

## Features

### ✨ **Visual Design**
- **Gradient background** with animated orbs (green/blue theme)
- **Step-by-step progress** with icons and text
- **Progress bar** showing completion percentage
- **Smooth animations** using Framer Motion

### 🎯 **User Experience**
- **Email personalization** - Shows user's email in the header
- **Contextual steps** - Form-specific loading messages
- **Controlled duration** - Configurable timing (default 2.8s)
- **Smooth transitions** - Seamless integration with form flow

### 🔧 **Technical Features**
- **TypeScript** fully typed with interfaces
- **Responsive design** works on all screen sizes
- **Memory safe** - proper cleanup and state management
- **Customizable** duration and callbacks

## Usage

```tsx
import { WaitlistLoader } from '~/components/waitlist-loader';

function MyForm() {
  const [showLoader, setShowLoader] = useState(false);
  
  const handleComplete = () => {
    setShowLoader(false);
    // Transition to next step
  };

  return (
    <WaitlistLoader 
      isLoading={showLoader}
      onComplete={handleComplete}
      duration={2800}
      email="user@example.com"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isLoading` | `boolean` | - | Controls loader visibility |
| `onComplete?` | `() => void` | - | Callback when loading completes |
| `duration?` | `number` | `3000` | Total loading duration in ms |
| `email?` | `string` | - | User email for personalization |

## Loading States

The loader progresses through these steps:

1. **Validating your information...** (Shield icon)
2. **Securing your spot on the waitlist...** (Users icon)
3. **Analyzing your company profile...** (Building icon)
4. **Preparing your welcome email...** (Mail icon)
5. **Finalizing your registration...** (Zap icon)
6. **Welcome to the VerifyHire family!** (Check icon)

## Integration

The loader is integrated into `WaitlistForm` component:

```tsx
// In waitlist-form.tsx
const joinWaitlistMutation = api.waitlist.join.useMutation({
  onSuccess: (data) => {
    if (data.success) {
      setShowLoader(true); // Show loader
    }
  }
});

const handleLoaderComplete = () => {
  setShowLoader(false);
  setStep(2); // Transition to success step
};
```

## Customization

### Timing
- **Duration**: Adjustable via `duration` prop
- **Step timing**: Each step gets equal time slice
- **Final delay**: 800ms pause before completion

### Styling
- **Colors**: Green/blue gradient theme
- **Icons**: Lucide React icons for each step
- **Animation**: Configurable via Framer Motion

### Content
- **Steps**: Modify `loadingStates` array for different messages
- **Icons**: Change icon for each step
- **Personalization**: Email shown in header

## Performance

- **Lightweight**: Small bundle impact
- **Efficient animations**: Hardware-accelerated transforms
- **Memory safe**: Proper cleanup prevents leaks
- **Responsive**: Adapts to screen size

## Browser Support

- Modern browsers with CSS transforms
- Graceful fallback for older browsers
- Mobile-optimized animations