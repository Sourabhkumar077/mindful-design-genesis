
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import StatisticsSection from '../components/StatisticsSection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import AppointmentSection from '../components/AppointmentSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import AnimationController from '../components/AnimationController';

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnimationController />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatisticsSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <AppointmentSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
