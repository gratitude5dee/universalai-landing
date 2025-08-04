import React from 'react';

const LightningLogo = () => {
  return (
    <div className="lightning-logo w-10 h-10 relative">
      <svg 
        viewBox="0 0 40 40" 
        className="w-full h-full animate-lightning-bolt"
        fill="none"
      >
        {/* Lightning bolt path */}
        <path
          d="M22 2L8 18h8l-6 18 14-16h-8l6-18z"
          className="lightning-path"
          fill="url(#lightning-gradient)"
          stroke="url(#lightning-stroke)"
          strokeWidth="1"
        />
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="50%" stopColor="hsl(var(--primary-glow))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
          
          <linearGradient id="lightning-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary-glow))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Glow effect */}
      <div className="absolute inset-0 lightning-glow"></div>
    </div>
  );
};

export default LightningLogo;