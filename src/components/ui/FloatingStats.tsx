import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';

interface FloatingStat {
  value: string;
  label: string;
  delay?: number;
}

interface FloatingStatsProps {
  stats: FloatingStat[];
  className?: string;
}

const FloatingStats: React.FC<FloatingStatsProps> = ({ stats, className }) => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={className}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: stat.delay || index * 0.1,
            type: 'spring',
            stiffness: 100
          }}
          whileHover={{
            y: -8,
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          className="glass-strong rounded-2xl p-6 backdrop-blur-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 relative overflow-hidden group"
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          {/* Glowing orb */}
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <motion.div
              className="text-4xl lg:text-5xl font-extrabold mb-2 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent"
              initial={{ scale: 0.5 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: (stat.delay || index * 0.1) + 0.2,
                type: 'spring',
                stiffness: 200
              }}
            >
              {stat.value}
            </motion.div>
            <p className="text-sm text-muted-foreground font-medium">
              {stat.label}
            </p>
          </div>

          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
            }}
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingStats;
