import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Users, Database, Lock } from 'lucide-react';

const values = ['Privacy.', 'Identity.', 'IP.', 'Self-Sovereign.', 'Longevity.'];

const manifestoCards = [
  {
    icon: Shield,
    title: 'Holistic Acceleration',
    description: 'Autonomous Companies built for Public Good with Revenue/Treasuries used to build Public Good Infra and fund public projects.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Users,
    title: 'Post-Labour Economy',
    description: 'Tech Companies will monopolize via M&A as the Post-Labour Economy arrives, leading to UBI and government oversight over Tech Giants.',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Database,
    title: 'IP Vault',
    description: 'Original IP, Personal Data will become the data oil for AGI systems; building the IP vault (likeness, voice, preferences, history).',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    icon: Lock,
    title: 'Self-Sovereign Data',
    description: 'Building technology to connect and optimize humans via self-sovereign data governance.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
];

const ManifestoSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="manifesto" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="text-sm font-medium text-primary">5-Dee Manifesto</span>
          </motion.div>

          {/* Animated values */}
          <div ref={ref} className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-12">
            {values.map((value, index) => (
              <motion.span
                key={value}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
              >
                {value}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Exploring and adapting systems and architectures to improve the human bioelectric field.
          </motion.p>
        </div>

        {/* Manifesto cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {manifestoCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
              <div className="relative p-8 rounded-3xl bg-card-dark border border-border/20 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
