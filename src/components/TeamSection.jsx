
import React from 'react';

const teamMembers = [
  {
    name: 'Dr. Emma Roberts',
    role: 'Clinical Psychologist',
    image: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1741&q=80',
    socialMedia: ['#', '#', '#']
  },
  {
    name: 'Dr. James Wilson',
    role: 'Psychiatrist',
    image: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    socialMedia: ['#', '#', '#']
  },
  {
    name: 'Sarah Johnson',
    role: 'Family Therapist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
    socialMedia: ['#', '#', '#']
  },
  {
    name: 'Michael Chen',
    role: 'Cognitive Therapist',
    image: 'https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    socialMedia: ['#', '#', '#']
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="animate-on-scroll section-padding bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">
            Meet Our Team
          </h2>
          <p className="text-gray-600">
            Our experienced professionals are dedicated to providing the highest quality of care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="card-hover bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative group">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-lavender bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-300">
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {member.socialMedia.map((link, i) => (
                      <a 
                        key={i} 
                        href={link} 
                        className="bg-white text-lavender w-10 h-10 rounded-full flex items-center justify-center"
                      >
                        <i className={`fa fa-${i === 0 ? 'facebook' : i === 1 ? 'twitter' : 'linkedin'}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">{member.name}</h3>
                <p className="text-lavender">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
