import React, { useState } from 'react';
import { User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Header = () => {
  const { user, signOut, loading } = useAuth();
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="mx-auto max-w-[1200px] px-6 md:px-8 py-4 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-tight text-sm md:text-base text-foreground/90 hover:text-foreground transition-colors">
          MusicOS
        </a>

        <div className="flex items-center gap-2">
          {!loading && (
            <>
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                      <User size={16} />
                      <span className="hidden sm:inline text-sm">{user.user_metadata?.username || user.email}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={handleSignOut} className="flex items-center gap-2 text-destructive">
                      <LogOut size={16} />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button onClick={() => setWaitlistModalOpen(true)} className="h-9 px-4">
                  Join Waitlist
                </Button>
              )}
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Header;
