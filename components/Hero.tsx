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
        {/* Stronger overlay for the new premium gradient background */}
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[1px]" aria-hidden="true"></div>
        
        {/* Subtle mesh pattern overlay */}
        <div 
            className="absolute inset-0 opacity-10"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
        ></div>

        <div className="relative container mx-auto px-6 pt-32 pb-20 md:pt-48 md:pb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                <div className="fade-in-up text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-purple-100 text-xs font-bold tracking-widest uppercase mb-6">
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                        AI-Powered Patient Acquisition
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                        Get 25+ Financially <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">Qualified Patients</span> Automatically.
                    </h1>
                    <p className="mt-8 max-w-2xl mx-auto md:mx-0 text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                        We install an AI-driven infrastructure that delivers financially qualified patients to your practice, without your staff making a single phone call.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
                        <button onClick={ctaAction} className="bg-brand-purple hover:bg-brand-purple-dark text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto border border-purple-400/20 ring-1 ring-purple-500/50">
                            Book a Free Call
                        </button>
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                <img className="inline-block h-12 w-12 rounded-full ring-2 ring-slate-900 grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <img className="inline-block h-12 w-12 rounded-full ring-2 ring-slate-900 grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <img className="inline-block h-12 w-12 rounded-full ring-2 ring-slate-900 grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                            </div>
                            <div>
                                <div className="flex items-center justify-center sm:justify-start gap-0.5">
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="text-yellow-400 w-4 h-4" />)}
                                </div>
                                <p className="text-sm text-slate-400 font-medium mt-0.5">Trusted by 100+ Clinics</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right Column (Wistia Video) */}
                <div className="fade-in-up md:order-last" style={{ transitionDelay: '200ms' }}>
                    <div className="w-full rounded-2xl shadow-2xl overflow-hidden border-4 border-white/10 bg-slate-900 relative group">
                         <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                         <div className="relative rounded-xl overflow-hidden">
                            {React.createElement('wistia-player', { 'media-id': 'c5suobwacz', aspect: '1.7777777777777777' })}
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;