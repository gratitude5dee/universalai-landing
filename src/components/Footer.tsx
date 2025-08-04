import { Twitter, Instagram, Github, Mail } from "lucide-react";
import musicosLogo from "@/assets/musicos-logo.png";

export const Footer = () => {
  return (
    <footer className="section-spacing border-t border-white border-opacity-10">
      <div className="container-main">
        <div className="text-center mb-8">
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} MusicOS. All rights reserved.
          </p>
          <p className="text-xs mt-2" style={{ color: 'var(--text-secondary)' }}>
            Made with <span style={{ color: 'var(--accent-primary)' }}>♪</span> by 5-Dee Studios
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a 
            href="https://twitter.com/musicos" 
            className="glass-subtle w-12 h-12 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-all duration-300 group"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
          </a>
          <a 
            href="https://instagram.com/musicos" 
            className="glass-subtle w-12 h-12 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-all duration-300 group"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
          </a>
          <a 
            href="https://github.com/musicos" 
            className="glass-subtle w-12 h-12 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-all duration-300 group"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
          </a>
          <a 
            href="mailto:hello@musicos.ai" 
            className="glass-subtle w-12 h-12 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-all duration-300 group"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
          </a>
        </div>
      </div>
    </footer>
  );
};