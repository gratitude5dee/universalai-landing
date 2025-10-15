export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const isTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

export const isLowEndDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  // Check for hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 4;
  // Check for device memory (in GB)
  const memory = (navigator as any).deviceMemory || 4;
  
  return cores < 4 || memory < 4;
};

export const shouldReduceAnimations = (): boolean => {
  if (typeof window === 'undefined') return false;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return prefersReducedMotion || isMobileDevice() || isLowEndDevice();
};
