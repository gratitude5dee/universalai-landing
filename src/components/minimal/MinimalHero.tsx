import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import AnimatedOrb from '@/components/ui/AnimatedOrb';
import LiveWaitlistCounter from '@/components/landing/LiveWaitlistCounter';

interface MinimalHeroProps {
  className?: string;
}

const MinimalHero: React.FC<MinimalHeroProps> = ({ className = '' }) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-background ${className}`}>
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      >
        <source src="/videos/unidemo-2.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60 z-0" />
      
      {/* Purple Glow Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-2xl animate-float" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-flex items-center gap-2 glass border border-primary/30 rounded-full px-6 py-3 mb-8"
        >
          <div className="w-4 h-4 bg-gradient-to-r from-primary to-primary-glow rounded-full animate-pulse" />
          <span className="text-sm text-primary">Trusted by 10,000+ Creators Worldwide</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-8xl font-extrabold leading-tight mb-6"
        >
          Where{' '}
          <span className="gradient-text">
            Creators
          </span>{' '}
          Build<br className="hidden sm:block" />
          The Future of UniversalAI
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed px-4"
        >
          The only platform that combines AI-powered creation tools, blockchain-backed IP protection, 
          and integrated treasury management. Turn your creativity into sustainable revenue.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4"
        >
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 h-auto shadow-purple hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            onClick={() => window.dispatchEvent(new CustomEvent('open-waitlist'))}
          >
            Launch Your Creator Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto glass hover:glass-strong border-white/20 text-white w-full sm:w-auto"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 px-4">
            <div className="glass border border-white/10 rounded-full px-4 py-2 lg:px-6 lg:py-3 text-center">
              <span className="text-secondary-glow font-bold text-base lg:text-lg">$2.3M+</span>
              <span className="text-muted-foreground ml-2 text-sm lg:text-base">Creator Revenue Generated</span>
            </div>
            <div className="glass border border-white/10 rounded-full px-4 py-2 lg:px-6 lg:py-3 text-center">
              <span className="text-secondary-glow font-bold text-base lg:text-lg">50K+</span>
              <span className="text-muted-foreground ml-2 text-sm lg:text-base">AI Agents Deployed</span>
            </div>
            <div className="glass border border-white/10 rounded-full px-4 py-2 lg:px-6 lg:py-3 text-center">
              <span className="text-secondary-glow font-bold text-base lg:text-lg">98%</span>
              <span className="text-muted-foreground ml-2 text-sm lg:text-base">Creator Satisfaction</span>
            </div>
          </div>
          
          <div className="px-4">
            <LiveWaitlistCounter />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MinimalHero;