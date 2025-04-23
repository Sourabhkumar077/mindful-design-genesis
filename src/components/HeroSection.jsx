
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 after:content-[''] after:absolute after:inset-0 after:bg-black after:bg-opacity-50"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')" }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Find Your Inner Peace</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
          Professional mental health care powered by AI, dedicated to helping you live a better, more fulfilling life
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link to="/register" className="btn-primary">Get Started</Link>
          <Link to="/chatbot" className="btn-outline">Talk to AI Assistant</Link>
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
