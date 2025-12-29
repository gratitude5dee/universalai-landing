import React from 'react';
import { cn } from '@/lib/utils';

interface ShineBorderProps {
  borderWidth?: number;
  duration?: number;
  shineColor?: string | string[];
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const ShineBorder: React.FC<ShineBorderProps> = ({
  borderWidth = 1,
  duration = 14,
  shineColor = 'rgba(255, 255, 255, 0.5)',
  className,
  style,
  children,
}) => {
  const colors = Array.isArray(shineColor) ? shineColor.join(', ') : shineColor;

  return (
    <div className={cn('relative', className)} style={style}>
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit]"
        style={{
          padding: `${borderWidth}px`,
        }}
      >
        <div
          className="absolute inset-0 motion-safe:animate-shine"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${colors}, transparent 60%)`,
            backgroundSize: '200% 200%',
            WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            WebkitMaskComposite: 'xor',
            mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            maskComposite: 'exclude',
            padding: `${borderWidth}px`,
            borderRadius: 'inherit',
            animationDuration: `${duration}s`,
          } as React.CSSProperties}
        />
      </div>
      {children}
    </div>
  );
};
