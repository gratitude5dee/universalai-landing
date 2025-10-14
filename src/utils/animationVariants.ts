import { Variants } from 'framer-motion';

// Check for reduced motion preference
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Helper to create motion-safe variants
const createSafeVariants = (variants: Variants): Variants => {
  if (prefersReducedMotion()) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    };
  }
  return variants;
};

// Fade up animation
export const fadeUp: Variants = createSafeVariants({
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
});

// Fade in animation
export const fadeIn: Variants = createSafeVariants({
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
});

// Slide from left
export const slideFromLeft: Variants = createSafeVariants({
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
});

// Slide from right
export const slideFromRight: Variants = createSafeVariants({
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
});

// Scale up animation
export const scaleUp: Variants = createSafeVariants({
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
});

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion() ? 0 : 0.1,
      delayChildren: prefersReducedMotion() ? 0 : 0.1
    }
  }
};

// Character reveal animation
export const charReveal: Variants = createSafeVariants({
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
});

// Card hover lift
export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: prefersReducedMotion() ? { y: 0, scale: 1 } : { 
    y: -8, 
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};
