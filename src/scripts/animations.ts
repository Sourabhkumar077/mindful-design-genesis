
/**
 * animations.ts - Handles all website animations
 */

export const initAnimations = () => {
  // Navbar scroll handling
  const handleNavbarScroll = () => {
    const navbar = document.querySelector('header');
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  };

  // Scroll animations for elements
  const observeScrollAnimations = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll, .stagger-fade-in');
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  };

  // Statistics counter animation
  const initCounters = () => {
    const counters = document.querySelectorAll('.counter');
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target as HTMLElement;
          const target = parseInt(counter.getAttribute('data-target') || '0', 10);
          const duration = parseInt(counter.getAttribute('data-duration') || '2000', 10);
          
          let start = 0;
          const step = Math.ceil(target / (duration / 16)); // 60fps approx.
          
          const updateCounter = () => {
            start += step;
            if (start < target) {
              counter.innerText = start.toString();
              requestAnimationFrame(updateCounter);
            } else {
              counter.innerText = target.toString();
            }
          };
          
          updateCounter();
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 });
    counters.forEach(counter => observer.observe(counter));
  };

  // Smooth scroll for navigation
  const initSmoothScroll = () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = (link as HTMLAnchorElement).getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for header
            behavior: 'smooth'
          });
        }
      });
    });
  };

  // Initialize all animations
  window.addEventListener('scroll', handleNavbarScroll);
  observeScrollAnimations();
  initCounters();
  initSmoothScroll();
  
  // Fade in hero section on page load
  window.addEventListener('load', () => {
    const heroSection = document.getElementById('home');
    heroSection?.classList.add('visible');
  });
};
