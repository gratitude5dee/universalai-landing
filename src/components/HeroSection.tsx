import { Button } from "@/components/ui/button";
import { Play, Headphones, Zap, Globe } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import musicosLogo from "@/assets/musicos-logo.png";

export const HeroSection = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={musicosLogo} 
            alt="MusicOS Logo" 
            className="w-24 h-24 mx-auto mb-6 pulse-glow"
          />
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="audio-wave"></div>
            <div className="audio-wave"></div>
            <div className="audio-wave"></div>
            <div className="audio-wave"></div>
            <div className="audio-wave"></div>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-gradient-rainbow">MusicOS</span>
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/90 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          The Operating System for Music Creators
        </p>

        {/* Feature Icons */}
        <div className="flex items-center justify-center gap-8 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2 text-primary">
            <Zap className="w-6 h-6" />
            <span className="hidden sm:inline text-sm font-medium">AI-Powered</span>
          </div>
          <div className="flex items-center gap-2 text-secondary">
            <Headphones className="w-6 h-6" />
            <span className="hidden sm:inline text-sm font-medium">Professional</span>
          </div>
          <div className="flex items-center gap-2 text-accent">
            <Globe className="w-6 h-6" />
            <span className="hidden sm:inline text-sm font-medium">Collaborative</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button
            onClick={scrollToWaitlist}
            size="lg"
            className="btn-neon-orange h-14 px-8 text-lg font-semibold min-w-[200px]"
          >
            Join the Waitlist
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-14 px-8 text-lg font-semibold min-w-[200px] glass-card border-primary/30 hover:bg-primary/10"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <div className="text-2xl font-bold text-gradient-orange">10K+</div>
            <div className="text-sm text-muted-foreground">Creators Waiting</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gradient-purple">500+</div>
            <div className="text-sm text-muted-foreground">AI Tools</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gradient-rainbow">∞</div>
            <div className="text-sm text-muted-foreground">Possibilities</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};