import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const authorityData = [
    { text: 'HIPAA-aware', animation: 'animate-glow-purple' },
    { text: 'BAA available', animation: 'animate-glow-blue', delay: 'delay-100ms' },
    { text: 'PHI safeguarded', animation: 'animate-glow-teal', delay: 'delay-200ms' },
    { text: 'U.S./U.K./CA Practices', animation: 'animate-glow-pink', delay: 'delay-300ms' },
    { text: 'Owner dashboard', animation: 'animate-glow-green', delay: 'delay-400ms' },
];

const AuthorityChip: React.FC<{ children: React.ReactNode; animationClass: string; animationDelay: string }> = ({ children, animationClass, animationDelay }) => (
  <div className={`flex items-center space-x-2 bg-white rounded-full px-4 py-2 text-sm text-gray-800 font-medium cursor-default shadow-lg ${animationClass} ${animationDelay}`}>
    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
    <span>{children}</span>
  </div>
);

const AuthorityStrip: React.FC = () => {
    const sectionRef = useScrollAnimation();
  return (
    <section ref={sectionRef} className="bg-gray-900 py-10 fade-in-up">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {authorityData.map(item => (
              <AuthorityChip key={item.text} animationClass={item.animation} animationDelay={item.delay || ''}>
                {item.text}
              </AuthorityChip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorityStrip;