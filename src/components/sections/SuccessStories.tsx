import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Music, Palette } from 'lucide-react';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';

const SuccessStories = () => {
  const stories = [
    {
      icon: Palette,
      name: "Sarah Chen",
      role: "Digital Artist",
      quote: "From $500/month to $50K/month through agent orchestration",
      story: "My IdentityGuardian agent verified my humanity without compromising privacy. My CreativeGenius generates 100+ concepts daily while my StudioMaster books physical spaces for shoots. My TreasuryMaster turned my $5K savings into a $200K portfolio through automated DeFi strategies. Last month: $50K revenue, 3 brand partnerships, 2 gallery shows—all coordinated by my agent army.",
      results: [
        { metric: "10,000%", label: "revenue increase in 8 months" },
        { metric: "6-figure", label: "DeFi portfolio from automated trading" },
        { metric: "47", label: "brand partnerships secured autonomously" },
        { metric: "Zero", label: "privacy compromise through zkProofs" }
      ],
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: Music,
      name: "Marcus Rodriguez", 
      role: "Music Producer",
      quote: "My agents produced, marketed, and distributed my entire album",
      story: "I uploaded my 'Unseen Identity' and gave my agents creative direction. They booked studios across 3 cities, coordinated with session musicians, handled all social media, negotiated streaming deals, and even arranged my tour logistics. The album hit #2 on indie charts while I focused purely on the music.",
      results: [
        { metric: "#2", label: "indie album with 2M+ streams" },
        { metric: "$75K", label: "in automated royalty distribution" },
        { metric: "15-city", label: "tour coordinated by agents" },
        { metric: "90%", label: "time savings on non-creative tasks" }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      name: "Lisa Zhang",
      role: "Content Creator Empire", 
      quote: "Built a $1M creative business with 12 agents",
      story: "My agent ecosystem runs 6 different content brands across TikTok, YouTube, Instagram, and Twitch. While I sleep, they're creating content, engaging audiences, securing sponsorships, and managing my treasury. I hit $1M annual revenue with a team of zero humans—just me and my intelligent agents.",
      results: [
        { metric: "$1M+", label: "annual revenue stream" },
        { metric: "6", label: "autonomous content brands" },
        { metric: "500K+", label: "followers across platforms" },
        { metric: "24/7", label: "operations with zero burnout" }
      ],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[350px] bg-secondary/15 rounded-full blur-2xl opacity-50" />
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
            Success{' '}
            <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real creators scaling their empires through autonomous intelligence
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="space-y-16">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <GlassmorphicCard className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Story Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${story.gradient} rounded-xl flex items-center justify-center`}>
                        <story.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{story.name}</h3>
                        <p className="text-primary">{story.role}</p>
                      </div>
                    </div>

                    <blockquote className="text-xl lg:text-2xl font-medium mb-6 text-primary italic">
                      "{story.quote}"
                    </blockquote>

                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {story.story}
                    </p>

                    <div className="glass-strong rounded-lg p-4 border border-primary/20">
                      <h4 className="font-bold mb-3 text-primary">Results:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {story.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center">
                            <div className="text-2xl font-bold text-foreground">{result.metric}</div>
                            <div className="text-xs text-muted-foreground">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative">
                      {/* Avatar placeholder */}
                      <div className={`w-80 h-80 mx-auto bg-gradient-to-br ${story.gradient} rounded-3xl flex items-center justify-center relative overflow-hidden`}>
                        <story.icon className="w-32 h-32 text-white/20" />
                        
                        {/* Floating stats */}
                        <div className="absolute top-4 right-4 glass rounded-lg p-2 text-xs">
                          <div className="text-primary font-bold">{story.results[0].metric}</div>
                          <div className="text-white/80">{story.results[0].label.split(' ').slice(0, 2).join(' ')}</div>
                        </div>
                        
                        <div className="absolute bottom-4 left-4 glass rounded-lg p-2 text-xs">
                          <div className="text-primary font-bold">{story.results[1].metric}</div>
                          <div className="text-white/80">{story.results[1].label.split(' ').slice(0, 2).join(' ')}</div>
                        </div>

                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} blur-2xl opacity-30 -z-10`} />
                      </div>
                    </div>
                  </div>
                </div>
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <GlassmorphicCard className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Join the Success</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$2.3M+</div>
                <div className="text-muted-foreground">Revenue Generated by Creators</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">Creators Scaling Up</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </GlassmorphicCard>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;