import React from 'react';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import LiveWaitlistCounter from '@/components/landing/LiveWaitlistCounter';

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'hsl(var(--lp-bg))', color: 'hsl(var(--lp-text))' }}>
      <Header />
      <main>
        <Hero />

        {/* Section intro */}
        <section className="mx-auto max-w-[1280px] px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="md:col-span-6">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.01em]">How we manage your network efficiently</h2>
            </div>
            <div className="md:col-span-6">
              <p className="max-w-[48ch] text-[hsl(var(--lp-muted))]">
                A system-first approach to orchestration that prioritizes clarity and control. Built to scale with your team and your ambitions.
              </p>
              <div className="mt-4 text-sm text-[hsl(var(--lp-muted))]">
                <LiveWaitlistCounter />
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <FeatureCard
              title="Advanced Management"
              description="Granular control over every workflow with auditability and safe defaults."
            />
            <FeatureCard
              title="Acceleration"
              description="Optimized pipelines and caching paths that keep your team moving fast."
            />
            <FeatureCard
              title="Monitoring"
              description="Operational visibility with clean signals—not noise—across your stack."
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;