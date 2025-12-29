import React from 'react';
import { motion } from 'framer-motion';
import { Coins, TrendingUp, Lock, Zap } from 'lucide-react';
import { NumberTicker } from '@/components/ui/number-ticker';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import { ShineBorder } from '@/components/ui/shine-border';

const stats = [{
  label: 'Symbol',
  value: '$5DEE',
  icon: Coins,
  isText: true
}, {
  label: 'Total Supply',
  value: 100,
  suffix: 'M',
  icon: TrendingUp,
  isText: false
}, {
  label: 'Launch Type',
  value: 'Fair',
  icon: Lock,
  isText: true
}];
const partners = [{
  name: 'Bridge',
  logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=40&fit=crop&auto=format'
}, {
  name: 'Tempo',
  logo: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=100&h=40&fit=crop&auto=format'
}, {
  name: 'Coinbase',
  logo: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=100&h=40&fit=crop&auto=format'
}, {
  name: 'Thirdweb',
  logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=100&h=40&fit=crop&auto=format'
}];
const FiveDeeTokenSection: React.FC = () => {
  return <section id="token" className="py-32 relative overflow-hidden">
      {/* Flickering Grid Background */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          squareSize={4}
          gridGap={8}
          color="hsl(210 100% 50%)"
          maxOpacity={0.15}
          flickerChance={0.2}
          className="absolute inset-0"
        />
      </div>

      {/* Cinematic background */}
      <div className="absolute inset-0 z-[1]">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        {/* Warm ambient orbs */}
        <motion.div animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity
      }} className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[100px]" />
        <motion.div animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 10,
        repeat: Infinity
      }} className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/20 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Giant token symbol with AnimatedGradientText */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          type: "spring"
        }} className="mb-8 relative inline-block">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-2xl animate-pulse" />
            <h2 className="relative text-7xl md:text-9xl lg:text-[12rem] font-black leading-none">
              <AnimatedGradientText
                colorFrom="hsl(210 100% 60%)"
                colorTo="hsl(280 100% 60%)"
                speed={0.8}
              >
                $5DEE
              </AnimatedGradientText>
            </h2>
          </motion.div>

          {/* Taglines */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="space-y-2 mb-8">
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              The Digital Penny
            </p>
            <p className="text-xl text-primary font-medium">
              Earn it. Sign for it. Build with it.
            </p>
          </motion.div>

          {/* Description */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3
        }} className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            A "GENIUS ACT" compliant stablecoin built in partnership with Bridge, Tempo, Thirdweb, & Coinbase. Powering autonomous transactions, creator royalties, and public goods funding.
          </motion.p>

          {/* Partner Badges */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.35
        }} className="mb-16">
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-widest">
              Powered by
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {partners.map((partner, index) => <motion.div key={partner.name} initial={{
              opacity: 0,
              y: 10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.4 + index * 0.1
            }} whileHover={{
              scale: 1.05,
              y: -2
            }} className="flex flex-col items-center gap-2 group">
                  <div className="w-20 h-10 rounded-lg glass-liquid flex items-center justify-center group-hover:border-primary/30 transition-all">
                    <span className="text-sm font-bold text-foreground/80 group-hover:text-primary transition-colors">
                      {partner.name}
                    </span>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>

          {/* Stats with 3D tilt effect */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.4
        }} className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => <motion.div key={stat.label} whileHover={{
            y: -8,
            scale: 1.02,
            rotateX: 5,
            rotateY: index === 0 ? 5 : index === 2 ? -5 : 0
          }} transition={{
            type: "spring",
            stiffness: 300
          }} className="group relative" style={{
            transformStyle: 'preserve-3d'
          }}>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <div className="relative p-8 rounded-3xl glass-liquid border border-border/20 hover:border-primary/30 transition-all overflow-hidden">
                  <ShineBorder 
                    shineColor={["hsl(210 100% 60%)", "hsl(280 100% 60%)"]} 
                    borderWidth={1}
                    duration={10}
                  />
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {stat.isText ? stat.value : <NumberTicker value={stat.value as number} suffix={stat.suffix} />}
                  </p>
                </div>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
    </section>;
};
export default FiveDeeTokenSection;