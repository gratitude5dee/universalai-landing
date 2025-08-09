import React, { Suspense, useState } from 'react';
import Header from '@/components/landing/Header';
import { Footer } from '@/components/Footer';
import MinimalHero from '@/components/minimal/MinimalHero';
import SocialProof from '@/components/minimal/SocialProof';
import TechnicalFeatures from '@/components/minimal/TechnicalFeatures';
import MetricsSection from '@/components/minimal/MetricsSection';
import Spinner from '@/components/ui/spinner';

const LazyCodeDemo = React.lazy(() => import('@/components/minimal/CodeDemo'));

const Index = () => {
  const [signups, setSignups] = useState(24);

  const handleSignupSuccess = () => {
    setSignups(prevSignups => prevSignups + 1);
  };

  return (
    <div className="min-h-screen text-foreground bg-background">
      <Header />
      <main className="pt-24">
        <MinimalHero onSignupSuccess={handleSignupSuccess} />
        <SocialProof signups={signups} />
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