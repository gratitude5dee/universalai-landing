import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Shield, Infinity, TrendingUp, Network } from 'lucide-react';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';

const AgenticAdvantage = () => {
  const advantages = [
    {
      icon: Crown,
      title: "Infrastructure Ownership",
      description: "While others build apps, we built the rails. Your agents operate on infrastructure you help govern through DAO participation. No platform risk, no algorithmic manipulation.",
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      icon: Shield,
      title: "Privacy-First Verification", 
      description: "Prove your humanity without surveillance. Our zero-knowledge approach respects your privacy while enabling trust in the agentic economy.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Infinity,
      title: "Physical + Digital Sovereignty",
      description: "Control both digital assets and physical production capabilities. Your creative empire spans virtual and real-world infrastructure.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Autonomous Wealth Creation",
      description: "Your agents work while you sleep, dream, and create. Generate revenue through 24/7 operations across global markets and time zones.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Network,
      title: "Network Effects at Scale",
      description: "Every agent improves the ecosystem. Every creator strengthens the network. Every success multiplies opportunities for all participants.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[600px] bg-primary/8 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[400px] bg-secondary/12 rounded-full blur-2xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            The{' '}
            <span className="gradient-text">Agentic Advantage</span>
          </h2>
          <h3 className="text-2xl lg:text-3xl font-semibold mb-8 text-primary">
            Why 5DEE Defines the Future
          </h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We're not just creating tools for creators—we're architecting the foundational infrastructure for humanity's transition to the agentic economy
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className={index === 4 ? "lg:col-span-2 xl:col-span-1" : ""}
            >
              <GlassmorphicCard className="h-full relative group hover:scale-105 transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${advantage.gradient} rounded-2xl flex items-center justify-center mb-6 relative`}>
                  <advantage.icon className="w-8 h-8 text-white" />
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient} rounded-2xl blur-lg opacity-40 -z-10 group-hover:opacity-60 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>

                {/* Floating accent */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${advantage.gradient} rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center"
        >
          <GlassmorphicCard className="max-w-5xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-secondary to-primary animate-pulse" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-8 text-primary">
                The Infrastructure Revolution
              </h3>
              
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                  <div className="text-sm text-muted-foreground">Creators Already Scaling</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">$2.3M+</div>
                  <div className="text-sm text-muted-foreground">Autonomous Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">47</div>
                  <div className="text-sm text-muted-foreground">Global Studio Locations</div>
                </div>
              </div>

              <blockquote className="text-xl lg:text-2xl italic text-foreground leading-relaxed mb-8">
                "Every minute spent in the old creative economy is creative potential and financial opportunity lost to those already operating in the agentic economy."
              </blockquote>

              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                  The transition is happening now. Traditional platforms extract value while we amplify human potential through autonomous intelligence.
                </p>
                <p className="text-primary font-medium">
                  The question isn't whether the agentic economy will dominate creative industries—it's whether you'll lead it or watch it.
                </p>
              </div>
            </div>
          </GlassmorphicCard>
        </motion.div>
      </div>
    </section>
  );
};

export default AgenticAdvantage;