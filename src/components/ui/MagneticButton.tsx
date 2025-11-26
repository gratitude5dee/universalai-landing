import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  magneticStrength?: number;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className,
  onClick,
  variant = 'default',
  size = 'lg',
  magneticStrength = 0.3
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * magneticStrength;
    const deltaY = (e.clientY - centerY) * magneticStrength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      animate={position}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
    >
      <Button
        ref={buttonRef}
        className={cn(
          'relative overflow-hidden group',
          className
        )}
        variant={variant}
        size={size}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Particle burst effect container */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>

        {/* Ripple effect on hover */}
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
          initial={{ x: '-100%', opacity: 0 }}
          whileHover={{ x: '100%', opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Glow effect */}
        <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-primary/30" />
      </Button>
    </motion.div>
  );
};

export default MagneticButton;
