import React from 'react';
import { Layers, Terminal, ChartBar } from 'lucide-react';

const itemCls = 'rounded-lg border border-border p-6 hover:bg-white/5 transition-colors';

const TechnicalFeatures = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={itemCls}>
            <Layers className="w-5 h-5 text-foreground/70" />
            <h3 className="mt-4 text-lg font-medium">Structured Projects</h3>
            <p className="mt-2 text-sm text-muted-foreground">A rigid, modular system for briefs, tasks, assets, and reviews.</p>
          </div>
          <div className={itemCls}>
            <Terminal className="w-5 h-5 text-foreground/70" />
            <h3 className="mt-4 text-lg font-medium">Developer‑grade UX</h3>
            <p className="mt-2 text-sm text-muted-foreground">Keyboard‑first, clean UI, and a predictable interaction model.</p>
          </div>
          <div className={itemCls}>
            <ChartBar className="w-5 h-5 text-foreground/70" />
            <h3 className="mt-4 text-lg font-medium">Operational Metrics</h3>
            <p className="mt-2 text-sm text-muted-foreground">Latency, throughput, and delivery KPIs at a glance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalFeatures;
