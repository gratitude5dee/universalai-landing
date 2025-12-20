import React, { useState } from 'react';
import WZRDHeader from '@/components/landing/WZRDHeader';
import WZRDFooter from '@/components/WZRDFooter';
import ScrollProgress from '@/components/ui/ScrollProgress';
import CustomCursor from '@/components/ui/CustomCursor';
import WZRDHeroSection from '@/components/hero/WZRDHeroSection';
import ScrollingPartners from '@/components/sections/ScrollingPartners';
import ManifestoSection from '@/components/sections/ManifestoSection';
import ProductsSection from '@/components/sections/ProductsSection';
import FiveDeeTokenSection from '@/components/sections/FiveDeeTokenSection';
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
          {!showIntro && <WZRDHeroSection />}
          <ScrollingPartners />
          <SectionDivider className="my-16" />
          <ManifestoSection />
          <SectionDivider className="my-16" />
          <ProductsSection />
          <SectionDivider className="my-16" />
          <FiveDeeTokenSection />
          <SectionDivider className="my-16" />
          <FAQSection />
        </main>
        <WZRDFooter />
      </div>
    </>
  );
};

export default Index;
