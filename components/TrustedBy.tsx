import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const logos = [
  // Aura: Pink icon, dark text
  { name: 'Aura Aesthetics', component: (
    <div className="text-center group">
      <svg className="h-8 w-8 mx-auto text-pink-400 group-hover:text-pink-500 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
      <span className="font-display text-xl text-gray-600 group-hover:text-gray-900 transition-colors mt-2 block">Aura Aesthetics</span>
    </div>
  )},
  // Vertex: Blue icon, dark text
  { name: 'Vertex Dental', component: (
    <div className="flex items-center gap-x-3 group">
      <svg className="h-7 w-7 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 18l-10-14L2 18" />
        <path d="M12 2v20" />
      </svg>
      <span className="font-sans text-xl font-bold tracking-wide text-gray-600 group-hover:text-gray-900 transition-colors">VERTEX</span>
    </div>
  )},
  // Elan: Purple wordmark
  { name: 'Élan Medspa', component: (
    <div className="text-center group">
      <span className="font-display text-4xl italic text-purple-500 group-hover:text-purple-600 transition-colors duration-300">Élan</span>
      <p className="text-xs tracking-widest text-purple-400 group-hover:text-purple-500 transition-colors duration-300">MEDSPA</p>
    </div>
  )},
  // Align: Teal icon, dark text
  { name: 'Align Chiropractic', component: (
    <div className="flex items-center gap-x-3 group">
      <svg className="h-8 w-8 text-teal-500 group-hover:text-teal-600 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4C12 4 8 8 8 12S12 20 12 20" />
          <path d="M12 4C12 4 16 8 16 12S12 20 12 20" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <circle cx="9.5" cy="8" r="1" fill="currentColor" />
          <circle cx="14.5" cy="16" r="1" fill="currentColor" />
      </svg>
      <span className="font-sans text-xl font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">ALIGN</span>
    </div>
  )},
  // Serenity: Green icon, dark text
  { name: 'Serenity Health', component: (
    <div className="flex items-center gap-x-3 group">
      <svg className="h-8 w-8 text-green-500 group-hover:text-green-600 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 17c0-2.8 2.2-5 5-5s5 2.2 5 5H2z" />
        <path d="M12 17c0-2.8 2.2-5 5-5s5 2.2 5 5h-10z" />
        <path d="M7 12c0-2.8 2.2-5 5-5s5 2.2 5 5" />
        <path d="M7 17a5 5 0 0 0 10 0" />
      </svg>
      <span className="font-sans text-xl text-gray-600 group-hover:text-gray-900 transition-colors">Serenity Health</span>
    </div>
  )},
  // Prestige: Amber monogram, dark text
  { name: 'Prestige Surgery', component: (
    <div className="flex items-center gap-x-2 group">
      <div className="w-8 h-8 flex items-center justify-center font-display font-bold">
          <span className="text-4xl text-amber-500 group-hover:text-amber-600 transition-colors duration-300">P</span>
          <span className="text-2xl text-amber-300 group-hover:text-amber-400 transition-colors duration-300 -ml-2 mt-2">S</span>
      </div>
      <span className="font-sans text-xl font-semibold ml-1 text-gray-600 group-hover:text-gray-900 transition-colors">Prestige</span>
    </div>
  )},
  // Vitality: Orange icon, dark text
  { name: 'Vitality HRT', component: (
      <div className="flex items-center gap-x-3 group">
          <svg className="h-6 w-6 text-orange-500 group-hover:text-orange-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h3l3-9 6 18 3-9h3" />
          </svg>
          <div className="font-sans font-black text-center">
            <span className="text-xl text-gray-600 group-hover:text-gray-900 transition-colors">VITALITY</span>
          </div>
      </div>
  )},
  // Lumina: Sky icon, dark text
  { name: 'LUMINA Laser', component: (
    <div className="text-center group">
      <svg className="h-8 w-8 mx-auto text-sky-400 group-hover:text-sky-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2 L12 22" />
          <path d="M2 12 L22 12" />
          <path d="M5 5 L19 19" />
          <path d="M5 19 L19 5" />
      </svg>
      <span className="font-sans text-xl tracking-[0.2em] text-gray-600 group-hover:text-gray-900 transition-colors mt-2 block">LUMINA</span>
    </div>
  )},
];

const allLogos = [...logos, ...logos]; // Duplicate for a seamless scroll

const TrustedBy: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="bg-neutral-bg-light py-20 md:py-24 border-b border-neutral-line">
      <div className="container mx-auto">
        <div className="text-center fade-in-up px-6">
          <h3 className="font-sans text-sm font-semibold text-text-secondary tracking-widest uppercase">
            Trusted By <span className="text-brand-purple">100+</span> Aesthetic Clinics Internationally
          </h3>
        </div>
        <div
          className="slider relative mt-12 w-full overflow-hidden fade-in-up"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="slider-track flex w-max animate-scroll">
            {allLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-64 px-8 flex items-center justify-center h-24" aria-hidden={index >= logos.length}>
                {logo.component}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;