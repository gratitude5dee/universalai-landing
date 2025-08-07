import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PhoneMockup } from '@/components/PhoneMockup';
import featureAiChat from '@/assets/feature-ai-chat-mobile.jpg';
import HackathonBadge from '@/components/landing/HackathonBadge';
import LiveWaitlistCounter from '@/components/landing/LiveWaitlistCounter';
import FestivalCTA from '@/components/landing/FestivalCTA';
import WaitlistModal from '@/components/landing/WaitlistModal';
import TextReveal from './TextReveal';

const MotionComponent = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const EnhancedFestivalHero = () => {
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center text-center pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-festival-glow opacity-30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-y-10">
            
            <MotionComponent>
              <HackathonBadge />
            </MotionComponent>

            <MotionComponent className="w-full">
              <h1 className="font-festival text-7xl md:text-9xl text-transparent bg-clip-text text-gradient-festival tracking-wider">
                MUSICÓS
              </h1>
            </MotionComponent>

            <MotionComponent className="w-full">
              <TextReveal
                text="Your Creative Workflow, Unified & Amplified"
                className="text-2xl md:text-4xl font-grotesk font-bold text-gradient-subtle"
                delay={0.5}
              />
            </MotionComponent>

            <MotionComponent className="w-full">
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-grotesk">
                From spark to stage, manage every beat of your creative journey.{" "}
                <span className="text-green-400 font-semibold">All in one place.</span>
              </p>
            </MotionComponent>

            <MotionComponent className="w-full">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <FestivalCTA onClick={() => setWaitlistModalOpen(true)} />
                <Button
                  variant="outline"
                  className="btn-glass text-lg px-8 py-3 group relative overflow-hidden border-green-400/30 hover:border-green-400/60"
                >
                  <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                  Watch Demo
                </Button>
              </div>
            </MotionComponent>

            <MotionComponent className="w-full">
              <LiveWaitlistCounter />
            </MotionComponent>

            <MotionComponent className="mt-12 w-full flex justify-center">
              <div className="relative">
                <PhoneMockup 
                  screenContentSrc={featureAiChat} 
                  alt="MusicOS AI chat interface" 
                  className="max-w-xs sm:max-w-sm md:max-w-md relative z-10 mx-auto"
                />
                <motion.div
                  className="absolute inset-0 -z-10 bg-green-400/20 rounded-full"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ filter: 'blur(40px)' }}
                />
              </div>
            </MotionComponent>

          </div>
        </div>
      </section>

      <WaitlistModal 
        open={waitlistModalOpen} 
        onOpenChange={setWaitlistModalOpen} 
      />
    </>
  );
};