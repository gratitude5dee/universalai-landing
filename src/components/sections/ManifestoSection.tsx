import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Users, Database, Lock } from 'lucide-react';
import { TextAnimate } from '@/components/ui/text-animate';
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text';
import { ShineBorder } from '@/components/ui/shine-border';
import { FlickeringGrid } from '@/components/ui/flickering-grid';

const values = ['Privacy.', 'Identity.', 'IP.', 'Self-Sovereign.', 'Longevity.'];

const manifestoCards = [
  {
    icon: Shield,
    title: 'Holistic Acceleration',
    description: 'Autonomous Companies built for Public Good with Revenue/Treasuries used to build Public Good Infra and fund public projects.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    shineColors: ['#3b82f6', '#06b6d4', '#0ea5e9'],
  },
  {
    icon: Users,
    title: 'Post-Labour Economy',
    description: 'Tech Companies will monopolize via M&A as the Post-Labour Economy arrives, leading to UBI and government oversight over Tech Giants.',
    gradient: 'from-purple-500/20 to-pink-500/20',
    shineColors: ['#9333ea', '#ec4899', '#a855f7'],
  },
  {
    icon: Database,
    title: 'IP Vault',
    description: 'Original IP, Personal Data will become the data oil for AGI systems; building the IP vault (likeness, voice, preferences, history).',
    gradient: 'from-amber-500/20 to-orange-500/20',
    shineColors: ['#f59e0b', '#f97316', '#fbbf24'],
  },
  {
    icon: Lock,
    title: 'Self-Sovereign Data',
    description: 'Building technology to connect and optimize humans via self-sovereign data governance.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    shineColors: ['#10b981', '#14b8a6', '#34d399'],
  },
];

const ManifestoSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="manifesto" className="py-32 relative overflow-hidden">
      {/* Flickering Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <FlickeringGrid
          color="hsl(var(--primary))"
          maxOpacity={0.05}
          flickerChance={0.1}
          squareSize={4}
          gridGap={8}
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
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

          {/* Animated values with blur effect */}
          <div ref={ref} className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-12">
            {values.map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <AnimatedGradientText
                  speed={2}
                  colorFrom={index % 2 === 0 ? '#9333ea' : '#f97316'}
                  colorTo={index % 2 === 0 ? '#ec4899' : '#eab308'}
                  className="text-2xl md:text-4xl lg:text-5xl font-bold"
                >
                  {value}
                </AnimatedGradientText>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Exploring and adapting systems and architectures to improve the human bioelectric field.
            </TextAnimate>
          </motion.div>
        </div>

        {/* Manifesto cards with ShineBorder */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {manifestoCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 rounded-[2rem] bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`} />
              
              {/* Card with ShineBorder */}
              <div className="glass-liquid glass-liquid-hover relative p-8 rounded-[2rem] transition-all duration-500 overflow-hidden">
                <ShineBorder
                  shineColor={card.shineColors}
                  borderWidth={1}
                  duration={10}
                />
                
                {/* Inner light reflection */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
                
                {/* Icon container with glass effect */}
                <div className="relative w-16 h-16 rounded-2xl glass-liquid flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent" />
                  <card.icon className="relative w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
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
