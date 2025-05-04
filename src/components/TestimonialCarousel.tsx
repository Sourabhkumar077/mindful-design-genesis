import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    content: 'The therapy sessions have been incredibly helpful in managing my work-related stress. The counselors are professional and understanding.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    content: 'I was skeptical at first, but the online sessions have been just as effective as in-person therapy. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ananya Patel',
    role: 'Student',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    content: 'The platform is user-friendly, and the therapists are very supportive. It has helped me manage my anxiety effectively.',
    rating: 4,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-500 hover:scale-[1.02]">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-24 h-24 mb-6">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="w-full h-full rounded-full object-cover border-4 border-blue-100"
            />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-full p-2">
              <Star className="w-4 h-4" />
            </div>
          </div>

          <div className="flex mb-4">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${
                  index < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill={index < currentTestimonial.rating ? 'currentColor' : 'none'}
              />
            ))}
          </div>

          <p className="text-gray-600 mb-6 italic">
            "{currentTestimonial.content}"
          </p>

          <div>
            <h4 className="text-lg font-semibold text-gray-800">
              {currentTestimonial.name}
            </h4>
            <p className="text-gray-500">{currentTestimonial.role}</p>
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
          <button
            onClick={prevSlide}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel; 