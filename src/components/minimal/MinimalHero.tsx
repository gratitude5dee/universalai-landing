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
  return <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-background ${className}`}>
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30 z-0">
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
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center text-center lg:text-left">
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
            className="flex items-center justify-center relative"
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
      }} className="text-center mt-16 lg:mt-24 my-[77px] py-0">
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
    </section>;
};
export default MinimalHero;