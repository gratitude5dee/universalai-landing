import { Music, Twitter, Instagram, Github, Mail } from "lucide-react";
import musicosLogo from "@/assets/musicos-logo.png";

export const Footer = () => {
  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-primary/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={musicosLogo} alt="MusicOS" className="w-8 h-8" />
              <span className="text-xl font-bold text-gradient-orange">MusicOS</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              The Operating System for Music Creators. Revolutionizing music production with AI, blockchain, and collaborative tools.
            </p>
            <div className="flex items-center gap-2">
              <div className="audio-wave h-3"></div>
              <div className="audio-wave h-3"></div>
              <div className="audio-wave h-3"></div>
              <span className="text-xs text-muted-foreground">Building the future</span>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors text-sm">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm">Pricing</a></li>
              <li><a href="#integrations" className="text-muted-foreground hover:text-primary transition-colors text-sm">Integrations</a></li>
              <li><a href="#api" className="text-muted-foreground hover:text-primary transition-colors text-sm">API</a></li>
              <li><a href="#changelog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Changelog</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#documentation" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Documentation</a></li>
              <li><a href="#tutorials" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Tutorials</a></li>
              <li><a href="#community" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Community</a></li>
              <li><a href="#blog" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Blog</a></li>
              <li><a href="#support" className="text-muted-foreground hover:text-secondary transition-colors text-sm">Support</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-accent transition-colors text-sm">About Us</a></li>
              <li><a href="#careers" className="text-muted-foreground hover:text-accent transition-colors text-sm">Careers</a></li>
              <li><a href="#press" className="text-muted-foreground hover:text-accent transition-colors text-sm">Press</a></li>
              <li><a href="#privacy" className="text-muted-foreground hover:text-accent transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#terms" className="text-muted-foreground hover:text-accent transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-primary/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex items-center gap-3">
                <a 
                  href="https://twitter.com/musicos" 
                  className="w-10 h-10 glass-card flex items-center justify-center hover:border-primary/40 transition-all duration-300 group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://instagram.com/musicos" 
                  className="w-10 h-10 glass-card flex items-center justify-center hover:border-secondary/40 transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                </a>
                <a 
                  href="https://github.com/musicos" 
                  className="w-10 h-10 glass-card flex items-center justify-center hover:border-accent/40 transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
                <a 
                  href="mailto:hello@musicos.ai" 
                  className="w-10 h-10 glass-card flex items-center justify-center hover:border-primary/40 transition-all duration-300 group"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-muted-foreground">All systems operational</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-primary/10 pt-8">
          <p className="text-sm text-muted-foreground mb-2">
            © {new Date().getFullYear()} MusicOS. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made with <span className="text-primary">♪</span> for music creators worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};