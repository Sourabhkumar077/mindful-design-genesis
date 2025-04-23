
import React from 'react';
import { MessageCircle, Smile, UserRound, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: MessageCircle,
    title: 'AI-Powered Chat Therapy',
    description: 'Chat with our intelligent AI therapist for real-time support and coping strategies.',
  },
  {
    icon: Smile,
    title: 'Mood Tracker',
    description: 'Log your mood daily and identify emotional patterns over time.',
  },
  {
    icon: UserRound,
    title: 'Personalized Therapist Suggestions',
    description: 'Get matched with therapists tailored to your unique needs and preferences.',
  },
  {
    icon: Heart,
    title: 'Guided Journaling',
    description: 'Write journal entries and receive prompts to reflect on your thoughts and progress.',
  },
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
            Explore AI-driven tools designed to support your mental health and self-growth journey.
          </p>
        </div>

        <div className="stagger-fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 animate-on-scroll"
              style={{ minHeight: 320 }}
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="bg-light-lavender rounded-full p-4 mb-6 flex items-center justify-center">
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

