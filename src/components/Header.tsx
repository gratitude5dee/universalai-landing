import React from 'react';
import { Menu } from 'lucide-react';
import musicosLogo from '@/assets/musicos-logo.png';

export const Header = () => {
  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-50 animate-fade-up">
      <nav className="glass-strong rounded-full px-8 py-4 flex items-center justify-between shadow-2xl backdrop-blur-xl">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
          <img src={musicosLogo} alt="MusicOS" className="w-10 h-10 animate-float" />
          <span className="text-2xl font-bold text-gradient-brand">MusicOS</span>
        </a>
        
        {/* Menu */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors">
            <Menu size={24} />
          </button>
          
          <a 
            href="#waitlist"
            className="btn-primary px-8 py-3 text-base font-bold rounded-full"
          >
            Join Waitlist
          </a>
        </div>
      </nav>
    </header>
  );
};