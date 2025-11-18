
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { HourglassIcon, BoxIcon, ChartDownIcon } from './icons';

const Problem: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="bg-neutral-bg-light py-20 md:py-24 border-t border-neutral-line">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto fade-in-up">
          <p className="font-semibold text-red-500 tracking-wider text-sm uppercase mb-3">
            The Problem
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight">
            Marketing Agencies Are Failing <br /> Private Practices
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            It's the same issues, agency after agency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 fade-in-up delay-200ms">
          {/* Problem 1 */}
          <div className="bg-white p-8 rounded-2xl border border-neutral-line shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-neutral-bg text-text-primary mb-6">
                <HourglassIcon className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-text-primary mb-4">Everything Takes Forever</h3>
            <p className="text-text-secondary leading-relaxed">
              Campaigns take weeks to set up. There's always mistakes. Minor changes require endless back-and-forth emails.
            </p>
          </div>

          {/* Problem 2 */}
          <div className="bg-white p-8 rounded-2xl border border-neutral-line shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-neutral-bg text-text-primary mb-6">
                <BoxIcon className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-text-primary mb-4">It's Cheap & Cookie-Cutter</h3>
            <p className="text-text-secondary leading-relaxed">
              Groupon-style deals attract price shoppers. "Custom" funnels are usually just your logo slapped on a tired template.
            </p>
          </div>

          {/* Problem 3 */}
          <div className="bg-white p-8 rounded-2xl border border-neutral-line shadow-sm flex flex-col items-start text-left hover:shadow-md transition-shadow">
             <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-neutral-bg text-text-primary mb-6">
                <ChartDownIcon className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-text-primary mb-4">Results Get Worse</h3>
            <p className="text-text-secondary leading-relaxed">
              Bookings fizzle out by month 3. You fire the agency and chase a shinier guarantee. Repeat the cycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
