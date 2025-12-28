import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import WZRDWaitlistModal from '@/components/landing/WZRDWaitlistModal';
import SplineLoadingSkeleton from '@/components/ui/SplineLoadingSkeleton';
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
  return <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Spline 3D Background - Centered and Responsive */}
        <div className="absolute inset-0 z-0 spline-container overflow-hidden">
          <Suspense fallback={<SplineLoadingSkeleton />}>
            <Spline scene="https://prod.spline.design/7n8f5YWSgL4MSvLr/scene.splinecode" onLoad={() => setSplineLoaded(true)} style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }} />
          </Suspense>
          {/* Gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-liquid mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold tracking-wide text-primary">The Creator-Agent OS</span>
            </motion.div>

            {/* Headline - Updated */}
            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.1
          }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
              <span className="block bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">The Neobank for the Creator Economy</span>
              <span className="block text-foreground/80 mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Every Being is A Billion
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]">Privacy. Identity. IP. Self-Sovereign.</span>
            </motion.p>

            {/* CTAs - REMOVED animate-pulse from Join Waitlist button */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button onClick={() => setWaitlistOpen(true)} size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-bold px-10 py-7 text-lg rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-all duration-300 hover:scale-105">
                Join Waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button onClick={scrollToManifesto} variant="outline" size="lg" className="glass-liquid border-border/30 hover:border-primary/40 px-10 py-7 text-lg rounded-2xl font-semibold">
                Read Manifesto
              </Button>
            </motion.div>

            {/* Product Hunt Badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="flex justify-center">
              <a href="https://www.producthunt.com/posts/wzrd-tech" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=wzrd-tech&theme=dark" alt="WZRD.tech on Product Hunt" className="h-14" onError={e => {
                e.currentTarget.style.display = 'none';
              }} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div animate={{
          y: [0, 8, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="w-7 h-12 rounded-full border-2 border-foreground/20 flex justify-center pt-2">
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          </motion.div>
        </motion.div>
      </section>

      <WZRDWaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </>;
};
export default WZRDHeroSection;