

## Plan: Fix WebGL Context Exhaustion & Remove Microphone Request

### Root Cause
1. **Microphone request**: Spline scenes can request microphone access for audio-reactive features. There's no code in the project doing this — it's baked into the Spline runtime itself.
2. **WebGL crash**: The hero Spline loads immediately. If product card Splines also initialize (on hover), the browser runs out of WebGL contexts causing a blank screen.

### Solution

**File: `src/components/hero/WZRDHeroSection.tsx`**
- Replace the hero `<Spline>` component with a static/CSS background fallback (gradient + LightRays already present). The Spline scene is the primary source of both the microphone prompt and the first WebGL context that constrains the budget.
- Remove the `Spline` lazy import, `SplineLoadingSkeleton` import, and `splineLoaded` state.
- Keep the gradient overlays and LightRays for visual quality.

**File: `src/components/sections/ProductsSection.tsx`**
- Remove Spline entirely from product cards — replace with enhanced gradient backgrounds with subtle animation on hover. This eliminates all remaining WebGL contexts.
- Remove the `React.lazy` Spline import, `Suspense` import usage for Spline, `hasBeenHovered` state, and `showSpline` logic.

**Result**: Zero Spline instances = zero WebGL contexts = no microphone prompt, no crash, no blank screen. The visual quality is maintained through gradients, LightRays, and motion animations already in place.

### Technical Details

**WZRDHeroSection changes:**
- Remove lines importing Spline and SplineLoadingSkeleton
- Remove `splineLoaded` state
- Replace the Spline container div (lines 26-41) with just the gradient overlays on a dark background div

**ProductsSection changes:**
- Remove `React.lazy(() => import('@splinetool/react-spline'))` and `Suspense`
- Remove `hasBeenHovered`, `showSpline` logic from ProductCard
- Remove `useInView` (no longer needed for Spline gating)
- Always show the gradient background (the current fallback path)

