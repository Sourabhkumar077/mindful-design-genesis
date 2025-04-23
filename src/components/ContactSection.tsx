
import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: "123 Serenity Lane, Peaceful City, PC 12345"
  },
  {
    icon: Phone,
    title: "Phone Number",
    details: "+1 (555) 123-4567"
  },
  {
    icon: Mail,
    title: "Email Address",
    details: "info@serrenity.com"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon - Fri: 9AM - 7PM, Sat: 9AM - 2PM"
  }
];

const ContactSection = () => {
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
    <section id="contact" ref={sectionRef} className="animate-on-scroll section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            Have questions or need more information? Contact us today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Column */}
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9729686959838!2d-73.9866354!3d40.7484448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTEuOSJX!5e0!3m2!1sen!2sus!4v1648042738313!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="location map"
            ></iframe>
          </div>
          
          {/* Contact Info Column */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                >
                  <div className="bg-light-lavender rounded-full p-3 mb-4">
                    <info.icon className="w-6 h-6 text-lavender" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{info.title}</h3>
                  <p className="text-gray-600">{info.details}</p>
                </div>
              ))}
            </div>
            
            {/* Social Media */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="bg-lavender text-white w-12 h-12 rounded-full flex items-center justify-center text-xl hover:bg-opacity-80 transition-all"
                  >
                    <i className={`fa fa-${social}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
