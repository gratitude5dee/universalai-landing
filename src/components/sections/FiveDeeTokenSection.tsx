import React from 'react';
import { motion } from 'framer-motion';
import { Coins, TrendingUp, Lock, Zap } from 'lucide-react';

const stats = [
  { label: 'Symbol', value: '$5DEE', icon: Coins },
  { label: 'Total Supply', value: '100M', icon: TrendingUp },
  { label: 'Launch Type', value: 'Fair', icon: Lock },
];

const FiveDeeTokenSection: React.FC = () => {
  return (
    <section id="token" className="py-32 relative overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        {/* Warm ambient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/20 blur-[100px]"
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Token Economics</span>
          </motion.div>

          {/* Giant token symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <h2 className="text-7xl md:text-9xl lg:text-[12rem] font-black bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent leading-none">
              $5DEE
            </h2>
          </motion.div>

          {/* Taglines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-2 mb-8"
          >
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              The Digital Penny
            </p>
            <p className="text-xl text-primary font-medium">
              Earn it. Sign for it. Build with it.
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground mb-16 max-w-xl mx-auto"
          >
            Financial rails for the creator-agent economy. Powering autonomous transactions, creator royalties, and public goods funding.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <div className="relative p-8 rounded-3xl bg-card-dark border border-border/20 backdrop-blur-sm hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {stat.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FiveDeeTokenSection;
