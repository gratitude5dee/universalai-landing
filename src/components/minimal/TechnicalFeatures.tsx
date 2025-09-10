import React from 'react';
import { motion } from 'framer-motion';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';

const TechnicalFeatures = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI Agent Marketplace',
      description: 'Deploy intelligent AI agents that automate your creative workflows, manage community engagement, and scale your content production without limits.',
    },
    {
      icon: '🔐',
      title: 'Blockchain IP Protection',
      description: 'Secure your creative assets with immutable blockchain records. Instant copyright protection and verifiable ownership for all your digital creations.',
    },
    {
      icon: '💰',
      title: 'Creator Treasury',
      description: 'Professional-grade financial tools designed for creators. Track revenue, manage royalties, and automate payments across multiple income streams.',
    },
    {
      icon: '🎨',
      title: 'WZRD Studio',
      description: 'AI-enhanced creative studio with advanced tools for content generation, editing, and optimization across all media formats.',
    },
    {
      icon: '🌐',
      title: 'Multi-Platform Distribution',
      description: 'Publish once, distribute everywhere. Seamlessly share your content across 20+ platforms with built-in analytics and performance tracking.',
    },
    {
      icon: '📊',
      title: 'Real-Time Analytics',
      description: 'Data-driven insights that help you understand your audience, optimize content strategy, and maximize engagement across all channels.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Platform Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            From ideation to monetization, we've built the complete toolkit for modern creators
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <GlassmorphicCard className="p-6 lg:p-8 h-full group hover:scale-105 transition-all duration-300 hover:bg-white/5">
                <div className="relative">
                  {/* Top gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary-glow to-accent-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-r from-secondary-glow to-accent-orange flex items-center justify-center mb-6 text-2xl lg:text-3xl">
                    {feature.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg lg:text-xl font-bold mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    {feature.description}
                  </p>
                </div>
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalFeatures;