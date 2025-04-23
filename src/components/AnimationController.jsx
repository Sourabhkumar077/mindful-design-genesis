
import { useEffect } from 'react';

const AnimationController = () => {
  useEffect(() => {
    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { 
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px' 
        }
      );
      
      const elements = document.querySelectorAll('.animate-on-scroll, .stagger-fade-in');
      elements.forEach((element) => {
        observer.observe(element);
      });
      
      return observer;
    };
    
    const observer = observeElements();
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
  
  return null;
};

export default AnimationController;
