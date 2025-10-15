import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
}

export const useCountUp = (options: UseCountUpOptions) => {
  const {
    end,
    duration = 2000,
    start = 0,
    decimals = 0,
    prefix = '',
    suffix = '',
    separator = ','
  } = options;

  const [count, setCount] = useState(start);
  const [isInView, setIsInView] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    hasAnimated.current = true;
    const startTime = Date.now();
    const range = end - start;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentCount = start + range * easedProgress;

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, start, duration]);

  const formattedValue = () => {
    const num = count.toFixed(decimals);
    const parts = num.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return `${prefix}${parts.join('.')}${suffix}`;
  };

  return {
    value: formattedValue(),
    rawValue: count,
    triggerAnimation: () => setIsInView(true)
  };
};
