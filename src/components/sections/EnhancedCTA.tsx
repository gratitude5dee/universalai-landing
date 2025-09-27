import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, BookOpen, Users, Building, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';

const EnhancedCTA = () => {
  const breakingModels = [
    "Centralized platforms that extract your value",
    "Biometric surveillance disguised as identity verification", 
    "Human-limited scale in an infinite digital economy",
    "Creative work trapped in corporate-controlled systems"
  ];

  const newModel = [
    "On-chain studios you help govern",
    "Privacy-preserving identity that empowers rather than surveils",
    "Autonomous agents that scale your creativity infinitely",
    "Programmable IP that generates revenue while you sleep"
  ];

  const secondaryActions = [
    {
      icon: Play,
      title: "Experience the 5-minute demo",
      subtitle: "See agent orchestration in action"
    },
    {
      icon: BookOpen,
      title: "Read the complete whitepaper",
      subtitle: "Technical deep dive into 5DEE architecture"
    },
    {
      icon: Users,
      title: "Join our Discord community",
      subtitle: "15,000+ creators building the future"
    },
    {
      icon: Building,
      title: "Tour a 5-Dee Studio virtually",
      subtitle: "Experience physical + digital infrastructure"
    },
    {
      icon: Bot,
      title: "Deploy your first agent free",
      subtitle: "Start with CreativeGenius in 60 seconds"
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Dramatic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-1/4 right-1/4 w-[1000px] h-[800px] bg-primary/15 rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-[800px] h-[600px] bg-secondary/20 rounded-full blur-2xl opacity-40" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[400px] bg-gradient-to-r from-primary/20 to-secondary/15 rounded-full blur-xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main CTA Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl font-bold mb-8">
            The{' '}
            <span className="gradient-text">Agentic Economy</span>
            <br />
            Is Here.{' '}
            <span className="text-primary">Lead It</span>
            {' '}or{' '}
            <span className="text-muted-foreground">Watch It.</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Every minute you wait is creative potential and financial opportunity lost to those already operating in the agentic economy.
          </p>
        </motion.div>

        {/* Breaking vs New Model Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Old Models Breaking */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassmorphicCard className="bg-red-500/5 border-red-500/20 h-full">
              <h3 className="text-3xl font-bold mb-6 text-red-300">The old models are breaking:</h3>
              <div className="space-y-4">
                {breakingModels.map((model, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <div className="text-red-400 text-2xl">❌</div>
                    <p className="text-muted-foreground">{model}</p>
                  </motion.div>
                ))}
              </div>
            </GlassmorphicCard>
          </motion.div>

          {/* New Model */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GlassmorphicCard className="bg-primary/5 border-primary/30 h-full">
              <h3 className="text-3xl font-bold mb-6 text-primary">The new model is here:</h3>
              <div className="space-y-4">
                {newModel.map((model, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <div className="text-primary text-2xl">✅</div>
                    <p className="text-foreground">{model}</p>
                  </motion.div>
                ))}
              </div>
            </GlassmorphicCard>
          </motion.div>
        </div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
          className="text-center mb-12"
        >
          <Button
            size="lg"
            className="text-2xl px-12 py-8 h-auto bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary/80 hover:via-primary/80 hover:to-secondary/80 shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-500 group"
            onClick={() => window.dispatchEvent(new CustomEvent('open-waitlist'))}
          >
            <span className="mr-4">Enter the Agentic Economy</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4 italic">
            Deploy your first agents in 60 seconds
          </p>
        </motion.div>

        {/* Risk Reversal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <GlassmorphicCard className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">30-Day Agentic Economy Guarantee</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 justify-center">
                <span className="text-primary">✅</span>
                <span>Start free, scale when ready</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-primary">✅</span>
                <span>Your data stays private forever</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-primary">✅</span>
                <span>Own your agents and IP permanently</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-primary">✅</span>
                <span>Cancel anytime, keep all assets</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:col-span-2">
                <span className="text-primary">✅</span>
                <span>30-day agentic economy guarantee</span>
              </div>
            </div>
          </GlassmorphicCard>
        </motion.div>

        {/* Secondary Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Explore the Ecosystem</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {secondaryActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group cursor-pointer"
                onClick={() => {
                  // Handle different actions
                  if (action.title.includes("Discord")) {
                    window.open("https://discord.gg/universalai", "_blank");
                  } else if (action.title.includes("demo") || action.title.includes("agent")) {
                    window.dispatchEvent(new CustomEvent('open-waitlist'));
                  }
                }}
              >
                <GlassmorphicCard className="text-center h-full hover:scale-105 transition-all duration-300 hover:border-primary/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary/50 group-hover:to-secondary/40 transition-colors duration-300">
                    <action.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-sm mb-2">{action.title}</h4>
                  <p className="text-xs text-muted-foreground">{action.subtitle}</p>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedCTA;