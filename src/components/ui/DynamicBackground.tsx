import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

interface DynamicBackgroundProps {
  sectionTheme?: 'hero' | 'tech' | 'cta' | 'default';
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ sectionTheme = 'default' }) => {
  const { scrollYProgress } = useScroll();
  const mousePosition = useMousePosition();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Theme-based gradient colors
  const themeGradients = {
    hero: ['hsl(280, 100%, 70%)', 'hsl(220, 90%, 60%)', 'hsl(180, 80%, 50%)'],
    tech: ['hsl(280, 80%, 60%)', 'hsl(200, 70%, 50%)', 'hsl(160, 60%, 50%)'],
    cta: ['hsl(280, 100%, 70%)', 'hsl(340, 100%, 60%)', 'hsl(30, 100%, 60%)'],
    default: ['hsl(280, 70%, 50%)', 'hsl(220, 70%, 50%)', 'hsl(180, 60%, 50%)']
  };

  // Mouse-reactive gradient transform
  const gradientX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['0%', '50%', '100%']
  );

  const gradientY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['0%', '50%', '100%']
  );

  // Noise texture canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create noise texture
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 255;
      data[i] = noise;
      data[i + 1] = noise;
      data[i + 2] = noise;
      data[i + 3] = 8; // Low opacity
    }

    ctx.putImageData(imageData, 0, 0);
  }, []);

  const mouseX = mousePosition.x / window.innerWidth;
  const mouseY = mousePosition.y / window.innerHeight;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient mesh */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${50 + mouseX * 20}% ${50 + mouseY * 20}%, ${themeGradients[sectionTheme][0]} 0%, transparent 50%),
                       radial-gradient(circle at ${30 - mouseX * 15}% ${70 + mouseY * 15}%, ${themeGradients[sectionTheme][1]} 0%, transparent 50%),
                       radial-gradient(circle at ${70 + mouseX * 10}% ${30 - mouseY * 10}%, ${themeGradients[sectionTheme][2]} 0%, transparent 50%),
                       linear-gradient(180deg, hsl(var(--background)) 0%, hsl(220, 20%, 10%) 100%)`,
        }}
        animate={{
          backgroundPosition: [
            `${mouseX * 100}% ${mouseY * 100}%`,
            `${(mouseX + 0.1) * 100}% ${(mouseY + 0.1) * 100}%`
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* Noise texture overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30 mix-blend-soft-light pointer-events-none"
      />

      {/* Subtle grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.2])
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background opacity-60" />
    </div>
  );
};

export default DynamicBackground;
