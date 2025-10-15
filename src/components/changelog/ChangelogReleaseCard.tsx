import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Link2, ChevronDown } from 'lucide-react';
import { ChangelogRelease, ChangelogEntry } from '@/types/changelog';
import ChangelogEntryComponent from './ChangelogEntry';
import { motion } from 'framer-motion';

interface ChangelogReleaseCardProps {
  release: ChangelogRelease;
  index: number;
}

const ChangelogReleaseCard: React.FC<ChangelogReleaseCardProps> = ({ release, index }) => {
  const groupedByType = React.useMemo(() => {
    const groups: { [key: string]: ChangelogEntry[] } = {};
    
    release.entries.forEach(entry => {
      if (!groups[entry.type]) {
        groups[entry.type] = [];
      }
      groups[entry.type].push(entry);
    });
    
    return Object.entries(groups).map(([type, entries]) => ({ type, entries }));
  }, [release.entries]);

  const handleShare = async () => {
    const url = `${window.location.origin}/changelog#v${release.version}`;
    try {
      await navigator.clipboard.writeText(url);
      // Could add toast notification here
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card 
        id={`v${release.version}`}
        className="glass hover:glass-strong transition-all duration-300 border-border/50 overflow-hidden group"
      >
        <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                v{release.version}
              </h2>
              <Badge variant="outline" className="font-mono text-xs">
                {new Date(release.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </Badge>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Link2 className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Share</span>
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="p-6 space-y-6">
          {groupedByType.map(({ type, entries }) => (
            <Collapsible key={type} defaultOpen>
              <CollapsibleTrigger className="flex items-center gap-2 w-full group/trigger hover:text-primary transition-colors">
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=closed]/trigger:-rotate-90" />
                <h3 className="font-display text-lg font-semibold italic">
                  {type}
                  <span className="text-muted-foreground ml-2 text-sm font-normal">
                    ({entries.length})
                  </span>
                </h3>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="mt-3">
                <ul className="space-y-3 pl-6">
                  {entries.map((entry, idx) => (
                    <ChangelogEntryComponent key={idx} entry={entry} />
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ChangelogReleaseCard;
