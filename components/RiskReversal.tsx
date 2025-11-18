
import React from 'react';

const RiskReversal: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-bg relative">
        <div className="container mx-auto px-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                
                {/* Decorative Background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                     <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-purple rounded-full blur-[100px]"></div>
                     <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px]"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 bg-gradient-to-b from-yellow-300 to-yellow-600 rounded-full flex items-center justify-center shadow-lg mb-8 border-4 border-slate-800">
                        <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">Ironclad</span> Guarantee
                    </h2>
                    
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
                        We are so confident in our infrastructure that we bear the risk. We agree on clear KPI targets before we start.
                    </p>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
                        <p className="font-serif italic text-xl md:text-2xl text-white">
                            "If we don't hit the agreed upon patient volume metrics, we work for free until we do."
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default RiskReversal;
