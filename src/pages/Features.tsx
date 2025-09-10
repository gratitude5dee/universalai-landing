import React, { useEffect } from 'react';
import Header from '@/components/landing/Header';
import { Footer } from '@/components/Footer';

const Features: React.FC = () => {
  useEffect(() => {
    document.title = 'MusicOS – Features | Engineered for Tomorrow';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">
        <section className="py-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Features</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">All the essentials to plan, collaborate, and ship your music projects with precision.</p>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-20 grid gap-6 md:grid-cols-3">
          {[
            { title: 'Advanced Management', desc: 'Powerful tools to organize projects, UniversalAI, and collaborators without friction.' },
            { title: 'Acceleration', desc: 'Optimized workflows to move faster with less context switching and better focus.' },
            { title: 'Monitoring', desc: 'Real-time insights across your work so you can stay in control and on track.' },
            { title: 'AI Assistance', desc: 'Let AI help with drafting, organizing, and summarizing—all within your flow.' },
            { title: 'Integrations', desc: 'Connect your favorite tools to keep everything in sync and up-to-date.' },
            { title: 'Security', desc: 'Granular access controls and audit trails to protect your work.' },
          ].map((f) => (
            <article key={f.title} className="rounded-2xl border border-border bg-card/50 p-6 hover:translate-y-[-2px] transition-transform">
              <h2 className="text-xl font-semibold mb-2">{f.title}</h2>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
              <a href="#" className="mt-4 inline-flex text-sm underline underline-offset-4">Read more</a>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
