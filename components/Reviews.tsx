
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Review {
  type: 'text' | 'video';
  name: string;
  clinic: string;
  image: string;
  content?: string;
  thumbnail?: string;
  highlight?: string;
}

const reviews: Review[] = [
  {
    type: 'text',
    name: 'Leisha Armstrong',
    clinic: '406 Wellness & Beauty',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    highlight: 'Saving hours per week',
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
    highlight: 'Start this journey earlier',
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
    highlight: 'Revenue impact was immediate',
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
    highlight: 'It has been a blessing',
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
    highlight: 'Incredible ROI',
    content: 'We filled our calendar in the first week. The reactivation campaign paid for the entire year of service in just 48 hours. Incredible ROI.'
  }
];

const Reviews: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="bg-neutral-50 py-24 border-y border-neutral-line">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16 fade-in-up max-w-3xl mx-auto">
          <p className="text-brand-purple font-bold tracking-widest text-xs uppercase mb-4">
            Social Proof
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary leading-tight">
            Loved By 100+ Clinic Owners
          </h2>
          <p className="mt-6 text-lg text-text-secondary font-light">
            Don't just take our word for it. Join the fastest-growing community of private practice owners who have taken control of their growth.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 fade-in-up delay-200ms">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className={`break-inside-avoid bg-white rounded-2xl shadow-[0_5px_20px_-5px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group ${review.type === 'video' ? 'cursor-pointer' : ''}`}
            >
              {review.type === 'video' ? (
                <div className="relative aspect-video bg-slate-900">
                    <img src={review.thumbnail} alt={review.name} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center pl-1 text-brand-purple shadow-lg">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                         </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                         <p className="font-bold text-sm">{review.name}</p>
                         <p className="text-xs opacity-80">{review.clinic}</p>
                    </div>
                </div>
              ) : (
                <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover border border-slate-100" />
                            <div>
                                <h4 className="font-bold text-sm text-text-primary">{review.name}</h4>
                                <p className="text-xs text-text-secondary">{review.clinic}</p>
                            </div>
                        </div>
                        <svg className="w-6 h-6 text-brand-purple/20 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
                    </div>
                    {review.highlight && (
                        <p className="text-sm font-bold text-brand-purple mb-2 uppercase tracking-wide">{review.highlight}</p>
                    )}
                    <p className="text-slate-600 leading-relaxed text-sm">
                        "{review.content}"
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-1">
                         {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                         <span className="text-xs text-slate-400 ml-2">Verified Client</span>
                    </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
