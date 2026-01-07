import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Users, Database, Lock, Fingerprint, Globe, Cpu, Music, Coffee, Coins } from 'lucide-react';

const dimensions = [
  { label: 'SOVEREIGNTY', color: 'from-blue-500 to-cyan-500' },
  { label: 'IDENTITY', color: 'from-purple-500 to-pink-500' },
  { label: 'IP', color: 'from-amber-500 to-orange-500' },
  { label: 'PRIVACY', color: 'from-emerald-500 to-teal-500' },
  { label: 'LONGEVITY', color: 'from-rose-500 to-red-500' },
];

const products = [
  {
    icon: Fingerprint,
    name: 'UniversalAI',
    tagline: 'Universal identity for creators—without biometric surveillance.',
    description: 'Your digital license. Your vote. Your passport.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Cpu,
    name: 'WZRD.tech',
    tagline: 'Vertical AI agents on x402 and ERC-8004.',
    description: 'WZRD.Studio delivers production-grade creative assets from your pocket.',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Coins,
    name: '$5DEE',
    tagline: 'The digital penny powering autonomous creator commerce.',
    description: 'Micro-transactions for the agentic economy.',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    icon: Music,
    name: 'EARTONE',
    tagline: 'Distribution as public infrastructure.',
    description: 'Your content, your revenue, forever.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    icon: Globe,
    name: 'Project Pleiades',
    tagline: 'Interoperable hardware for fashion, media, and physical creator spaces.',
    description: 'Bridging digital and physical creator economies.',
    gradient: 'from-indigo-500/20 to-violet-500/20',
  },
  {
    icon: Coffee,
    name: 'Fifth Spaces',
    tagline: 'Creator Cafés and studios reimagined.',
    description: 'DePIN for the creative class.',
    gradient: 'from-rose-500/20 to-red-500/20',
  },
];

const ManifestoSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="manifesto" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">THE 5-DEE MANIFESTO</span>
          </motion.div>

          {/* Five Dimensions */}
          <div ref={ref} className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12">
            {dimensions.map((dim, index) => (
              <motion.span
                key={dim.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${dim.color} bg-clip-text text-transparent`}
              >
                {dim.label}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            The five dimensions of human freedom in the autonomous age.
          </motion.p>
        </div>

        {/* Declaration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="glass-liquid rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="relative space-y-10">
              {/* We Declare */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  We Declare
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  The future belongs to no one—and everyone. Billion-dollar companies will be run by zero people. 
                  AI agents will negotiate your licensing deals at 3 AM. Your creative DNA will generate revenue 
                  across dimensions you haven't imagined yet. This isn't speculation. This is acceleration.
                </p>
              </div>

              {/* H/Acc */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Holistic Acceleration (H/Acc)
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  Building autonomous companies that serve public good by design. Treasuries that fund infrastructure. 
                  Revenue that flows to creative public works. Systems optimized for one thing: the expansion of human potential.
                </p>
              </div>

              {/* The Reckoning */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                  The Reckoning
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
                  Technology consolidation is inevitable. M&A will reshape every industry. The post-labor economy 
                  will arrive faster than policymakers can respond. Tech giants will become the new governing forces.
                </p>
                <p className="text-foreground font-semibold text-lg md:text-xl mb-4">
                  The only question that matters: Will you be owned—or will you own?
                </p>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  Original IP. Personal data. Identity verification. These become the new oil, the new gold, the new power. 
                  We're building the vault. We're building the infrastructure. We're building the future.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Architecture of Freedom - Products Grid */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-center mb-12"
          >
            <span className="text-foreground">The Architecture of</span>{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Freedom</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 rounded-[1.5rem] bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                  {/* Card */}
                  <div className="glass-liquid glass-liquid-hover relative p-6 rounded-[1.5rem] h-full transition-all duration-300">
                    {/* Inner reflection */}
                    <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />

                    {/* Icon */}
                    <div className="relative w-12 h-12 rounded-xl glass-liquid flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm text-primary/80 mb-3 font-medium">
                      {product.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          The technology to connect and optimize humans via self-sovereign identity, data, and fiscal governance already exists.{' '}
          <span className="text-primary font-semibold">Now we deploy it.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default ManifestoSection;
