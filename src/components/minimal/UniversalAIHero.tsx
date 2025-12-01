import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CrystallineSymbol from '@/components/ui/CrystallineSymbol';
import EtherealBackground from '@/components/ui/EtherealBackground';

const UniversalAIHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <EtherealBackground variant="hero" />
      
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* CTA Pill */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass border border-primary/30 rounded-full px-6 py-3 mb-12 hover:border-primary/50 transition-all duration-300 group"
          >
            <span className="text-sm">Create without limits. Build with UniversalAI</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          {/* Crystalline Symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center mb-12"
          >
            <CrystallineSymbol size={300} />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-8xl font-playfair italic font-bold mb-8 tracking-tight"
          >
            A Protocol for{' '}
            <span className="bg-gradient-to-r from-accent-amber via-accent-rose to-primary bg-clip-text text-transparent">
              Creator Flourishing
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Empowering human creativity in the AI economy with ownership, privacy, and infinite possibility
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary/50">
              Documentation
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent-rose hover:opacity-90">
              Features
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UniversalAIHero;
