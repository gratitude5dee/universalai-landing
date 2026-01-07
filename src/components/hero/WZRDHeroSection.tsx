import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import WZRDWaitlistModal from '@/components/landing/WZRDWaitlistModal';
import SplineLoadingSkeleton from '@/components/ui/SplineLoadingSkeleton';
import { TextAnimate } from '@/components/ui/text-animate';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { LightRays } from '@/components/ui/light-rays';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const WZRDHeroSection: React.FC = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);
  
  const scrollToManifesto = () => {
    const element = document.querySelector('#manifesto');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Spline 3D Background - Centered and Responsive */}
        <div className="absolute inset-0 z-0 spline-container overflow-hidden">
          <Suspense fallback={<SplineLoadingSkeleton />}>
            <Spline 
              scene="https://prod.spline.design/7n8f5YWSgL4MSvLr/scene.splinecode" 
              onLoad={() => setSplineLoaded(true)} 
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }} 
            />
          </Suspense>
          {/* Gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40 pointer-events-none" />
        </div>

        {/* Light Rays Effect */}
        <LightRays 
          count={5} 
          color="hsl(210 100% 50% / 0.12)" 
          blur={60} 
          speed={14}
          length="70vh"
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass-liquid mb-6 sm:mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-primary">The Creator-Agent OS</span>
            </motion.div>

            {/* Headline with TextAnimate */}
            <div className="mb-6 sm:mb-8">
              <TextAnimate
                animation="blurInUp"
                by="word"
                once
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-[1.1] tracking-tight bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent"
                duration={1.5}
              >
                The Neobank for the Creator Economy
              </TextAnimate>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-3 sm:mt-4"
              >
                <AnimatedGradientText
                  colorFrom="hsl(210 100% 60%)"
                  colorTo="hsl(40 100% 60%)"
                  speed={1.2}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
                >
                  Every Being is A Billion
                </AnimatedGradientText>
              </motion.div>
            </div>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-light px-2"
            >
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                Privacy. Identity. IP. Self-Sovereign. Identity.
              </span>
            </motion.p>

            {/* CTAs - Full width on mobile */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.3 }} 
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2"
            >
            <ShimmerButton 
              onClick={() => setWaitlistOpen(true)}
              shimmerColor="hsl(210 100% 70%)"
              background="hsl(var(--primary))"
              borderRadius="16px"
              shimmerDuration="2.5s"
              className="w-full sm:w-auto font-bold px-8 sm:px-10 h-[52px] text-base sm:text-lg"
            >
              Join Waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </ShimmerButton>
            <Button 
              onClick={scrollToManifesto} 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto glass-liquid border-border/30 hover:border-primary/40 px-8 sm:px-10 h-[52px] text-base sm:text-lg rounded-2xl font-semibold touch-manipulation"
            >
              Read Manifesto
            </Button>
            </motion.div>

            {/* Product Hunt Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }} 
              className="flex justify-center mb-8"
            >
              <a 
                href="https://www.producthunt.com/posts/wzrd-tech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="opacity-80 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200"
              >
                <img 
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=wzrd-tech&theme=dark" 
                  alt="WZRD.tech on Product Hunt" 
                  className="h-12 sm:h-14" 
                  onError={e => {
                    e.currentTarget.style.display = 'none';
                  }} 
                />
              </a>
            </motion.div>

            {/* Company Attribution Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col items-center gap-4"
            >
              {/* Attribution Label */}
              <span className="text-xs sm:text-sm font-medium text-muted-foreground/70 uppercase tracking-widest">
                Backed by visionaries from
              </span>

              {/* Logo Row */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {/* Y Combinator Badge */}
                <div className="group flex items-center gap-2 px-4 py-2 rounded-full glass-liquid border border-border/20 hover:border-primary/30 transition-all duration-300 cursor-default">
                  <div className="w-6 h-6 rounded-md bg-[#FF6600] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">Y</span>
                  </div>
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">Combinator</span>
                </div>

                {/* Stanford */}
                <div className="group flex items-center gap-2 px-4 py-2 rounded-full glass-liquid border border-border/20 hover:border-primary/30 transition-all duration-300 cursor-default">
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">Stanford</span>
                </div>

                {/* Berkeley */}
                <div className="group flex items-center gap-2 px-4 py-2 rounded-full glass-liquid border border-border/20 hover:border-primary/30 transition-all duration-300 cursor-default">
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">UC Berkeley</span>
                </div>

                {/* Product Hunt Featured Badge */}
                <div className="group flex items-center gap-2 px-4 py-2 rounded-full glass-liquid border border-border/20 hover:border-primary/30 transition-all duration-300 cursor-default">
                  <div className="w-5 h-5 rounded-full bg-[#DA552F] flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">P</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Featured on</span>
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">Product Hunt</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator - Hidden on very small screens */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1 }} 
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
        >
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ duration: 2, repeat: Infinity }} 
            className="w-7 h-12 rounded-full border-2 border-foreground/20 flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          </motion.div>
        </motion.div>
      </section>

      <WZRDWaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </>
  );
};

export default WZRDHeroSection;
