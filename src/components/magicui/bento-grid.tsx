import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'grid auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  name: string;
  className?: string;
  background?: React.ReactNode;
  Icon?: React.ComponentType<{ className?: string }>;
  description: string;
  href?: string;
  cta?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta = 'Learn more',
}) => {
  const CardWrapper = href ? 'a' : 'div';
  const cardProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <CardWrapper
      {...cardProps}
      className={cn(
        'group relative overflow-hidden rounded-2xl',
        'bg-gradient-to-br from-gray-900/50 to-gray-800/50',
        'border border-white/10',
        'transition-all duration-500',
        'hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20',
        'transform-gpu',
        href && 'cursor-pointer',
        className
      )}
    >
      {/* Background */}
      {background && (
        <div className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105">
          {background}
        </div>
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col justify-between p-6 md:p-8">
        <div className="space-y-4">
          {Icon && (
            <div className="inline-flex p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-transform duration-500 group-hover:scale-110 transform-gpu">
              <Icon className="w-6 h-6 text-white" />
            </div>
          )}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
          </div>
        </div>

        {/* CTA */}
        {href && (
          <div className="mt-auto">
            <div className="flex items-center gap-2 text-sm font-medium text-white/80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <span>{cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        )}
      </div>

      {/* Dark mode shadow effect */}
      <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)] pointer-events-none" />
    </CardWrapper>
  );
};
