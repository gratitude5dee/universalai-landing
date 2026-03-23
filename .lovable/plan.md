

## Plan: Block Browser Mic/Camera Permissions & Stop Audio

### Problem
The Spline 3D scene triggers browser-level microphone/camera permission prompts (not a Spline UI overlay). This happens because the Spline scene uses `navigator.mediaDevices.getUserMedia()` internally.

### Solution

**1. Intercept `getUserMedia` before Spline loads** (`src/components/hero/WZRDHeroSection.tsx`)
- Before the Spline component mounts, override `navigator.mediaDevices.getUserMedia` with a no-op that returns an empty/silent MediaStream. This prevents the browser permission popup entirely.
- Add this as a `useEffect` that runs once on mount, before Spline initializes.

**2. Stop audio on first user interaction**
- On the Spline `onLoad` callback, capture the spline app instance.
- Add a one-time click listener on `document` that:
  - Pauses all `<audio>` and `<video>` elements on the page
  - Suspends any active `AudioContext` instances
- Clean up on unmount.

### Files Modified
1. `src/components/hero/WZRDHeroSection.tsx` — Add `getUserMedia` override in early `useEffect` + audio stop logic on click

