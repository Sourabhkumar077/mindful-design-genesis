
import React, { useEffect, useRef } from 'react';
import { Brain, Heart, UserRound, MessageCircle } from 'lucide-react';

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
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="services" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
            Our Services
          </h2>
          <p className="text-gray-600">
            We offer a range of specialized therapy services designed to support your mental health and wellbeing.
          </p>
        </div>
        
        <div className="stagger-fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-hover bg-white rounded-lg p-8 shadow-md flex flex-col items-center text-center"
            >
              <div className="bg-light-lavender rounded-full p-4 mb-6">
                <service.icon className="w-8 h-8 text-lavender" />
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
