import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      // Add fade-in-up to all direct children for staggered effect if needed
      const children = currentRef.querySelectorAll('.fade-in-up');
      if(children.length > 0) {
        children.forEach(child => observer.observe(child));
      } else {
        // Fallback to observing the main element
        observer.observe(currentRef);
        currentRef.classList.add('fade-in-up');
      }
    }

    return () => {
      if (currentRef) {
        const children = currentRef.querySelectorAll('.fade-in-up');
         if(children.length > 0) {
            children.forEach(child => observer.unobserve(child));
         } else {
            observer.unobserve(currentRef);
         }
      }
    };
  }, []);

  return ref;
};
