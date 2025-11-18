
import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';


const SpecialtyChip: React.FC<{ children: React.ReactNode; onHover: () => void; isActive: boolean }> = ({ children, onHover, isActive }) => (
    <span 
        onMouseEnter={onHover}
        className={`inline-block font-medium rounded-full px-6 py-3 text-sm md:text-base cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${isActive ? 'bg-brand-purple text-white shadow-glow' : 'bg-white text-slate-600 hover:bg-purple-50 hover:text-brand-purple border border-slate-200 shadow-sm'}`}
    >
        {children}
    </span>
);

const SPECIALTIES = [
    'Men’s Health', 'Women’s HRT', 'Regenerative/Pain', 'Dental', 
    'Aesthetics', 'Chiropractic', 'Mental Health/Ketamine', 
    'Functional Medicine', 'Ophthalmology'
];

const WhoWeServe: React.FC = () => {
  const [activeSpecialty, setActiveSpecialty] = useState('your');
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="relative bg-slate-50 py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
      <div className="container mx-auto px-4 sm:px-6 text-center max-w-5xl relative z-10">
        <div className="fade-in-up">
            <p className="text-brand-purple font-bold tracking-widest text-xs uppercase mb-4">
                Built For Private Practice
            </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-8">
            Engineered for the operational <br/> realities of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">{activeSpecialty === 'your' ? 'modern' : activeSpecialty}</span> clinics.
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Whether you run a medspa or a dental practice, our system reads your intake, routes in under a minute, and protects show-rates.
          </p>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4 fade-in-up delay-100ms" onMouseLeave={() => setActiveSpecialty('your')}>
          {SPECIALTIES.map(spec => 
            <SpecialtyChip 
                key={spec} 
                onHover={() => setActiveSpecialty(spec)}
                isActive={activeSpecialty === spec}
            >
                {spec}
            </SpecialtyChip>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
