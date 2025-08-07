import React from 'react';
import Header from '@/components/landing/Header';
import { Footer } from '@/components/Footer';
import MinimalHero from '@/components/minimal/MinimalHero';
import TechnicalFeatures from '@/components/minimal/TechnicalFeatures';

const MobileOptimizedIndex = () => {
  return (
    <div className="min-h-screen text-foreground bg-background">
      <Header />
      <main className="pt-20 px-4">
        <MinimalHero />
        <TechnicalFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default MobileOptimizedIndex;