import React, { useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Shield, Link2, TrendingUp, ArrowUpRight } from 'lucide-react';
import PillLabel from '@/components/ui/PillLabel';

const features = [
  {
    icon: Shield,
    title: 'Ownership',
    description: 'Full control and sovereignty over your creative work and AI outputs',
    gradient: 'from-secondary/10 to-secondary/5',
    iconColor: 'text-secondary',
    borderColor: 'border-secondary/20',
    glowColor: 'rgba(0, 200, 200, 0.15)',
  },
  {
    icon: Link2,
    title: 'Attribution',
    description: 'Transparent, verifiable provenance for all AI-generated content',
    gradient: 'from-primary/10 to-primary/5',
    iconColor: 'text-primary',
    borderColor: 'border-primary/20',
    glowColor: 'rgba(138, 92, 246, 0.15)',
  },
  {
    icon: TrendingUp,
    title: 'Monetization',
    description: 'Direct revenue streams when AI systems use your creative identity',
    gradient: 'from-accent-amber/10 to-accent-amber/5',
    iconColor: 'text-accent-amber',
    borderColor: 'border-accent-amber/20',
    glowColor: 'rgba(255, 181, 71, 0.15)',
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
      {/* Warm ambient background */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] -translate-x-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(255, 181, 71, 0.06), transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          y: [0, -50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] translate-x-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(255, 107, 157, 0.06), transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          y: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
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
            <span className="bg-gradient-to-r from-accent-amber via-accent-rose to-primary bg-clip-text text-transparent">
              AI-as-a-Protocol
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An open framework for ownership, attribution, and trust in AI-generated content
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`relative h-full rounded-3xl glass-dark ${feature.borderColor} border p-8 overflow-hidden`}
              >
                {/* Subtle gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-50`}
                  animate={{
                    opacity: hoveredCard === index ? 0.8 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Radial glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${feature.glowColor}, transparent 70%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with glow */}
                  <motion.div
                    className="mb-6 relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div 
                      className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity"
                      style={{ background: feature.glowColor }}
                    />
                    <div
                      className={`relative w-16 h-16 rounded-2xl glass-dark border ${feature.borderColor} flex items-center justify-center group-hover:border-opacity-100 transition-all`}
                    >
                      <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                  {/* Special content for Monetization card */}
                  {feature.title === 'Monetization' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                      className="mt-6 p-5 rounded-2xl glass-dark border border-accent-amber/20 relative overflow-hidden"
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-amber/5 to-transparent"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      
                      <div className="relative z-10">
                        <motion.div
                          className="text-3xl font-bold text-accent-amber mb-1 font-mono"
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
                        <div className="text-xs text-muted-foreground mb-3">Monthly Earnings</div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-2.5 py-1 rounded-full glass-dark border border-accent-amber/20 text-accent-amber text-xs font-medium">
                            Royalties
                          </span>
                          <span className="px-2.5 py-1 rounded-full glass-dark border border-accent-rose/20 text-accent-rose text-xs font-medium">
                            Licensing
                          </span>
                          <span className="px-2.5 py-1 rounded-full glass-dark border border-primary/20 text-primary text-xs font-medium">
                            Tips
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground italic">
                          Embed your creative identity anywhere
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Learn more link */}
                  <motion.div
                    className="mt-6 flex items-center gap-2 text-sm font-medium group/link cursor-pointer"
                  >
                    <span className={`${feature.iconColor} group-hover/link:underline`}>
                      Learn more
                    </span>
                    <ArrowUpRight className={`w-4 h-4 ${feature.iconColor} group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform`} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltDifferentFeatures;