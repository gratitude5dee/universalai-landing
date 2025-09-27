import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
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

const Docs: React.FC = () => {
  useEffect(() => {
    document.title = '5DEE Documentation | Complete Developer Guide';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-bg-animated opacity-30" />
      
      <Header />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 relative">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 text-sm text-primary mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Complete Developer Documentation
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                5DEE <span className="gradient-text">Documentation</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
                Master the agentic economy. Complete guides, API references, and implementation blueprints for building autonomous creative systems.
              </p>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">API Endpoints</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Code Examples</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Developer Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">API Uptime</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* All Core Sections */}
        <ParadigmShift />
        <EcosystemPillars />
        <AgentMarketplace />
        <RevolutionaryIdentity />
        <TechnicalArchitecture />
        <SuccessStories />
        <AgenticAdvantage />
        <PricingSection />
        <EnhancedCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Docs;
