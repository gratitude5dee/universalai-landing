import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LightRaysProps {
  count?: number;
  color?: string;
  blur?: number;
  speed?: number;
  length?: string;
  className?: string;
}

interface Ray {
  left: string;
  rotation: number;
  width: number;
  swing: number;
  delay: number;
  duration: number;
  intensity: number;
}

export const LightRays: React.FC<LightRaysProps> = ({
  count = 7,
  color = 'rgba(147, 51, 234, 0.4)', // purple
  blur = 36,
  speed = 14,
  length = '70vh',
  className,
}) => {
  const rays = useMemo<Ray[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      left: `${(100 / count) * i + Math.random() * 10}%`,
      rotation: Math.random() * 30 - 15,
      width: Math.random() * 100 + 50,
      swing: Math.random() * 20 - 10,
      delay: Math.random() * speed,
      duration: speed + Math.random() * speed * 0.5,
      intensity: 0.3 + Math.random() * 0.5,
    }));
  }, [count, speed]);

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {/* Ambient backgrounds */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle, ${color}, transparent)`,
          filter: `blur(${blur * 2}px)`,
        }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-15"
        style={{
          background: `radial-gradient(circle, ${color}, transparent)`,
          filter: `blur(${blur * 2}px)`,
        }}
      />

      {/* Light rays */}
      {rays.map((ray, index) => (
        <motion.div
          key={index}
          className="absolute top-0 origin-top mix-blend-screen"
          style={{
            left: ray.left,
            width: `${ray.width}px`,
            height: length,
            '--ray-color': color,
            '--ray-blur': `${blur}px`,
            '--ray-length': length,
          } as React.CSSProperties}
          initial={{
            opacity: 0,
            rotate: ray.rotation,
          }}
          animate={{
            opacity: [0, ray.intensity, ray.intensity, 0],
            rotate: [ray.rotation, ray.rotation + ray.swing, ray.rotation],
          }}
          transition={{
            duration: ray.duration,
            delay: ray.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(to bottom, ${color}, transparent)`,
              filter: `blur(var(--ray-blur))`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};
