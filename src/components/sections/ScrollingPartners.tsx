import React from 'react';
import { motion } from 'framer-motion';
import { Marquee } from '@/components/ui/marquee';
import { ShineBorder } from '@/components/ui/shine-border';

// Partner logos
import fiveDee from '@/assets/partners/5dee-logo.svg';
import anthropic from '@/assets/partners/anthropic-logo.png';
import thirdweb from '@/assets/partners/thirdweb-logo.png';
import elevenlabs from '@/assets/partners/elevenlabs-logo.png';
import storyProtocol from '@/assets/partners/story-protocol-logo.png';
import gq from '@/assets/partners/gq-logo.png';

interface Logo {
  id: string;
  name: string;
  src: string;
  scale?: number;
}

const logos: Logo[] = [
  { id: '1', name: '5DEE Studios', src: fiveDee, scale: 1 },
  { id: '2', name: 'Anthropic', src: anthropic, scale: 1 },
  { id: '3', name: 'Thirdweb', src: thirdweb, scale: 3 },
  { id: '4', name: 'ElevenLabs', src: elevenlabs, scale: 2 },
  { id: '5', name: 'Story Protocol', src: storyProtocol, scale: 1 },
  { id: '6', name: 'GQ', src: gq, scale: 1 },
];

const LogoCard: React.FC<{ logo: Logo }> = ({ logo }) => (
  <div className="group relative mx-8">
    <div 
      className="relative flex items-center justify-center w-36 h-20 rounded-xl glass-liquid border border-border/10 overflow-hidden transition-all duration-300 group-hover:border-primary/30"
      style={{ transform: `scale(${logo.scale || 1})` }}
    >
      <ShineBorder
        shineColor={['#9333ea', '#7c3aed', '#6366f1']}
        borderWidth={1}
        duration={8}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <img 
        src={logo.src} 
        alt={logo.name} 
        className="max-h-10 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      />
    </div>
  </div>
);

const ScrollingPartners: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by Leading Companies
        </p>
      </motion.div>

      {/* Marquee container */}
      <div className="relative">
        <Marquee
          pauseOnHover
          className="[--duration:30s]"
        >
          {logos.map((logo) => (
            <LogoCard key={logo.id} logo={logo} />
          ))}
        </Marquee>

        {/* Gradient fade overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};

export default ScrollingPartners;
