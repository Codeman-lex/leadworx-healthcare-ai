import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';


const SpecialtyChip: React.FC<{ children: React.ReactNode; onHover: () => void; isActive: boolean }> = ({ children, onHover, isActive }) => (
    <span 
        onMouseEnter={onHover}
        className={`inline-block font-medium rounded-full px-4 py-2 text-sm cursor-pointer transition-all duration-300 ${isActive ? 'bg-brand-purple text-white shadow-md' : 'bg-neutral-bg-light text-text-secondary hover:bg-white hover:text-brand-purple border border-neutral-line'}`}
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
    <section ref={sectionRef} className="relative bg-serve-bg bg-cover bg-center py-20 md:py-24">
        <div className="absolute inset-0 bg-neutral-bg/95 backdrop-blur-sm" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl relative">
        <div className="fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Built for the operational realities of private practice.
          </h2>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed min-h-[110px] md:min-h-[56px]">
            Whether you run an ophthalmology clinic, chiropractic office, medspa, dental practice, or men’s health center — the system reads your intake, routes in under a minute, protects show-rate, and documents every touch for your <span className="font-semibold text-brand-purple transition-all duration-300">{activeSpecialty}</span> team.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3 fade-in-up" style={{transitionDelay: '200ms'}} onMouseLeave={() => setActiveSpecialty('your')}>
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