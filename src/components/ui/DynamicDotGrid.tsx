import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DynamicDotGrid: React.FC = () => {
  const [activeDots, setActiveDots] = useState<Set<number>>(new Set([0, 4, 8, 11, 12, 15, 19, 22, 24, 28, 32, 35]));
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setActiveDots(prev => {
        const newSet = new Set(prev);
        const totalDots = 36;
        
        // Randomly activate/deactivate dots
        const randomIndex = Math.floor(Math.random() * totalDots);
        if (newSet.has(randomIndex)) {
          newSet.delete(randomIndex);
        } else if (newSet.size < 15) {
          newSet.add(randomIndex);
        }
        
        return newSet;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div ref={ref} className="grid grid-cols-6 gap-2 mt-6 p-4">
      {Array.from({ length: 36 }).map((_, index) => (
        <motion.div
          key={index}
          className={`
            w-3 h-3 rounded-full transition-all duration-500
            ${activeDots.has(index) 
              ? 'bg-gradient-to-br from-primary to-primary-glow shadow-glow' 
              : 'bg-white/10'
            }
          `}
          initial={{ scale: 0 }}
          animate={{ 
            scale: 1,
            boxShadow: activeDots.has(index) 
              ? "0 0 10px hsl(var(--primary) / 0.8)" 
              : "none"
          }}
          transition={{ 
            duration: 0.3,
            delay: index * 0.02,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ scale: 1.2 }}
        />
      ))}
    </div>
  );
};

export default DynamicDotGrid;