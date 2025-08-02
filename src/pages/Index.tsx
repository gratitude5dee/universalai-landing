import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-8">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to transform your music creation process?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => {
                  const waitlistSection = document.getElementById('waitlist');
                  if (waitlistSection) {
                    waitlistSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Join the Waitlist
              </Button>
              <Button
                variant="outline"
                className="btn-glass px-8 py-4 text-lg font-semibold rounded-xl border-gray-600 text-gray-300 hover:text-white hover:border-gray-400"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="section-spacing">
        <div className="container-main">
          <WaitlistForm />
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
