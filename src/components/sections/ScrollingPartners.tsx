import React from 'react';
import { motion } from 'framer-motion';

// Partner logos
import fiveDee from '@/assets/partners/5dee-logo.svg';
import anthropic from '@/assets/partners/anthropic-logo.png';
import thirdweb from '@/assets/partners/thirdweb-logo.png';
import elevenlabs from '@/assets/partners/elevenlabs-logo.png';
import storyProtocol from '@/assets/partners/story-protocol-logo.png';
import humanTech from '@/assets/partners/human-tech-logo.png';

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
  { id: '6', name: 'Human.tech', src: humanTech, scale: 1.5 },
];

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
          Built in Partnership With
        </p>
      </motion.div>

      {/* Scrolling container */}
      <div className="relative">
        <div className="flex overflow-hidden" style={{ '--duration': '20s' } as React.CSSProperties}>
          {/* Animated container with three sets of logos */}
          <div className="flex shrink-0 animate-marquee">
            {/* Generate three identical sets for seamless loop */}
            {[...Array(3)].map((_, setIndex) => (
              <div key={`set-${setIndex}`} className="flex shrink-0">
                {logos.map((logo) => (
                  <div 
                    key={`${setIndex}-${logo.id}`} 
                    className="mx-12 flex items-center justify-center w-32 h-16"
                    style={{ transform: `scale(${logo.scale || 1})` }}
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className="max-h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Gradient fade overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};

export default ScrollingPartners;
