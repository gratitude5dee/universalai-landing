import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Shield, Link2, TrendingUp, ArrowUpRight } from 'lucide-react';
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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const cardX = useSpring(mouseX, springConfig);
  const cardY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    if (hoveredCard === index) {
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated background gradients */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] -translate-x-1/2"
        style={{
          background: 'radial-gradient(circle, hsl(217 91% 60% / 0.1), transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          y: [0, -50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] translate-x-1/2"
        style={{
          background: 'radial-gradient(circle, hsl(38 100% 64% / 0.1), transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          y: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
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
              transition={{ delay: index * 0.15, duration: 0.6 }}
              style={{
                rotateX: hoveredCard === index ? cardY : 0,
                rotateY: hoveredCard === index ? cardX : 0,
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={handleMouseLeave}
              className="relative group cursor-pointer perspective-1000"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`relative h-full rounded-3xl glass-strong border-2 ${feature.borderColor} p-8 overflow-hidden backdrop-blur-xl`}
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-40`}
                  animate={{
                    opacity: hoveredCard === index ? 0.7 : 0.4,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Radial glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${
                      feature.title === 'Ownership'
                        ? 'hsl(217 91% 60% / 0.2)'
                        : feature.title === 'Attribution'
                        ? 'hsl(262 83% 58% / 0.2)'
                        : 'hsl(38 100% 64% / 0.2)'
                    }, transparent 70%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with glow */}
                  <motion.div
                    className="mb-6 relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="absolute inset-0 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: feature.title === 'Ownership'
                          ? 'hsl(217 91% 60% / 0.4)'
                          : feature.title === 'Attribution'
                          ? 'hsl(262 83% 58% / 0.4)'
                          : 'hsl(38 100% 64% / 0.4)',
                      }}
                    />
                    <div
                      className={`relative w-20 h-20 rounded-2xl glass-strong border-2 ${feature.borderColor} flex items-center justify-center group-hover:border-opacity-100 transition-all`}
                    >
                      <feature.icon className={`w-10 h-10 ${feature.iconColor}`} />
                    </div>
                  </motion.div>

                  {/* Title with gradient on hover */}
                  <motion.h3
                    className="text-3xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-foreground/80 group-hover:bg-clip-text group-hover:text-transparent transition-all"
                  >
                    {feature.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>

                  {/* Special content for Monetization card */}
                  {feature.title === 'Monetization' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                      className="mt-8 p-6 rounded-2xl glass border border-accent-amber/30 relative overflow-hidden group/earnings"
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-amber/10 to-transparent"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      
                      <div className="relative z-10">
                        <motion.div
                          className="text-4xl font-bold text-accent-amber mb-2 font-mono"
                          animate={{
                            scale: [1, 1.02, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        >
                          $4,892.47
                        </motion.div>
                        <div className="text-sm text-muted-foreground mb-4">Monthly Earnings</div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <motion.span
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1.5 rounded-full glass border border-accent-amber/30 text-accent-amber text-xs font-medium"
                          >
                            Royalties
                          </motion.span>
                          <motion.span
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1.5 rounded-full glass border border-accent-rose/30 text-accent-rose text-xs font-medium"
                          >
                            Licensing
                          </motion.span>
                          <motion.span
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1.5 rounded-full glass border border-primary/30 text-primary text-xs font-medium"
                          >
                            Tips
                          </motion.span>
                        </div>
                        <p className="text-sm text-muted-foreground italic leading-relaxed">
                          Embed your creative identity anywhere, in your own brand
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Learn more link */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="mt-6 flex items-center gap-2 text-sm font-medium group/link cursor-pointer"
                  >
                    <span className={`${feature.iconColor} group-hover/link:underline`}>
                      Learn more
                    </span>
                    <ArrowUpRight className={`w-4 h-4 ${feature.iconColor} group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform`} />
                  </motion.div>
                </div>

                {/* Animated border gradient on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${
                      feature.title === 'Ownership'
                        ? 'hsl(217 91% 60% / 0.3), transparent'
                        : feature.title === 'Attribution'
                        ? 'hsl(262 83% 58% / 0.3), transparent'
                        : 'hsl(38 100% 64% / 0.3), transparent'
                    })`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltDifferentFeatures;
