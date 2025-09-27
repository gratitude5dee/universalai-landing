import React, { useEffect } from 'react';
import Header from '@/components/landing/Header';
import { Footer } from '@/components/Footer';

const entries = [
  { version: '0.3.0', date: '2025-09-27', notes: ['ManusAI integration with comprehensive 5DEE ecosystem', 'Complete transformation of Docs and Features pages', 'Added 9 core sections: ParadigmShift, EcosystemPillars, AgentMarketplace, RevolutionaryIdentity, SuccessStories, TechnicalArchitecture, PricingSection, AgenticAdvantage, EnhancedCTA', 'Advanced animations and glassmorphism design system', 'Technical architecture visualization and interactive components'] },
  { version: '0.2.0', date: '2025-08-08', notes: ['New landing header & hero styling', 'Waitlist modal with Supabase integration', 'Added Features, Docs, Pricing, Changelog pages'] },
  { version: '0.1.0', date: '2025-07-20', notes: ['Initial public preview', 'Core components and layout'] },
];

const Changelog: React.FC = () => {
  useEffect(() => {
    document.title = 'MusicOS – Changelog';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">
        <header className="py-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Changelog</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">All notable changes to MusicOS.</p>
        </header>

        <section className="max-w-3xl mx-auto px-6 pb-20 space-y-10">
          {entries.map((e) => (
            <article key={e.version} className="border border-border rounded-2xl p-6 bg-card/50">
              <header className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">v{e.version}</h2>
                <span className="text-sm text-muted-foreground">{e.date}</span>
              </header>
              <ul className="mt-4 list-disc pl-6 text-sm text-muted-foreground space-y-1">
                {e.notes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Changelog;
