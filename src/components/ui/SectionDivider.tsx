import { motion } from 'framer-motion';

interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div className={`relative w-full h-px overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      {/* Animated glow that moves across */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm"
        initial={{ x: '-100%', opacity: 0 }}
        whileInView={{ x: '100%', opacity: [0, 1, 0] }}
        viewport={{ once: true }}
        transition={{ 
          duration: 2, 
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </div>
  );
}
