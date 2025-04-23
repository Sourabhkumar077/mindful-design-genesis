
import React, { useEffect, useRef } from 'react';

const blogPosts = [
  {
    title: "Understanding Anxiety: Causes, Symptoms, and Treatment Options",
    excerpt: "Learn about the different forms of anxiety disorders and the most effective evidence-based treatments available today.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    date: "April 15, 2025",
    author: "Dr. Emma Roberts"
  },
  {
    title: "The Connection Between Physical and Mental Health",
    excerpt: "Explore the important relationship between your physical wellbeing and mental health, and strategies for improving both.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "April 8, 2025",
    author: "Dr. James Wilson"
  },
  {
    title: "Creating Healthy Boundaries in Relationships",
    excerpt: "Discover how to establish and maintain healthy boundaries in all your relationships for better mental health and wellbeing.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2122&q=80",
    date: "April 1, 2025",
    author: "Sarah Johnson"
  }
];

const BlogSection = () => {
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
    <section id="blog" ref={sectionRef} className="animate-on-scroll section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
            Latest Articles
          </h2>
          <p className="text-gray-600">
            Read our latest insights on mental health, relationships, and personal growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="card-hover bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="overflow-hidden h-52">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4 text-sm text-neutral-gray">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="text-lavender font-medium hover:underline">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
