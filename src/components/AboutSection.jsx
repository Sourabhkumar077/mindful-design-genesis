
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="animate-on-scroll section-padding bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Therapist with patient"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Text Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">
              About Serrenity Therapy
            </h2>
            <p className="text-gray-700 mb-6">
              At Serrenity, we believe that everyone deserves access to quality mental health care. Our team of experienced therapists provides compassionate, evidence-based treatment to help you overcome challenges and discover your best self.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Personalized treatment plans for your unique needs',
                'Licensed and experienced therapists',
                'Comfortable and confidential environment',
                'Flexible scheduling including virtual sessions'
              ].map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block mr-3 mt-1 text-lavender">•</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            <button className="btn-primary">Learn More About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
