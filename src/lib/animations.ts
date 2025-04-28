import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Therapeutic breathing animation
export const breathingAnimation = (element: HTMLElement) => {
  gsap.to(element, {
    scale: 1.1,
    duration: 4,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  });
};

// Floating elements animation
export const floatingAnimation = (element: HTMLElement) => {
  gsap.to(element, {
    y: -20,
    duration: 2,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  });
};

// Gentle wave animation
export const waveAnimation = (element: HTMLElement) => {
  gsap.to(element, {
    rotation: 5,
    duration: 3,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  });
};

// Scroll reveal animation
export const scrollReveal = (element: HTMLElement) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
  });
};

// Calming color transition
export const colorTransition = (element: HTMLElement, colors: string[]) => {
  gsap.to(element, {
    background: colors[0],
    duration: 5,
    ease: "none",
    repeat: -1,
    yoyo: true,
    onRepeat: () => {
      const nextColor = colors.shift()!;
      colors.push(nextColor);
    }
  });
};

// Particle animation for therapeutic effects
export const createParticles = (container: HTMLElement, count: number = 20) => {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    container.appendChild(particle);

    gsap.set(particle, {
      x: gsap.utils.random(0, container.offsetWidth),
      y: gsap.utils.random(0, container.offsetHeight),
      scale: gsap.utils.random(0.5, 1.5),
      opacity: gsap.utils.random(0.3, 0.8)
    });

    gsap.to(particle, {
      y: `-=${gsap.utils.random(100, 300)}`,
      x: `+=${gsap.utils.random(-50, 50)}`,
      duration: gsap.utils.random(3, 6),
      ease: "none",
      repeat: -1,
      delay: gsap.utils.random(0, 2)
    });
  }
};

// Add styles for particles
const style = document.createElement('style');
style.textContent = `
  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    pointer-events: none;
  }
`;
document.head.appendChild(style); 