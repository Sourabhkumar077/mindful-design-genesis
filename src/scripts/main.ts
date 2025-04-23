
/**
 * main.ts - Entry point for all JavaScript functionality
 */

import { initAnimations } from './animations';
import { initFormValidation } from './form-validation';
import { initTestimonialSlider } from './testimonial-slider';

// Initialize all scripts on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initFormValidation();
  initTestimonialSlider();
  
  // Add FontAwesome dynamically
  const fontAwesome = document.createElement('link');
  fontAwesome.rel = 'stylesheet';
  fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
  document.head.appendChild(fontAwesome);
  
  console.log('All scripts initialized successfully');
});

// Handle scrollTo functionality from anchor links
window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  if (hash) {
    const targetElement = document.querySelector(hash) as HTMLElement;
    if (targetElement) {
      setTimeout(() => {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }, 100);
    }
  }
});
