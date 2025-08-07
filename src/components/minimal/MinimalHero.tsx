import React, { useState } from 'react';
import ProfessionalCTA from './ProfessionalCTA';
import WaitlistModal from '@/components/landing/WaitlistModal';
import LiveWaitlistCounter from '@/components/landing/LiveWaitlistCounter';

const MinimalHero = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">MusicOS</h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          A technical workspace for creative teams. Plan, collaborate, and ship with precision.
        </p>
        <div className="mt-8 flex flex-col items-center gap-6">
          <ProfessionalCTA onClick={() => setOpen(true)} />
          <LiveWaitlistCounter />
        </div>
      </div>
      <WaitlistModal open={open} onOpenChange={setOpen} />
    </section>
  );
};

export default MinimalHero;
