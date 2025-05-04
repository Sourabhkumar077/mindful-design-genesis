import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRegLightbulb, FaRegClock, FaRegUser, FaRegHeart } from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Heart, Brain, Users, MessageSquare, Book, Calendar, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  const features = [
    {
      title: '24/7 Support',
      description: 'Always here when you need us',
      icon: Shield,
      color: 'text-blue-500'
    },
    {
      title: 'Expert Guidance',
      description: 'Professional mental health support',
      icon: Brain,
      color: 'text-green-500'
    },
    {
      title: 'Personalized Care',
      description: 'Tailored to your needs',
      icon: Heart,
      color: 'text-pink-500'
    },
    {
      title: 'Community Support',
      description: 'Connect with others',
      icon: Users,
      color: 'text-purple-500'
    }
  ];

  const services = [
    {
      title: 'Therapy Sessions',
      description: 'Professional one-on-one counseling',
      icon: MessageSquare,
      color: 'text-blue-500'
    },
    {
      title: 'Resources Library',
      description: 'Access to mental health resources',
      icon: Book,
      color: 'text-green-500'
    },
    {
      title: 'Group Sessions',
      description: 'Join supportive group discussions',
      icon: Users,
      color: 'text-purple-500'
    },
    {
      title: 'Wellness Events',
      description: 'Participate in wellness workshops',
      icon: Calendar,
      color: 'text-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Student',
      content: 'Zenora helped me manage my anxiety and provided the support I needed during tough times.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Professional',
      content: 'The community support and resources have been invaluable in my mental health journey.',
      rating: 5
    },
    {
      name: 'Emma Davis',
      role: 'Parent',
      content: 'The personalized care and expert guidance made a significant difference in my life.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Journey to Mental Wellness
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover personalized mental health support and resources to help you thrive in your daily life.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                to="/get-started" 
                className="btn-primary px-8 py-4 text-lg hover-scale"
              >
                Get Started
                <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                to="/learn-more" 
                className="btn-outline px-8 py-4 text-lg hover-scale"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Why Choose Zenora?</h2>
            <p className="text-xl text-muted-foreground">Experience the difference with our comprehensive mental health support</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-scale h-full">
                  <CardHeader>
                    <div className={`${feature.color} mb-2`}>
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <button className="btn-primary w-full">Learn More</button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Our Services</h2>
            <p className="text-xl text-muted-foreground">Comprehensive mental health support tailored to your needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-scale h-full">
                  <CardHeader>
                    <div className={`${service.color} mb-2`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <button className="btn-primary w-full">Explore</button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground">Real stories from our community</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-scale h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8">Join thousands of others who have found support and guidance</p>
            <Link 
              to="/register" 
              className="btn-primary px-8 py-4 text-lg hover-scale inline-block"
            >
              Get Started Now
              <FaArrowRight className="ml-2 inline-block" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Zenora</h3>
              <p className="text-muted-foreground">Your partner in mental wellness</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/resources" className="nav-link">Resources</Link></li>
                <li><Link to="/community" className="nav-link">Community</Link></li>
                <li><Link to="/chat" className="nav-link">Chat Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/faq" className="nav-link">FAQ</Link></li>
                <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
                <li><Link to="/privacy" className="nav-link">Privacy Policy</Link></li>
                <li><Link to="/terms" className="nav-link">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="nav-link">
                  <FaRegLightbulb className="w-5 h-5" />
                </a>
                <a href="#" className="nav-link">
                  <FaRegClock className="w-5 h-5" />
                </a>
                <a href="#" className="nav-link">
                  <FaRegUser className="w-5 h-5" />
                </a>
                <a href="#" className="nav-link">
                  <FaRegHeart className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Zenora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeroSection;
