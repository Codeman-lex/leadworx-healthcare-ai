
import React from 'react';

const metrics = [
    { label: "Revenue Generated YTD", value: "$12.4M+" },
    { label: "Patient Consults Booked", value: "142,000+" },
    { label: "Average ROI", value: "8.5x" },
    { label: "Clinics Partnered", value: "100+" },
    { label: "No-Show Reduction", value: "Avg 65%" },
    { label: "Revenue Generated YTD", value: "$12.4M+" }, // Repeat for loop
    { label: "Patient Consults Booked", value: "142,000+" },
    { label: "Average ROI", value: "8.5x" },
];

const Proof: React.FC = () => {
  return (
    <section className="bg-brand-dark border-y border-white/10 py-8 overflow-hidden">
      <div className="flex w-full">
          <div className="flex min-w-full animate-scroll-slow hover:[animation-play-state:paused]">
              {metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-4 px-12 border-r border-white/10 last:border-0">
                      <span className="text-3xl md:text-4xl font-bold text-white font-display whitespace-nowrap">{metric.value}</span>
                      <span className="text-xs md:text-sm text-slate-400 uppercase tracking-wider font-medium whitespace-nowrap">{metric.label}</span>
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
};

export default Proof;
