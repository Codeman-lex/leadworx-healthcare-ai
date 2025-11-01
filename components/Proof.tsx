import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ClockIcon, AttendanceIcon, TrendingUpIcon } from './icons';

const proofData = [
    {
        icon: <ClockIcon />,
        label: "Response time",
        value: "42s",
        subtext: "avg (last 30 days)",
        color: "purple"
    },
    {
        icon: <TrendingUpIcon />,
        label: "Show-rate lift",
        value: "+14 pts",
        subtext: "vs. prior month",
        color: "blue"
    },
    {
        icon: <AttendanceIcon />,
        label: "Booked consults",
        value: "33",
        subtext: "in 30 days",
        color: "teal"
    }
];

const colorClasses = {
    purple: {
        bg: 'bg-purple-500/10',
        text: 'text-purple-300',
        hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]'
    },
    blue: {
        bg: 'bg-blue-500/10',
        text: 'text-blue-300',
        hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]'
    },
    teal: {
        bg: 'bg-teal-500/10',
        text: 'text-teal-300',
        hoverGlow: 'group-hover:shadow-[0_0_20px_rgba(20,184,166,0.5)]'
    }
};

const Proof: React.FC = () => {
  const sectionRef = useScrollAnimation();
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-gray-900 via-[#110521] to-gray-900 text-white py-20 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-purple/20 rounded-full mix-blend-lighten blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-blue/20 rounded-full mix-blend-lighten blur-3xl opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto fade-in-up">
                <h2 className="font-display text-4xl md:text-5xl font-bold">
                    Proof beats promises.
                </h2>
                <p className="mt-4 text-lg text-purple-200/80">
                    We provide every practice owner with a real-time dashboard showing the metrics that matter. Here is a snapshot of typical results.
                </p>
            </div>

            <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 fade-in-up" style={{transitionDelay: '200ms'}}>
                {proofData.map(item => {
                    const colors = colorClasses[item.color as keyof typeof colorClasses];
                    return (
                        <div key={item.label} className={`p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 group text-center ${colors.hoverGlow}`}>
                            <div className={`inline-block ${colors.bg} ${colors.text} rounded-lg p-4 transition-colors mb-4`}>
                                {item.icon}
                            </div>
                            <p className="font-display text-5xl font-bold text-white">
                                {item.value}
                            </p>
                            <p className="mt-2 text-lg text-purple-200/80 font-medium">{item.label}</p>
                            <p className="text-sm text-purple-200/60">{item.subtext}</p>
                        </div>
                    );
                })}
            </div>
            
            <div className="mt-20 max-w-3xl mx-auto fade-in-up" style={{transitionDelay: '400ms'}}>
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-8 shadow-lg">
                    <span className="absolute -top-8 -left-4 font-display text-9xl text-purple-500/10 -z-1 select-none">“</span>
                    <p className="text-xl text-white/90 italic relative z-10 leading-relaxed">
                        The system delivered on its promise. We had <span className="font-bold text-purple-300">31 qualified consults</span> booked in the first month, and our no-show rate has visibly dropped.
                    </p>
                    <p className="mt-4 font-semibold text-purple-300">
                        Ophthalmology Practice, Director of Operations
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Proof;