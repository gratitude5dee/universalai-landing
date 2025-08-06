import React, { useEffect, useState } from 'react';
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
  const { data: count, refetch } = useQuery({
    queryKey: ['waitlist-count'],
    queryFn: async () => {
      const { data, error } = await supabase.rpc('get_waitlist_count');
      if (error) throw error;
      return data as number;
    },
    refetchInterval: 10000, // Poll every 10 seconds
    initialData: 0
  });

  // Fetch recent signups for ticker
  const { data: signups } = useQuery({
    queryKey: ['recent-signups'],
    queryFn: async () => {
      const { data, error } = await supabase.rpc('get_recent_signups', { limit_count: 5 });
      if (error) throw error;
      return data as RecentSignup[];
    },
    refetchInterval: 15000, // Refresh every 15 seconds
    initialData: []
  });

  // Animate count changes
  useEffect(() => {
    if (count !== undefined && count !== displayCount) {
      const increment = count > displayCount ? 1 : -1;
      const timer = setInterval(() => {
        setDisplayCount(prev => {
          const next = prev + increment;
          if ((increment > 0 && next >= count) || (increment < 0 && next <= count)) {
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
    setRecentSignups(signups || []);
  }, [signups]);

  // Real-time subscription for live updates
  useEffect(() => {
    const channel = supabase
      .channel('waitlist-updates')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'waitlist_signups'
        },
        () => {
          refetch();
        }
      )
      .subscribe();

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

  return (
    <div className="flex flex-col items-center gap-4 py-6">
      {/* Main Counter */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex items-center gap-3 bg-gradient-to-r from-green-500/20 via-yellow-400/20 to-pink-500/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            filter: ["hue-rotate(0deg)", "hue-rotate(120deg)", "hue-rotate(240deg)", "hue-rotate(360deg)"]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Flame className="w-5 h-5 text-orange-500" />
        </motion.div>

        <div className="flex items-baseline gap-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={displayCount}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-green-400 via-yellow-400 to-pink-400 bg-clip-text text-transparent"
            >
              {displayCount.toLocaleString()}
            </motion.span>
          </AnimatePresence>
          <span className="text-white/80 font-medium">creators already joined!</span>
        </div>

        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <TrendingUp className="w-5 h-5 text-green-400" />
        </motion.div>
      </motion.div>

      {/* Milestone Progress */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <div className="text-sm text-white/70 font-medium">
          {getMilestoneMessage(displayCount)}
        </div>
        
        {/* Progress Bar */}
        <div className="mt-2 w-64 h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 to-yellow-400"
            initial={{ width: 0 }}
            animate={{ 
              width: `${Math.min((displayCount % 100) / 100 * 100, 100)}%` 
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      {/* Recent Signups Ticker */}
      {recentSignups.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-2 text-xs text-white/60"
        >
          <span>Recent:</span>
          <div className="flex gap-3">
            {recentSignups.slice(0, 3).map((signup, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.2 }}
                className="flex items-center gap-1"
              >
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                {signup.display_name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LiveWaitlistCounter;