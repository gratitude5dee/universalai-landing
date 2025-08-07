import React from 'react';
import Header from '@/components/landing/Header';
import { Footer } from '@/components/Footer';
import MinimalHero from '@/components/minimal/MinimalHero';
import TechnicalFeatures from '@/components/minimal/TechnicalFeatures';
import CodeDemo from '@/components/minimal/CodeDemo';
import MetricsSection from '@/components/minimal/MetricsSection';

const Index = () => {
  return (
    <div className="min-h-screen text-foreground bg-background">
      <Header />
      <main className="pt-24">
        <MinimalHero />
        <TechnicalFeatures />
        <CodeDemo />
        <MetricsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;