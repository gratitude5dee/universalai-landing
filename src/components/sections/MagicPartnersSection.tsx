import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TextAnimate, AnimatedGradientText, Marquee, NumberTicker } from '@/components/magicui';

// Partner logos
import fiveDee from '@/assets/partners/5dee-logo.svg';
import anthropic from '@/assets/partners/anthropic-logo.png';
import thirdweb from '@/assets/partners/thirdweb-logo.png';
import elevenlabs from '@/assets/partners/elevenlabs-logo.png';
import storyProtocol from '@/assets/partners/story-protocol-logo.png';
import gq from '@/assets/partners/gq-logo.png';

interface Partner {
  id: string;
  name: string;
  src: string;
  scale?: number;
}

const partners: Partner[] = [
  { id: '1', name: '5DEE Studios', src: fiveDee, scale: 1 },
  { id: '2', name: 'Anthropic', src: anthropic, scale: 1 },
  { id: '3', name: 'Thirdweb', src: thirdweb, scale: 3 },
  { id: '4', name: 'ElevenLabs', src: elevenlabs, scale: 2 },
  { id: '5', name: 'Story Protocol', src: storyProtocol, scale: 1 },
  { id: '6', name: 'GQ', src: gq, scale: 1 },
];

const PartnerCard: React.FC<{ partner: Partner }> = ({ partner }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="mx-8 flex items-center justify-center w-40 h-24 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative p-6 rounded-2xl glass-liquid glass-liquid-hover transition-all duration-500 hover:glow-primary">
        <img
          src={partner.src}
          alt={partner.name}
          className="max-h-12 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          style={{ transform: `scale(${partner.scale || 1})` }}
          loading="lazy"
        />
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs text-white/60 font-medium"
          >
            {partner.name}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export const MagicPartnersSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
          >
            <AnimatedGradientText
              speed={1.5}
              colorFrom="#FFB547"
              colorTo="#9c40ff"
              className="text-xs font-mono uppercase tracking-wider font-semibold"
            >
              Our Partners
            </AnimatedGradientText>
          </motion.div>

          <TextAnimate
            animation="blurInUp"
            by="word"
            delay={0.2}
            duration={0.5}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Trusted by Industry Leaders
          </TextAnimate>
        </div>

        {/* Marquee Rows */}
        <div className="space-y-8 mb-16">
          {/* First Row - Moving Right */}
          <div className="relative">
            <Marquee
              pauseOnHover
              duration="30s"
              gap="2rem"
              className="py-4"
            >
              {partners.map((partner) => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </Marquee>

            {/* Gradient Fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
          </div>

          {/* Second Row - Moving Left */}
          <div className="relative">
            <Marquee
              reverse
              pauseOnHover
              duration="35s"
              gap="2rem"
              className="py-4"
            >
              {partners.map((partner) => (
                <PartnerCard key={`reverse-${partner.id}`} partner={partner} />
              ))}
            </Marquee>

            {/* Gradient Fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10">
            <div className="text-4xl font-bold text-white mb-2">
              <NumberTicker value={25} suffix="M+" prefix="$" />
            </div>
            <div className="text-sm text-gray-400">Total Funding</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10">
            <div className="text-4xl font-bold text-white mb-2">
              <NumberTicker value={15} suffix="+" />
            </div>
            <div className="text-sm text-gray-400">Strategic Partners</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10">
            <div className="text-4xl font-bold text-white mb-2">
              <NumberTicker value={150} suffix="+" />
            </div>
            <div className="text-sm text-gray-400">Countries Served</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
