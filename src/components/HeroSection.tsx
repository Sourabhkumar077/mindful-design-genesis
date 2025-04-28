import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const exploreLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate text content
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
    // Animate explore links
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
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center text-white"
    >
      {/* Background Image ONLY */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://a.storyblok.com/f/274239/1456x816/aba6425720/homepage-hero.png/m/1800x1008/filters:format(webp):quality(70)')",
          backgroundPosition: '50% 30%',
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <div ref={textContentRef}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Your Journey to Mental Wellness
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Compassionate support and personalized strategies to help you navigate life's challenges and find inner peace
          </p>
        </div>
        <div ref={exploreLinksRef} className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Button className="btn-primary bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
            Start Your Healing Journey
          </Button>
          <Button className="btn-outline hover:bg-white/10" variant="outline">
            Connect with Support
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all">
            <h3 className="text-lg font-semibold mb-1">Mood Tracking</h3>
            <p className="text-sm text-gray-200">Monitor your emotional well-being</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all">
            <h3 className="text-lg font-semibold mb-1">Self-Reflection</h3>
            <p className="text-sm text-gray-200">Explore your inner thoughts</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all">
            <h3 className="text-lg font-semibold mb-1">Professional Support</h3>
            <p className="text-sm text-gray-200">Connect with experts</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all">
            <h3 className="text-lg font-semibold mb-1">Mental Health Resources</h3>
            <p className="text-sm text-gray-200">Learn and grow</p>
          </div>
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
