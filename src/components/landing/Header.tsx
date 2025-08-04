import React, { useState } from 'react';
import { Menu, LogOut, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import musicosLogo from '@/assets/musicos-logo.png';
import LightningLogo from '@/components/ui/LightningLogo';
import WaitlistModal from './WaitlistModal';
const Header = () => {
  const {
    user,
    signOut,
    loading
  } = useAuth();
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);
  const handleSignOut = async () => {
    await signOut();
  };
  return <header className="fixed top-0 left-0 right-0 z-50 animate-fade-up">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
          <LightningLogo />
          <span className="text-2xl font-bold text-gradient-brand">MusicOS</span>
        </a>
        
        {/* Menu */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors">
            <Menu size={24} />
          </button>
          
          {!loading && <>
              {user ? <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center gap-2 text-white hover:text-primary">
                      <User size={16} />
                      <span className="hidden sm:inline">{user.user_metadata?.username || user.email}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={handleSignOut} className="flex items-center gap-2 text-destructive">
                      <LogOut size={16} />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu> : <>
                  <Button variant="ghost" size="sm" asChild className="text-white hover:text-primary">
                    
                  </Button>
                  <Button onClick={() => setWaitlistModalOpen(true)} className="btn-primary px-8 py-3 text-base font-bold rounded-full">
                    Join Waitlist
                  </Button>
                </>}
            </>}
        </div>
      </nav>
      
      <WaitlistModal open={waitlistModalOpen} onOpenChange={setWaitlistModalOpen} />
    </header>;
};
export default Header;