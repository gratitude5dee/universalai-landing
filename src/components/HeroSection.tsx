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
    <section className="min-h-screen flex flex-col items-center justify-center text-center pt-32 pb-16">
      <div className="container-main">
        <div className="flex flex-col items-center gap-12">
          {/* Hero Content */}
          <div className="animate-fade-up">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gradient-primary">
              The ultimate productivity tool for music creators{" "}
              <span role="img" aria-label="fire">🔥</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Turn ideas into projects, collaborate in real-time, and manage your music creation process from concept to release. All in one place.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up-delayed">
            <Button
              onClick={scrollToWaitlist}
              className="btn-primary px-8 py-4 text-lg font-semibold min-w-[200px] h-auto"
            >
              Join the Waitlist
            </Button>
            <Button
              variant="outline"
              className="btn-glass px-8 py-4 text-lg font-semibold min-w-[200px] h-auto"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Hero Mockup */}
          <div className="animate-scale-in mt-8">
            <PhoneMockup 
              screenContentSrc={featureAiChat} 
              alt="MusicOS AI chat interface" 
              className="max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};