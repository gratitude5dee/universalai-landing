import { useState, useEffect, useCallback, useRef } from 'react';

interface UseIntroAnimationOptions {
  duration?: number;
  onComplete?: () => void;
  skipOnRepeat?: boolean;
}

export const useIntroAnimation = (options: UseIntroAnimationOptions = {}) => {
  const {
    duration = 4000,
    onComplete,
    skipOnRepeat = true
  } = options;

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const hasPlayedRef = useRef(false);

  // Check if intro should be skipped (already played in session)
  useEffect(() => {
    const hasPlayed = skipOnRepeat && hasPlayedRef.current;
    if (!hasPlayed) {
      // Small delay to ensure page is ready
      const timer = setTimeout(() => {
        setIsPlaying(true);
        startTimeRef.current = performance.now();
      }, 100);
      
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [skipOnRepeat]);

  // Animation loop
  useEffect(() => {
    if (!isPlaying || startTimeRef.current === null) return;

    const updateProgress = () => {
      if (startTimeRef.current === null) return;
      
      const elapsed = performance.now() - startTimeRef.current;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        complete();
      } else {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, duration]);

  const complete = useCallback(() => {
    setIsPlaying(false);
    hasPlayedRef.current = true;
    
    // Delay completion to allow exit animation
    setTimeout(() => {
      setIsComplete(true);
      onComplete?.();
    }, 800);
  }, [onComplete]);

  const skip = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    complete();
  }, [complete]);

  const restart = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    setIsComplete(false);
    setProgress(0);
    hasPlayedRef.current = false;
    startTimeRef.current = performance.now();
    setIsPlaying(true);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Handle reduced motion preference
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && isPlaying) {
      skip();
    }
  }, [isPlaying, skip]);

  return {
    isPlaying,
    progress,
    isComplete,
    skip,
    restart
  };
};