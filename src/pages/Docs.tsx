import React, { useEffect } from 'react';
import Header from '@/components/landing/Header';
import { Footer } from '@/components/Footer';

const Docs: React.FC = () => {
  useEffect(() => {
    document.title = 'MusicOS – Documentation';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">
        <header className="py-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Documentation</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Learn how to use MusicOS effectively. Setup, guides, and best practices.</p>
        </header>

        <div className="max-w-5xl mx-auto px-6 pb-20 space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
            <p className="text-sm text-muted-foreground">Install, create your first project, and invite collaborators.</p>
            <ul className="list-disc pl-6 mt-4 text-sm text-muted-foreground space-y-1">
              <li>Account creation and sign-in</li>
              <li>Project workspace overview</li>
              <li>Keyboard shortcuts</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Core Concepts</h2>
            <p className="text-sm text-muted-foreground">Understand boards, tasks, UniversalAI, and automations.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">API & Integrations</h2>
            <p className="text-sm text-muted-foreground">Use our SDK and webhooks to extend MusicOS.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Docs;
