import React from 'react';
import { motion } from 'framer-motion';

const LightningVisualization: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <motion.div
        className="relative"
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
        whileHover={{ 
          scale: 1.1, 
          rotate: 5,
          transition: { duration: 0.2 }
        }}
      >
        <svg 
          width="120" 
          height="120" 
          viewBox="0 0 120 120" 
          className="drop-shadow-glow"
        >
          <defs>
            <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="50%" stopColor="hsl(var(--primary-glow))" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <motion.path
            d="M 50 10 L 30 50 L 50 50 L 40 90 L 90 40 L 60 40 L 70 10 Z"
            fill="url(#lightningGradient)"
            stroke="white"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.3,
              ease: "easeOut"
            }}
          />
          
          {/* Spark effects */}
          {[...Array(6)].map((_, i) => (
            <motion.circle
              key={i}
              cx={45 + i * 8}
              cy={25 + i * 10}
              r="2"
              fill="white"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0], 
                opacity: [0, 1, 0] 
              }}
              transition={{
                duration: 0.6,
                delay: 0.8 + i * 0.1,
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          ))}
        </svg>
        
        {/* Outer glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
};

export default LightningVisualization;