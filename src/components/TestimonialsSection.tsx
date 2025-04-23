
import React, { useEffect, useState } from 'react';

const testimonials = [
  {
    text: "Serrenity has completely transformed my life. My therapist helped me develop coping mechanisms that I use daily. I'm so grateful for their compassionate approach.",
    author: "Jessica M.",
    position: "Teacher",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "After struggling with anxiety for years, I finally found relief through the cognitive therapy program. The team at Serrenity is professional, understanding, and truly cares about your progress.",
    author: "David L.",
    position: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    text: "The relationship counseling saved my marriage. We learned how to communicate effectively and understand each other's needs. I can't recommend their services enough.",
    author: "Maria & John R.",
    position: "Couple",
    image: "https://randomuser.me/api/portraits/women/33.jpg"
  }
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
            What Our Clients Say
          </h2>
          <p className="text-gray-600">
            Read the stories of people whose lives have been transformed through therapy at Serrenity.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Slider */}
          <div className="testimonial-slider relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-6">
                    <div className="bg-light-gray rounded-lg p-8 shadow-md">
                      <div className="flex justify-center mb-6">
                        <div className="text-lavender text-6xl">"</div>
                      </div>
                      <p className="text-gray-700 text-center mb-6">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center justify-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-16 h-16 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                          <p className="text-lavender">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? "bg-lavender" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
