
/**
 * testimonial-slider.ts - Controls the testimonial carousel
 */

export const initTestimonialSlider = () => {
  const slider = document.querySelector('.testimonial-slider');
  if (!slider) return;
  
  const slideTrack = slider.querySelector('.testimonial-track');
  const slides = slider.querySelectorAll('.testimonial-slide');
  const dots = slider.querySelectorAll('.testimonial-dot');
  const prevButton = slider.querySelector('.prev-button');
  const nextButton = slider.querySelector('.next-button');
  
  if (!slideTrack || slides.length === 0) return;
  
  let currentSlide = 0;
  const slideCount = slides.length;
  
  // Initialize dots
  const updateDots = (index: number) => {
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('bg-lavender');
        dot.classList.remove('bg-gray-300');
      } else {
        dot.classList.remove('bg-lavender');
        dot.classList.add('bg-gray-300');
      }
    });
  };
  
  // Go to slide
  const goToSlide = (index: number) => {
    if (index < 0) {
      index = slideCount - 1;
    } else if (index >= slideCount) {
      index = 0;
    }
    
    currentSlide = index;
    (slideTrack as HTMLElement).style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots(currentSlide);
  };
  
  // Event listeners
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goToSlide(i);
    });
  });
  
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      goToSlide(currentSlide - 1);
    });
  }
  
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      goToSlide(currentSlide + 1);
    });
  }
  
  // Auto play
  let autoplayInterval: number | undefined;
  
  const startAutoplay = () => {
    autoplayInterval = window.setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5000);
  };
  
  const stopAutoplay = () => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
    }
  };
  
  // Start autoplay by default
  startAutoplay();
  
  // Pause on hover
  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);
  
  // Handle touch events for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  slider.addEventListener('touchstart', (e: TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  slider.addEventListener('touchend', (e: TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
    
    if (touchStartX - touchEndX > 50) {
      // Swipe left
      goToSlide(currentSlide + 1);
    } else if (touchEndX - touchStartX > 50) {
      // Swipe right
      goToSlide(currentSlide - 1);
    }
  }, { passive: true });
  
  // Initialize first slide
  goToSlide(0);
};
