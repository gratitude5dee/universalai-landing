import React from 'react';
import LiveWaitlistCounter from '@/components/landing/LiveWaitlistCounter';
import { AspectRatio } from '@/components/ui/aspect-ratio';
const MinimalHero = () => {
  const openWaitlist = () => {
    window.dispatchEvent(new Event('open-waitlist'));
  };
  return <section className="min-h-[80vh] flex items-center relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 w-full relative z-10 py-16 sm:py-20 lg:py-24">
        {/* Left copy */}
        <div className="lg:col-span-5 xl:col-span-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-primary mb-6">
            <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
            <span className="text-xs text-text-secondary">Early Access</span>
          </div>

          <h1 className="font-extrabold tracking-tight leading-[1.05] text-[clamp(2.25rem,6vw,4rem)] mb-4">
            Free your Creativity, and put your music back in your hands.
          </h1>
          <p className="text-base md:text-lg text-text-secondary max-w-xl mb-8">A VIBE-CREATING operating system for musicians, DJ's, comedians, and touring performers.  Organize, plan, and create with hyperproductivity.</p>
          <div className="flex items-center gap-3 flex-wrap">
            <button onClick={openWaitlist} className="px-5 h-11 rounded-xl text-white font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black bg-violet-950 hover:bg-violet-800">
              Join Waitlist →
            </button>
            <a href="#features" className="text-sm text-text-secondary hover:text-white transition-colors">Learn more</a>
          </div>

        </div>

        {/* Right media card with hover CTA */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] bg-black">
            <AspectRatio ratio={9/16}>
              <div className="relative w-full h-full">
                <video
                  className="w-full h-full object-contain"
                  src="/videos/unidemo-2.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label="UniversalAI product demo"
                />
                {/* dark gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                {/* Hover CTA (mobile visible, desktop on hover) */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-end p-4 sm:p-6 pointer-events-none">
                  <button
                    onClick={() => (window.location.href = 'https://app.universal-ai.xyz')}
                    className="pointer-events-auto opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 rounded-full bg-white/10 backdrop-blur-md text-white text-sm md:text-base font-semibold hover:bg-white/20 px-5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                    aria-label="Start a Free Trial"
                  >
                    Start a Free Trial →
                  </button>
                </div>
              </div>
            </AspectRatio>
          </div>
          <div className="mt-4">
            <LiveWaitlistCounter />
          </div>
        </div>
      </div>
    </section>;
};
export default MinimalHero;