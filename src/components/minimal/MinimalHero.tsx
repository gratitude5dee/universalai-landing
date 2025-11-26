import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import VideoPlayerMockup from '@/components/ui/VideoPlayerMockup';
import LiveWaitlistCounter from '@/components/landing/LiveWaitlistCounter';
import DynamicBackground from '@/components/ui/DynamicBackground';
import ParticleField from '@/components/ui/ParticleField';
import MagneticButton from '@/components/ui/MagneticButton';
import FloatingStats from '@/components/ui/FloatingStats';
import { useMousePosition } from '@/hooks/useMousePosition';
import e3Logo from '@/assets/partners/e3-logo.jpg';
import createMusicLogo from '@/assets/partners/create-music-logo.svg';
import manusLogo from '@/assets/partners/manus-logo.png';
import gqLogo from '@/assets/partners/gq-logo.png';
import fiveDeeLogo from '@/assets/partners/5dee-logo.svg';

const heroStats = [
  { value: '$2.3M+', label: 'Revenue Generated', delay: 0 },
  { value: '50K+', label: 'AI Agents Deployed', delay: 0.1 },
  { value: '98%', label: 'Satisfaction', delay: 0.2 },
];
interface MinimalHeroProps {
  className?: string;
}
const MinimalHero: React.FC<MinimalHeroProps> = ({
  className = ''
}) => {
  const mousePosition = useMousePosition();
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  
  return <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-background -mt-[150px] ${className}`}>
      {/* Dynamic Gradient Mesh Background */}
      <DynamicBackground sectionTheme="default" />
      
      {/* Particle Field */}
      <ParticleField particleCount={50} connectionDistance={150} speed={0.5} />
      
      {/* Dot Grid Pattern Overlay */}
      <div className="absolute inset-0 z-[1]" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.1) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        opacity: 0.3
      }} />
      
      {/* Enhanced Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <motion.div 
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px]"
          style={{
            x: useTransform(useMotionValue(mousePosition.x), [0, window.innerWidth], [-20, 20]),
            y: useTransform(useMotionValue(mousePosition.y), [0, window.innerHeight], [-20, 20])
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-gradient-to-bl from-primary/40 via-primary/20 to-transparent rounded-full blur-3xl" />
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-1/4 left-1/4 w-[600px] h-[600px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="w-full h-full bg-gradient-to-tr from-secondary/30 via-secondary/15 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[85vh] sm:min-h-[80vh] mt-0 sm:-mt-[20px] lg:-mt-[50px] py-8 sm:py-0">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            {/* Enhanced Trust Badge */}
            <motion.div 
              initial={{
                opacity: 0,
                y: 20
              }} 
              animate={{
                opacity: 1,
                y: 0
              }} 
              transition={{
                delay: 0.1,
                duration: 0.6
              }} 
              className="relative inline-flex items-center gap-2 glass border border-primary/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 mt-[50px] self-center lg:self-start text-center hover:border-primary/50 transition-all duration-300 group overflow-hidden"
            >
              {/* Pulse Ring Effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/50"
                animate={{
                  scale: [1, 1.5],
                  opacity: [0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
                }}
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              
              <motion.div 
                className="relative w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-primary to-primary-glow rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="relative text-xs sm:text-sm text-primary font-medium">Trusted by 10,000+ Creators Worldwide</span>
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

            {/* Enhanced Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2, duration: 0.8 }} 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight sm:leading-tight mb-4 sm:mb-6"
              style={{
                textShadow: '0 2px 40px rgba(139, 92, 246, 0.3), 0 0 80px rgba(139, 92, 246, 0.15)'
              }}
            >
              {['Cultivate', 'your'].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}{' '}
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="gradient-text inline-block relative"
              >
                Creator
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-glow to-secondary rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </motion.span>
              :<br />
              {['Every', 'Being', 'is', 'A', 'Billion'].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
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

            {/* Enhanced CTA Buttons with MagneticButton */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.4, duration: 0.6 }} 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 px-2 sm:px-0"
            >
              <MagneticButton 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto relative overflow-hidden group"
                onClick={() => window.dispatchEvent(new CustomEvent('open-waitlist'))}
                magneticStrength={0.3}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-secondary opacity-0 group-hover:opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="relative z-10">Enter the Agentic Economy</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </motion.div>
              </MagneticButton>
              
              <MagneticButton 
                variant="outline" 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 h-auto glass hover:glass-strong border-white/20 text-white relative group overflow-hidden"
                magneticStrength={0.2}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.2), transparent 50%)`
                  }}
                />
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
                <span className="relative z-10">Watch Demo</span>
              </MagneticButton>
            </motion.div>

            {/* FloatingStats Component */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <FloatingStats 
                stats={heroStats} 
                className="flex flex-col xs:flex-row sm:flex-row items-center justify-center lg:items-start lg:justify-start gap-3 sm:gap-4 flex-wrap max-w-full"
              />
            </motion.div>
          </div>

          {/* Right Column - Enhanced Video Player Mockup with 3D Tilt */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.3, duration: 1 }} 
            className="flex flex-col items-center justify-center relative order-1 lg:order-2 mt-6 lg:mt-0"
            onMouseEnter={() => setIsVideoHovered(true)}
            onMouseLeave={() => setIsVideoHovered(false)}
          >
            {/* Floating Glow Orb behind video */}
            <motion.div
              className="absolute inset-0 -z-10"
              animate={{
                scale: isVideoHovered ? [1, 1.2, 1] : 1,
                opacity: isVideoHovered ? [0.3, 0.6, 0.3] : 0.2
              }}
              transition={{
                duration: 3,
                repeat: isVideoHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/40 via-primary-glow/30 to-secondary/20 rounded-full blur-3xl" />
            </motion.div>

            {/* Animated Border Gradient */}
            <motion.div
              className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--primary)))',
                backgroundSize: '200% 200%'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            
            <motion.div 
              className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] lg:max-w-none px-4 sm:px-0 relative z-10"
              style={{
                transformStyle: 'preserve-3d',
                transform: isVideoHovered 
                  ? `perspective(1000px) rotateX(${(mousePosition.y / window.innerHeight - 0.5) * 10}deg) rotateY(${(mousePosition.x / window.innerWidth - 0.5) * 10}deg)`
                  : 'none'
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <VideoPlayerMockup videoSrc="/videos/unidemo-2.mp4" />
              
              {/* Subtle Reflection */}
              <motion.div
                className="absolute -bottom-4 left-0 right-0 h-20 bg-gradient-to-b from-primary/20 to-transparent blur-xl opacity-0"
                animate={{
                  opacity: isVideoHovered ? 0.6 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
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
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-xs sm:text-sm text-muted-foreground mb-8 sm:mb-10 font-light tracking-wide relative inline-block"
          >
            Trusted by top innovative teams
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </motion.p>
          
          {/* Logo Grid */}
          <div className="relative">
            {/* Subtle glow effect behind logos */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-3xl" />
            
            <div className="relative flex items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-16 flex-wrap px-4 sm:px-8 md:px-12">
              {/* E3 Entertainment */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.08 }}
                className="group relative"
              >
                <div className="relative glass border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <img 
                      src={e3Logo} 
                      alt="E3 Entertainment" 
                      className="h-8 sm:h-10 w-auto object-contain filter grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100 transition-all duration-500" 
                    />
                  </motion.div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>

              {/* GQ Africa */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.08 }}
                className="group relative"
              >
                <div className="relative glass border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <img 
                      src={gqLogo} 
                      alt="GQ Africa" 
                      className="h-8 sm:h-10 w-auto object-contain filter grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100 transition-all duration-500" 
                    />
                  </motion.div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>

              {/* Create Music */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.08 }}
                className="group relative"
              >
                <div className="relative glass border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <img 
                      src={createMusicLogo} 
                      alt="Create Music" 
                      className="h-8 sm:h-10 w-auto object-contain filter grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100 transition-all duration-500" 
                    />
                  </motion.div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>

              {/* Manus AI */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.08 }}
                className="group relative"
              >
                <div className="relative glass border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  >
                    <img 
                      src={manusLogo} 
                      alt="Manus AI" 
                      className="h-8 sm:h-10 w-auto object-contain filter grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100 transition-all duration-500" 
                    />
                  </motion.div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>

              {/* 5-Dee Studios */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.08 }}
                className="group relative"
              >
                <div className="relative glass border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  >
                    <img 
                      src={fiveDeeLogo} 
                      alt="5-Dee Studios" 
                      className="h-8 sm:h-10 w-auto object-contain filter grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100 transition-all duration-500" 
                    />
                  </motion.div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default MinimalHero;