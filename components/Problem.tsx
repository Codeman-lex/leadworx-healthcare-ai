import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { HourglassIcon, BoxIcon, ChartDownIcon } from './icons';

const Problem: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="bg-neutral-bg py-24 border-t border-neutral-line">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto fade-in-up">
          <p className="font-bold text-brand-purple tracking-widest text-xs uppercase mb-4">
            The Problem
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight tracking-tight">
            Marketing Agencies Are Failing <br /> Private Practices
          </h2>
          <p className="mt-6 text-lg text-text-secondary font-light">
            It's the same tired story, agency after agency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20 fade-in-up delay-200ms">
          {/* Problem 1 */}
          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col items-start text-left group">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-purple-50 text-brand-purple mb-8 group-hover:scale-110 transition-transform duration-300">
                <HourglassIcon className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold text-text-primary mb-4">Everything Takes Forever</h3>
            <p className="text-text-secondary leading-relaxed font-light">
              Campaigns take weeks to set up. There are always mistakes. Minor copy changes require endless back-and-forth emails.
            </p>
          </div>

          {/* Problem 2 */}
          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col items-start text-left group">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-purple-50 text-brand-purple mb-8 group-hover:scale-110 transition-transform duration-300">
                <BoxIcon className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold text-text-primary mb-4">It's Cheap & Cookie-Cutter</h3>
            <p className="text-text-secondary leading-relaxed font-light">
              Groupon-style deals attract price shoppers. "Custom" funnels are usually just your logo slapped on a tired, reused template.
            </p>
          </div>

          {/* Problem 3 */}
          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col items-start text-left group">
             <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-purple-50 text-brand-purple mb-8 group-hover:scale-110 transition-transform duration-300">
                <ChartDownIcon className="w-7 h-7" />
            </div>
            <h3 className="font-display text-xl font-bold text-text-primary mb-4">Results Get Worse</h3>
            <p className="text-text-secondary leading-relaxed font-light">
              Bookings fizzle out by month 3. You fire the agency, hire a new one, and chase a shinier guarantee. Repeat the cycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;