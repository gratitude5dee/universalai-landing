import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Factory, Bot, Gem } from 'lucide-react';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';

const EcosystemPillars = () => {
  const pillars = [
    {
      icon: Brain,
      title: "Verified Digital Identity",
      subtitle: "Your \"Unseen Identity\" - the essence of your consciousness captured without biometric surveillance",
      features: [
        "Privacy-First Verification: Zero-knowledge proofs replace invasive iris scanning",
        "Personality Generation: AI understands your unique cognitive patterns and creative flow",
        "Digital Twin Creation: Realistic avatars with your voice, mannerisms, and creative style",
        "Sybil Resistance: Prove you're human without sacrificing privacy"
      ],
      tech: "human.tech integration, zkTLS, OpenPassport compatibility"
    },
    {
      icon: Factory,
      title: "On-Chain Studios + Physical Spaces",
      subtitle: "Revolutionary infrastructure combining digital and physical production",
      features: [
        "Decentralized Studio Network: Access global network of professional facilities",
        "Smart Contract Bookings: Automated scheduling, payment, and resource allocation",
        "WZRD.studio Integration: Generative AI media studio with XR game engine",
        "Agent-Operated Equipment: Autonomous management of recording, filming, and production gear"
      ],
      tech: "Story Protocol, Agent TCP, Crossmint infrastructure"
    },
    {
      icon: Bot,
      title: "Autonomous Agent Commerce",
      subtitle: "The first true Agent Commerce Protocol (ACP) enabling multi-agent transactions",
      features: [
        "Creator Agents: Generate content, manage social media, handle outreach",
        "Production Agents: Book studios, coordinate shoots, manage logistics",
        "Financial Agents: DeFi trading, yield farming, royalty distribution",
        "IP Agents: Automated licensing, rights management, legal enforcement"
      ],
      tech: "ElizaOS, GOAT SDK, MCP integration"
    },
    {
      icon: Gem,
      title: "Programmable IP & Treasury",
      subtitle: "Blockchain-native intellectual property with autonomous financial management",
      features: [
        "On-Chain IP Registration: Immutable ownership records via Story Protocol",
        "Automated Royalty Distribution: Smart contracts eliminate payment delays",
        "Cross-Chain Asset Management: Solana primary, 40+ EVM chains supported",
        "Agency Scoring: Alternative credit systems based on creative output and reputation"
      ],
      tech: "Solana + Ethereum, Coinbase Smart Wallets, 3Jane.xyz integration"
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-secondary/20 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[300px] bg-primary/15 rounded-full blur-2xl opacity-60" />
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
            Four Pillars of{' '}
            <span className="gradient-text">Creative Sovereignty</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The foundational infrastructure enabling creators to own, operate, and scale their digital empires
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => {
            const isLeftColumn = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  x: isLeftColumn ? -50 : 50,
                  y: 30
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  y: 0
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                <GlassmorphicCard className="h-full group">
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <pillar.icon className="w-6 h-6 text-white" />
                    </motion.div>
                     <div>
                      <h3 className="text-2xl font-bold mb-2">{pillar.title}</h3>
                      <p className="text-muted-foreground text-sm">{pillar.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {pillar.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-foreground leading-relaxed">
                          <strong className="text-primary">{feature.split(':')[0]}:</strong>
                          {feature.split(':').slice(1).join(':')}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="glass-strong rounded-lg p-3 border border-primary/20">
                    <p className="text-xs text-primary font-medium">Technologies: {pillar.tech}</p>
                  </div>
                </GlassmorphicCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EcosystemPillars;