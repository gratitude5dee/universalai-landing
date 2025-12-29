import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Zap, Sparkles, ChevronDown } from 'lucide-react';
import { FlickeringGrid, LightRays, TextAnimate, AnimatedGradientText, ShimmerButton, NumberTicker, ShineBorder } from '@/components/magicui';
import WZRDWaitlistModal from '@/components/landing/WZRDWaitlistModal';

export const MagicHeroSection = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  // Feature pills data
  const features = [
    { icon: Shield, label: 'Quantum-Safe Security', gradient: 'from-purple-500 to-purple-700' },
    { icon: Globe, label: 'Decentralized Network', gradient: 'from-blue-500 to-blue-700' },
    { icon: Zap, label: 'Lightning Fast', gradient: 'from-amber-500 to-amber-700' },
  ];

  // Floating gradient orbs
  const orbs = [
    { size: 400, left: '10%', top: '20%', color: 'rgba(147, 51, 234, 0.15)', delay: 0 },
    { size: 300, right: '15%', top: '30%', color: 'rgba(255, 181, 71, 0.12)', delay: 2 },
    { size: 350, left: '60%', bottom: '20%', color: 'rgba(255, 107, 157, 0.1)', delay: 4 },
    { size: 250, right: '30%', bottom: '30%', color: 'rgba(59, 130, 246, 0.08)', delay: 6 },
    { size: 200, left: '30%', top: '50%', color: 'rgba(147, 51, 234, 0.1)', delay: 3 },
    { size: 280, right: '5%', top: '60%', color: 'rgba(255, 181, 71, 0.08)', delay: 5 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <FlickeringGrid
          squareSize={4}
          gridGap={6}
          flickerChance={0.3}
          color="rgb(147, 51, 234)"
          maxOpacity={0.3}
          className="w-full h-full opacity-30"
        />
      </div>

      <LightRays count={5} color="rgba(147, 51, 234, 0.4)" blur={40} speed={14} length="70vh" />

      {/* Floating Gradient Orbs */}
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.left,
            right: orb.right,
            top: orb.top,
            bottom: orb.bottom,
            background: orb.color,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Gradient Overlays for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        {/* Feature Pills */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <ShineBorder
                borderWidth={1}
                duration={14}
                shineColor={['rgba(147, 51, 234, 0.5)', 'rgba(255, 181, 71, 0.5)']}
                className="inline-flex"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm">
                  <div className={`p-1.5 rounded-full bg-gradient-to-br ${feature.gradient}`}>
                    <feature.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white/90">{feature.label}</span>
                </div>
              </ShineBorder>
            </motion.div>
          ))}
        </div>

        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
          </motion.div>
          <AnimatedGradientText
            speed={1.5}
            colorFrom="#FFB547"
            colorTo="#9c40ff"
            className="text-sm font-semibold"
          >
            Revolutionizing the Creator Economy
          </AnimatedGradientText>
        </motion.div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <TextAnimate animation="blurInUp" by="word" delay={0.6} duration={0.5}>
            Build Your Empire in the
          </TextAnimate>
          <br />
          <AnimatedGradientText
            speed={1}
            colorFrom="#FFB547"
            colorTo="#FF6B9D"
            className="text-5xl md:text-7xl lg:text-8xl font-bold inline-block mt-2"
          >
            Creator Economy
          </AnimatedGradientText>
        </h1>

        {/* Tagline */}
        <div className="max-w-3xl mx-auto mb-12">
          <TextAnimate
            animation="fadeIn"
            by="word"
            delay={1.2}
            duration={0.4}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            The world's first holistic platform empowering creators with quantum-safe security,
            self-sovereign identity, and decentralized IP protection.
          </TextAnimate>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <ShimmerButton
            onClick={() => setIsWaitlistOpen(true)}
            shimmerColor="rgba(255, 255, 255, 0.3)"
            shimmerSize="150px"
            shimmerDuration="3s"
            borderRadius="12px"
            background="linear-gradient(135deg, hsl(262 83% 58%) 0%, hsl(38 100% 64%) 100%)"
            className="px-8 py-4 text-lg font-semibold"
          >
            Join Waitlist
          </ShimmerButton>
          <button
            className="px-8 py-4 rounded-xl text-lg font-semibold text-white border-2 border-white/20
                     hover:border-white/40 hover:bg-white/5 transition-all duration-300
                     backdrop-blur-sm transform-gpu hover:scale-105"
          >
            Learn More
          </button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <ShineBorder
            borderWidth={1}
            duration={16}
            shineColor={['rgba(147, 51, 234, 0.5)', 'rgba(255, 181, 71, 0.5)', 'rgba(255, 107, 157, 0.5)']}
            className="inline-block"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-6 rounded-2xl bg-black/40 backdrop-blur-md">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <NumberTicker value={50000} suffix="+" />
                </div>
                <div className="text-sm text-gray-400">Creators</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <NumberTicker value={12} suffix="M" />
                </div>
                <div className="text-sm text-gray-400">Assets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <NumberTicker value={99.9} decimalPlaces={1} suffix="%" />
                </div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <NumberTicker value={150} suffix="+" />
                </div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
            </div>
          </ShineBorder>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-8 h-8 text-white/40" />
        </motion.div>
      </div>

      {/* Waitlist Modal */}
      <WZRDWaitlistModal open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </section>
  );
};
