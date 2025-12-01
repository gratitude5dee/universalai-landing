import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Network, FileHeart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tools = [
  {
    icon: Shield,
    title: 'Creator Shield',
    description: 'Preserving Proof of Creation for independent artists',
    image: 'ethereal-protective-dome',
    gradient: 'from-primary/20 to-secondary/20',
    cta: 'Learn more',
  },
  {
    icon: Network,
    title: 'Relay Attribution',
    description: 'Decentralized attribution empowering creators with data control',
    image: 'magical-light',
    gradient: 'from-accent-rose/20 to-accent-amber/20',
    cta: 'Learn more',
  },
  {
    icon: FileHeart,
    title: 'The Creator Covenant',
    description: 'Embedded ethics by creators, for creators',
    image: 'crystalline-landscape',
    gradient: 'from-accent-amber/20 to-primary/20',
    cta: "Let's begin",
  },
];

const ToolsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair italic font-bold tracking-tight leading-tight max-w-4xl mx-auto">
            Tools built for creators.
            <br />
            <span className="bg-gradient-to-r from-primary via-accent-amber to-accent-rose bg-clip-text text-transparent">
              Powered by values.
            </span>
            <br />
            Protected by design.
          </h2>
        </motion.div>

        {/* Product Cards - Horizontal carousel */}
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.03, y: -10 }}
                className="flex-shrink-0 w-[380px] snap-center group cursor-pointer"
              >
                <div className="relative h-full rounded-2xl overflow-hidden glass border border-primary/20">
                  {/* Image placeholder with gradient */}
                  <div className={`relative h-64 bg-gradient-to-br ${tool.gradient} overflow-hidden`}>
                    {/* Animated ethereal effect */}
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.3), transparent 60%)`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />

                    {/* Icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl glass-strong border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <tool.icon className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{tool.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{tool.description}</p>

                    <Button
                      variant="outline"
                      className="w-full border-primary/30 hover:border-primary/50 group/btn"
                    >
                      {tool.cta}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.1), transparent 60%)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient fade on right edge */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ToolsSection;
