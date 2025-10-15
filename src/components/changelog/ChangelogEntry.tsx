import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { GitCommit, Plus, Code, Wrench, Zap, Shield, FileText, Database, Lock, KeyRound, AlertTriangle, Trash2, Settings, Copy, Check } from 'lucide-react';
import { ChangelogEntry as ChangelogEntryType } from '@/types/changelog';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface ChangelogEntryProps {
  entry: ChangelogEntryType;
}

const typeConfig: Record<string, { variant: string; icon: React.ElementType }> = {
  Added: { variant: 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/40 hover:from-green-500/30 hover:to-emerald-500/30', icon: Plus },
  Changed: { variant: 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/40 hover:from-blue-500/30 hover:to-cyan-500/30', icon: Code },
  Fixed: { variant: 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500/40 hover:from-amber-500/30 hover:to-yellow-500/30', icon: Wrench },
  Improved: { variant: 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-400 border-cyan-500/40 hover:from-cyan-500/30 hover:to-teal-500/30', icon: Zap },
  Performance: { variant: 'bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-400 border-purple-500/40 hover:from-purple-500/30 hover:to-violet-500/30', icon: Zap },
  Security: { variant: 'bg-gradient-to-r from-red-500/20 to-rose-500/20 text-red-400 border-red-500/40 hover:from-red-500/30 hover:to-rose-500/30', icon: Shield },
  Docs: { variant: 'bg-gradient-to-r from-slate-500/20 to-gray-500/20 text-slate-400 border-slate-500/40 hover:from-slate-500/30 hover:to-gray-500/30', icon: FileText },
  Schema: { variant: 'bg-gradient-to-r from-indigo-500/20 to-blue-500/20 text-indigo-400 border-indigo-500/40 hover:from-indigo-500/30 hover:to-blue-500/30', icon: Database },
  Policy: { variant: 'bg-gradient-to-r from-pink-500/20 to-fuchsia-500/20 text-pink-400 border-pink-500/40 hover:from-pink-500/30 hover:to-fuchsia-500/30', icon: Lock },
  Auth: { variant: 'bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 border-orange-500/40 hover:from-orange-500/30 hover:to-red-500/30', icon: KeyRound },
  Deprecated: { variant: 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border-yellow-500/40 hover:from-yellow-500/30 hover:to-orange-500/30', icon: AlertTriangle },
  Removed: { variant: 'bg-gradient-to-r from-red-500/20 to-rose-500/20 text-red-400 border-red-500/40 hover:from-red-500/30 hover:to-rose-500/30', icon: Trash2 },
  Maintenance: { variant: 'bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-400 border-gray-500/40 hover:from-gray-500/30 hover:to-slate-500/30', icon: Settings }
};

const ChangelogEntry: React.FC<ChangelogEntryProps> = ({ entry }) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const config = typeConfig[entry.type] || typeConfig.Changed;
  const Icon = config.icon;

  const handleCopySha = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!entry.sha) return;
    
    try {
      await navigator.clipboard.writeText(entry.sha);
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: `Commit SHA ${entry.sha} copied`,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <li className="flex items-start gap-3 group animate-fade-in">
      <Badge 
        variant="outline" 
        className={cn(
          "mt-0.5 transition-all duration-300 shrink-0 hover:scale-105",
          config.variant
        )}
      >
        <Icon className="h-3 w-3 mr-1.5" />
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
        
        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
          {entry.sha && (
            <>
              <a
                href={entry.commitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5 group/link"
              >
                <GitCommit className="h-3 w-3 group-hover/link:rotate-12 transition-transform" />
                <span className="group-hover/link:underline">{entry.sha}</span>
              </a>
              <button
                onClick={handleCopySha}
                className="p-1 rounded hover:bg-primary/10 transition-colors"
                title="Copy commit SHA"
              >
                {copied ? (
                  <Check className="h-3 w-3 text-green-400" />
                ) : (
                  <Copy className="h-3 w-3 text-muted-foreground hover:text-primary" />
                )}
              </button>
            </>
          )}
          
          {entry.pr && (
            <a
              href={`https://github.com/gratitude5dee/Universal-AI/pull/${entry.pr}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              #{entry.pr}
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default ChangelogEntry;
