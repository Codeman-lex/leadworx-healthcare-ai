import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { StarIcon } from './icons';

const testimonials = [
  {
    headline: "Remarkable growth in just 4 months.",
    body: "This team has helped us completely overhaul our patient acquisition. We were struggling with less than 3 new consults a week. Now, we're consistently booking qualified patients daily. We've increased our revenue by 35% in 2024 after working with LeadWorxAI.",
    author: "Director of Operations",
    clinic: "Aura Aesthetics"
  },
  {
    headline: "The real deal for scaling your practice.",
    body: "LeadWorxAI is the real deal! Smart individual with a proven plan/training to help and teach you to scale your business! I wasted time and money with others until I found this team. Their system is a game-changer for anyone serious about growth.",
    author: "Joyce Martin",
    clinic: "Serenity Health"
  },
  {
    headline: "Very impressed with the team and the system.",
    body: "Very impressed with the team. They go above and beyond and I would happily recommend them if you're looking to bring new clients into your Med Spa. I own four clinics throughout the United States, and this is the most effective system we've deployed for patient acquisition.",
    author: "David Goldman",
    clinic: "Élan Medspa"
  },
   {
    headline: "Our no-show rate has plummeted.",
    body: "The show-rate protection is not a gimmick. Our front desk was spending hours on confirmations, and we still had a 25% no-show rate. The automated, multi-touch reminders have dropped that to under 10%. The amount of saved time and revenue is incredible.",
    author: "Dr. Alistair Finch",
    clinic: "Align Chiropractic"
  },
  {
    headline: "Finally, a truly compliant solution.",
    body: "As a multi-state practice, compliance is our top priority. The audit logs and PHI segregation gave our legal team the confidence to move forward. It's a powerful system that doesn't cut corners on security. We feel completely secure.",
    author: "Chief Compliance Officer",
    clinic: "Prestige Surgery"
  }
];

const allTestimonials = [...testimonials, ...testimonials]; // Duplicate for seamless scroll

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => (
  <div className="flex-shrink-0 w-[420px] bg-neutral-bg-light border border-brand-purple/50 rounded-xl p-8 shadow-lg mx-4 h-full flex flex-col">
    <div className="flex">
      {[...Array(5)].map((_, i) => <StarIcon key={i} className="text-brand-purple" />)}
    </div>
    <h3 className="font-display text-3xl font-bold text-brand-purple mt-4">
      {testimonial.headline}
    </h3>
    <p className="text-text-secondary mt-4 leading-relaxed flex-grow">
      {testimonial.body}
    </p>
    <p className="font-semibold text-text-primary mt-6">
      {testimonial.author}, <span className="font-medium text-text-secondary">{testimonial.clinic}</span>
    </p>
  </div>
);

const Proof: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="bg-neutral-bg py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto fade-in-up px-6">
          <p className="font-semibold text-brand-purple flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-brand-purple rounded-full"></span>
            TESTIMONIALS & RESULTS
          </p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-brand-purple">Results</span> That Speak for Themselves
          </h2>
        </div>

        <div
          className="slider relative mt-16 w-full fade-in-up"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="slider-track flex w-max animate-scroll-slow py-4">
            {allTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;