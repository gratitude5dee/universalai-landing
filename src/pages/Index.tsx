import React, { useState } from 'react';
import Header from '@/components/landing/Header';
import { Footer } from '@/components/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import CustomCursor from '@/components/ui/CustomCursor';
import UniversalAIHero from '@/components/minimal/UniversalAIHero';
import VideoSection from '@/components/sections/VideoSection';
import BuiltDifferentFeatures from '@/components/sections/BuiltDifferentFeatures';
import ModulesSection from '@/components/sections/ModulesSection';
import TokenSection from '@/components/sections/TokenSection';
import TokenCommunitySection from '@/components/sections/TokenCommunitySection';
import ToolsSection from '@/components/sections/ToolsSection';
import BlogSection from '@/components/sections/BlogSection';
import FAQSection from '@/components/sections/FAQSection';
import UniversalAIIntroAnimation from '@/components/ui/UniversalAIIntroAnimation';
import SectionDivider from '@/components/ui/SectionDivider';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      <CustomCursor />
      {!showIntro && <ScrollProgress />}
      
      <UniversalAIIntroAnimation 
        onComplete={handleIntroComplete}
        allowSkip={true}
      />
      
      <div className="min-h-screen text-foreground relative bg-background">
        <Header />
        <main className="relative z-10">
          {!showIntro && <UniversalAIHero />}
          <VideoSection />
          <SectionDivider className="my-24" />
          <BuiltDifferentFeatures />
          <SectionDivider className="my-24" />
          <ModulesSection />
          <SectionDivider className="my-24" />
          <TokenSection />
          <SectionDivider className="my-24" />
          <TokenCommunitySection />
          <SectionDivider className="my-24" />
          <ToolsSection />
          <SectionDivider className="my-24" />
          <BlogSection />
          <SectionDivider className="my-24" />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;