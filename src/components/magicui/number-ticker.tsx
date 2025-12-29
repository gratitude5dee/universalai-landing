import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMotionValue, useSpring, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NumberTickerProps {
  value: number;
  startValue?: number;
  direction?: 'up' | 'down';
  delay?: number;
  decimalPlaces?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const NumberTicker: React.FC<NumberTickerProps> = ({
  value,
  startValue = 0,
  direction = 'up',
  delay = 0,
  decimalPlaces = 0,
  prefix = '',
  suffix = '',
  className,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const motionValue = useMotionValue(direction === 'down' ? value : startValue);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        motionValue.set(direction === 'down' ? startValue : value);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [inView, direction, value, startValue, delay, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (displayRef.current) {
        const formattedNumber = Intl.NumberFormat('en-US', {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        }).format(Number(latest.toFixed(decimalPlaces)));

        displayRef.current.textContent = `${prefix}${formattedNumber}${suffix}`;
      }
    });

    return () => unsubscribe();
  }, [springValue, decimalPlaces, prefix, suffix]);

  return (
    <motion.span ref={ref} className={cn('inline-block tabular-nums', className)}>
      <span ref={displayRef}>{prefix}{startValue}{suffix}</span>
    </motion.span>
  );
};
