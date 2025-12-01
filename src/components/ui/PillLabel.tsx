import React from 'react';
import { motion } from 'framer-motion';

interface PillLabelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'amber' | 'rose';
}

const PillLabel: React.FC<PillLabelProps> = ({ children, className = '', variant = 'default' }) => {
  const variantStyles = {
    default: 'bg-card-glass border-primary/30 text-foreground',
    amber: 'bg-accent-amber/10 border-accent-amber/30 text-accent-amber',
    rose: 'bg-accent-rose/10 border-accent-rose/30 text-accent-rose',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`inline-flex items-center gap-2 border rounded-full px-4 py-2 backdrop-blur-sm ${variantStyles[variant]} ${className}`}
    >
      <span className="text-xs font-medium uppercase tracking-wider">{children}</span>
    </motion.div>
  );
};

export default PillLabel;
