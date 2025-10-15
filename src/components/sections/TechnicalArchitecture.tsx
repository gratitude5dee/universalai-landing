import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Network, DollarSign, Zap, Globe } from 'lucide-react';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';

const TechnicalArchitecture = () => {
  const architectureComponents = [
    {
      icon: Cpu,
      title: "Agent Operating System (ElizaOS)",
      features: [
        "Pluggable Modular Architecture: Agents, actions, providers, evaluators",
        "Agent TCP Protocol: Standardized inter-agent communication", 
        "Multi-Chain Deployment: Solana primary, 40+ EVM chains supported",
        "Real-Time Decision Making: Sub-second response times for market opportunities"
      ]
    },
    {
      icon: Shield,
      title: "Identity Verification Stack",
      features: [
        "human.tech Integration: Privacy-preserving KYC/AML via zero-knowledge proofs",
        "OpenPassport Compatibility: Decentralized passport verification",
        "zkTLS Implementation: On-chain identity without data exposure",
        "Self-Sovereign Architecture: User data stays on personal devices"
      ]
    },
    {
      icon: Network,
      title: "Studio Infrastructure", 
      features: [
        "Physical Space Network: Global studio booking and management system",
        "Smart Contract Automation: Trustless booking, payment, and resource allocation",
        "IoT Integration: Agent-controlled equipment and environmental systems",
        "Production Pipeline: End-to-end creation from concept to distribution"
      ]
    },
    {
      icon: DollarSign,
      title: "Financial Operations",
      features: [
        "Multi-Chain Treasury: Automated asset management across ecosystems",
        "DeFi Agent Suite: Yield farming, arbitrage, lending, predictive markets",
        "Credit Systems: Alternative scoring via 3Jane.xyz integration",
        "Royalty Automation: Instant distribution via programmable smart contracts"
      ]
    }
  ];

  const integrations = [
    {
      category: "Blockchain Infrastructure",
      items: [
        { name: "Solana", desc: "Primary chain for speed and low transaction costs" },
        { name: "Ethereum", desc: "Smart contract deployment and DeFi integrations" },
        { name: "Crossmint", desc: "Seamless wallet experience and embedded services" },
        { name: "Story Protocol", desc: "Programmable IP management and licensing" }
      ]
    },
    {
      category: "AI & Agent Frameworks",
      items: [
        { name: "GOAT SDK", desc: "On-chain agent toolkit for 30+ blockchain protocols" },
        { name: "Model Context Protocol (MCP)", desc: "Secure external data access for agents" },
        { name: "Pipecat", desc: "Real-time voice and multimodal AI application framework" },
        { name: "Tavus", desc: "Digital twin creation with voice cloning and lip-sync" }
      ]
    },
    {
      category: "Creative Production",
      items: [
        { name: "WZRD.studio", desc: "Generative AI media studio with XR game engine" },
        { name: "Earthone", desc: "OS Magazine + Netflix + Steam for creator content" },
        { name: "Voice Companions", desc: "AI-powered personality interactions" },
        { name: "Physical Studios", desc: "Global network of professional production facilities" }
      ]
    },
    {
      category: "Financial Services",
      items: [
        { name: "3Jane.xyz", desc: "Decentralized credit lines based on verifiable assets" },
        { name: "Coinbase Smart Wallets", desc: "Gasless transactions and simplified onboarding" },
        { name: "Thirdweb", desc: "Web3 development tools and smart wallet infrastructure" },
        { name: "DeFi Protocols", desc: "Automated trading, lending, and yield optimization" }
      ]
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-secondary/10 rounded-full blur-2xl opacity-40" />
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
          <h2 className="font-display text-4xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Technical{' '}
            <span className="italic font-medium gradient-text">Architecture</span>
          </h2>
          <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade infrastructure powering the next generation of creative commerce
          </p>
        </motion.div>

        {/* Core Infrastructure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="font-display text-3xl font-bold text-center mb-12 tracking-tight">Core Infrastructure</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {architectureComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassmorphicCard className="h-full group">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center relative"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <component.icon className="w-6 h-6 text-white" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    </motion.div>
                    <h4 className="text-xl font-bold">{component.title}</h4>
                  </div>
                  <div className="space-y-3">
                    {component.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          <span className="text-primary font-medium">{feature.split(':')[0]}:</span>
                          {feature.split(':').slice(1).join(':')}
                        </p>
                      </div>
                    ))}
                  </div>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integrations & Ecosystem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="font-display text-3xl font-bold text-center mb-12 tracking-tight">Integrations & Ecosystem</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {integrations.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <GlassmorphicCard>
                  <h4 className="text-2xl font-bold mb-6 text-primary">{section.category}</h4>
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <motion.div 
                        key={itemIndex} 
                        className="flex items-start gap-3 group/item cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * itemIndex }}
                        whileHover={{ x: 4 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.2 }}
                        />
                        <div>
                          <span className="font-medium text-foreground group-hover/item:text-primary transition-colors duration-200">{item.name}:</span>
                          <span className="text-muted-foreground text-sm ml-1">{item.desc}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <GlassmorphicCard className="max-w-4xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-center mb-8 tracking-tight">Performance & Scale</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">&lt; 100ms</div>
                <div className="text-xs text-muted-foreground">Agent Response Time</div>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">40+</div>
                <div className="text-xs text-muted-foreground">Blockchain Networks</div>
              </div>
              <div className="text-center">
                <Network className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-xs text-muted-foreground">Network Uptime</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">Zero</div>
                <div className="text-xs text-muted-foreground">Data Breaches</div>
              </div>
            </div>
          </GlassmorphicCard>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalArchitecture;