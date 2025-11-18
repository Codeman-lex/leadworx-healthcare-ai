
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { RocketIcon, UnicornIcon, ChartUpIcon } from './icons';

const Solution: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="bg-white py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto fade-in-up">
          <p className="font-semibold text-brand-purple tracking-wider text-sm uppercase mb-3">
            The Solution
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight">
            Take Patient Acquisition <br /> In-House
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            This used to be hard. With us, it's now easy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 fade-in-up delay-200ms">
          {/* Solution 1 */}
          <div className="bg-neutral-bg p-8 rounded-2xl border border-neutral-line shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white text-brand-purple mb-6 shadow-sm">
                <RocketIcon className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-text-primary mb-4">Launch & Edit Instantly</h3>
            <p className="text-text-secondary leading-relaxed">
              Set up campaigns in minutes, on your own or live with us on Zoom. Make changes in seconds, not weeks.
            </p>
          </div>

          {/* Solution 2 */}
          <div className="bg-neutral-bg p-8 rounded-2xl border border-neutral-line shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white text-brand-purple mb-6 shadow-sm">
                <UnicornIcon className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-text-primary mb-4">Premium & Personalized</h3>
            <p className="text-text-secondary leading-relaxed">
              Start with our high-performing playbooks, then edit to fit your brand. Leverage "what works" while still making it yours.
            </p>
          </div>

          {/* Solution 3 */}
          <div className="bg-neutral-bg p-8 rounded-2xl border border-neutral-line shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow">
             <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white text-brand-purple mb-6 shadow-sm">
                <ChartUpIcon className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-text-primary mb-4">Results Get Better</h3>
            <p className="text-text-secondary leading-relaxed">
              You're building an asset, not paying rent. Full ownership of your marketing data compounds your ROI over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
