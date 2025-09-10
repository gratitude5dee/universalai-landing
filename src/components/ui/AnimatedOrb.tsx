import React from 'react';

interface AnimatedOrbProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  variant?: 'primary' | 'secondary';
}

const AnimatedOrb: React.FC<AnimatedOrbProps> = ({ 
  size = 'large', 
  className = '',
  variant = 'primary' 
}) => {
  const sizeClasses = {
    small: 'w-32 h-32',
    medium: 'w-64 h-64',
    large: 'w-96 h-96'
  };

  const gradientClasses = {
    primary: 'bg-gradient-to-br from-primary via-primary-glow to-secondary',
    secondary: 'bg-gradient-to-br from-secondary via-primary-glow to-primary'
  };

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        ${gradientClasses[variant]}
        rounded-full 
        blur-3xl 
        opacity-40 
        animate-pulse
        ${className}
      `}
      style={{
        animation: 'pulse 8s ease-in-out infinite, float 6s ease-in-out infinite'
      }}
    />
  );
};

export default AnimatedOrb;