import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";
import featureAiChat from "@/assets/feature-ai-chat.png";

export const HeroSection = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center pt-32 pb-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-main relative z-10">
        <div className="flex flex-col items-center gap-16">
          {/* Hero Content */}
          <div className="animate-fade-up space-y-8">
            <div className="glass-hero rounded-2xl px-6 py-3 inline-block mb-6">
              <span className="text-gradient-accent font-semibold text-sm tracking-wider uppercase">
                🎵 The Future of Music Creation
              </span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] mb-8 text-gradient-hero">
              The ultimate productivity tool for music creators
            </h1>
            
            <p className="text-xl lg:text-2xl xl:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Turn ideas into projects, collaborate in real-time, and manage your music creation process from concept to release. 
              <span className="text-gradient-accent font-semibold"> All in one place.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-up-delayed">
            <Button
              onClick={scrollToWaitlist}
              className="btn-primary px-10 py-5 text-xl font-bold min-w-[240px] h-auto rounded-xl animate-glow-pulse"
            >
              Join the Waitlist
              <span className="ml-2">→</span>
            </Button>
            <Button
              variant="outline"
              className="btn-glass px-10 py-5 text-xl font-semibold min-w-[240px] h-auto rounded-xl"
            >
              <Play className="w-6 h-6 mr-3" />
              Watch Demo
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="flex flex-wrap justify-center gap-8 animate-fade-up-delayed" style={{ animationDelay: '0.4s' }}>
            <div className="glass-strong rounded-xl px-6 py-4 text-center">
              <div className="text-2xl font-bold text-gradient-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Early Users</div>
            </div>
            <div className="glass-strong rounded-xl px-6 py-4 text-center">
              <div className="text-2xl font-bold text-gradient-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Created</div>
            </div>
            <div className="glass-strong rounded-xl px-6 py-4 text-center">
              <div className="text-2xl font-bold text-gradient-primary">24/7</div>
              <div className="text-sm text-muted-foreground">AI Assistance</div>
            </div>
          </div>

          {/* Hero Mockup */}
          <div className="animate-scale-in mt-12 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl animate-pulse"></div>
            <PhoneMockup 
              screenContentSrc={featureAiChat} 
              alt="MusicOS AI chat interface" 
              className="max-w-sm relative z-10 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};