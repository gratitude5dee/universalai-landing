import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
  const variants = {
    default: isMobile ? 'bg-white/10 backdrop-blur-md border border-white/10' : 'glass',
    strong: isMobile ? 'bg-white/15 backdrop-blur-md border border-white/15' : 'glass-strong',
    subtle: 'bg-white/5 backdrop-blur-sm border border-white/5'
  };

  return (
    <motion.div
      initial="rest"
      whileHover={hover ? "hover" : undefined}
      variants={hover ? {
        rest: { y: 0, scale: 1 },
        hover: { 
          y: -8, 
          scale: 1.02,
          transition: {
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1]
          }
        }
      } : undefined}
      className={cn(
        'rounded-2xl p-8 relative overflow-hidden transition-all duration-300',
        variants[variant],
        hover && 'hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10',
        className
      )}
      style={{
        willChange: hover ? 'transform' : 'auto'
      }}
    >
      {/* Gradient overlay on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Enhanced backdrop blur on hover */}
      <motion.div 
        className="absolute inset-0 backdrop-blur-sm pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.5 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassmorphicCard;