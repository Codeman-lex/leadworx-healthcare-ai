import React, { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ClockIcon, StarBadgeIcon, CalendarSlashIcon, UserPlusIcon } from './icons';

interface AnimatedNumberProps {
  value: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = value;
          if (start === end) return;

          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const current = Math.floor(progress * end);
            setDisplayValue(current);
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(end);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{displayValue}</span>;
};


interface OutcomeTileProps {
  icon: React.ReactNode;
  metricPrefix?: string;
  metric: string;
  metricSuffix?: string;
  description: string;
}

const OutcomeTile: React.FC<OutcomeTileProps> = ({ icon, metricPrefix, metric, metricSuffix, description }) => {
    const isNumeric = !isNaN(parseInt(metric, 10));
    const numericValue = isNumeric ? parseInt(metric, 10) : 0;
    
    return(
      <div className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 group text-center">
        <div className="inline-block bg-brand-purple/20 text-purple-300 rounded-lg p-4 group-hover:bg-brand-purple/30 transition-colors mb-4">
            {icon}
        </div>
        <p className="font-display text-5xl md:text-6xl font-bold text-white">
            {metricPrefix}{isNumeric ? <AnimatedNumber value={numericValue} /> : metric}{metricSuffix}
        </p>
        <p className="mt-2 text-lg text-purple-200/80">{description}</p>
      </div>
    );
}

const Outcomes: React.FC = () => {
  const sectionRef = useScrollAnimation();
  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-gray-900 via-[#1a0433] to-gray-900 text-white py-20 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-purple/20 rounded-full mix-blend-lighten blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full mix-blend-lighten blur-3xl opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="fade-in-up text-center md:text-left">
                <h2 className="font-display text-4xl md:text-5xl font-bold">
                    Predictable growth, by the numbers.
                </h2>
                <p className="mt-4 text-lg text-purple-200/80 max-w-xl mx-auto md:mx-0">
                    These aren't projections. They are the baseline outcomes our system is engineered to deliver for private practices like yours.
                </p>
            </div>
            <div className="hidden md:block fade-in-up" style={{transitionDelay: '200ms'}}>
                <div className="h-48 rounded-lg bg-black/20 p-2 border border-white/10 shadow-2xl">
                    <div 
                        className="w-full h-full rounded-md bg-cover bg-center opacity-60"
                        style={{backgroundImage: "url('https://images.pexels.com/photos/5723554/pexels-photo-5723554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}
                    ></div>
                </div>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in-up" style={{transitionDelay: '400ms'}}>
          <OutcomeTile icon={<UserPlusIcon />} metricPrefix="+" metric="25" metricSuffix="–40" description="qualified consults in 30 days" />
          <OutcomeTile icon={<CalendarSlashIcon />} metricPrefix="–" metric="20" metricSuffix="–35%" description="no-shows (show-rate +10–20 pts)" />
          <OutcomeTile icon={<ClockIcon />} metricPrefix="<" metric="60" metricSuffix="s" description="first response time" />
          <OutcomeTile icon={<StarBadgeIcon />} metricPrefix="+" metric="30" metricSuffix="–150" description="new 5-star reviews/quarter" />
        </div>
      </div>
    </section>
  );
};

export default Outcomes;