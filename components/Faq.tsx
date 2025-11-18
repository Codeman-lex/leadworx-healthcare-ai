
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FaqItemProps {
  question: string;
  children: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, children }) => (
    <details className="group bg-white border border-slate-200 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 hover:shadow-lg hover:border-purple-100 open:border-purple-200 open:ring-1 open:ring-purple-100">
        <summary className="flex items-center justify-between cursor-pointer list-none text-text-primary">
            <span className="font-display text-lg md:text-xl font-bold group-hover:text-brand-purple transition-colors">
                {question}
            </span>
            <span className="transition-transform transform group-open:rotate-180 text-brand-purple">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </span>
        </summary>
        <div className="mt-4 text-slate-600 leading-relaxed text-base">
            {children}
        </div>
    </details>
);

const Faq: React.FC = () => {
  const sectionRef = useScrollAnimation();
  return (
    <section ref={sectionRef} className="bg-white py-24 border-t border-neutral-line">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <div className="text-center fade-in-up mb-16">
          <p className="text-brand-purple font-bold tracking-widest text-xs uppercase mb-4">
             Compliance & Integration
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4 fade-in-up delay-200ms">
            <FaqItem question="What is your HIPAA/BAA posture?">
                We operate under HIPAA-aware workflows, and a Business Associate Agreement (BAA) is available for all clients. Our system is designed for compliance, with every patient touchpoint meticulously audit-logged to provide a clear, documented history of communication and access.
            </FaqItem>
            <FaqItem question="How is Patient Health Information (PHI) handled?">
                Protected Health Information (PHI) is strictly segregated in an access-controlled environment. Data is encrypted in transit and at rest. Critically, PHI is never, under any circumstances, used for AI model training. Our commitment is to safeguard patient privacy while improving your operational efficiency.
            </FaqItem>
            <FaqItem question="Is this compatible with our EHR/CRM?">
                Yes. Our system acts as an intelligent messaging and scheduling layer that sits on top of your existing infrastructure. We provide a clean data handoff to most modern EHR/CRM systems via webhook. For legacy systems, HL7 and FHIR-friendly integrations can be configured to ensure seamless data flow.
            </FaqItem>
            <FaqItem question="How does after-hours coverage work?">
                Our system captures all inbound inquiries 24/7. After standard business hours, it triages messages based on urgency and can escalate critical patient inquiries to a designated on-call contact. This ensures you never miss a high-intent patient, even when your office is closed.
            </FaqItem>
            <FaqItem question="How are outcomes measured and guaranteed?">
                Outcomes are tracked in your private owner dashboard, which displays real-time data on response times, booked consults, and show-rates. The guarantee is adjudicated against these metrics. If we fall short of the mutually agreed-upon targets for a given period, we continue our service at no charge until those metrics are met.
            </FaqItem>
        </div>
      </div>
    </section>
  );
};

export default Faq;
