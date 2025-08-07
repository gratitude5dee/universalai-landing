import React from 'react';
import { useInView } from '@/hooks/use-in-view';

const TechnicalFeatures = () => {
  const { ref, inView } = useInView();
  const features = [
    {
      label: "01",
      title: "Structured Projects",
      description: "Modular system for tasks, assets, and reviews with Git-like versioning.",
      metrics: { efficiency: "+47%", errors: "-92%" }
    },
    {
      label: "02",
      title: "Real-time Collaboration",
      description: "WebRTC-powered live sessions with <50ms latency.",
      metrics: { latency: "<50ms", concurrent: "100+" }
    },
    {
      label: "03",
      title: "API-First Architecture",
      description: "RESTful and GraphQL APIs for seamless integrations.",
      metrics: { endpoints: "200+", uptime: "99.99%" }
    }
  ];

  return (
    <section ref={ref} className={`py-32 border-t border-border-primary transition-opacity duration-1000 ${inView ? 'opacity-100 fade-up' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-20">
          <p className="text-sm text-text-tertiary mb-2 font-mono">FEATURES</p>
          <h2 className="text-5xl font-bold">Built for scale.</h2>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-primary">
          {features.map((feature) => (
            <div key={feature.label} className="bg-bg-primary p-8 hover:bg-bg-secondary transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
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
