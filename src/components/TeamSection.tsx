import { useEffect, useRef } from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import gsap from 'gsap';

const teamMembers = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Clinical Psychologist',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    bio: 'Specialized in cognitive behavioral therapy with 15 years of experience in mental health care.',
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Psychiatrist',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    bio: 'Expert in mood disorders and anxiety management with extensive research experience.',
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Dr. Ananya Patel',
    role: 'Family Therapist',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    bio: 'Specialized in family dynamics and relationship counseling with a focus on Indian cultural context.',
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Dr. Arjun Mehta',
    role: 'Cognitive Therapist',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    bio: 'Expert in mindfulness-based cognitive therapy and stress management techniques.',
    socialMedia: {
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }
  }
];

const TeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current && cardsRef.current) {
      const cards = cardsRef.current.children;
      
      // Animate section title and description
      gsap.from(sectionRef.current.querySelector('h2, p'), {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Animate team cards
      Array.from(cards).forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
          opacity: 0,
          y: 50,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out"
        });
      });
    }
  }, []);
  
  return (
    <section id="team" ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
            Meet Our Expert Team
          </h2>
          <p className="text-gray-600">
            Our experienced professionals are dedicated to providing culturally sensitive mental health care.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative group">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-300">
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a 
                      href={member.socialMedia.facebook}
                      className="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.socialMedia.twitter}
                      className="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.socialMedia.linkedin}
                      className="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
