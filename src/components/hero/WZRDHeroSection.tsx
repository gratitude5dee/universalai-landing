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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Spline 3D Background */}
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<SplineLoadingSkeleton />}>
            <Spline 
              scene="https://prod.spline.design/7n8f5YWSgL4MSvLr/scene.splinecode"
              onLoad={() => setSplineLoaded(true)}
              className="w-full h-full"
            />
          </Suspense>
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">The Future of Creator Economies</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                Billion Dollar Companies
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                Run by Zero People
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              The protocol for autonomous creator economies.{' '}
              <span className="text-foreground font-medium">Privacy. Identity. IP. Self-Sovereign.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            >
              <Button
                onClick={() => setWaitlistOpen(true)}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Join Waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={scrollToManifesto}
                variant="outline"
                size="lg"
                className="border-border/40 hover:border-border/60 bg-background/20 backdrop-blur-sm px-8 py-6 text-lg rounded-xl"
              >
                Read Manifesto
              </Button>
            </motion.div>

            {/* Product Hunt Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <a
                href="https://www.producthunt.com/posts/wzrd-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <img 
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=wzrd-tech&theme=dark" 
                  alt="WZRD.tech on Product Hunt" 
                  className="h-12"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
          </motion.div>
        </motion.div>
      </section>

      <WZRDWaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </>
  );
};

export default WZRDHeroSection;
