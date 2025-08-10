import React, { useEffect } from 'react';
import Header from '@/components/landing/Header';
import { Footer } from '@/components/Footer';

const tiers = [
  { name: 'Starter', price: 'Free', desc: 'Always Open-Source,Free for Self-Hosting', features: ['Unlimited projects', 'Basic collaboration', 'Community support'] },
  { name: 'Pro', price: '$99/mo', desc: 'For teams who ship weekly', features: ['Everything in Starter', 'Advanced roles & permissions', 'Automations', 'Priority support'] },
  { name: 'Studio', price: 'Contact', desc: 'For studios & enterprises', features: ['Custom SSO', 'Premium support', 'Security reviews', 'Onboarding & training'] },
];

const Pricing: React.FC = () => {
  useEffect(() => {
    document.title = 'MusicOS – Pricing';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">
        <header className="py-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Pricing</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Simple, transparent plans that scale with your team.</p>
        </header>

        <section className="max-w-6xl mx-auto px-6 pb-20 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <article key={t.name} className="rounded-2xl border border-border bg-card/50 p-6 flex flex-col">
              <h2 className="text-xl font-semibold">{t.name}</h2>
              <p className="text-3xl font-extrabold mt-2">{t.price}</p>
              <p className="text-sm text-muted-foreground mt-2">{t.desc}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />{f}</li>
                ))}
              </ul>
              <button className="mt-6 h-10 rounded-lg bg-black text-white font-medium">Get started</button>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
