
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
  <div className={`bg-neutral-bg-light rounded-2xl overflow-hidden border border-neutral-line shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up ${delay} flex flex-col`}>
    <div className="h-48 overflow-hidden relative">
      <img src={image} alt={headline} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
      <div className="absolute top-4 left-4 bg-brand-purple/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
        {niche}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>
    
    <div className="p-6 md:p-8 flex-1 flex flex-col">
      <h3 className="font-display text-2xl font-bold text-text-primary leading-tight mb-6">
        {headline}
      </h3>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-neutral-bg rounded-lg p-3 border border-neutral-line text-center">
            <p className="text-brand-purple font-bold text-2xl md:text-3xl">{stat.value}</p>
            <p className="text-xs text-text-secondary uppercase tracking-wider font-medium mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4 text-sm mb-6 flex-1">
        <div>
          <p className="font-bold text-text-primary mb-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> The Challenge:
          </p>
          <p className="text-text-secondary leading-relaxed">{challenge}</p>
        </div>
        <div>
           <p className="font-bold text-text-primary mb-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> The LeadWorxAI Fix:
          </p>
          <p className="text-text-secondary leading-relaxed">{solution}</p>
        </div>
      </div>

      <div className="pt-6 border-t border-neutral-line mt-auto">
        <div className="flex items-center gap-2 text-brand-purple font-semibold text-sm">
            <CheckIcon />
            <span>Verified Outcome</span>
        </div>
      </div>
    </div>
  </div>
);

const CaseStudies: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="bg-neutral-bg py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto fade-in-up mb-16">
          <span className="inline-block bg-purple-100 text-brand-purple font-semibold px-4 py-1.5 rounded-full text-sm mb-4">
            REAL RESULTS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight">
            We don't just promise growth. <br className="hidden md:block" />
            <span className="text-brand-purple">We engineer it.</span>
          </h2>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed">
            See how LeadWorxAI has transformed private practices by installing our automated patient acquisition infrastructure.
          </p>
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
            challenge="The clinic was relying entirely on word-of-mouth and sporadic Instagram posts. They had empty slots in their schedule and no predictable way to fill them."
            solution="We installed our 'Database Reactivation' engine to wake up cold leads and launched a targeted high-ticket offer. The calendar was fully booked within 72 hours."
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
            challenge="The front desk was spending 4 hours a day calling to confirm appointments, yet 1 in 3 patients still ghosted, leaving the doctor with expensive gaps in the day."
            solution="LeadWorxAI implemented multi-channel automated reminders (SMS/Email/Voice) and a 2-way AI booking agent that collects deposits for high-value slots."
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
            challenge="This practice was buying shared leads from a generic vendor. The leads were expensive, low quality, and often had already booked with a competitor."
            solution="We brought their marketing in-house with a dedicated campaign and our 'Speed-to-Lead' AI. We contacted every inquiry in under 60 seconds, locking them in before competitors could."
            delay="delay-300ms"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
