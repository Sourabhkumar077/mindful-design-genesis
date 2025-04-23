
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-black/70 after:to-blue-900/50"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1515847049296-a281d6463650?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')",
          backgroundPosition: '50% 30%'
        }}
      >
        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          Your Journey to Mental Wellness
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
          Compassionate support and personalized strategies to help you navigate life's challenges and find inner peace
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link to="/register" className="btn-primary bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
            Start Your Healing Journey
          </Link>
          <Link to="/therapists" className="btn-outline hover:bg-white/10">
            Connect with Support
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <Link to="/dashboard" className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all">
            <h3 className="text-lg font-semibold mb-1">Mood Tracking</h3>
            <p className="text-sm text-gray-200">Monitor your emotional well-being</p>
          </Link>
          <Link to="/journal" className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all">
            <h3 className="text-lg font-semibold mb-1">Self-Reflection</h3>
            <p className="text-sm text-gray-200">Explore your inner thoughts</p>
          </Link>
          <Link to="/therapists" className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all">
            <h3 className="text-lg font-semibold mb-1">Professional Support</h3>
            <p className="text-sm text-gray-200">Connect with experts</p>
          </Link>
          <Link to="/resources" className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all">
            <h3 className="text-lg font-semibold mb-1">Mental Health Resources</h3>
            <p className="text-sm text-gray-200">Learn and grow</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
