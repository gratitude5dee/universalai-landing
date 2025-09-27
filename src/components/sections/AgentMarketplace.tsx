import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Building, Shield, TrendingUp, Scale } from 'lucide-react';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';

const AgentMarketplace = () => {
  const agents = [
    {
      icon: Sparkles,
      name: "CreativeGenius Agent",
      subtitle: "Your 24/7 Creative Director",
      capabilities: [
        "Generates campaign concepts matching your aesthetic DNA",
        "Writes in your voice across all platforms and mediums",
        "Creates visual assets from sketches to finished productions"
      ],
      integration: "WZRD.studio, Earthone OS, voice companion technology",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Building,
      name: "StudioMaster Agent",
      subtitle: "Your Production Coordinator",
      capabilities: [
        "Books on-chain studios and physical spaces automatically",
        "Coordinates equipment, crew, and resource allocation",
        "Manages production timelines and budget optimization"
      ],
      integration: "Smart contract booking system, IoT studio equipment",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      name: "IdentityGuardian Agent",
      subtitle: "Your Privacy & Security Specialist",
      capabilities: [
        "Manages zero-knowledge identity verification",
        "Protects against Sybil attacks and bot infiltration",
        "Maintains your \"Unseen Identity\" profile securely"
      ],
      integration: "human.tech protocols, zkTLS verification",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      name: "TreasuryMaster Agent",
      subtitle: "Your Autonomous Financial Operations",
      capabilities: [
        "Executes DeFi strategies: yield farming, arbitrage, lending",
        "Manages multi-chain asset portfolio automatically",
        "Optimizes royalty distribution and tax efficiency"
      ],
      integration: "3Jane.xyz credit lines, cross-chain bridges",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Scale,
      name: "IPEnforcer Agent",
      subtitle: "Your Rights Management Specialist",
      capabilities: [
        "Monitors unauthorized use of your creative works",
        "Automatically issues takedown notices and licensing offers",
        "Negotiates usage rights and revenue sharing agreements"
      ],
      integration: "Story Protocol, legal enforcement networks",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[300px] bg-primary/15 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-2xl opacity-40" />
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
            Deploy Your{' '}
            <span className="gradient-text">Creative Army</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized AI agents that work 24/7 to scale your creative empire while you focus on what you do best
          </p>
        </motion.div>

        {/* Agents Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className={index === 4 ? "md:col-span-2 xl:col-span-1" : ""}
            >
              <GlassmorphicCard className="h-full hover:scale-105 transition-transform duration-300">
                {/* Agent Header */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${agent.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                    <agent.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${agent.color} rounded-full blur-sm opacity-60 animate-pulse`} />
                  
                  <h3 className="text-2xl font-bold mb-2">{agent.name}</h3>
                  <p className="text-primary text-sm italic">{agent.subtitle}</p>
                </div>

                {/* Capabilities */}
                <div className="space-y-3 mb-6">
                  {agent.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{capability}</p>
                    </div>
                  ))}
                </div>

                {/* Integration Badge */}
                <div className="glass-strong rounded-lg p-3 border border-primary/20">
                  <p className="text-xs text-primary font-medium">
                    <span className="text-foreground">Integration:</span> {agent.integration}
                  </p>
                </div>

                {/* Floating Elements */}
                <div className={`absolute -z-10 top-4 right-4 w-20 h-20 bg-gradient-to-br ${agent.color} rounded-full blur-2xl opacity-20`} />
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <GlassmorphicCard className="max-w-2xl mx-auto">
            <p className="text-lg mb-6">
              Mix and match agents to create your perfect creative operations team
            </p>
            <div className="glass border border-primary/30 rounded-full px-6 py-3 inline-flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-medium">50K+ Agents Currently Deployed</span>
            </div>
          </GlassmorphicCard>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentMarketplace;