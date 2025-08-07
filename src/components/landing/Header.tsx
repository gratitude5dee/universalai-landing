import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border-primary">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo - simple text */}
        <div className="flex items-center gap-8">
          <a href="/" className="font-bold text-lg">MusicOS</a>

          {/* Navigation - minimal links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="relative group text-sm text-text-secondary hover:text-white transition-colors">
              <span>Features</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#docs" className="relative group text-sm text-text-secondary hover:text-white transition-colors">
              <span>Docs</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#pricing" className="relative group text-sm text-text-secondary hover:text-white transition-colors">
              <span>Pricing</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#changelog" className="relative group text-sm text-text-secondary hover:text-white transition-colors">
              <span>Changelog</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* Right side - minimal CTAs */}
        <div className="flex items-center gap-4">
          <button className="relative group text-sm text-text-secondary hover:text-white transition-colors">
            <span>Sign In</span>
            <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
          </button>
          <button className="group relative overflow-hidden px-4 py-2 bg-white text-black text-sm font-medium">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-accent-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
