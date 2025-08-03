import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const Card3D: React.FC<Card3DProps> = ({ 
  children, 
  className = "",
  intensity = 10 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    setMousePosition({ x: mouseX, y: mouseY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const rotateX = -(mousePosition.y / intensity);
  const rotateY = mousePosition.x / intensity;

  return (
    <motion.div
      ref={cardRef}
      className={`glass-3d rounded-2xl p-8 relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        z: isHovered ? 50 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      style={{
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0"
        animate={{
          opacity: isHovered ? 0.6 : 0,
        }}
        style={{
          background: `radial-gradient(circle at ${
            50 + (mousePosition.x / 10)
          }% ${50 + (mousePosition.y / 10)}%, rgba(255, 107, 0, 0.3), transparent 70%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'strong' | 'subtle';
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "",
  variant = 'default'
}) => {
  const variantClasses = {
    default: 'glass',
    strong: 'glass-strong',
    subtle: 'glass-subtle'
  };

  return (
    <div className={`${variantClasses[variant]} rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
};