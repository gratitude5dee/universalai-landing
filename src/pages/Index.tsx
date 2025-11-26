import React, { useState } from 'react';
import Header from '@/components/landing/Header';
import { Footer } from '@/components/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import CustomCursor from '@/components/ui/CustomCursor';
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
import SectionDivider from '@/components/ui/SectionDivider';
import DynamicBackground from '@/components/ui/DynamicBackground';
import ParticleField from '@/components/ui/ParticleField';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      {/* Dynamic gradient mesh background */}
      {!showIntro && <DynamicBackground sectionTheme="default" />}
      
      {/* Particle field effect */}
      {!showIntro && <ParticleField particleCount={40} connectionDistance={120} speed={0.3} />}
      
      {/* Custom Cursor Trail (desktop only) */}
      <CustomCursor />
      
      {/* Scroll Progress Indicator */}
      {!showIntro && <ScrollProgress />}
      
      {/* Award-winning intro animation */}
      <UniversalAIIntroAnimation 
        onComplete={handleIntroComplete}
        allowSkip={true}
      />
      
      <div className="min-h-screen text-foreground relative">
        <Header />
        <main className="pt-20 relative z-10">
          {!showIntro && <SplineHeroSection />}
          <MinimalHero />
          <SectionDivider className="my-24" />
          <ParadigmShift />
          <SectionDivider className="my-24" />
          <EcosystemPillars />
          <SectionDivider className="my-24" />
          <AgentMarketplace />
          <SectionDivider className="my-24" />
          <RevolutionaryIdentity />
          <SectionDivider className="my-24" />
          <SuccessStories />
          <SectionDivider className="my-24" />
          <TechnicalArchitecture />
          <SectionDivider className="my-24" />
          <PricingSection />
          <SectionDivider className="my-24" />
          <AgenticAdvantage />
          <EnhancedCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;