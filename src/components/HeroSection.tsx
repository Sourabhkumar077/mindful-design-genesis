import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Placeholder image URL - replace with your actual image
const profileImageUrl = 'https://img.freepik.com/premium-photo/side-view-silhouette-man-looking-away_1048944-13094014.jpg?w=740';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const exploreLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Apply scroll reveal to text elements
    if (textContentRef.current) {
      const elements = textContentRef.current.children;
      Array.from(elements).forEach((el, index) => {
        if (el instanceof HTMLElement) {
          gsap.from(el, {
            scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" },
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out"
          });
        }
      });
    }

    // Apply scroll reveal to explore links
    if (exploreLinksRef.current) {
      gsap.from(exploreLinksRef.current, {
        scrollTrigger: { trigger: exploreLinksRef.current, start: "top 95%", toggleActions: "play none none reverse" },
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out"
      });
    }

    // Add floating animation to the image
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -15,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
    }

    // GSAP Parallax for the image
    if (imageRef.current && sectionRef.current) {
      gsap.to(imageRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
      });
    }
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center bg-white text-black overflow-hidden pt-20 md:pt-28"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
        {/* Left Text Content */}
        <div ref={textContentRef} className="flex flex-col items-start md:max-w-md">
          <h2 className="text-sm uppercase text-gray-500 tracking-widest mb-2">Mindful Design</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 leading-tight">
            Beyond Therapy.
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Explore innovative tools and resources designed for your mental well-being journey.
          </p>
          {/* Explore Links */}
          <div ref={exploreLinksRef} className="flex items-center gap-3 text-sm text-gray-700">
            <span>Explore:</span>
            <Button variant="outline" size="sm" className="rounded-full border-gray-400 hover:bg-gray-100 transition-colors">A¹ Sense</Button>
            <Button variant="outline" size="sm" className="rounded-full border-gray-400 hover:bg-gray-100 transition-colors">B¹ Eye</Button>
            <Button variant="outline" size="sm" className="rounded-full border-gray-400 hover:bg-gray-100 transition-colors">A¹ Neuro</Button>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="relative flex justify-center items-center h-[60vh] md:h-[80vh]">
          <img
            ref={imageRef}
            src={profileImageUrl}
            alt="Profile silhouette"
            className="absolute inset-0 w-full h-full object-contain object-center max-h-[70vh] md:max-h-full"
            style={{
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent z-[-1]"></div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="p-2 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
