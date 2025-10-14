import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring animation for progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Color shift based on progress
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      'hsl(var(--primary))',
      'hsl(280, 85%, 60%)',
      'hsl(250, 80%, 60%)'
    ]
  );

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left"
      style={{ 
        scaleX,
        backgroundColor
      }}
    />
  );
}
