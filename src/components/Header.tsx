import React from 'react';
import { Menu } from 'lucide-react';
import musicosLogo from '@/assets/musicos-logo.png';

export const Header = () => {
  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <nav className="glass rounded-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img src={musicosLogo} alt="MusicOS" className="w-8 h-8" />
          <span className="text-xl font-bold text-gradient-brand">MusicOS</span>
        </a>
        
        {/* Menu */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors">
            <Menu size={24} />
          </button>
          
          <a 
            href="#waitlist"
            className="btn-primary px-6 py-2.5 text-sm font-semibold"
          >
            Join Waitlist
          </a>
        </div>
      </nav>
    </header>
  );
};