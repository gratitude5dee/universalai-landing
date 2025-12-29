import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  shimmerDuration?: string;
  borderRadius?: string;
  background?: string;
  children: React.ReactNode;
}

export const ShimmerButton = forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = 'rgba(255, 255, 255, 0.3)',
      shimmerSize = '150px',
      shimmerDuration = '3s',
      borderRadius = '12px',
      background = 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent-amber)) 100%)',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          'group relative inline-flex items-center justify-center overflow-hidden',
          'px-8 py-4 font-semibold text-white transition-all duration-300',
          'transform-gpu hover:scale-[1.02] active:scale-[0.98]',
          'shadow-lg hover:shadow-xl',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
          className
        )}
        style={
          {
            '--spread': shimmerSize,
            '--shimmer-color': shimmerColor,
            '--radius': borderRadius,
            '--speed': shimmerDuration,
            '--cut': '0.1',
            '--bg': background,
            borderRadius: `var(--radius)`,
            background: `var(--bg)`,
          } as React.CSSProperties
        }
        {...props}
      >
        {/* Shimmer/Spark Effect */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            borderRadius: `var(--radius)`,
            padding: '1px',
          }}
        >
          <div
            className="absolute inset-[-100%] animate-spin-around"
            style={{
              background: `conic-gradient(from 0deg, transparent 0 340deg, var(--shimmer-color) 360deg)`,
              opacity: 0.6,
            }}
          />
          <div
            className="absolute inset-[-100%] animate-shimmer-slide"
            style={{
              background: `conic-gradient(from 0deg, transparent 0 340deg, var(--shimmer-color) 360deg)`,
              opacity: 0.4,
            }}
          />
        </div>

        {/* Highlight Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-20 group-active:opacity-30"
          style={{
            background: 'radial-gradient(circle at center, white, transparent 70%)',
            borderRadius: `var(--radius)`,
          }}
        />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }
);

ShimmerButton.displayName = 'ShimmerButton';
