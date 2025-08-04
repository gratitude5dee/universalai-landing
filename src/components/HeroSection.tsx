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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="animate-mobile-fade-in space-y-8 md:space-y-12">
            <h1 className="text-mobile-xl md:text-7xl lg:text-8xl font-bold leading-tight text-white">
              The ultimate productivity tool for{" "}
              <span className="text-gradient-accent">music creators</span>{" "}
              <span className="text-2xl md:text-6xl lg:text-7xl">🔥</span>
            </h1>
            
            <p className="text-mobile-base md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Brainstorm, collaborate, and manage your projects from idea to reality. All in one place.
            </p>
          </div>

          {/* Hero Mockup */}
          <div className="animate-scale-in mt-12 md:mt-16 relative flex justify-center">
            <PhoneMockup 
              screenContentSrc={featureAiChat} 
              alt="MusicOS AI chat interface" 
              className="max-w-xs sm:max-w-sm md:max-w-md relative z-10 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};