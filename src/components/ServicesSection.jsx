
import React from 'react';
import { Brain, Heart, UserRound, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
  return (
    <section id="services" className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
            Our Services
          </h2>
          <p className="text-gray-600">
            We offer a range of specialized therapy services designed to support your mental health and wellbeing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="bg-light-lavender rounded-full p-4 mb-6">
                  <service.icon className="w-8 h-8 text-lavender" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
