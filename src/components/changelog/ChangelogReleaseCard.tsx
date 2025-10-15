import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Share2, Check } from 'lucide-react';
import { ChangelogRelease } from '@/types/changelog';
import ChangelogEntry from './ChangelogEntry';
import GlassmorphicCard from '@/components/ui/GlassmorphicCard';
import { useToast } from '@/hooks/use-toast';

interface ChangelogReleaseCardProps {
  release: ChangelogRelease;
  index: number;
}

const ChangelogReleaseCard: React.FC<ChangelogReleaseCardProps> = ({ release, index }) => {
  const [shared, setShared] = useState(false);
  const { toast } = useToast();
  
  const entriesByType = React.useMemo(() => {
    const grouped = release.entries.reduce((acc, entry) => {
      if (!acc[entry.type]) {
        acc[entry.type] = [];
      }
      acc[entry.type].push(entry);
      return acc;
    }, {} as Record<string, typeof release.entries>);
    
    return Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b));
  }, [release.entries]);

  const handleShare = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${release.version}`;
    try {
      await navigator.clipboard.writeText(url);
      setShared(true);
      toast({
        title: "Link copied!",
        description: `Shareable link for v${release.version} copied to clipboard`,
      });
      setTimeout(() => setShared(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      id={release.version}
    >
      <GlassmorphicCard 
        variant="default"
        className="border border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group"
      >
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        <div className="space-y-6 relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="changelog-version text-primary mb-2">
                v{release.version}
              </h2>
              <time className="text-sm text-muted-foreground font-mono">
                {new Date(release.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <button
              onClick={handleShare}
              className="p-2 rounded-lg hover:bg-primary/10 transition-all hover:scale-110"
              title="Share this release"
            >
              {shared ? (
                <Check className="h-5 w-5 text-green-400" />
              ) : (
                <Share2 className="h-5 w-5 text-muted-foreground hover:text-primary" />
              )}
            </button>
          </div>

          {/* Entries by type */}
          <div className="space-y-4">
            {entriesByType.map(([type, entries]) => (
              <Collapsible key={type} defaultOpen>
                <CollapsibleTrigger className="flex items-center justify-between w-full group/trigger hover:bg-white/5 p-3 rounded-lg transition-all duration-200">
                  <h3 className="changelog-category text-foreground">
                    {type}
                    <Badge 
                      variant="secondary" 
                      className="ml-2 bg-primary/20 border-primary/30 text-primary-foreground"
                    >
                      {entries.length}
                    </Badge>
                  </h3>
                  <ChevronDown className="h-5 w-5 transition-transform duration-300 group-data-[state=open]/trigger:rotate-180 text-muted-foreground group-hover/trigger:text-primary" />
                </CollapsibleTrigger>
                
                <CollapsibleContent className="pt-4 animate-accordion-down">
                  <ul className="space-y-3 pl-2">
                    {entries.map((entry, idx) => (
                      <ChangelogEntry key={idx} entry={entry} />
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </GlassmorphicCard>
    </motion.div>
  );
};

export default ChangelogReleaseCard;
