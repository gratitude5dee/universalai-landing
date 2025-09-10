import React from 'react';
import { cn } from '@/lib/utils';

interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'strong' | 'subtle';
  hover?: boolean;
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({
  children,
  className,
  variant = 'default',
  hover = true
}) => {
  const variants = {
    default: 'glass',
    strong: 'glass-strong',
    subtle: 'bg-white/5 backdrop-blur-sm border border-white/5'
  };

  return (
    <div
      className={cn(
        'rounded-2xl p-8 relative overflow-hidden transition-all duration-300',
        variants[variant],
        hover && 'hover-lift hover:border-primary/30',
        className
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassmorphicCard;