import React from 'react';

const MinimalHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Small technical badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-primary mb-8">
          <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
          <span className="text-xs text-text-secondary">v0.1.0-alpha</span>
        </div>

        {/* Main headline - massive and bold */}
        <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
          The Operating System<br/>
          <span className="text-text-secondary">for Music Creation</span>
        </h1>

        {/* Subheadline - technical and precise */}
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-12 font-medium">
          A developer-grade workspace for music production. Plan, collaborate, and ship with precision.
        </p>

        {/* CTA - minimal and sharp */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group relative overflow-hidden px-8 py-3 bg-white text-black font-semibold">
            <span className="relative z-10">Request Access</span>
            <div className="absolute inset-0 bg-accent-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
          <button className="px-8 py-3 border border-border-primary text-text-secondary hover:text-white hover:border-white transition-colors">
            View Documentation
          </button>
        </div>

        {/* Live metrics bar */}
        <div className="mt-16 flex items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-text-tertiary">Latency</span>
            <span className="text-accent-primary font-mono">12ms</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-text-tertiary">Uptime</span>
            <span className="text-accent-primary font-mono">99.99%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-text-tertiary">Active Sessions</span>
            <span className="text-accent-primary font-mono">2,847</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalHero;
