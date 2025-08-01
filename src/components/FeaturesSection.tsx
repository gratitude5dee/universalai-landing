import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Shield, 
  DollarSign, 
  Users, 
  BarChart3, 
  Sparkles,
  Music,
  Mic,
  Layers
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Music Production",
    description: "Create professional tracks with intelligent composition, arrangement, and mixing assistance.",
    gradient: "text-gradient-orange"
  },
  {
    icon: Shield,
    title: "Blockchain Rights Management",
    description: "Secure, transparent ownership and licensing powered by blockchain technology.",
    gradient: "text-gradient-purple"
  },
  {
    icon: DollarSign,
    title: "Integrated Creator Monetization",
    description: "Multiple revenue streams including streaming, NFTs, and direct fan payments.",
    gradient: "text-gradient-rainbow"
  },
  {
    icon: Users,
    title: "Collaborative Creation Suite",
    description: "Real-time collaboration tools for remote music production with anyone, anywhere.",
    gradient: "text-gradient-orange"
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics Dashboard",
    description: "Track performance, audience engagement, and revenue across all platforms.",
    gradient: "text-gradient-purple"
  },
  {
    icon: Sparkles,
    title: "Smart Audio Processing",
    description: "Advanced AI algorithms for mastering, restoration, and audio enhancement.",
    gradient: "text-gradient-rainbow"
  }
];

const additionalFeatures = [
  {
    icon: Music,
    title: "Universal DAW Integration",
    description: "Seamlessly works with all major Digital Audio Workstations"
  },
  {
    icon: Mic,
    title: "Voice-to-Music AI",
    description: "Transform humming or singing into full arrangements"
  },
  {
    icon: Layers,
    title: "Infinite Sample Library",
    description: "Access millions of royalty-free samples and loops"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient-rainbow mb-6">
            Revolutionizing Music Creation
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            MusicOS combines cutting-edge AI, blockchain technology, and collaborative tools 
            to create the ultimate platform for modern music creators.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${feature.gradient}`}>
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gradient-orange mb-8">
            And Much More...
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-4 glass-card border-secondary/20 hover:border-secondary/40 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-secondary flex-shrink-0" />
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground mb-4">
            <div className="audio-wave"></div>
            <span className="text-sm">Building the future of music</span>
            <div className="audio-wave"></div>
          </div>
        </div>
      </div>
    </section>
  );
};