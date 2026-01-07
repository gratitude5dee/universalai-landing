import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Fingerprint, Globe, Cpu, Music, Coffee, Coins, ArrowRight } from 'lucide-react';
import { ShineBorder } from '@/components/ui/shine-border';

const dimensions = [
  { label: 'SOVEREIGNTY', color: 'from-blue-500 to-cyan-400', icon: '⚡' },
  { label: 'IDENTITY', color: 'from-purple-500 to-pink-400', icon: '🔐' },
  { label: 'IP', color: 'from-amber-500 to-orange-400', icon: '💎' },
  { label: 'PRIVACY', color: 'from-emerald-500 to-teal-400', icon: '🛡️' },
  { label: 'LONGEVITY', color: 'from-rose-500 to-red-400', icon: '∞' },
];

const products = [
  {
    icon: Fingerprint,
    name: 'UniversalAI',
    tagline: 'Universal identity for creators—without biometric surveillance.',
    description: 'Your digital license. Your vote. Your passport.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    icon: Cpu,
    name: 'WZRD.tech',
    tagline: 'Vertical AI agents on x402 and ERC-8004.',
    description: 'WZRD.Studio delivers production-grade creative assets from your pocket.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    icon: Coins,
    name: '$5DEE',
    tagline: 'The digital penny powering autonomous creator commerce.',
    description: 'Micro-transactions for the agentic economy.',
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-500/10 to-orange-500/10',
  },
  {
    icon: Music,
    name: 'EARTONE',
    tagline: 'Distribution as public infrastructure.',
    description: 'Your content, your revenue, forever.',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    icon: Globe,
    name: 'Project Pleiades',
    tagline: 'Interoperable hardware for fashion, media, and physical creator spaces.',
    description: 'Bridging digital and physical creator economies.',
    gradient: 'from-indigo-500 to-violet-500',
    bgGradient: 'from-indigo-500/10 to-violet-500/10',
  },
  {
    icon: Coffee,
    name: 'Fifth Spaces',
    tagline: 'Creator Cafés and studios reimagined.',
    description: 'DePIN for the creative class.',
    gradient: 'from-rose-500 to-red-500',
    bgGradient: 'from-rose-500/10 to-red-500/10',
  },
];

const ManifestoSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="manifesto" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-liquid border border-primary/20 mb-8"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wider">THE 5-DEE MANIFESTO</span>
          </motion.div>

          {/* Five Dimensions - Enhanced Pills */}
          <div ref={ref} className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {dimensions.map((dim, index) => (
              <motion.div
                key={dim.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative"
              >
                <div className={`px-4 py-2 rounded-full glass-liquid border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2`}>
                  <span className="text-base">{dim.icon}</span>
                  <span className={`text-sm sm:text-base font-bold bg-gradient-to-r ${dim.color} bg-clip-text text-transparent`}>
                    {dim.label}
                  </span>
                </div>
              </motion.div>
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

        {/* Declaration Section - Premium Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20 md:mb-28"
        >
        <div className="relative rounded-[2rem] overflow-hidden">
            <ShineBorder 
              shineColor={["hsl(210 100% 50%)", "hsl(280 100% 60%)", "hsl(40 100% 50%)"]} 
              duration={8}
              borderWidth={2}
            />
            <div className="glass-liquid p-8 md:p-12 lg:p-16 rounded-[2rem]">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

              <div className="relative space-y-10">
                {/* We Declare */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-8 rounded-full bg-gradient-to-b from-primary to-accent" />
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      We Declare
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg pl-6">
                    The future belongs to no one—and everyone. Billion-dollar companies will be run by zero people. 
                    AI agents will negotiate your licensing deals at 3 AM. Your creative DNA will generate revenue 
                    across dimensions you haven't imagined yet. <span className="text-primary font-medium">This isn't speculation. This is acceleration.</span>
                  </p>
                </div>

                {/* H/Acc */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-8 rounded-full bg-gradient-to-b from-emerald-400 to-teal-400" />
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      Holistic Acceleration (H/Acc)
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg pl-6">
                    Building autonomous companies that serve public good by design. Treasuries that fund infrastructure. 
                    Revenue that flows to creative public works. Systems optimized for one thing: <span className="text-emerald-400 font-medium">the expansion of human potential.</span>
                  </p>
                </div>

                {/* The Reckoning */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-8 rounded-full bg-gradient-to-b from-rose-400 to-orange-400" />
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      The Reckoning
                    </h3>
                  </div>
                  <div className="pl-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      Technology consolidation is inevitable. M&A will reshape every industry. The post-labor economy 
                      will arrive faster than policymakers can respond. Tech giants will become the new governing forces.
                    </p>
                    <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                      The only question that matters: Will you be owned—or will you own?
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      Original IP. Personal data. Identity verification. These become the new oil, the new gold, the new power. 
                      We're building the vault. We're building the infrastructure. We're building the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Architecture of Freedom - Products Grid */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-foreground">The Architecture of </span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Freedom</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Six pillars powering the creator-sovereign stack
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative h-full rounded-2xl glass-liquid border border-white/5 hover:border-white/10 p-6 transition-all duration-300 overflow-hidden">
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.bgGradient} border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 bg-gradient-to-r ${product.gradient} bg-clip-text`} style={{ color: 'transparent', background: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))`, WebkitBackgroundClip: 'text' }} />
                        <Icon className={`w-6 h-6 text-primary`} />
                      </div>

                      {/* Name */}
                      <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                        {product.name}
                      </h3>

                      {/* Tagline */}
                      <p className={`text-sm mb-3 font-medium bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                        {product.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            The technology to connect and optimize humans via self-sovereign identity, data, and fiscal governance already exists.
          </p>
          <p className="text-xl md:text-2xl font-bold mt-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Now we deploy it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;