import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, TrendingUp } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';
interface RecentSignup {
  signup_time: string;
  display_name: string;
}
const LiveWaitlistCounter = () => {
  const [displayCount, setDisplayCount] = useState(0);
  const [recentSignups, setRecentSignups] = useState<RecentSignup[]>([]);

  // Fetch waitlist count
  const {
    data: count,
    refetch
  } = useQuery({
    queryKey: ['waitlist-count'],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.rpc('get_public_waitlist_count');
      if (error) throw error;
      return (data as number) + 500; // Add 500 to the count
    },
    refetchInterval: 10000,
    // Poll every 10 seconds
    initialData: 500
  });

  // Generate mock signups for ticker (no real user data)
  const generateMockSignups = () => {
    const mockNames = ['Creator', 'Artist', 'Builder', 'Maker', 'Visionary'];
    return mockNames.map((name, index) => ({
      display_name: name,
      signup_time: new Date(Date.now() - (index * 60000)).toISOString()
    }));
  };

  // Use mock data instead of real signups for privacy (memoized to prevent infinite loops)
  const signups = useMemo(() => generateMockSignups(), []);

  // Animate count changes
  useEffect(() => {
    if (count !== undefined && count !== displayCount) {
      const increment = count > displayCount ? 1 : -1;
      const timer = setInterval(() => {
        setDisplayCount(prev => {
          const next = prev + increment;
          if (increment > 0 && next >= count || increment < 0 && next <= count) {
            clearInterval(timer);
            return count;
          }
          return next;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [count, displayCount]);
  
  useEffect(() => {
    setRecentSignups(signups);
  }, [signups]);

  // Real-time subscription for live updates
  useEffect(() => {
    const channel = supabase.channel('waitlist-updates').on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'waitlist_signups'
    }, () => {
      refetch();
    }).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [refetch]);
  const getMilestoneMessage = (count: number) => {
    if (count < 100) return `${100 - count} more for exclusive early access!`;
    if (count < 500) return `${500 - count} more to unlock beta features!`;
    if (count < 1000) return `${1000 - count} more for VIP status!`;
    return "VIP status unlocked! 🎉";
  };
  return <div className="flex flex-col items-center gap-2 py-3 mx-0 px-3 max-w-sm mx-auto">
      {/* Main Counter */}
      <motion.div initial={{
      opacity: 0,
      y: 8
    }} animate={{
      opacity: 1,
      y: 0
    }} className="flex items-center gap-3 border border-border rounded-full px-4 py-1.5 bg-secondary/40">
        <div className="flex items-baseline gap-2">
          <AnimatePresence mode="wait">
            <motion.span key={displayCount} initial={{
            y: 8,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} exit={{
            y: -8,
            opacity: 0
          }} className="text-lg font-semibold">
              {displayCount.toLocaleString()}
            </motion.span>
          </AnimatePresence>
          <span className="text-xs text-muted-foreground">signups</span>
        </div>
      </motion.div>

      {/* Milestone Progress */}
      <div className="text-center">
        <div className="text-xs text-muted-foreground">
          {getMilestoneMessage(displayCount).replace(' 🎉', '')}
        </div>
        <div className="mt-1.5 w-48 sm:w-64 h-1.5 bg-border rounded-full overflow-hidden">
          <motion.div className="h-full bg-primary" initial={{
          width: 0
        }} animate={{
          width: `${Math.min(displayCount % 100 / 100 * 100, 100)}%`
        }} transition={{
          duration: 0.4,
          ease: 'easeOut'
        }} />
        </div>
      </div>

      {/* Recent Signups Ticker */}
      {recentSignups.length > 0 && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.2
    }} className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Recent:</span>
          <div className="flex gap-2 sm:gap-3">
            {recentSignups.slice(0, 3).map((signup, index) => <motion.span key={index} initial={{
          opacity: 0,
          x: 10
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.2 + index * 0.1
        }} className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                {signup.display_name}
              </motion.span>)}
          </div>
        </motion.div>}
    </div>;
};
export default LiveWaitlistCounter;