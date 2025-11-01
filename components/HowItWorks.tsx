// FIX: Removed the unnecessary triple-slash directive for React types. The standard 'import React' is sufficient.
import React from 'react';
import { RouteIcon, AttendanceIcon, AfterHoursIcon, AuditIcon } from './icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MechanismItem: React.FC<{ icon: React.ReactNode; title: string, children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-brand-purple/10 text-brand-purple rounded-lg p-3 mt-1">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
            <p className="mt-1 text-text-secondary leading-relaxed">
                {children}
            </p>
        </div>
    </div>
);


const HowItWorks: React.FC = () => {
  const sectionRef = useScrollAnimation();
  return (
    <section ref={sectionRef} className="bg-neutral-bg-light py-20 md:py-24 border-y border-neutral-line">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <div className="relative fade-in-up" style={{transitionDelay: '200ms'}}>
                 <img 
                    src="https://images.pexels.com/photos/8376229/pexels-photo-8376229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Modern medical clinic reception"
                    className="rounded-lg shadow-2xl object-cover aspect-[4/5]"
                 />
                 <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-brand-purple/10 rounded-full -z-10"></div>
                 <div className="absolute -top-4 -left-4 w-32 h-32 bg-brand-blue/10 rounded-full -z-10"></div>
            </div>

            <div className="fade-in-up">
              <p className="font-semibold text-brand-purple">HOW IT WORKS</p>
              <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                An operating system for practice growth.
              </h2>
              <p className="mt-6 text-lg text-text-secondary leading-relaxed">
                Our AI monitors inbound channels, prioritizes high-value inquiries, triggers human intervention when needed, and documents every touch for compliance—so your staff can focus on patient care, not patient chasing.
              </p>
              <div className="mt-8 space-y-6">
                  <MechanismItem icon={<RouteIcon />} title="AI Triage & Routing">
                      Routes calls, forms, and SMS to a live queue in <span className="font-semibold text-text-primary">&lt;60s</span>, converting inquiries into booked consults.
                  </MechanismItem>
                  <MechanismItem icon={<AttendanceIcon />} title="Show-Rate Protection">
                      Lifts show-rates by <span className="font-semibold text-text-primary">10–20 points</span> with multi-touch reminders and targeted human callbacks.
                  </MechanismItem>
                  <MechanismItem icon={<AuditIcon />} title="Compliance & Documentation">
                      Every touchpoint is audit-logged with controlled access, providing a documented compliance posture.
                  </MechanismItem>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;