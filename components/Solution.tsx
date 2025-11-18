import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { RocketIcon, UnicornIcon, ChartUpIcon } from './icons';

const Solution: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="bg-white py-24 border-t border-neutral-line">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto fade-in-up">
          <p className="font-bold text-brand-purple tracking-widest text-xs uppercase mb-4">
            The Solution
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight tracking-tight">
            Take Patient Acquisition <br /> In-House
          </h2>
          <p className="mt-6 text-lg text-text-secondary font-light">
            This used to be hard. With us, it's now easy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20 fade-in-up delay-200ms">
          {/* Solution 1 */}
          <div className="bg-neutral-bg p-10 rounded-3xl border border-transparent hover:border-gray-200 shadow-sm hover:shadow-premium-hover transition-all duration-300 flex flex-col items-start text-left group">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white text-brand-blue mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <RocketIcon className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold text-text-primary mb-4">Launch & Edit Instantly</h3>
            <p className="text-text-secondary leading-relaxed font-light">
              Set up campaigns in minutes, on your own or live with us on Zoom. Make changes in seconds, not weeks.
            </p>
          </div>

          {/* Solution 2 */}
          <div className="bg-neutral-bg p-10 rounded-3xl border border-transparent hover:border-gray-200 shadow-sm hover:shadow-premium-hover transition-all duration-300 flex flex-col items-start text-left group">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white text-brand-blue mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <UnicornIcon className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold text-text-primary mb-4">Premium & Personalized</h3>
            <p className="text-text-secondary leading-relaxed font-light">
              Start with our high-performing playbooks, then edit to fit your brand. Leverage "what works" while still making it yours.
            </p>
          </div>

          {/* Solution 3 */}
          <div className="bg-neutral-bg p-10 rounded-3xl border border-transparent hover:border-gray-200 shadow-sm hover:shadow-premium-hover transition-all duration-300 flex flex-col items-start text-left group">
             <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white text-brand-blue mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <ChartUpIcon className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold text-text-primary mb-4">Results Get Better</h3>
            <p className="text-text-secondary leading-relaxed font-light">
              You're building an asset, not paying rent. Full ownership of your marketing data compounds your ROI over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;