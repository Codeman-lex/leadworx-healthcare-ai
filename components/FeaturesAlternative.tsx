import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FeaturesAlternative: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="bg-neutral-bg py-24 border-t border-neutral-line">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto fade-in-up">
          <p className="font-bold text-brand-purple tracking-widest text-xs uppercase mb-4">
            Features
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight tracking-tight">
            The <span className="text-brand-purple">Better</span> Alternative
          </h2>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto font-light">
            For those fed up with agencies, but who don't want to go at it alone.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20 fade-in-up delay-200ms">
            
            {/* Feature Card 1 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-premium border border-gray-100 flex flex-col hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 group">
                <div className="bg-gradient-to-br from-purple-50 to-white p-10 flex items-center justify-center h-72 relative overflow-hidden">
                     {/* UI Visual - Catalog */}
                     <div className="relative w-full max-w-[240px]">
                        <div className="absolute top-0 right-0 -mr-4 -mt-4 w-full h-full bg-purple-500/5 rounded-2xl transform rotate-6"></div>
                        <div className="relative bg-white rounded-xl shadow-xl border border-gray-100 p-4 transform -rotate-2 transition-transform group-hover:rotate-0 duration-500 group-hover:scale-105">
                            <div className="flex items-center space-x-2 mb-3 border-b border-gray-50 pb-2">
                                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-brand-purple">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                </div>
                                <div>
                                    <div className="h-2 w-24 bg-gray-800 rounded-full"></div>
                                    <div className="h-1.5 w-12 bg-gray-300 rounded-full mt-1.5"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-10 bg-gray-50 rounded-lg border border-gray-100 flex items-center px-2">
                                    <div className="h-2 w-full bg-gray-200 rounded-full opacity-50"></div>
                                </div>
                                <div className="h-10 bg-gray-50 rounded-lg border border-gray-100 flex items-center px-2">
                                    <div className="h-2 w-2/3 bg-gray-200 rounded-full opacity-50"></div>
                                </div>
                            </div>
                            <div className="absolute bottom-2 right-2">
                                <div className="px-2 py-1 bg-green-100 text-green-600 text-[8px] font-bold rounded uppercase">High Conv.</div>
                            </div>
                        </div>
                     </div>
                </div>
                <div className="p-8 md:p-10 pt-4 flex-1">
                    <h3 className="font-display text-2xl font-bold text-text-primary mb-3">Proven Offer Library</h3>
                    <p className="text-text-secondary leading-relaxed font-light">
                        Bye-bye discounted leads. Choose from our catalog of 120+ high-value, compliant offers designed to attract quality patients.
                    </p>
                </div>
            </div>

             {/* Feature Card 2 */}
             <div className="bg-white rounded-[2rem] overflow-hidden shadow-premium border border-gray-100 flex flex-col hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 group">
                <div className="bg-gradient-to-br from-blue-50 to-white p-10 flex items-center justify-center h-72 relative overflow-hidden">
                     {/* UI Visual - Launcher */}
                     <div className="relative w-full max-w-[260px] bg-white rounded-xl shadow-xl border border-gray-100 p-5 transform transition-transform group-hover:scale-105 duration-500">
                        <div className="flex justify-between items-center mb-4 border-b border-gray-50 pb-2">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            </div>
                            <div className="text-[10px] font-mono text-gray-400">campaign_launcher.exe</div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg border border-blue-100">
                                <div className="w-8 h-8 rounded-md bg-brand-blue flex items-center justify-center text-white shadow-md">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <div className="flex-1">
                                    <div className="h-2 w-16 bg-blue-900/20 rounded-full"></div>
                                    <div className="h-1.5 w-10 bg-blue-900/10 rounded-full mt-1.5"></div>
                                </div>
                                <div className="w-4 h-4 rounded-full border-2 border-brand-blue flex items-center justify-center">
                                    <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                                </div>
                            </div>
                            <div className="h-8 w-full bg-slate-800 rounded-lg flex items-center justify-center shadow-lg cursor-pointer group-hover:bg-brand-purple transition-colors">
                                <span className="text-[10px] font-bold text-white tracking-wide">LAUNCH CAMPAIGN</span>
                            </div>
                        </div>
                     </div>
                </div>
                <div className="p-8 md:p-10 pt-4 flex-1">
                    <h3 className="font-display text-2xl font-bold text-text-primary mb-3">3-Click Launch Engine</h3>
                    <p className="text-text-secondary leading-relaxed font-light">
                        Launch compliant campaigns in seconds, not weeks. We handle the integrations. Zero tech or marketing experience required.
                    </p>
                </div>
            </div>

             {/* Feature Card 3 */}
             <div className="bg-white rounded-[2rem] overflow-hidden shadow-premium border border-gray-100 flex flex-col hover:shadow-premium-hover hover:-translate-y-1 transition-all duration-300 group">
                <div className="bg-gradient-to-br from-green-50 to-white p-10 flex items-center justify-center h-72">
                     {/* UI Visual - AI Chat */}
                     <div className="w-full max-w-[240px] space-y-3 transition-transform group-hover:scale-105 duration-500">
                        <div className="flex justify-end">
                            <div className="bg-brand-purple text-white text-[11px] py-2.5 px-4 rounded-2xl rounded-tr-sm shadow-md max-w-[90%] font-medium leading-relaxed">
                                Do you have availability this Friday at 2pm?
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <div className="bg-white text-gray-700 text-[11px] py-2.5 px-4 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 max-w-[90%] font-medium leading-relaxed">
                                <span className="text-brand-purple font-bold text-[9px] block mb-1 uppercase tracking-wider flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> AI AGENT
                                </span>
                                Yes! We have a slot. I've held it for 10 mins. Shall I book it?
                            </div>
                        </div>
                         <div className="flex justify-end">
                            <div className="bg-brand-purple text-white text-[11px] py-2.5 px-4 rounded-2xl rounded-tr-sm shadow-md max-w-[90%] font-medium leading-relaxed opacity-90">
                                Yes please, book it.
                            </div>
                        </div>
                     </div>
                </div>
                <div className="p-8 md:p-10 pt-4 flex-1">
                    <h3 className="font-display text-2xl font-bold text-text-primary mb-3">HIPAA-Compliant AI</h3>
                    <p className="text-text-secondary leading-relaxed font-light">
                        Our AI agents nurture every lead 24/7 until they are ready to book. Tailor-built for aesthetics and medical practices.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesAlternative;