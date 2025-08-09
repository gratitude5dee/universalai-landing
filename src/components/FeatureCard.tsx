import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <article
      className="group flex flex-col justify-between rounded-2xl border p-6 md:p-6 min-h-[360px] transition-transform"
      style={{ backgroundColor: 'hsl(var(--lp-card))', borderColor: 'hsl(var(--lp-card-border))', color: 'white' }}
    >
      <div>
        {/* Line-art placeholder */}
        <svg
          className="mb-6 h-[120px] w-[160px] text-white/50"
          viewBox="0 0 160 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect x="10" y="10" width="140" height="100" rx="10" opacity="0.5" />
          <path d="M30 40h60M30 55h100M30 70h80" opacity="0.5" />
        </svg>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>
      </div>
      <div className="mt-6">
        <a href="#" className="text-sm underline-offset-4 hover:underline text-white/90">Read more →</a>
      </div>
    </article>
  );
};

export default FeatureCard;
