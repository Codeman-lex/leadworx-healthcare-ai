import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CaptureIcon, AttendanceIcon, StarBadgeIcon } from './icons';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  delay: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, description, metric, metricLabel, delay }) => (
    <div className={`flex items-start space-x-4 fade-in-up ${delay}`}>
        <div className="flex-shrink-0 bg-brand-purple/10 text-brand-purple rounded-lg p-3 mt-1">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-semibold text-brand-purple">{title}</h3>
            <p className="mt-1 text-text-secondary leading-relaxed">{description}</p>
            <div className="mt-2">
                <span className="font-display text-2xl font-bold text-text-primary">{metric}</span>
                <span className="ml-2 text-text-secondary text-sm">{metricLabel}</span>
            </div>
        </div>
    </div>
);

const Outcomes: React.FC = () => {
  const sectionRef = useScrollAnimation();
  return (
    <section ref={sectionRef} className="bg-neutral-bg-light text-text-primary py-20 md:py-24 relative overflow-hidden border-y border-neutral-line">
        <div className="absolute -top-16 -left-16 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Left Column: Messaging */}
                <div className="fade-in-up text-center lg:text-left">
                    <p className="font-semibold text-brand-purple">THE MECHANISM</p>
                    <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold leading-tight">
                        The <span className="text-brand-purple">Operating System</span> For Practice Growth.
                    </h2>
                    <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Our system doesn't just find patients—it qualifies, schedules, and ensures they show up, turning your marketing spend into predictable revenue.
                    </p>
                    <div className="mt-8 p-6 bg-white border border-neutral-line rounded-lg shadow-sm">
                        <p className="font-semibold text-brand-purple">The Ultimate Result?</p>
                        <p className="mt-2 font-display text-3xl md:text-4xl text-text-primary">
                           +25–40 new qualified consults in your calendar, every 30 days.
                        </p>
                    </div>
                </div>

                {/* Right Column: The 3-Step Process */}
                <div className="space-y-8">
                    <ProcessStep 
                        icon={<CaptureIcon />}
                        title="1. AI Lead Capture & Triage"
                        description="Every call, form, and text is captured and triaged by our AI in real-time, 24/7. High-intent leads are flagged and routed instantly."
                        metric="<60s"
                        metricLabel="Avg. Response Time"
                        delay="delay-200ms"
                    />
                     <ProcessStep 
                        icon={<AttendanceIcon />}
                        title="2. Automated Booking & Show-Rate Protection"
                        description="The system handles scheduling and sends intelligent, multi-touch reminders to patients, drastically reducing no-shows."
                        metric="+10-20 pts"
                        metricLabel="Increase in Show-Rate"
                        delay="delay-300ms"
                    />
                     <ProcessStep 
                        icon={<StarBadgeIcon />}
                        title="3. Practice Reputation Growth"
                        description="After a successful visit, the system automatically follows up to generate a steady stream of 5-star reviews for your practice."
                        metric="+30-150"
                        metricLabel="New 5-Star Reviews / Qtr"
                        delay="delay-400ms"
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default Outcomes;