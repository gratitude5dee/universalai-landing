import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CrystallineSymbol from '@/components/ui/CrystallineSymbol';

const TokenCommunitySection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* $UNAI Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-accent-amber via-primary to-accent-rose bg-clip-text text-transparent">
              $UNAI
            </span>
          </h2>
          <p className="text-2xl md:text-3xl font-playfair italic text-foreground">
            Earn it. Create with it. Build with it.
          </p>
        </motion.div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Card - Promotional Launch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative group cursor-pointer"
          >
            <div className="relative h-full rounded-2xl overflow-hidden p-8 md:p-12">
              {/* Gradient crystalline background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent-rose/20 to-accent-amber/30" />
              <div className="absolute inset-0 glass-strong" />

              {/* Animated background elements */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 rounded-full"
                style={{
                  background: 'radial-gradient(circle, hsl(38 100% 64% / 0.3), transparent 60%)',
                  filter: 'blur(60px)',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              />

              <div className="relative z-10">
                <div className="inline-block px-4 py-2 rounded-full bg-accent-amber/20 border border-accent-amber/30 text-accent-amber text-sm font-medium mb-6">
                  ONCHAIN LAUNCH
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-accent-amber to-accent-rose bg-clip-text text-transparent">
                    UNAI
                  </span>{' '}
                  onchain LAUNCH
                </h3>

                <p className="text-lg text-foreground/80 mb-6">
                  Bring creators onchain this season
                </p>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Join the movement empowering creators with ownership, attribution, and monetization in the AI
                  economy. Early participants receive exclusive benefits and governance rights.
                </p>

                <Button
                  variant="default"
                  className="bg-gradient-to-r from-accent-amber to-accent-rose hover:opacity-90 text-background font-semibold group"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Card - Community */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative group cursor-pointer"
          >
            <div className="relative h-full rounded-2xl overflow-hidden p-8 md:p-12 bg-card border border-border">
              {/* Geometric flower symbol illustration */}
              <div className="flex justify-center mb-8">
                <CrystallineSymbol size={150} />
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <Users className="w-4 h-4" />
                  Join the Movement
                </div>

                <h3 className="text-3xl font-bold mb-4">Join our community</h3>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Join creators, artists, and builders manifesting a more human AI ecosystem where creativity
                  flourishes and value flows to those who create.
                </p>

                <div className="flex gap-4 justify-center">
                  <Button variant="outline" className="border-primary/30 hover:border-primary/50">
                    Sign up
                  </Button>
                  <Button variant="default" className="bg-primary hover:bg-primary/90">
                    Contribute
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TokenCommunitySection;
