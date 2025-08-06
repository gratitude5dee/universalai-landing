import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Music, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PhoneMockup } from '@/components/PhoneMockup';
import featureAiChat from '@/assets/feature-ai-chat-mobile.jpg';
import HackathonBadge from '@/components/landing/HackathonBadge';
import LiveWaitlistCounter from '@/components/landing/LiveWaitlistCounter';
import FestivalCTA from '@/components/landing/FestivalCTA';
import WaitlistModal from '@/components/landing/WaitlistModal';
import TextReveal from './TextReveal';

export const EnhancedFestivalHero = () => {
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-16 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-festival-glow opacity-40"></div>
        
        {/* Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{ 
            backgroundPosition: ['0px 0px', '50px 50px'],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Festival Stage Lights */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96"
          animate={{
            background: [
              "conic-gradient(from 0deg, transparent, rgba(0, 255, 136, 0.2), transparent)",
              "conic-gradient(from 120deg, transparent, rgba(255, 235, 59, 0.2), transparent)",
              "conic-gradient(from 240deg, transparent, rgba(255, 107, 107, 0.2), transparent)"
            ]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Hackathon Badge with enhanced animation */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                type: 'spring', 
                stiffness: 100, 
                damping: 15, 
                delay: 0.2 
              }}
            >
              <HackathonBadge />
            </motion.div>
            
            {/* Enhanced Hero Content */}
            {showContent && (
              <div className="space-y-8 md:space-y-12">
                {/* Festival Logo Style Title */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.68, -0.55, 0.265, 1.55],
                    delay: 0.5
                  }}
                  className="relative"
                >
                  <h1 className="font-festival text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text text-gradient-festival tracking-wider mb-4">
                    MUSICÓS
                  </h1>
                  <motion.div
                    className="absolute inset-0 font-festival text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.5), rgba(255, 235, 59, 0.5), rgba(255, 107, 107, 0.5))',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      filter: 'blur(20px)',
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    MUSICÓS
                  </motion.div>
                </motion.div>

                {/* Subtitle with text reveal */}
                <TextReveal
                  text="Your Creative Workflow, Unified & Amplified"
                  className="text-2xl md:text-4xl lg:text-5xl font-grotesk font-bold text-gradient-subtle"
                  delay={1}
                />

                {/* Festival Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4 font-grotesk"
                >
                  From spark to stage, manage every beat of your creative journey.{" "}
                  <span className="text-green-400 font-semibold">All in one place.</span>
                </motion.p>

                {/* CTA Buttons with staggered animation */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
                >
                  <FestivalCTA onClick={() => setWaitlistModalOpen(true)} />
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      className="btn-glass text-lg px-8 py-3 min-w-[200px] group relative overflow-hidden border-green-400/30 hover:border-green-400/60"
                    >
                      <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Watch Demo
                      <motion.div
                        className="absolute inset-0 bg-green-400/10"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Live Counter with enhanced styling */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.5, duration: 0.6 }}
                >
                  <LiveWaitlistCounter />
                </motion.div>
              </div>
            )}

            {/* Enhanced Hero Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 3, duration: 1, ease: [0.4, 0, 0.2, 1] }}
              className="mt-16 md:mt-20 relative flex justify-center"
            >
              <div className="relative">
                <PhoneMockup 
                  screenContentSrc={featureAiChat} 
                  alt="MusicOS AI chat interface" 
                  className="max-w-xs sm:max-w-sm md:max-w-md relative z-10 mx-auto"
                />
                
                {/* Enhanced glow effects */}
                <motion.div
                  className="absolute inset-0 -z-10"
                  animate={{
                    background: [
                      "radial-gradient(circle, rgba(0, 255, 136, 0.3) 0%, transparent 70%)",
                      "radial-gradient(circle, rgba(255, 235, 59, 0.3) 0%, transparent 70%)",
                      "radial-gradient(circle, rgba(255, 107, 107, 0.3) 0%, transparent 70%)"
                    ],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Floating elements around phone */}
                {[Music, Star, Heart].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      top: `${20 + index * 30}%`,
                      left: index % 2 === 0 ? '-10%' : '110%',
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 180, 360],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <Icon className="w-8 h-8 text-green-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistModal 
        open={waitlistModalOpen} 
        onOpenChange={setWaitlistModalOpen} 
      />
    </>
  );
};