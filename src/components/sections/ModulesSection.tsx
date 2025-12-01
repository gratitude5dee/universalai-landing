import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { UserCheck, DollarSign, FileCheck, Sparkles, Key, ChevronRight } from 'lucide-react';
import PillLabel from '@/components/ui/PillLabel';

const modules = [
  {
    icon: UserCheck,
    title: 'Proof of Humanity Verification',
    description: 'Verify creators are human, not bots, with decentralized identity protocols',
    gradient: 'from-primary/20 via-primary/10 to-transparent',
    iconBg: 'bg-primary/10',
    iconBorder: 'border-primary/30',
    iconColor: 'text-primary',
    glowColor: 'hsl(262 83% 58% / 0.15)',
  },
  {
    icon: DollarSign,
    title: 'Private Revenue Bridge',
    description: 'Private, secure transactions for creator earnings with zero-knowledge proofs',
    gradient: 'from-accent-amber/20 via-accent-amber/10 to-transparent',
    iconBg: 'bg-accent-amber/10',
    iconBorder: 'border-accent-amber/30',
    iconColor: 'text-accent-amber',
    glowColor: 'hsl(38 100% 64% / 0.15)',
  },
  {
    icon: FileCheck,
    title: 'Clean Attribution',
    description: 'ZK proofs for content provenance & licensing verification',
    gradient: 'from-secondary/20 via-secondary/10 to-transparent',
    iconBg: 'bg-secondary/10',
    iconBorder: 'border-secondary/30',
    iconColor: 'text-secondary',
    glowColor: 'hsl(217 91% 60% / 0.15)',
  },
  {
    icon: Sparkles,
    title: 'Embedded AI Monetization',
    description: 'Earn automatically when AI systems reference or use your creative work',
    gradient: 'from-accent-rose/20 via-accent-rose/10 to-transparent',
    iconBg: 'bg-accent-rose/10',
    iconBorder: 'border-accent-rose/30',
    iconColor: 'text-accent-rose',
    glowColor: 'hsl(340 100% 71% / 0.15)',
  },
  {
    icon: Key,
    title: 'zk-Creator Proofs',
    description: 'Prove ownership and authenticity without revealing sensitive identity data',
    gradient: 'from-primary/20 via-primary/10 to-transparent',
    iconBg: 'bg-primary/10',
    iconBorder: 'border-primary/30',
    iconColor: 'text-primary',
    glowColor: 'hsl(262 83% 58% / 0.15)',
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
      {/* Ambient background effects */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, hsl(262 83% 58% / 0.08), transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
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
            <motion.div style={{ x }} className="flex gap-6 pb-8 px-4">
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
                  className="flex-shrink-0 w-[380px] group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ y: -15, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="relative h-full rounded-3xl glass-strong border-2 border-primary/20 p-8 overflow-hidden backdrop-blur-xl"
                  >
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />

                    {/* Radial glow effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${module.glowColor}, transparent 70%)`,
                      }}
                    />

                    {/* Shimmer effect on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      initial={false}
                      animate={{
                        x: hoveredIndex === index ? ['-100%', '100%'] : '-100%',
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: hoveredIndex === index ? Infinity : 0,
                        ease: 'linear',
                      }}
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon with animated glow */}
                      <motion.div
                        className="mb-6 relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        {/* Outer glow ring */}
                        <motion.div
                          className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                          style={{
                            background: module.glowColor,
                            scale: 1.5,
                          }}
                        />
                        
                        <div
                          className={`relative w-20 h-20 rounded-2xl ${module.iconBg} border-2 ${module.iconBorder} flex items-center justify-center backdrop-blur-sm group-hover:border-opacity-100 transition-all duration-300`}
                        >
                          <module.icon className={`w-10 h-10 ${module.iconColor}`} />
                        </div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-foreground/90 transition-colors">
                        {module.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-6">
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

                    {/* Animated border on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${module.glowColor}, transparent 60%)`,
                      }}
                      transition={{ duration: 0.5 }}
                    />
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
