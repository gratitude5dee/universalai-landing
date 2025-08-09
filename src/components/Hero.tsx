import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full" style={{ backgroundColor: 'hsl(var(--lp-bg))', color: 'hsl(var(--lp-text))' }}>
      <div className="mx-auto grid max-w-[1280px] grid-cols-12 gap-6 px-6 py-20 md:py-24 lg:py-28">
        {/* Left */}
        <div className="col-span-12 lg:col-span-6">
          <h1 className="font-bold leading-tight tracking-[-0.02em]" style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}>
            Engineered for the Demands of Tomorrow
          </h1>
          <p className="mt-4 max-w-prose text-[hsl(var(--lp-muted))]">Build, operate, and scale your creative workflows with precision. Designed for teams who value speed, reliability, and clarity.</p>
        </div>
        {/* Right: Gradient Art Card */}
        <div className="col-span-12 lg:col-span-6">
          <div className="relative overflow-hidden rounded-3xl border" style={{ borderColor: 'hsl(var(--lp-card-border))', background: 'transparent' }}>
            {/* Gradient field */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  `radial-gradient(40% 60% at 20% 20%, hsl(var(--lp-accent-1)) 0%, transparent 60%),
                   radial-gradient(35% 55% at 80% 30%, hsl(var(--lp-accent-2)) 0%, transparent 60%),
                   radial-gradient(45% 65% at 50% 80%, hsl(var(--lp-accent-3)) 0%, transparent 60%),
                   radial-gradient(25% 45% at 90% 90%, hsl(var(--lp-accent-4)) 0%, transparent 60%)`,
                filter: 'blur(60px) saturate(1.2)',
                opacity: 0.9,
                mixBlendMode: 'normal',
              }}
            />
            {/* Glass overlay */}
            <div aria-hidden className="absolute inset-0" style={{ background: 'hsl(var(--lp-glass-overlay))' }} />
            {/* Aspect */}
            <div className="relative aspect-[4/3]" />

            {/* CTA bottom-left */}
            <div className="pointer-events-auto absolute bottom-4 left-4">
              <a
                href="#start-trial"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2"
                style={{ backgroundColor: 'hsl(var(--lp-cta-bg))', color: 'white' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'hsl(var(--lp-cta-hover))')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'hsl(var(--lp-cta-bg))')}
              >
                Start a Free Trial
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
