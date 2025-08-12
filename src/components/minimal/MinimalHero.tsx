import React from 'react';
import LiveWaitlistCounter from '@/components/landing/LiveWaitlistCounter';
interface MinimalHeroProps {
  className?: string;
}
const MinimalHero: React.FC<MinimalHeroProps> = ({
  className = ''
}) => {
  const openWaitlist = () => {
    window.dispatchEvent(new Event('open-waitlist'));
  };
  return <section className={`min-h-[80vh] flex items-center relative ${className}`}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-black" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 w-full relative z-10 py-16 sm:py-20 lg:py-24">
        {/* Left copy */}
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-primary mb-6">
            <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
            <span className="text-xs text-text-secondary">Early Access</span>
          </div>

          <h1 className="font-extrabold tracking-tight leading-[1.05] text-[clamp(2.25rem,6vw,4rem)] mb-4">
            Free your Creativity, and put your music back in your hands.
          </h1>
          <p className="text-base md:text-lg text-text-secondary max-w-xl mb-8">A VIBE-CREATING operating system for musicians, DJ's, comedians, and touring performers.  Organize, plan, and create with hyperproductivity.</p>
          <div className="flex items-center gap-3 flex-wrap my-px py-px mx-[39px] px-[37px]">
            <button onClick={openWaitlist} className="px-5 h-11 rounded-xl text-white font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black bg-violet-950 hover:bg-violet-800">
              Join Waitlist →
            </button>
            <a href="#features" className="text-sm text-text-secondary hover:text-white transition-colors">Learn more</a>
          </div>

        </div>

        {/* Right gradient art card */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] min-h-[320px] lg:min-h-[420px] flex-grow">
            <video className="absolute inset-0 w-full h-full object-cover" src="/videos/unidemo-2.mp4" autoPlay muted loop playsInline aria-hidden="true" />
            <div className="absolute inset-0 opacity-90" style={{
            background: 'radial-gradient(120px 160px at 20% 30%, rgba(106,32,237,0.8), transparent 60%), \
                 radial-gradient(160px 180px at 80% 70%, rgba(168,85,247,0.7), transparent 60%), \
                 radial-gradient(180px 200px at 50% 50%, rgba(236,72,153,0.6), transparent 70%), \
                 radial-gradient(140px 160px at 70% 20%, rgba(245,158,11,0.5), transparent 70%)'
          }} />
            <div className="absolute inset-0 bg-white/10 mix-blend-overlay px-[66px]" />
            <div className="absolute inset-0 border border-white/20 rounded-3xl pointer-events-none" />

            <div className="absolute bottom-4 left-4 py-[127px] my-0 mx-0 px-[170px]">
              <button onClick={() => window.location.href = 'https://app.universal-ai.xyz'} className="rounded-lg bg-black/90 text-white text-sm font-medium hover:bg-black py-[9px] px-[10px] my-0 mx-[45px]">
                Start a Free Trial →
              </button>
            </div>
          </div>
          <div className="mt-4">
            <LiveWaitlistCounter />
          </div>
        </div>
      </div>
    </section>;
};
export default MinimalHero;