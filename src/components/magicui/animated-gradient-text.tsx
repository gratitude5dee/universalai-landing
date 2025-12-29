import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  speed?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
}

export const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  children,
  speed = 1,
  colorFrom = '#ffaa40',
  colorTo = '#9c40ff',
  className,
}) => {
  return (
    <span
      className={cn(
        'inline-block bg-clip-text text-transparent animate-gradient',
        className
      )}
      style={
        {
          '--bg-size': `${speed * 300}%`,
          '--color-from': colorFrom,
          '--color-to': colorTo,
          backgroundImage: `linear-gradient(90deg, var(--color-from), var(--color-to), var(--color-from))`,
          backgroundSize: 'var(--bg-size) 100%',
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  );
};
