
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
      className="relative overflow-hidden bg-brand-dark lg:min-h-screen flex items-center pt-24 pb-12 lg:py-0"
    >
        {/* Ambient Background Effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-brand-purple/30 rounded-full blur-[120px] animate-pulse-glow pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-brand-blue/20 rounded-full blur-[100px] animate-pulse-glow pointer-events-none" style={{animationDelay: '1s'}}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-100 mix-blend-overlay pointer-events-none"></div>

        <div className="relative container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                
                {/* Content Column */}
                <div className="fade-in-up z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-brand-purple-light text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-6 shadow-lg shadow-purple-500/10 hover:bg-white/10 transition-colors duration-300 cursor-default">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        AI-Powered Patient Acquisition
                    </div>

                    {/* Headline */}
                    <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-[1.15] sm:leading-[1.1] tracking-tight mb-6 max-w-3xl lg:max-w-none mx-auto">
                        Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">25+ Financially Qualified</span> Patients Automatically.
                    </h1>
                    
                    {/* Subheadline */}
                    <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed font-light mb-8">
                        We install a proprietary AI infrastructure that fills your calendar with financially qualified patients—without your staff making a single phone call.
                    </p>
                    
                    {/* CTA Area */}
                    <div className="flex flex-col w-full sm:w-auto items-center lg:items-start gap-4">
                        <button onClick={ctaAction} className="w-full sm:w-auto group relative bg-brand-purple hover:bg-brand-purple-dark text-white font-bold py-3.5 px-8 rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(124,58,237,0.39)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.23)] overflow-hidden">
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                            <span className="relative flex items-center justify-center gap-2">
                                Book a Free Strategy Call
                            </span>
                        </button>
                        
                        {/* Social Proof */}
                        <div className="flex items-center justify-center gap-3 mt-2 opacity-80">
                             <div className="flex -space-x-2">
                                {['https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'].map((src, i) => (
                                    <img key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-brand-dark object-cover" src={src} alt="User" />
                                ))}
                            </div>
                            <div className="text-left">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="text-yellow-400 w-3.5 h-3.5 fill-current" />)}
                                </div>
                                <p className="text-[10px] text-slate-400 font-medium leading-tight">Trusted by 100+ Clinics</p>
                            </div>
                        </div>
                    </div>

                </div>
                
                {/* Visual Column */}
                <div className="fade-in-up lg:order-last z-10 relative mt-6 lg:mt-0" style={{ transitionDelay: '200ms' }}>
                    {/* Decorative elements around the video */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-40 animate-pulse-glow"></div>
                    
                    {/* Main Video Container */}
                    <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-white/10 bg-slate-900/80 backdrop-blur-sm transform transition-transform duration-500 group">
                         {/* Header of the 'App' Window */}
                         <div className="bg-white/5 border-b border-white/5 p-2.5 flex items-center gap-2">
                             <div className="flex gap-1.5">
                                 <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                                 <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                             </div>
                             <div className="ml-2 px-3 py-0.5 rounded-full bg-black/40 text-[9px] text-gray-400 font-mono border border-white/5">
                                 dashboard.leadworx.ai
                             </div>
                         </div>
                         <div className="aspect-video relative bg-black">
                            {React.createElement('wistia-player', { 'media-id': 'c5suobwacz', aspect: '1.7777777777777777' })}
                         </div>
                    </div>

                    {/* Floating Badge 1 */}
                    <div className="absolute -top-6 -right-6 md:-right-12 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl animate-float hidden md:block">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-300 uppercase tracking-wider font-bold">Revenue Added</p>
                                <p className="text-xl font-bold text-white">+$12,450</p>
                            </div>
                        </div>
                    </div>
                     {/* Floating Badge 2 */}
                    <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl animate-float hidden md:block" style={{animationDelay: '2s'}}>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple-light">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-300 uppercase tracking-wider font-bold">New Bookings</p>
                                <p className="text-xl font-bold text-white">42 This Week</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
