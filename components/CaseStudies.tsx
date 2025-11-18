
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { IncreaseRevenueIcon, CheckIcon } from './icons';

interface CaseStudyProps {
  niche: string;
  headline: string;
  stats: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  image: string;
  delay: string;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({ niche, headline, stats, challenge, solution, image, delay }) => (
  <div className={`group relative overflow-hidden rounded-[2rem] bg-slate-900 fade-in-up ${delay}`}>
    {/* Background Image with Gradient Overlay */}
    <div className="absolute inset-0">
      <img src={image} alt={headline} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
    </div>

    <div className="relative p-8 md:p-10 h-full flex flex-col justify-end min-h-[500px]">
      <div className="mb-auto">
         <span className="inline-block px-3 py-1 rounded-full bg-brand-purple/20 border border-brand-purple/30 text-brand-purple-light text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
            {niche}
         </span>
      </div>

      <h3 className="font-display text-3xl font-bold text-white mb-6 leading-tight">
        {headline}
      </h3>

      <div className="grid grid-cols-2 gap-4 mb-8 border-t border-white/10 pt-6">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <p className="text-3xl font-bold text-brand-purple-light">{stat.value}</p>
            <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4 text-sm text-slate-300">
        <div className="flex gap-3">
           <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
           <p><span className="font-bold text-white">The Challenge:</span> {challenge}</p>
        </div>
         <div className="flex gap-3">
           <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></div>
           <p><span className="font-bold text-white">The Fix:</span> {solution}</p>
        </div>
      </div>
    </div>
  </div>
);

const CaseStudies: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="bg-brand-dark py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 fade-in-up">
          <div className="max-w-2xl">
            <p className="text-brand-purple font-bold tracking-widest text-xs uppercase mb-4">
                Real Results
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
               We don't just promise growth. <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">We engineer it.</span>
            </h2>
          </div>
          <div className="mb-2">
             <button className="text-white border-b border-white/30 hover:border-white pb-1 transition-all hover:translate-x-1 flex items-center gap-2">
                View all case studies 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
             </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseStudyCard 
            niche="MedSpa & Aesthetics"
            headline="Adding $52k in New Revenue in 30 Days"
            image="https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            stats={[
              { label: "Revenue Added", value: "+$52k" },
              { label: "New Consults", value: "48" }
            ]}
            challenge="Relying on sporadic word-of-mouth, leaving unpredictable gaps in the schedule."
            solution="Launched 'Database Reactivation' engine and high-ticket offer. Fully booked in 72h."
            delay="delay-100ms"
          />

          <CaseStudyCard 
            niche="Chiropractic"
            headline="Cutting No-Show Rates from 35% to 8%"
            image="https://images.pexels.com/photos/4506166/pexels-photo-4506166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            stats={[
              { label: "No-Show Rate", value: "8%" },
              { label: "Saved Revenue", value: "$18k/mo" }
            ]}
            challenge="Front desk spent 4h/day on confirmations, yet 1 in 3 patients still ghosted."
            solution="Implemented multi-channel automated reminders and 2-way AI booking agent."
            delay="delay-200ms"
          />

           <CaseStudyCard 
            niche="Body Contouring"
            headline="From Zero Leads to 93 Qualified Inquiries"
            image="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            stats={[
              { label: "Lead Volume", value: "93" },
              { label: "Cost Per Lead", value: "$14" }
            ]}
            challenge="Buying shared, low-quality leads that had already booked with competitors."
            solution="In-house marketing with 'Speed-to-Lead' AI contacting inquiries in under 60s."
            delay="delay-300ms"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
