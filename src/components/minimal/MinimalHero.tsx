import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import VideoPlayerMockup from '@/components/ui/VideoPlayerMockup';
import LiveWaitlistCounter from '@/components/landing/LiveWaitlistCounter';

interface MinimalHeroProps {
  className?: string;
}

const MinimalHero: React.FC<MinimalHeroProps> = ({
  className = ''
}) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-background ${className}`}>
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <filter id="noise">
            <feTurbulence baseFrequency="0.9" numOctaves="3" result="noise"/>
            <feColorMatrix in="noise" type="saturate" values="0"/>
            <feComponentTransfer in="noise" result="monoNoise">
              <feFuncA type="discrete" tableValues="0.8 0.5 0.3"/>
            </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" opacity="0.15"/>
        </svg>
      </div>
      
      {/* Main Background Overlay */}
      <div className="absolute inset-0 bg-background/95 z-0" />
      
      {/* Purple Flowing Gradient Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Primary curved shape - top right */}
        <div className="absolute -top-1/3 -right-1/4 w-[1000px] h-[700px] opacity-90">
          <div className="w-full h-full bg-gradient-to-bl from-purple-500/50 via-violet-600/40 to-purple-700/30 rounded-[45%] transform rotate-12 blur-3xl" />
        </div>
        
        {/* Secondary flowing shape - center left */}
        <div className="absolute top-1/4 -left-1/3 w-[800px] h-[500px] opacity-80">
          <div className="w-full h-full bg-gradient-to-tr from-violet-600/45 via-purple-500/35 to-indigo-600/25 rounded-[60%] transform -rotate-35 blur-2xl" />
        </div>
        
        {/* Large accent shape - bottom center */}
        <div className="absolute -bottom-1/4 left-1/4 w-[600px] h-[400px] opacity-70">
          <div className="w-full h-full bg-gradient-to-tl from-purple-400/40 via-violet-500/30 to-purple-600/20 rounded-[50%] transform rotate-45 blur-3xl" />
        </div>
        
        {/* Small accent - top left */}
        <div className="absolute top-1/5 left-1/4 w-[300px] h-[250px] opacity-60">
          <div className="w-full h-full bg-gradient-to-br from-violet-500/35 to-purple-700/25 rounded-[65%] transform -rotate-20 blur-2xl" />
        </div>
        
        {/* Additional depth shape - center right */}
        <div className="absolute top-1/2 right-1/5 w-[400px] h-[300px] opacity-50">
          <div className="w-full h-full bg-gradient-to-l from-indigo-500/30 via-purple-600/20 to-violet-500/15 rounded-[70%] transform rotate-60 blur-xl" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh] -mt-[50px]">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            {/* Trust Badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1,
            duration: 0.6
          }} className="inline-flex items-center gap-2 glass border border-primary/30 rounded-full px-6 py-3 mb-8 self-center lg:self-start">
              <div className="w-4 h-4 bg-gradient-to-r from-primary to-primary-glow rounded-full animate-pulse" />
              <span className="text-sm text-primary">Trusted by 10,000+ Creators Worldwide</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.8
          }} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
              Where{' '}
              <span className="gradient-text">
                Creators
              </span>{' '}
              Build<br />
              The Future of UniversalAI
            </motion.h1>

            {/* Subtitle */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.6
          }} className="text-lg lg:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              The only platform that combines AI-powered creation tools, blockchain-backed IP protection, 
              and integrated treasury management. Turn your creativity into sustainable revenue.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.6
          }} className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg px-8 py-6 h-auto shadow-purple hover:shadow-xl transition-all duration-300" onClick={() => window.dispatchEvent(new CustomEvent('open-waitlist'))}>
                Launch Your Creator Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto glass hover:glass-strong border-white/20 text-white">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.5,
            duration: 0.8
          }} className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <div className="glass border border-white/10 rounded-full px-4 py-2 text-center">
                <span className="text-secondary-glow font-bold text-sm">$2.3M+</span>
                <span className="text-muted-foreground ml-2 text-xs">Revenue Generated</span>
              </div>
              <div className="glass border border-white/10 rounded-full px-4 py-2 text-center">
                <span className="text-secondary-glow font-bold text-sm">50K+</span>
                <span className="text-muted-foreground ml-2 text-xs">AI Agents Deployed</span>
              </div>
              <div className="glass border border-white/10 rounded-full px-4 py-2 text-center">
                <span className="text-secondary-glow font-bold text-sm">98%</span>
                <span className="text-muted-foreground ml-2 text-xs">Satisfaction</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Video Player Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex items-center justify-center relative order-1 lg:order-2 mt-[100px] lg:mt-0"
          >
            <VideoPlayerMockup videoSrc="/videos/unidemo-2.mp4" />
          </motion.div>
        </div>

        {/* Bottom Section - Waitlist Counter & Partnerships */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6,
        duration: 0.6
      }} className="text-center mt-[-73px] lg:mt-[-49px] mb-[77px] py-0">
          <LiveWaitlistCounter />
          
          {/* Partnerships Section */}
          <div className="mt-12 lg:mt-16">
            <p className="text-sm text-muted-foreground mb-8">Trusted by top innovative teams</p>
            <div className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap mx-[15px] px-[88px]">
              <div className="text-white/80 font-medium text-lg">E3 Entertainment</div>
              <div className="text-white/80 font-medium text-lg">GQ Africa</div>
              <div className="text-white/80 font-medium text-lg">Create Music</div>
              <div className="text-white/80 font-medium text-lg">Zooties</div>
              <div className="text-white/80 font-medium text-lg">5-Dee Studios</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MinimalHero;