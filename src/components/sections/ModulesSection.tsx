import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { UserCheck, DollarSign, FileCheck, Sparkles, Key, ChevronRight } from 'lucide-react';
import PillLabel from '@/components/ui/PillLabel';

const modules = [
  {
    icon: UserCheck,
    title: 'Proof of Humanity Verification',
    description: 'Verify creators are human, not bots, with decentralized identity protocols',
    iconColor: 'text-secondary',
    borderColor: 'border-secondary/20',
    glowColor: 'rgba(0, 200, 200, 0.12)',
  },
  {
    icon: DollarSign,
    title: 'Private Revenue Bridge',
    description: 'Private, secure transactions for creator earnings with zero-knowledge proofs',
    iconColor: 'text-accent-amber',
    borderColor: 'border-accent-amber/20',
    glowColor: 'rgba(255, 181, 71, 0.12)',
  },
  {
    icon: FileCheck,
    title: 'Clean Attribution',
    description: 'ZK proofs for content provenance & licensing verification',
    iconColor: 'text-primary',
    borderColor: 'border-primary/20',
    glowColor: 'rgba(138, 92, 246, 0.12)',
  },
  {
    icon: Sparkles,
    title: 'Embedded AI Monetization',
    description: 'Earn automatically when AI systems reference or use your creative work',
    iconColor: 'text-accent-rose',
    borderColor: 'border-accent-rose/20',
    glowColor: 'rgba(255, 107, 157, 0.12)',
  },
  {
    icon: Key,
    title: 'zk-Creator Proofs',
    description: 'Prove ownership and authenticity without revealing sensitive identity data',
    iconColor: 'text-accent-amber',
    borderColor: 'border-accent-amber/20',
    glowColor: 'rgba(255, 181, 71, 0.12)',
  },
];

const ModulesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-25%']);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const cardX = useSpring(mouseX, springConfig);
  const cardY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (hoveredIndex !== index) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / 25;
    const y = (e.clientY - centerY) / 25;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Ambient background effect */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(255, 181, 71, 0.05), transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <PillLabel className="mb-6">Powerful Modules</PillLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair italic font-bold tracking-tight mb-6">
            A creator protocol with{' '}
            <span className="bg-gradient-to-r from-accent-amber via-accent-rose to-primary bg-clip-text text-transparent">
              powerful plug-ins
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Composable modules that work together to protect and empower creators
          </p>
        </motion.div>

        {/* Horizontal scrolling carousel */}
        <div className="relative -mx-4 px-4">
          <div ref={scrollRef} className="overflow-hidden">
            <motion.div style={{ x }} className="flex gap-5 pb-8 px-4">
              {modules.map((module, index) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  style={{
                    rotateX: hoveredIndex === index ? cardY : 0,
                    rotateY: hoveredIndex === index ? cardX : 0,
                  }}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={handleMouseLeave}
                  className="flex-shrink-0 w-[360px] group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ y: -12, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`relative h-full rounded-3xl glass-dark border ${module.borderColor} p-7 overflow-hidden`}
                  >
                    {/* Radial glow effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${module.glowColor}, transparent 70%)`,
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon with glow */}
                      <motion.div
                        className="mb-5 relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                          style={{ background: module.glowColor }}
                        />
                        
                        <div
                          className={`relative w-14 h-14 rounded-2xl glass-dark border ${module.borderColor} flex items-center justify-center group-hover:border-opacity-100 transition-all duration-300`}
                        >
                          <module.icon className={`w-7 h-7 ${module.iconColor}`} />
                        </div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 text-foreground">
                        {module.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                        {module.description}
                      </p>

                      {/* Learn more link */}
                      <motion.div
                        className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span className={module.iconColor}>Explore module</span>
                        <ChevronRight className={`w-4 h-4 ${module.iconColor}`} />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient fades on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-8 gap-2"
        >
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground text-sm flex items-center gap-2"
          >
            <span>Scroll to explore</span>
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;