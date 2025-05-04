import React, { useEffect, useRef } from 'react';
import { Brain, Heart, UserRound, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Brain,
    title: 'Cognitive Therapy',
    description: 'Change negative thoughts and behaviors through evidence-based cognitive techniques.'
  },
  {
    icon: Heart,
    title: 'Emotional Support',
    description: 'Learn to understand and process your emotions in a healthy, constructive way.'
  },
  {
    icon: UserRound,
    title: 'Personal Growth',
    description: 'Discover your strengths and develop skills to achieve your full potential.'
  },
  {
    icon: MessageCircle,
    title: 'Relationship Counseling',
    description: 'Improve communication and resolve conflicts in your important relationships.'
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current && cardsRef.current) {
      const cards = cardsRef.current.children;
      
      // Animate section title and description
      gsap.from(sectionRef.current.querySelector('h2, p'), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Animate service cards
      Array.from(cards).forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
          opacity: 0,
          y: 50,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out"
        });
      });
    }
  }, []);
  
  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
            Our Services
          </h2>
          <p className="text-gray-600">
            We offer a range of specialized therapy services designed to support your mental health and wellbeing.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1"
            >
              <div className="bg-blue-100 rounded-full p-4 mb-6">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
