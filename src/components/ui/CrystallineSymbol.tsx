import React from 'react';
import { motion } from 'framer-motion';

interface CrystallineSymbolProps {
  size?: number;
  className?: string;
}

const CrystallineSymbol: React.FC<CrystallineSymbolProps> = ({ size = 200, className = '' }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(262 83% 58% / 0.3), transparent 70%)',
          filter: 'blur(30px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Rotating rings - outer */}
      <motion.svg
        className="absolute inset-0"
        viewBox="0 0 200 200"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(262 83% 58%)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(38 100% 64%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(340 100% 71%)" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          opacity="0.6"
        />
      </motion.svg>

      {/* Rotating rings - middle */}
      <motion.svg
        className="absolute inset-0"
        viewBox="0 0 200 200"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(340 100% 71%)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(217 91% 60%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(262 83% 58%)" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="2"
          opacity="0.7"
        />
      </motion.svg>

      {/* Inner rotating rings */}
      <motion.svg
        className="absolute inset-0"
        viewBox="0 0 200 200"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <defs>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(38 100% 64%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(340 100% 71%)" stopOpacity="1" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="40"
          fill="none"
          stroke="url(#gradient3)"
          strokeWidth="3"
          opacity="0.9"
        />
      </motion.svg>

      {/* Central flower/atom shape */}
      <motion.svg className="absolute inset-0" viewBox="0 0 200 200">
        <defs>
          <radialGradient id="centerGlow">
            <stop offset="0%" stopColor="hsl(38 100% 64%)" stopOpacity="1" />
            <stop offset="50%" stopColor="hsl(340 100% 71%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(262 83% 58%)" stopOpacity="0.4" />
          </radialGradient>
        </defs>

        {/* Petals/nodes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <motion.circle
            key={angle}
            cx={100 + Math.cos((angle * Math.PI) / 180) * 30}
            cy={100 + Math.sin((angle * Math.PI) / 180) * 30}
            r="8"
            fill="url(#centerGlow)"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Central core */}
        <motion.circle
          cx="100"
          cy="100"
          r="15"
          fill="url(#centerGlow)"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.svg>

      {/* Inner light rays */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(38 100% 64% / 0.4), transparent 50%)',
          filter: 'blur(10px)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default CrystallineSymbol;
