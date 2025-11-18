
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const logos = [
  { 
    name: 'Lumina Aesthetics', 
    component: (
       <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center text-amber-600 shadow-sm border border-amber-100/50">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
             </svg>
          </div>
          <div className="flex flex-col">
             <span className="font-display font-bold text-lg text-gray-900 leading-none">Lumina</span>
             <span className="text-[10px] text-amber-600 font-bold uppercase tracking-widest leading-tight">Aesthetics</span>
          </div>
       </div>
    )
  },
  { 
    name: 'Vertex Dental', 
    component: (
       <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-blue-200 shadow-lg">
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
             </svg>
          </div>
          <span className="font-sans font-black text-xl text-slate-800 tracking-tighter">VERTEX</span>
       </div>
    )
  },
  { 
    name: 'Nova Chiro', 
    component: (
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
        </div>
        <div>
             <span className="font-display font-bold text-xl text-gray-900 block leading-none">NOVA</span>
             <span className="text-[9px] text-purple-500 font-medium uppercase tracking-widest block leading-none mt-0.5">Spine & Sport</span>
        </div>
      </div>
    )
  },
  { 
    name: 'PureSkin', 
    component: (
      <div className="flex items-center gap-2">
         <div className="w-9 h-9 rounded-tr-xl rounded-bl-xl bg-rose-500 flex items-center justify-center text-white shadow-md">
             <span className="font-serif italic font-bold text-xl pr-1 pt-1">P</span>
         </div>
         <span className="font-serif italic text-2xl text-slate-800">PureSkin</span>
      </div>
    )
  },
  { 
    name: 'Horizon Health', 
    component: (
      <div className="flex items-center gap-2">
         <div className="w-10 h-10 flex items-center justify-center bg-teal-50 rounded-full text-teal-600">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
         </div>
         <span className="font-sans font-bold text-lg text-teal-900 tracking-tight">HORIZON</span>
      </div>
    )
  },
  {
      name: 'Apex',
      component: (
          <div className="flex items-center gap-2">
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-b-[20px] border-b-indigo-600 border-r-[10px] border-r-transparent drop-shadow-md"></div>
              <span className="font-display font-black text-2xl text-slate-900 tracking-tighter">APEX</span>
          </div>
      )
  },
  {
      name: 'Vitality',
      component: (
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center text-white font-bold text-xl shadow-emerald-200 shadow-lg">V</div>
            <span className="font-display font-bold text-xl text-emerald-950">Vitality</span>
        </div>
      )
  },
  {
    name: 'Elevate',
    component: (
        <div className="flex items-center gap-2">
            <div className="flex flex-col -space-y-1">
                <svg className="w-6 h-4 text-sky-500" viewBox="0 0 24 12" fill="currentColor"><path d="M12 0L24 12H0L12 0Z"/></svg>
                <svg className="w-6 h-4 text-sky-300" viewBox="0 0 24 12" fill="currentColor"><path d="M12 0L24 12H0L12 0Z"/></svg>
            </div>
            <span className="font-sans font-medium text-xl text-slate-600 tracking-wide">ELEVATE</span>
        </div>
    )
  }
];

const allLogos = [...logos, ...logos]; 

const TrustedBy: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="bg-white py-12 border-b border-neutral-line overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center fade-in-up px-4 sm:px-6 mb-10">
          <p className="font-sans text-sm font-semibold text-text-secondary tracking-widest uppercase">
            Trusted By <span className="text-brand-purple">100+</span> Market-Leading Clinics
          </p>
        </div>
        <div
          className="slider relative w-full overflow-hidden fade-in-up"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="slider-track flex w-max animate-scroll items-center hover:[animation-play-state:paused]">
            {allLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-64 px-8 flex items-center justify-center h-24 hover:scale-105 transition-transform duration-300 cursor-default" aria-hidden={index >= logos.length}>
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
