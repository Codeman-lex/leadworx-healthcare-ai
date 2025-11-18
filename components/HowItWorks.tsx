
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HowItWorks: React.FC = () => {
  const sectionRef = useScrollAnimation();
  return (
    <section ref={sectionRef} className="bg-white py-24 border-b border-neutral-line relative overflow-hidden">
      {/* Decorative Line */}
      <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent -translate-y-12"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-20 fade-in-up">
           <p className="text-brand-purple font-bold tracking-widest text-xs uppercase mb-4">
                The Mechanism
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                An Operating System <br/> for Practice Growth
            </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Step 1 */}
            <div className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 fade-in-up hover:-translate-y-1 group">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-brand-purple text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">1</div>
                <div className="mt-6 mb-6 h-48 bg-purple-50 rounded-2xl flex items-center justify-center overflow-hidden relative">
                    {/* Visual for Step 1 */}
                    <div className="absolute inset-0 opacity-50 bg-[radial-gradient(#e9d5ff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100 w-48 space-y-3 relative z-10">
                         <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg></div>
                                <span className="text-xs font-bold text-gray-700">Lead In</span>
                            </div>
                            <span className="text-[10px] text-gray-400">Now</span>
                         </div>
                         <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                             <div className="h-full w-2/3 bg-brand-purple animate-pulse"></div>
                         </div>
                         <div className="text-[10px] text-gray-500">AI Analyzing Intent...</div>
                    </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-text-primary mb-3">Capture & Triage</h3>
                <p className="text-slate-600 leading-relaxed">
                    Our AI monitors calls, forms, and SMS 24/7. It engages instantly, filters out the tire-kickers, and routes qualified patients to your schedule in under 60 seconds.
                </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 fade-in-up delay-100ms hover:-translate-y-1 group">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">2</div>
                <div className="mt-6 mb-6 h-48 bg-blue-50 rounded-2xl flex items-center justify-center overflow-hidden relative">
                     <div className="absolute inset-0 opacity-50 bg-[radial-gradient(#bfdbfe_1px,transparent_1px)] [background-size:16px_16px]"></div>
                     <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 w-48 relative z-10 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-3">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                        <div className="text-sm font-bold text-gray-800">Appointment Confirmed</div>
                        <div className="text-[10px] text-gray-500 mt-1">Reminder sent via SMS & Email</div>
                     </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-text-primary mb-3">Nurture & Protect</h3>
                <p className="text-slate-600 leading-relaxed">
                    Once booked, the system takes over. Multi-touch automated reminders and deposit collection workflows reduce no-shows by up to 80%.
                </p>
            </div>

             {/* Step 3 */}
             <div className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 fade-in-up delay-200ms hover:-translate-y-1 group">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">3</div>
                <div className="mt-6 mb-6 h-48 bg-green-50 rounded-2xl flex items-center justify-center overflow-hidden relative">
                     <div className="absolute inset-0 opacity-50 bg-[radial-gradient(#bbf7d0_1px,transparent_1px)] [background-size:16px_16px]"></div>
                     <div className="bg-white p-3 rounded-xl shadow-sm border border-green-100 w-48 relative z-10 space-y-2">
                        <div className="flex justify-between items-center">
                             <span className="text-[10px] font-bold uppercase text-gray-400">Compliance Log</span>
                             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        </div>
                        <div className="space-y-1.5">
                            <div className="h-1.5 w-full bg-gray-100 rounded-full"></div>
                            <div className="h-1.5 w-3/4 bg-gray-100 rounded-full"></div>
                            <div className="h-1.5 w-5/6 bg-gray-100 rounded-full"></div>
                            <div className="p-1.5 bg-green-50 rounded border border-green-100 flex items-center gap-2">
                                <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className="text-[9px] font-bold text-green-700">Audit Passed</span>
                            </div>
                        </div>
                     </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-text-primary mb-3">Compliance & Scale</h3>
                <p className="text-slate-600 leading-relaxed">
                    Every touchpoint is audit-logged for HIPAA compliance. You get a scalable, secure asset that grows with your clinic, not a temporary marketing rental.
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
