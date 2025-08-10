import React from 'react';

const Metric = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-semibold tracking-tight">{value}</div>
    <div className="mt-1 text-xs text-muted-foreground">{label}</div>
  </div>
);

const MetricsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border border-border rounded-lg p-6">
          <Metric value="99.98%" label="Uptime" />
          <Metric value="<120ms" label="Avg. response" />
          <Metric value="500k+" label="Tasks shipped" />
          <Metric value="120+" label="Teams onboarded" />
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
