import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { RocketIcon, UnicornIcon, ChartUpIcon } from './icons';

const Solution: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="bg-brand-dark py-24 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-purple/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto fade-in-up">
          <p className="font-bold text-brand-purple-glow tracking-widest text-xs uppercase mb-4">
            The Solution
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Take Patient Acquisition <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">In-House</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 font-light">
            This used to be hard. With our automated infrastructure, it's now easy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20 fade-in-up delay-200ms">
          {/* Solution 1 */}
          <div className="glass-dark p-10 rounded-3xl hover:bg-white/5 transition-all duration-300 flex flex-col items-start text-left group border border-white/5 hover:border-brand-purple/30 hover:shadow-glow">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-brand-purple/20 text-brand-purple-light mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <RocketIcon className="w-8 h-8" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-4">Launch Instantly</h3>
            <p className="text-slate-400 leading-relaxed font-light">
              Set up campaigns in minutes. Our pre-built templates mean you can launch a proven system without the tech headache.
            </p>
          </div>

          {/* Solution 2 */}
          <div className="glass-dark p-10 rounded-3xl hover:bg-white/5 transition-all duration-300 flex flex-col items-start text-left group border border-white/5 hover:border-brand-purple/30 hover:shadow-glow">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300 mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <UnicornIcon className="w-8 h-8" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-4">Premium & Personalized</h3>
            <p className="text-slate-400 leading-relaxed font-light">
              Leverage "what works" while keeping your brand voice. Customize our high-performing playbooks to fit your clinic perfectly.
            </p>
          </div>

          {/* Solution 3 */}
          <div className="glass-dark p-10 rounded-3xl hover:bg-white/5 transition-all duration-300 flex flex-col items-start text-left group border border-white/5 hover:border-brand-purple/30 hover:shadow-glow">
             <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-green-500/20 text-green-300 mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <ChartUpIcon className="w-8 h-8" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-4">Results Get Better</h3>
            <p className="text-slate-400 leading-relaxed font-light">
              You're building an asset, not paying rent. Full ownership of your marketing data means your ROI compounds over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;