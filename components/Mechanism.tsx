
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProvenSystemProps {
    ctaAction: () => void;
}

const authorityData = [
    { text: 'HIPAA-aware', animation: 'animate-glow-purple' },
    { text: 'BAA available', animation: 'animate-glow-blue', delay: 'delay-100ms' },
    { text: 'PHI safeguarded', animation: 'animate-glow-teal', delay: 'delay-200ms' },
    { text: 'Owner dashboard', animation: 'animate-glow-green', delay: 'delay-300ms' },
    { text: 'U.S./U.K./CA Practices', animation: 'animate-glow-pink', delay: 'delay-400ms' },
];

const AuthorityChip: React.FC<{ children: React.ReactNode; animationClass: string; animationDelay: string }> = ({ children, animationClass, animationDelay }) => (
  <div className={`flex items-center space-x-2 bg-neutral-bg-light border border-neutral-line rounded-full px-4 py-2 text-sm text-text-primary font-medium cursor-default shadow-sm ${animationClass} ${animationDelay}`}>
    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
    <span>{children}</span>
  </div>
);

const benefits = [
    'Attract high-value patients consistently',
    'Eliminate the need for cold calls',
    'Automate bookings and follow-ups',
    'Streamline your clinic’s growth',
    'Fill your schedule effortlessly',
    'Scale your clinic sustainably',
];

const BenefitItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-purple mt-2"></div>
        <p className="text-text-secondary">{children}</p>
    </div>
);


const ProvenSystem: React.FC<ProvenSystemProps> = ({ ctaAction }) => {
    const sectionRef = useScrollAnimation();

    return (
        <section ref={sectionRef} className="bg-neutral-bg py-20 md:py-24">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Column */}
                    <div className="fade-in-up">
                        <img 
                            src="https://images.pexels.com/photos/6528859/pexels-photo-6528859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="A patient sitting in a chair in a modern, clean clinic examination room"
                            className="rounded-lg shadow-2xl object-cover w-full h-full aspect-[4/5] lg:aspect-auto"
                        />
                    </div>

                    {/* Content Column */}
                    <div className="fade-in-up" style={{ transitionDelay: '200ms' }}>
                        <p className="font-semibold text-brand-purple flex items-center gap-2 text-sm tracking-wider">
                            <span className="w-2 h-2 bg-brand-purple rounded-full"></span>
                            EFFORTLESS SCALING
                        </p>
                        <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                            <span className="text-brand-purple">Automate Your Growth</span> with Our Proven System.
                        </h2>
                        <p className="mt-6 text-lg text-text-secondary leading-relaxed">
                           Our system is engineered to deliver steady growth by attracting high-value clients and simplifying your patient acquisition process from start to finish.
                        </p>
                        <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                            We maximize your bookings and streamline clinic operations, making it simple to scale your practice without the typical growing pains.
                        </p>
                        
                        <div className="mt-8 flex flex-wrap justify-start gap-3">
                            {authorityData.map(item => (
                                <AuthorityChip key={item.text} animationClass={item.animation} animationDelay={item.delay || ''}>
                                    {item.text}
                                </AuthorityChip>
                            ))}
                        </div>

                        <div className="mt-8 bg-neutral-bg-light border border-neutral-line rounded-xl shadow-sm p-8">
                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                                {benefits.map((benefit, index) => (
                                    <BenefitItem key={index}>{benefit}</BenefitItem>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8">
                            <button 
                                onClick={ctaAction} 
                                className="bg-brand-purple hover:bg-brand-purple-dark text-white font-bold py-2.5 px-5 rounded-lg text-sm transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                            >
                                Book a Free Strategy Call
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProvenSystem;
