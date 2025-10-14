import React, { useState } from 'react';
import Header from '@/components/landing/Header';
import { Footer } from '@/components/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
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
import UniversalAIIntroAnimation from '@/components/ui/UniversalAIIntroAnimation';
import SplineHeroSection from '@/components/sections/SplineHeroSection';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      {!showIntro && <ScrollProgress />}
      
      {/* Award-winning intro animation */}
      <UniversalAIIntroAnimation 
        onComplete={handleIntroComplete}
        allowSkip={true}
      />
      
      <div className="min-h-screen text-foreground bg-background">
        <Header />
        <main className="pt-20">
          {!showIntro && <SplineHeroSection />}
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
    </>
  );
};

export default Index;