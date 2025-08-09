import React, { useState } from 'react';
import LiveWaitlistCounter from '@/components/landing/LiveWaitlistCounter';
import WaitlistModal from '@/components/landing/WaitlistModal';

const Hero: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full border-b" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-primary)' }}>
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:py-28 text-center">
        <h1 className="text-6xl md:text-7xl font-bold tracking-[-0.02em] text-white">MusicOS</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">The OS for music creation. Plan, collaborate, and create your best work.</p>

        <div className="mt-8 flex justify-center items-center gap-4">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2"
            style={{ backgroundColor: 'hsl(var(--lp-blue))', color: 'white' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = 'hsl(var(--lp-blue-hover))')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = 'hsl(var(--lp-blue))')}
            data-cta="primary-hero"
          >
            Get started
          </button>
          <a
            href="/demo"
            className="inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 bg-transparent border border-white/20 text-white hover:bg-white/10"
            data-cta="secondary-hero"
          >
            See demo
          </a>
        </div>

        {/* Live signup metrics */}
        <div className="mt-10 flex justify-center">
          <LiveWaitlistCounter />
        </div>
      </div>

      <WaitlistModal open={open} onOpenChange={setOpen} />
    </section>
  );
};

export default Hero;
