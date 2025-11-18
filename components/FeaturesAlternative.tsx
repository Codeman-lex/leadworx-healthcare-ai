
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FeaturesAlternative: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="bg-neutral-bg py-20 md:py-24 border-t border-neutral-line">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto fade-in-up">
          <p className="font-semibold text-brand-purple tracking-wider text-sm uppercase mb-3">
            Features
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight">
            The New & Better Alternative
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            For those fed up with agencies, but still don't want to go at it alone.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16 fade-in-up delay-200ms">
            
            {/* Feature Card 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-neutral-line flex flex-col">
                <div className="bg-purple-50 p-8 flex items-center justify-center h-64">
                     {/* Placeholder for UI Visual - Catalog */}
                     <img 
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Offer Catalog UI" 
                        className="w-48 h-auto rounded-lg shadow-xl transform rotate-[-5deg]" 
                     />
                     <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Offer Catalog UI 2" 
                        className="w-48 h-auto rounded-lg shadow-xl transform rotate-[5deg] -ml-12 mt-8 border-2 border-white" 
                     />
                </div>
                <div className="p-8 flex-1">
                    <h3 className="font-display text-2xl font-bold text-text-primary mb-3">Proven Offer Library</h3>
                    <p className="text-text-secondary leading-relaxed">
                        Bye-bye discounted leads. Choose from our catalog of 120+ high-value, compliant offers designed to attract quality patients.
                    </p>
                </div>
            </div>

             {/* Feature Card 2 */}
             <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-neutral-line flex flex-col">
                <div className="bg-blue-50 p-8 flex items-center justify-center h-64 relative overflow-hidden">
                     {/* Placeholder for UI Visual - Launcher */}
                     <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <svg className="w-full h-full text-brand-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                     </div>
                     <div className="bg-white rounded-xl shadow-2xl p-4 w-3/4 z-10 border border-gray-100">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 bg-gray-100 rounded w-full"></div>
                            <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                            <button className="mt-2 bg-brand-blue text-white text-xs font-bold py-1 px-3 rounded w-full">Launch Campaign</button>
                        </div>
                     </div>
                </div>
                <div className="p-8 flex-1">
                    <h3 className="font-display text-2xl font-bold text-text-primary mb-3">3-Click Launch Engine</h3>
                    <p className="text-text-secondary leading-relaxed">
                        Launch compliant campaigns in seconds, not weeks. We handle the integrations. Zero tech or marketing experience required.
                    </p>
                </div>
            </div>

             {/* Feature Card 3 */}
             <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-neutral-line flex flex-col">
                <div className="bg-green-50 p-8 flex items-center justify-center h-64">
                     {/* Placeholder for UI Visual - AI Chat */}
                     <div className="w-full max-w-xs space-y-3">
                        <div className="flex justify-end">
                            <div className="bg-brand-purple text-white text-xs py-2 px-4 rounded-l-xl rounded-tr-xl shadow-sm max-w-[80%]">
                                Do you have availability this Friday?
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <div className="bg-white text-gray-800 text-xs py-2 px-4 rounded-r-xl rounded-tl-xl shadow-sm border border-gray-100 max-w-[80%]">
                                Yes! We have a slot at 2:00 PM. Shall I book it for you?
                            </div>
                        </div>
                         <div className="flex justify-end">
                            <div className="bg-brand-purple text-white text-xs py-2 px-4 rounded-l-xl rounded-tr-xl shadow-sm max-w-[80%]">
                                That works perfectly.
                            </div>
                        </div>
                     </div>
                </div>
                <div className="p-8 flex-1">
                    <h3 className="font-display text-2xl font-bold text-text-primary mb-3">HIPAA-Compliant AI Agents</h3>
                    <p className="text-text-secondary leading-relaxed">
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
