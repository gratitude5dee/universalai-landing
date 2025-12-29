import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Briefcase, Shield, Database, ArrowRight } from 'lucide-react';
import { TextAnimate, AnimatedGradientText, FlickeringGrid, ShineBorder } from '@/components/magicui';

const valueWords = ['Privacy', 'Identity', 'IP', 'Self-Sovereign', 'Longevity'];

const manifestoCards = [
  {
    id: '1',
    title: 'Holistic Acceleration',
    description: 'Empowering creators with comprehensive tools for growth, from ideation to monetization.',
    icon: Rocket,
    gradient: 'from-blue-500/20 to-blue-700/20',
    glowColor: 'rgba(59, 130, 246, 0.3)',
    iconGradient: 'from-blue-400 to-blue-600',
  },
  {
    id: '2',
    title: 'Post-Labour Economy',
    description: 'Building the infrastructure for a future where creative passion fuels economic value.',
    icon: Briefcase,
    gradient: 'from-purple-500/20 to-purple-700/20',
    glowColor: 'rgba(147, 51, 234, 0.3)',
    iconGradient: 'from-purple-400 to-purple-600',
  },
  {
    id: '3',
    title: 'IP Vault',
    description: 'Quantum-safe protection for your intellectual property with decentralized security.',
    icon: Shield,
    gradient: 'from-amber-500/20 to-amber-700/20',
    glowColor: 'rgba(255, 181, 71, 0.3)',
    iconGradient: 'from-amber-400 to-amber-600',
  },
  {
    id: '4',
    title: 'Self-Sovereign Data',
    description: 'Complete ownership and control of your data, identity, and digital assets.',
    icon: Database,
    gradient: 'from-emerald-500/20 to-emerald-700/20',
    glowColor: 'rgba(16, 185, 129, 0.3)',
    iconGradient: 'from-emerald-400 to-emerald-600',
  },
];

export const MagicManifestoSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Floating Gradient Orb */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4), transparent)' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
          >
            <AnimatedGradientText
              speed={1.5}
              colorFrom="#FFB547"
              colorTo="#9c40ff"
              className="text-xs font-mono uppercase tracking-wider font-semibold"
            >
              5-Dee Manifesto
            </AnimatedGradientText>
          </motion.div>

          {/* Animated Value Words */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {valueWords.map((word, index) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
                className="group"
              >
                <span className="text-2xl md:text-3xl font-bold text-gradient-warm inline-block px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/30 transition-all duration-300">
                  {word}
                </span>
              </motion.div>
            ))}
          </div>

          <TextAnimate
            animation="fadeIn"
            by="word"
            delay={0.6}
            duration={0.4}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            We're building the foundational infrastructure for creators to thrive in a
            decentralized, self-sovereign economy where creativity is valued above all.
          </TextAnimate>
        </div>

        {/* Manifesto Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {manifestoCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <ShineBorder
                borderWidth={1}
                duration={16}
                shineColor={card.glowColor}
                className="h-full"
              >
                <div
                  className={`relative h-full p-8 rounded-2xl bg-gradient-to-br ${card.gradient} backdrop-blur-sm
                             transition-all duration-500 overflow-hidden group
                             ${hoveredCard === card.id ? 'glow-primary' : ''}`}
                  style={{
                    boxShadow: hoveredCard === card.id ? `0 0 40px ${card.glowColor}` : 'none',
                  }}
                >
                  {/* FlickeringGrid on Hover */}
                  {hoveredCard === card.id && (
                    <div className="absolute inset-0 opacity-20">
                      <FlickeringGrid
                        squareSize={4}
                        gridGap={6}
                        flickerChance={0.4}
                        color={card.glowColor}
                        maxOpacity={0.4}
                      />
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${card.iconGradient} mb-6 transform-gpu transition-transform duration-500 ${hoveredCard === card.id ? 'scale-110 rotate-6' : ''}`}>
                      <card.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">{card.description}</p>

                    {/* Learn More Link */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: hoveredCard === card.id ? 1 : 0,
                        x: hoveredCard === card.id ? 0 : -10,
                      }}
                      className="flex items-center gap-2 text-sm font-medium text-white/80 cursor-pointer group/link"
                    >
                      <span className="group-hover/link:text-white transition-colors">Learn more</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </motion.div>
                  </div>
                </div>
              </ShineBorder>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <a
            href="#products"
            className="inline-flex items-center gap-2 text-lg font-medium text-white/80 hover:text-white transition-colors group"
          >
            <span>Explore Our Products</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
