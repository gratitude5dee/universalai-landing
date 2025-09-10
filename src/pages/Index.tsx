import React from 'react';
import Header from '@/components/landing/Header';
import { Footer } from '@/components/Footer';
import MinimalHero from '@/components/minimal/MinimalHero';
import TechnicalFeatures from '@/components/minimal/TechnicalFeatures';
import ValuePropsSection from '@/components/minimal/ValuePropsSection';
import CTASection from '@/components/minimal/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen text-foreground bg-background">
      <Header />
      <main className="pt-20">
        <MinimalHero />
        <TechnicalFeatures />
        <ValuePropsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;