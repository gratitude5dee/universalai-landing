import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface BentoCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
  featured?: boolean;
  children?: React.ReactNode;
}

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  description,
  icon: Icon,
  className,
  featured = false,
  children
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'relative glass rounded-3xl p-8 backdrop-blur-xl border overflow-hidden',
        featured 
          ? 'border-primary/40 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10' 
          : 'border-white/10 hover:border-primary/30',
        className
      )}
    >
      {/* Background gradient orb */}
      <div className={cn(
        'absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-30',
        featured ? 'bg-primary' : 'bg-primary/50'
      )} />

      {/* Icon */}
      {Icon && (
        <motion.div
          className="mb-6"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center">
            <Icon className="w-7 h-7 text-primary" />
          </div>
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        {children}
      </div>

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
          duration: 3,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </motion.div>
  );
};

export default BentoCard;
