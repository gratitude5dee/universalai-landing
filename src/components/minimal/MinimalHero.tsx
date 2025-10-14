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
  return <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-background -mt-[150px] ${className}`}>
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <filter id="noise">
            <feTurbulence baseFrequency="0.9" numOctaves="3" result="noise" />
            <feColorMatrix in="noise" type="saturate" values="0" />
            <feComponentTransfer in="noise" result="monoNoise">
              <feFuncA type="discrete" tableValues="0.8 0.5 0.3" />
            </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" opacity="0.15" />
        </svg>
      </div>
      
      {/* Main Background Overlay */}
      <div className="absolute inset-0 bg-background/95 z-0" />
      
      {/* Purple Flowing Gradient Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Primary curved shape - top right */}
        <div className="absolute -top-1/3 -right-1/4 w-[600px] sm:w-[800px] lg:w-[1000px] h-[400px] sm:h-[550px] lg:h-[700px] opacity-50 sm:opacity-70 lg:opacity-90">
          <div className="w-full h-full bg-gradient-to-bl from-purple-500/50 via-violet-600/40 to-purple-700/30 rounded-[45%] transform rotate-12 blur-3xl" />
        </div>
        
        {/* Secondary flowing shape - center left */}
        <div className="absolute top-1/4 -left-1/3 w-[500px] sm:w-[650px] lg:w-[800px] h-[300px] sm:h-[400px] lg:h-[500px] opacity-50 sm:opacity-65 lg:opacity-80">
          <div className="w-full h-full bg-gradient-to-tr from-violet-600/45 via-purple-500/35 to-indigo-600/25 rounded-[60%] transform -rotate-35 blur-2xl" />
        </div>
        
        {/* Large accent shape - bottom center */}
        <div className="absolute -bottom-1/4 left-1/4 w-[400px] sm:w-[500px] lg:w-[600px] h-[250px] sm:h-[325px] lg:h-[400px] opacity-40 sm:opacity-55 lg:opacity-70">
          <div className="w-full h-full bg-gradient-to-tl from-purple-400/40 via-violet-500/30 to-purple-600/20 rounded-[50%] transform rotate-45 blur-3xl" />
        </div>
        
        {/* Small accent - top left */}
        <div className="hidden sm:block absolute top-1/5 left-1/4 w-[200px] sm:w-[250px] lg:w-[300px] h-[150px] sm:h-[200px] lg:h-[250px] opacity-40 sm:opacity-50 lg:opacity-60">
          <div className="w-full h-full bg-gradient-to-br from-violet-500/35 to-purple-700/25 rounded-[65%] transform -rotate-20 blur-2xl" />
        </div>
        
        {/* Additional depth shape - center right */}
        <div className="absolute top-1/2 right-1/5 w-[250px] sm:w-[325px] lg:w-[400px] h-[200px] sm:h-[250px] lg:h-[300px] opacity-30 sm:opacity-40 lg:opacity-50">
          <div className="w-full h-full bg-gradient-to-l from-indigo-500/30 via-purple-600/20 to-violet-500/15 rounded-[70%] transform rotate-60 blur-xl" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[85vh] sm:min-h-[80vh] mt-0 sm:-mt-[20px] lg:-mt-[50px] py-8 sm:py-0">
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
          }} className="inline-flex items-center gap-2 glass border border-primary/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 self-center lg:self-start text-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-primary to-primary-glow rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm text-primary">Trusted by 10,000+ Creators Worldwide</span>
            </motion.div>

            {/* UniversalAI Title */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.15,
            duration: 0.6
          }} className="mb-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50">
                UniversalAI
              </h2>
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
          }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight sm:leading-tight mb-4 sm:mb-6">
              Cultivate your{' '}
              <span className="gradient-text">
                Creator
              </span>
              :<br />
              Every Being is A Billion
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
          }} className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              The first decentralized ecosystem combining on-chain studios, physical production spaces, and autonomous agent commerce. Build your digital empire through verified identity, programmable IP, and AI agents that think, create, and transact on your behalf.
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
          }} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 px-2 sm:px-0">
              <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto shadow-purple hover:shadow-xl transition-all duration-300" onClick={() => window.dispatchEvent(new CustomEvent('open-waitlist'))}>
                Enter the Agentic Economy
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto glass hover:glass-strong border-white/20 text-white">
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
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
          }} className="flex flex-col xs:flex-row sm:flex-row items-center justify-center lg:items-start lg:justify-start gap-3 sm:gap-4 flex-wrap max-w-full">
              <div className="glass border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-center whitespace-nowrap">
                <span className="text-secondary-glow font-bold text-xs sm:text-sm">$2.3M+</span>
                <span className="text-muted-foreground ml-1.5 sm:ml-2 text-[10px] sm:text-xs">Revenue Generated</span>
              </div>
              <div className="glass border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-center whitespace-nowrap">
                <span className="text-secondary-glow font-bold text-xs sm:text-sm">50K+</span>
                <span className="text-muted-foreground ml-1.5 sm:ml-2 text-[10px] sm:text-xs">AI Agents Deployed</span>
              </div>
              <div className="glass border border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-center whitespace-nowrap">
                <span className="text-secondary-glow font-bold text-xs sm:text-sm">98%</span>
                <span className="text-muted-foreground ml-1.5 sm:ml-2 text-[10px] sm:text-xs">Satisfaction</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Video Player Mockup */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.3,
          duration: 1
        }} className="flex flex-col items-center justify-center relative order-1 lg:order-2 mt-6 lg:mt-0">
            <div className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] lg:max-w-none px-4 sm:px-0">
              <VideoPlayerMockup videoSrc="/videos/unidemo-2.mp4" />
            </div>
            
            {/* Contained Waitlist Counter underneath video */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6,
            duration: 0.6
          }} className="mt-3 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] lg:max-w-md">
              <LiveWaitlistCounter />
            </motion.div>
          </motion.div>
        </div>

        {/* Partnerships Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.7,
        duration: 0.6
      }} className="text-center mt-8 sm:mt-10 lg:mt-4 mb-12 sm:mb-16 lg:mb-[77px]">
          <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">Trusted by top innovative teams</p>
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 flex-wrap px-4 sm:px-8 md:px-12">
            <div className="text-white/80 font-medium text-sm sm:text-base md:text-lg whitespace-nowrap">E3 Entertainment</div>
            <div className="text-white/80 font-medium text-sm sm:text-base md:text-lg whitespace-nowrap">GQ Africa</div>
            <div className="text-white/80 font-medium text-sm sm:text-base md:text-lg whitespace-nowrap">Create Music</div>
            <div className="text-white/80 font-medium text-sm sm:text-base md:text-lg whitespace-nowrap">Manus AI</div>
            <div className="text-white/80 font-medium text-sm sm:text-base md:text-lg whitespace-nowrap">5-Dee Studios</div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default MinimalHero;