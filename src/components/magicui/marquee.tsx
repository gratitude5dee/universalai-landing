import React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
  className?: string;
  duration?: string;
  gap?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  className,
  duration = '40s',
  gap = '1rem',
}) => {
  return (
    <div
      className={cn(
        'group flex overflow-hidden',
        vertical ? 'flex-col' : 'flex-row',
        className
      )}
      style={
        {
          '--duration': duration,
          '--gap': gap,
        } as React.CSSProperties
      }
    >
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'flex shrink-0',
            vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee flex-row',
            reverse && '[animation-direction:reverse]',
            pauseOnHover && 'group-hover:[animation-play-state:paused]'
          )}
          style={{
            gap: `var(--gap)`,
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
};
