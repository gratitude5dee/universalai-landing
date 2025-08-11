import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';
import WaitlistModal from './WaitlistModal';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
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
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-bg-primary/80 backdrop-blur-md border-b border-border-primary">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left: Logo + Desktop Nav */}
        <div className="flex items-center gap-4 sm:gap-8">
          <Link to="/" className="font-extrabold tracking-tight text-lg">UniversalAI</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className={`relative group text-sm text-text-secondary hover:text-white transition-colors ${location.pathname === item.to ? 'text-white' : ''}`}
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language */}
          <button className="hidden sm:flex items-center gap-1 px-3 py-2 text-sm text-text-secondary hover:text-white border border-border-primary rounded-md">
            EN <ChevronDown size={14} />
          </button>

          <button onClick={() => setOpen(true)} className="hidden sm:inline-flex group relative overflow-hidden px-4 py-2 bg-black text-white text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            <span className="relative z-10">Join Waitlist</span>
            <div className="absolute inset-0 transition-colors bg-purple-950" />
          </button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-border-primary text-text-secondary">
                <Menu size={18} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 bg-bg-primary border-border-primary">
              <div className="px-2 py-6 space-y-2">
                {navItems.map(item => (
                  <Link key={item.to} to={item.to} className="block px-3 py-2 rounded-md text-sm text-text-secondary hover:text-white hover:bg-white/5">
                    {item.label}
                  </Link>
                ))}
                <button onClick={() => setOpen(true)} className="mt-4 w-full px-3 py-2 rounded-md bg-black text-white text-sm">Join Waitlist</button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      <WaitlistModal open={open} onOpenChange={setOpen} />
    </header>;
};
export default Header;