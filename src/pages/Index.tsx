import React, { Suspense } from 'react';
import Header from '@/components/landing/Header';
import { Footer } from '@/components/Footer';
import MinimalHero from '@/components/minimal/MinimalHero';
import TechnicalFeatures from '@/components/minimal/TechnicalFeatures';
import MetricsSection from '@/components/minimal/MetricsSection';
import Spinner from '@/components/ui/spinner';

const LazyCodeDemo = React.lazy(() => import('@/components/minimal/CodeDemo'));

const Index = () => {
  return (
    <div className="min-h-screen text-foreground bg-background">
      <Header />
      <main className="pt-24">
        <MinimalHero />
        <TechnicalFeatures />
        <Suspense fallback={<div className="flex justify-center py-32"><Spinner /></div>}>
          <LazyCodeDemo />
        </Suspense>
        <MetricsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;