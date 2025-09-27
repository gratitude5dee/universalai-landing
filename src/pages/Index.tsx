import React from 'react';
import Header from '@/components/landing/Header';
import { Footer } from '@/components/Footer';
import MinimalHero from '@/components/minimal/MinimalHero';
import ParadigmShift from '@/components/sections/ParadigmShift';
import EcosystemPillars from '@/components/sections/EcosystemPillars';
import AgentMarketplace from '@/components/sections/AgentMarketplace';
import RevolutionaryIdentity from '@/components/sections/RevolutionaryIdentity';
import SuccessStories from '@/components/sections/SuccessStories';
import TechnicalArchitecture from '@/components/sections/TechnicalArchitecture';
import PricingSection from '@/components/sections/PricingSection';
import AgenticAdvantage from '@/components/sections/AgenticAdvantage';
import EnhancedCTA from '@/components/sections/EnhancedCTA';

const Index = () => {
  return (
    <div className="min-h-screen text-foreground bg-background">
      <Header />
      <main className="pt-20">
        <MinimalHero />
        <ParadigmShift />
        <EcosystemPillars />
        <AgentMarketplace />
        <RevolutionaryIdentity />
        <SuccessStories />
        <TechnicalArchitecture />
        <PricingSection />
        <AgenticAdvantage />
        <EnhancedCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;