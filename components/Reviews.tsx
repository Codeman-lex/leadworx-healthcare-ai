
import React, { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Review {
  type: 'text' | 'video';
  name: string;
  clinic: string;
  image: string;
  content?: string;
  thumbnail?: string;
}

const reviews: Review[] = [
  {
    type: 'text',
    name: 'Leisha Armstrong',
    clinic: '406 Wellness & Beauty',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    content: 'Within 2 weeks of signing, booking 4-5 appts per day with only $25/day of ad spend. Saving hours per week thanks to AI lead nurturing.'
  },
  {
    type: 'video',
    name: 'Dr. Raj Patel',
    clinic: 'Lumina Aesthetics',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    thumbnail: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    type: 'text',
    name: 'Brina Rodgers',
    clinic: 'Clarke Aesthetics',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    content: 'Exceptional results! The team guides us in the right direction to launch effective campaigns. I wish I would have started this journey with LeadWorxAI years ago!'
  },
  {
    type: 'text',
    name: 'Caitlin Watchorn',
    clinic: 'Merla Norman Spa',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    content: 'They are willing to tailor everything to my needs as a solo provider. Extremely knowledgeable and informative especially as I am not great with technology.'
  },
  {
    type: 'text',
    name: 'Dr. Emily Thomas',
    clinic: 'Radiant Skin Clinic',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea86b48e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    content: 'The show-rate protection is a game changer. We used to have 30% no-shows, now it’s under 5%. The revenue impact was immediate.'
  },
  {
    type: 'video',
    name: 'Mark Thompson',
    clinic: 'Elite Men’s Health',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    thumbnail: 'https://images.pexels.com/photos/6129437/pexels-photo-6129437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    type: 'text',
    name: 'Miriam Maitland',
    clinic: 'Indigo Clinic',
    image: 'https://images.unsplash.com/photo-1598550874175-4d7112ee50bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    content: 'Started in December and it has been a blessing!! Having only launched my clinic in November with no prior client base, I would not be where I am today without them.'
  },
  {
    type: 'text',
    name: 'Jessica Reynolds',
    clinic: 'Pure Aesthetics',
    image: 'https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    content: 'Finally an agency that understands the medical side of things. The compliance features gave me peace of mind, and the patient volume speaks for itself.'
  },
   {
    type: 'text',
    name: 'Dr. James Wilson',
    clinic: 'Wilson Chiropractic',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    content: 'We filled our calendar in the first week. The reactivation campaign paid for the entire year of service in just 48 hours. Incredible ROI.'
  }
];

const Reviews: React.FC = () => {
  const sectionRef = useScrollAnimation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // Adjusted for smaller card width
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount 
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={sectionRef} className="bg-neutral-bg py-16 border-b border-neutral-line">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <p className="text-brand-purple font-bold tracking-wider text-xs uppercase mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
            Loved By 100+ Clinic Owners
          </h2>
        </div>

        {/* Carousel Controls */}
        <div className="relative fade-in-up delay-200ms group">
            <button 
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-brand-purple hover:scale-105 transition-all duration-300 focus:outline-none border border-gray-100 hidden md:block"
                aria-label="Previous review"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            
            <button 
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-brand-purple hover:scale-105 transition-all duration-300 focus:outline-none border border-gray-100 hidden md:block"
                aria-label="Next review"
            >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Scrollable Container */}
            <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {reviews.map((review, index) => (
                    <div 
                        key={index} 
                        className={`flex-shrink-0 snap-center w-[280px] sm:w-[320px] transition-all duration-300 ${review.type === 'video' ? 'cursor-pointer group/video' : ''}`}
                    >
                        {review.type === 'text' ? (
                            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 h-full flex flex-col transition-shadow duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <img 
                                        src={review.image} 
                                        alt={review.name} 
                                        className="w-10 h-10 rounded-full object-cover border border-gray-100"
                                    />
                                    <div>
                                        <h3 className="font-bold text-sm text-text-primary leading-tight">{review.name}</h3>
                                        <p className="text-xs text-text-secondary">{review.clinic}</p>
                                        <div className="flex mt-0.5 text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-text-secondary leading-relaxed flex-grow line-clamp-6">
                                    "{review.content}"
                                </p>
                            </div>
                        ) : (
                            <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 h-full min-h-[240px]">
                                <img 
                                    src={review.thumbnail} 
                                    alt="Video Testimonial" 
                                    className="w-full h-full object-cover opacity-80 group-hover/video:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 group-hover/video:scale-110 transition-transform duration-300">
                                        <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg">
                                            <svg className="w-4 h-4 text-brand-purple" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
                                        </div>
                                    </div>
                                    <div className="text-center text-white absolute bottom-4 left-0 right-0 px-3">
                                         <h3 className="font-bold text-sm leading-tight">{review.name}</h3>
                                         <p className="text-xs text-gray-200 opacity-90">{review.clinic}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
             <div className="flex justify-center gap-2 mt-4 md:hidden">
                <button onClick={() => scroll('left')} className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 shadow-sm"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
                <button onClick={() => scroll('right')} className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 shadow-sm"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
