import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { IncreaseRevenueIcon, AttractClientsIcon, AutomateLeadIcon, SaveTimeIcon } from './icons';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, delay }) => (
  <div className={`fade-in-up ${delay}`}>
    <div className="text-brand-purple">{icon}</div>
    <h3 className="font-display text-xl md:text-2xl font-bold text-brand-purple mt-4">{title}</h3>
    <p className="mt-2 text-text-secondary leading-relaxed">{description}</p>
  </div>
);

const Outcomes: React.FC = () => {
  const sectionRef = useScrollAnimation();
  return (
    <section ref={sectionRef} className="bg-neutral-bg-light text-text-primary py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="lg:col-span-5 fade-in-up">
            <span className="inline-block bg-purple-100 text-brand-purple font-semibold px-4 py-1.5 rounded-full text-sm">
              HIGH-VALUE CLIENTS WITHOUT THE EXTRA WORK
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              <span className="text-brand-purple">Effortless Growth</span> for Your Clinic
            </h2>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              LeadWorxAI's proven system helps private practices grow by attracting high-value patients and automating tedious work, so you can focus on exceptional care.
            </p>
            <div className="mt-8 flex items-center space-x-3">
                <button aria-label="Previous" className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 flex items-center justify-center transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                </button>
                <button aria-label="Next" className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 flex items-center justify-center transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 relative">
            <div className="absolute top-0 bottom-0 left-0 w-px bg-purple-200 hidden lg:block"></div>
             <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-px bg-purple-200 lg:hidden"></div>
            <div className="grid sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-10 lg:pl-12">
              <BenefitCard
                icon={<IncreaseRevenueIcon />}
                title="Increase Your Revenue"
                description="Our clients experience consistent growth, with many seeing $10k+ in new monthly revenue within just one month."
                delay="delay-200ms"
              />
              <BenefitCard
                icon={<AttractClientsIcon />}
                title="Attract High-Value Clients"
                description="Stop dealing with price shoppers. We help you target and attract patients ready to book and pay for premium treatments."
                delay="delay-300ms"
              />
              <BenefitCard
                icon={<AutomateLeadIcon />}
                title="Automate Lead Generation"
                description="Our system automatically generates qualified leads, so you can focus on exceptional service while we handle the marketing."
                delay="delay-400ms"
              />
              <BenefitCard
                icon={<SaveTimeIcon />}
                title="Save Time and Money"
                description="With our done-for-you campaigns, save valuable time and money. No more cold calls or expensive, unpredictable ad spending."
                delay="delay-400ms"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Outcomes;