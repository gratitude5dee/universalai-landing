import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Link2, TrendingUp } from 'lucide-react';
import PillLabel from '@/components/ui/PillLabel';

const features = [
  {
    icon: Shield,
    title: 'Ownership',
    description: 'Full control and sovereignty over your creative work and AI outputs',
    gradient: 'from-secondary/20 to-primary/20',
    iconColor: 'text-secondary',
    borderColor: 'border-secondary/30',
  },
  {
    icon: Link2,
    title: 'Attribution',
    description: 'Transparent, verifiable provenance for all AI-generated content',
    gradient: 'from-primary/20 to-accent-rose/20',
    iconColor: 'text-primary',
    borderColor: 'border-primary/30',
  },
  {
    icon: TrendingUp,
    title: 'Monetization',
    description: 'Direct revenue streams when AI systems use your creative identity',
    gradient: 'from-accent-amber/20 to-accent-rose/20',
    iconColor: 'text-accent-amber',
    borderColor: 'border-accent-amber/30',
  },
];

const BuiltDifferentFeatures = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <PillLabel className="mb-6">Built different</PillLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair italic font-bold mb-6 tracking-tight">
            Embedded creator rights with{' '}
            <span className="bg-gradient-to-r from-primary via-accent-amber to-accent-rose bg-clip-text text-transparent">
              AI-as-a-Protocol
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An open framework for ownership, attribution, and trust in AI-generated content
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative group cursor-pointer`}
            >
              <div
                className={`relative h-full rounded-2xl glass border ${feature.borderColor} p-8 overflow-hidden`}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl glass-strong border ${feature.borderColor} flex items-center justify-center`}
                    >
                      <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                  {/* Special content for Monetization card */}
                  {feature.title === 'Monetization' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="mt-8 p-4 rounded-xl bg-background/50 border border-accent-amber/20"
                    >
                      <div className="text-3xl font-bold text-accent-amber mb-2">$4,892.47</div>
                      <div className="text-sm text-muted-foreground mb-3">Monthly Earnings</div>
                      <div className="flex gap-2 text-xs">
                        <span className="px-2 py-1 rounded-full bg-accent-amber/10 text-accent-amber">
                          Royalties
                        </span>
                        <span className="px-2 py-1 rounded-full bg-accent-rose/10 text-accent-rose">
                          Licensing
                        </span>
                        <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">Tips</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-4 italic">
                        Embed your creative identity anywhere, in your own brand
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${
                      feature.title === 'Ownership'
                        ? 'hsl(217 91% 60% / 0.1)'
                        : feature.title === 'Attribution'
                        ? 'hsl(262 83% 58% / 0.1)'
                        : 'hsl(38 100% 64% / 0.1)'
                    }, transparent 70%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltDifferentFeatures;
