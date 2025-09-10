import React from 'react';
import { Button } from '@/components/ui/button';
import ProfessionalCTA from './ProfessionalCTA';
import LiveWaitlistCounter from '../landing/LiveWaitlistCounter';
import AnimatedOrb from '@/components/ui/AnimatedOrb';
import { motion } from 'framer-motion';

interface MinimalHeroProps {
  className?: string;
}

const MinimalHero: React.FC<MinimalHeroProps> = ({ className = '' }) => {
  return (
    <section className={`relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden ${className}`}>
      {/* Animated Orb Background */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatedOrb 
          size="large" 
          variant="primary"
          className="absolute top-1/4 -right-48 opacity-30"
        />
        <AnimatedOrb 
          size="medium" 
          variant="secondary"
          className="absolute bottom-1/4 -left-32 opacity-20"
        />
        
        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/30 to-black opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-purple-900/20" />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 flex-1 max-w-4xl text-center lg:text-left lg:pr-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-block glass rounded-full px-6 py-2 mb-8 border border-primary/30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-sm font-medium bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            🚀 Investment Potential
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Empowering Your
          <br />
          <span className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
            Investments
          </span>
          <br />
          with AI Technology
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl lg:max-w-none leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Our innovative AI technology transforms asset management by analyzing vast data sets in real-time.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <ProfessionalCTA 
            onClick={() => {
              const event = new CustomEvent('openWaitlistModal');
              window.dispatchEvent(event);
            }} 
            label="Get Started"
          />
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg glass hover:glass-strong">
            Learn More
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="flex flex-col items-center lg:items-start gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center gap-2">
            {['JD', 'AS', 'MK', 'RB'].map((initials, index) => (
              <motion.div
                key={initials}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center text-sm font-medium"
                style={{ marginLeft: index > 0 ? '-8px' : '0' }}
                whileHover={{ scale: 1.1, zIndex: 10 }}
              >
                {initials}
              </motion.div>
            ))}
            <div className="ml-2 text-sm text-gray-400">
              Trusted by <span className="text-primary font-semibold">1.2k+</span> investors
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side Content */}
      <motion.div 
        className="relative z-10 flex-1 max-w-2xl mt-16 lg:mt-0"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <LiveWaitlistCounter />
        
        {/* Enhanced Partner Logos */}
        <motion.div 
          className="mt-12 text-center lg:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-sm text-gray-400 mb-6">Trusted by top innovative teams</p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-50 hover:opacity-70 transition-opacity duration-300">
            {[
              { name: 'Portivio', icon: '●' },
              { name: 'Vaultic', icon: '■' },
              { name: 'Alteris', icon: '★' },
              { name: 'Quantora', icon: '◆' },
              { name: 'Fundara', icon: '⬢' }
            ].map((partner) => (
              <motion.div 
                key={partner.name} 
                className="flex items-center gap-2 text-lg font-semibold tracking-wider"
                whileHover={{ scale: 1.05, opacity: 1 }}
              >
                <span className="text-primary">{partner.icon}</span>
                {partner.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MinimalHero;