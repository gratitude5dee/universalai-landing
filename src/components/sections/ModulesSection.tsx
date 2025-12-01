import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { UserCheck, DollarSign, FileCheck, Sparkles, Key } from 'lucide-react';
import PillLabel from '@/components/ui/PillLabel';

const modules = [
  {
    icon: UserCheck,
    title: 'Proof of Humanity Verification',
    description: 'Verify creators are human, not bots, with decentralized identity protocols',
    color: 'primary',
  },
  {
    icon: DollarSign,
    title: 'Private Revenue Bridge',
    description: 'Private, secure transactions for creator earnings with zero-knowledge proofs',
    color: 'accent-amber',
  },
  {
    icon: FileCheck,
    title: 'Clean Attribution',
    description: 'ZK proofs for content provenance & licensing verification',
    color: 'secondary',
  },
  {
    icon: Sparkles,
    title: 'Embedded AI Monetization',
    description: 'Earn automatically when AI systems reference or use your creative work',
    color: 'accent-rose',
  },
  {
    icon: Key,
    title: 'zk-Creator Proofs',
    description: 'Prove ownership and authenticity without revealing sensitive identity data',
    color: 'primary',
  },
];

const ModulesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <PillLabel className="mb-6">Modules</PillLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair italic font-bold tracking-tight">
            A creator protocol with{' '}
            <span className="bg-gradient-to-r from-accent-amber via-accent-rose to-primary bg-clip-text text-transparent">
              powerful plug-ins
            </span>
          </h2>
        </motion.div>

        {/* Horizontal scrolling carousel */}
        <div className="relative">
          <motion.div style={{ x }} className="flex gap-6 pb-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="flex-shrink-0 w-80 group cursor-pointer"
              >
                <div className="relative h-full rounded-2xl glass border border-primary/20 p-8 overflow-hidden">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl glass-strong border border-${module.color}/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <module.icon className={`w-7 h-7 text-${module.color}`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3">{module.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">{module.description}</p>

                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, hsl(var(--${module.color}) / 0.1), transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient fade on edges */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
