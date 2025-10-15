import React, { useEffect } from 'react';
import Header from '@/components/landing/Header';
import { Footer } from '@/components/Footer';
import ParadigmShift from '@/components/sections/ParadigmShift';
import EcosystemPillars from '@/components/sections/EcosystemPillars';
import AgentMarketplace from '@/components/sections/AgentMarketplace';
import RevolutionaryIdentity from '@/components/sections/RevolutionaryIdentity';
import SuccessStories from '@/components/sections/SuccessStories';
import TechnicalArchitecture from '@/components/sections/TechnicalArchitecture';
import PricingSection from '@/components/sections/PricingSection';
import AgenticAdvantage from '@/components/sections/AgenticAdvantage';
import EnhancedCTA from '@/components/sections/EnhancedCTA';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  useEffect(() => {
    document.title = '5DEE Features | The Complete Agentic Economy Platform';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
      </section>

      {/* All Feature Sections */}
      <main className="relative">
        <div className="absolute inset-0 hero-bg-animated opacity-30" />
        <ParadigmShift />
        <EcosystemPillars />
        <AgentMarketplace />
        <RevolutionaryIdentity />
        <SuccessStories />
        
        <div className="container mx-auto px-6 relative z-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
              5DEE Features
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              The complete infrastructure for the agentic economy. Deploy autonomous agents, protect creative IP, and scale your creative empire.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground/80 mb-12">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>$2.3M+ Revenue Generated</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span>50K+ AI Agents Deployed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span>10,000+ Creators</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <TechnicalArchitecture />
        <PricingSection />
        <AgenticAdvantage />
        <EnhancedCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
