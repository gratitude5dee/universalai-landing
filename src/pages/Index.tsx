import React, { useState } from 'react';
import WZRDHeader from '@/components/landing/WZRDHeader';
import WZRDFooter from '@/components/WZRDFooter';
import ScrollProgress from '@/components/ui/ScrollProgress';
import CustomCursor from '@/components/ui/CustomCursor';
import { MagicHeroSection } from '@/components/sections/MagicHeroSection';
import { MagicPartnersSection } from '@/components/sections/MagicPartnersSection';
import { MagicManifestoSection } from '@/components/sections/MagicManifestoSection';
import { MagicProductsSection } from '@/components/sections/MagicProductsSection';
import { MagicCTASection } from '@/components/sections/MagicCTASection';
import FAQSection from '@/components/sections/FAQSection';
import WZRDIntroAnimation from '@/components/ui/WZRDIntroAnimation';
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
      
      {showIntro && (
        <WZRDIntroAnimation 
          onComplete={handleIntroComplete}
          allowSkip={true}
        />
      )}
      
      <div className="min-h-screen text-foreground relative bg-background">
        <WZRDHeader />
        <main className="relative z-10">
          {!showIntro && <MagicHeroSection />}
          <MagicPartnersSection />
          <SectionDivider className="my-16" />
          <MagicManifestoSection />
          <SectionDivider className="my-16" />
          <MagicProductsSection />
          <SectionDivider className="my-16" />
          <MagicCTASection />
          <SectionDivider className="my-16" />
          <FAQSection />
        </main>
        <WZRDFooter />
      </div>
    </>
  );
};

export default Index;
