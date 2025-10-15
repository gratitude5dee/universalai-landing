import React from 'react';
import { Badge } from '@/components/ui/badge';
import { GitCommit } from 'lucide-react';
import { ChangelogEntry as ChangelogEntryType } from '@/types/changelog';
import { cn } from '@/lib/utils';

interface ChangelogEntryProps {
  entry: ChangelogEntryType;
}

const typeVariants: Record<string, string> = {
  Added: 'bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20',
  Changed: 'bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20',
  Fixed: 'bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/20',
  Improved: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20',
  Performance: 'bg-purple-500/10 text-purple-400 border-purple-500/20 hover:bg-purple-500/20',
  Security: 'bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20',
  Docs: 'bg-slate-500/10 text-slate-400 border-slate-500/20 hover:bg-slate-500/20',
  Schema: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:bg-indigo-500/20',
  Policy: 'bg-pink-500/10 text-pink-400 border-pink-500/20 hover:bg-pink-500/20',
  Auth: 'bg-orange-500/10 text-orange-400 border-orange-500/20 hover:bg-orange-500/20',
  Deprecated: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:bg-yellow-500/20',
  Removed: 'bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20',
  Maintenance: 'bg-gray-500/10 text-gray-400 border-gray-500/20 hover:bg-gray-500/20'
};

const ChangelogEntry: React.FC<ChangelogEntryProps> = ({ entry }) => {
  return (
    <li className="flex items-start gap-3 group animate-fade-in">
      <Badge 
        variant="outline" 
        className={cn(
          "mt-0.5 transition-all duration-200 shrink-0",
          typeVariants[entry.type] || typeVariants.Changed
        )}
      >
        {entry.type}
      </Badge>
      
      <div className="flex-1 min-w-0">
        <p className="font-sans text-sm leading-relaxed text-foreground">
          {entry.summary}
          {entry.scope && (
            <span className="italic text-muted-foreground ml-1.5">
              — {entry.scope}
            </span>
          )}
        </p>
        
        {entry.sha && (
          <a
            href={entry.commitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5 mt-1.5 group/link"
          >
            <GitCommit className="h-3 w-3 group-hover/link:rotate-12 transition-transform" />
            <span className="group-hover/link:underline">{entry.sha}</span>
          </a>
        )}
        
        {entry.pr && (
          <a
            href={`https://github.com/gratitude5dee/Universal-AI/pull/${entry.pr}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 ml-2"
          >
            #{entry.pr}
          </a>
        )}
      </div>
    </li>
  );
};

export default ChangelogEntry;
