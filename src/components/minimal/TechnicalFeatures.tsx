import React from 'react';
import { useInView } from '@/hooks/use-in-view';

const TechnicalFeatures = () => {
  const { ref, inView } = useInView();
  const features = [
    {
      label: "01",
      title: "Automated Admin & Tour Management",
      description: "Save 30+ hours per week on invoices, contracts, rider requirements, and tour logistics. Eliminate the 75% of your time not spent on music.",
      metrics: { "Time Saved": "30+ hrs/wk" }
    },
    {
      label: "02",
      title: "Sync Licensing Marketplace",
      description: "Get your music in front of music supervisors with automated matching. A real testimonial showed a $45K increase in sync licenses.",
      metrics: { "Revenue": "+5x" }
    },
    {
      label: "03",
      title: "Digital Asset & Marketing Automation",
      description: "A self-running marketing machine that generates 10x content output. Create EPKs and tour posters in one click with an AI that learns your brand voice and aesthetic.",
      metrics: { "Content Output": "10x" }
    },
    {
        label: "04",
        title: "Web3 Tokenization & Fan Engagement",
        description: "Turn fans into stakeholders with fan tokens, automatic royalty distribution, and token-gated content. Average token sale of $2.3M with over 15,000 token holders.",
        metrics: { "Avg. Token Sale": "$2.3M" }
    }
  ];

  return (
    <section ref={ref} id="features" className={`py-32 border-t border-border-primary transition-opacity duration-1000 ${inView ? 'opacity-100 fade-up' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-20 text-center">
          <p className="text-sm text-text-tertiary mb-2 font-mono">FEATURES</p>
          <h2 className="text-5xl font-bold">Your Music Empire, Automated.</h2>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.label} className="bg-bg-secondary p-8 rounded-lg border border-border-primary transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-text-tertiary text-sm font-mono mb-4">{feature.label}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-text-secondary text-sm mb-6 leading-relaxed">{feature.description}</p>

              {/* Metrics */}
              <div className="flex gap-4 pt-4 border-t border-border-secondary">
                {Object.entries(feature.metrics).map(([key, value]) => (
                  <div key={key} className="text-xs">
                    <span className="text-text-tertiary">{key}: </span>
                    <span className="text-accent-primary font-mono">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalFeatures;
