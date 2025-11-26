import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'strong' | 'subtle';
  hover?: boolean;
  tilt3d?: boolean;
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({
  children,
  className,
  variant = 'default',
  hover = true,
  tilt3d = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltValues, setTiltValues] = useState({ rotateX: 0, rotateY: 0 });

  const variants = {
    default: 'glass',
    strong: 'glass-strong',
    subtle: 'bg-white/5 backdrop-blur-sm border border-white/5'
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt3d || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateY = (mouseX / rect.width) * 10;
    const rotateX = -(mouseY / rect.height) * 10;

    setTiltValues({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    if (tilt3d) {
      setTiltValues({ rotateX: 0, rotateY: 0 });
    }
  };

  return (
    <motion.div
      ref={cardRef}
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
      animate={tilt3d ? {
        rotateX: tiltValues.rotateX,
        rotateY: tiltValues.rotateY
      } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'rounded-2xl p-8 relative overflow-hidden transition-all duration-300',
        variants[variant],
        hover && 'hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10',
        className
      )}
      style={{
        willChange: hover ? 'transform' : 'auto',
        transformStyle: tilt3d ? 'preserve-3d' : 'flat',
        perspective: tilt3d ? '1000px' : 'none'
      }}
    >
      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--primary)))',
          backgroundSize: '200% 100%',
          padding: '1px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude'
        }}
        animate={{
          backgroundPosition: ['0% 50%', '200% 50%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Gradient overlay on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Inner glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.3), transparent 70%)'
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.3 }}
        transition={{ duration: 0.5 }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
          backgroundSize: '200% 100%'
        }}
        animate={{
          backgroundPosition: ['200% 0', '-200% 0']
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10" style={{ transform: tilt3d ? 'translateZ(50px)' : 'none' }}>
        {children}
      </div>
    </motion.div>
  );
};

export default GlassmorphicCard;