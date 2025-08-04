import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { PhoneMockup } from "@/components/PhoneMockup";
import featureAiChat from "@/assets/feature-ai-chat-mobile.jpg";

export const HeroSection = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-16 relative overflow-hidden">
      {/* Linear background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-40"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="animate-fade-in space-y-8 md:space-y-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-gradient-hero">Your Entire Creative</span>{" "}
              <span className="text-white">Workflow, Unified</span>{" "}
              <span className="text-gradient-accent">& Amplified</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              From a spark of an idea to a global tour, manage every step of your creative career with an intelligent, all-in-one OS.. 
              <span className="text-gradient-subtle"> All in one place.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button 
                onClick={scrollToWaitlist} 
                className="btn-primary text-lg px-8 py-3 min-w-[200px]"
              >
                Join Waitlist
              </Button>
              <Button 
                variant="outline" 
                className="btn-glass text-lg px-8 py-3 min-w-[200px] group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Mockup */}
          <div className="animate-scale-in mt-16 md:mt-20 relative flex justify-center">
            <div className="relative">
              <PhoneMockup 
                screenContentSrc={featureAiChat} 
                alt="MusicOS AI chat interface" 
                className="max-w-xs sm:max-w-sm md:max-w-md relative z-10 mx-auto"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl scale-110 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};