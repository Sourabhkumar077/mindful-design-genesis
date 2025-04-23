
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-black/70 after:to-purple-900/50"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')",
          backgroundPosition: '50% 30%'
        }}
      >
        {/* Optional Floating Particles or Geometric Shapes */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
          AI-Powered Mental Wellness Journey
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
          Professional mental health care powered by AI, dedicated to helping you live a better, more fulfilling life
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link to="/register" className="btn-primary bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
            Get Started
          </Link>
          <Link to="/chatbot" className="btn-outline hover:bg-white/10">
            Talk to AI Assistant
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <Link to="/dashboard" className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all">
            <h3 className="text-lg font-semibold mb-1">Mood Tracking</h3>
            <p className="text-sm text-gray-200">Monitor your daily emotions</p>
          </Link>
          <Link to="/journal" className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all">
            <h3 className="text-lg font-semibold mb-1">Journaling</h3>
            <p className="text-sm text-gray-200">Reflect on your thoughts</p>
          </Link>
          <Link to="/therapists" className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all">
            <h3 className="text-lg font-semibold mb-1">Find Therapists</h3>
            <p className="text-sm text-gray-200">Connect with professionals</p>
          </Link>
          <Link to="/chatbot" className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all">
            <h3 className="text-lg font-semibold mb-1">AI Assistant</h3>
            <p className="text-sm text-gray-200">24/7 mental health support</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
