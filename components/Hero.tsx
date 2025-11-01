// FIX: Removed the unnecessary triple-slash directive for React types. The standard 'import React' is sufficient.
// FIX: Added a global type declaration for the 'wistia-player' custom element
// to ensure it is correctly picked up by the TypeScript compiler across the project.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'media-id'?: string; aspect?: string }, HTMLElement>;
    }
  }
}

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { StarIcon } from './icons';

interface HeroProps {
    ctaAction: () => void;
}

const Hero: React.FC<HeroProps> = ({ ctaAction }) => {
  const sectionRef = useScrollAnimation();
  return (
    <section 
      ref={sectionRef} 
      className="relative bg-hero-bg bg-cover bg-center"
    >
        <div className="absolute inset-0 bg-gray-900/75" aria-hidden="true"></div>

        <div className="relative container mx-auto px-6 py-24 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div className="fade-in-up text-center md:text-left">
                    <p className="font-semibold text-purple-300 flex items-center justify-center md:justify-start gap-2">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                        AI-POWERED PATIENT ACQUISITION
                    </p>
                    <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mt-4">
                        Get 25+ Financially Qualified Patients Every Month, Automatically.
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg md:text-xl text-gray-300 leading-relaxed">
                        We install an AI-driven system that delivers financially qualified patients to your practice, without your staff making a single phone call.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
                        <button onClick={ctaAction} className="bg-brand-purple hover:bg-brand-purple-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl w-full sm:w-auto">
                            Book a Free Call
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-800" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-800" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-800" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                            </div>
                            <div>
                                <div className="flex items-center justify-center sm:justify-start">
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                                </div>
                                <p className="text-sm text-gray-400 font-medium">#1 Trusted by Private Practices</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right Column (Wistia Video) */}
                <div className="fade-in-up md:order-last" style={{ transitionDelay: '200ms' }}>
                    <div className="w-full rounded-lg shadow-2xl overflow-hidden border-2 border-white/10">
                        <wistia-player media-id="c5suobwacz" aspect="1.7777777777777777"></wistia-player>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;