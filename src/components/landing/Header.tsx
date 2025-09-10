import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import WaitlistModal from './WaitlistModal';
const navItems = [{
  label: 'Features',
  to: '/features'
}, {
  label: 'Docs',
  to: '/docs'
}, {
  label: 'Pricing',
  to: '/pricing'
}, {
  label: 'Changelog',
  to: '/changelog'
}];
const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener('open-waitlist', onOpen as EventListener);
    return () => window.removeEventListener('open-waitlist', onOpen as EventListener);
  }, []);
  return <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 hover:border-purple-500/30 transition-all duration-500">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-10">
          <Link to="/" className="font-bold tracking-tight text-lg text-white flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg shadow-purple-500/30 border border-purple-400/20">
              <span className="text-white font-bold text-sm">U</span>
            </div>
            UniversalAI
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => <Link key={item.to} to={item.to} className={`relative group text-sm font-medium transition-all duration-300 px-4 py-2 rounded-lg ${location.pathname === item.to ? 'text-white bg-purple-500/10 border border-purple-400/30' : 'text-white/80 hover:text-white hover:bg-purple-500/5'}`}>
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-violet-500 transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2" />
              </Link>)}
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          {/* Language */}
          <button className="hidden sm:flex items-center gap-1 px-3 py-2 text-sm text-white/70 hover:text-white border border-white/15 rounded-lg hover:border-purple-400/40 transition-all duration-300 hover:bg-purple-500/5">
            EN <ChevronDown size={14} />
          </button>

          <button onClick={() => setOpen(true)} className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-0.5 border border-purple-400/30 hover:border-purple-300/50 hover:from-purple-400 hover:to-violet-500">
            Get Started
          </button>
        </div>
      </nav>
      <WaitlistModal open={open} onOpenChange={setOpen} />
    </header>;
};
export default Header;