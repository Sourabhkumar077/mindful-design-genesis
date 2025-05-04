import React, { useState } from 'react';
import AppNavbar from '../components/AppNavbar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, Filter, Phone, Calendar } from 'lucide-react';

interface Therapist {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  location: string;
  bio: string;
  tags: string[];
  image: string;
  sessionTypes: ('In-person' | 'Video')[];
}

interface Filters {
  minRating: number;
  specialties: string[];
  sessionTypes: ('In-person' | 'Video')[];
}

interface TherapistCardProps {
  therapist: Therapist;
}

interface FilterPanelProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const TherapistCard: React.FC<TherapistCardProps> = ({ therapist }) => {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <div className="flex gap-4">
          <img 
            src={therapist.image} 
            alt={therapist.name} 
            className="w-16 h-16 rounded-full object-cover border-2 border-light-lavender"
          />
          <div>
            <CardTitle className="text-lg">{therapist.name}</CardTitle>
            <CardDescription>{therapist.specialty}</CardDescription>
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < therapist.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                />
              ))}
              <span className="text-sm text-gray-500 ml-1">({therapist.reviewCount})</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-gray-500 flex items-center mb-2">
          <MapPin size={14} className="mr-1" />
          {therapist.location}
        </div>
        <p className="text-sm mb-3">{therapist.bio}</p>
        <div className="flex flex-wrap gap-2">
          {therapist.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-light-lavender text-lavender px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="text-xs flex items-center border-lavender text-lavender hover:bg-light-lavender">
          <Phone size={14} className="mr-1" />
          Contact
        </Button>
        <Button className="text-xs flex items-center bg-lavender hover:bg-opacity-90">
          <Calendar size={14} className="mr-1" />
          Book Session
        </Button>
      </CardFooter>
    </Card>
  );
};

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, setFilters }) => {
  const specialties = [
    "Anxiety", "Depression", "Stress", "Trauma", "Relationships", "Self-esteem"
  ];
  
  const handleSpecialtyChange = (specialty: string) => {
    if (filters.specialties.includes(specialty)) {
      setFilters({
        ...filters,
        specialties: filters.specialties.filter(s => s !== specialty)
      });
    } else {
      setFilters({
        ...filters,
        specialties: [...filters.specialties, specialty]
      });
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Filter size={18} className="mr-2" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-2">Session Type</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                checked={filters.sessionTypes.includes('In-person')}
                onChange={() => {
                  const updated = filters.sessionTypes.includes('In-person')
                    ? filters.sessionTypes.filter(t => t !== 'In-person')
                    : [...filters.sessionTypes, 'In-person'];
                  setFilters({...filters, sessionTypes: updated});
                }}
                className="mr-2"
              />
              In-person
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox"
                checked={filters.sessionTypes.includes('Video')} 
                onChange={() => {
                  const updated = filters.sessionTypes.includes('Video')
                    ? filters.sessionTypes.filter(t => t !== 'Video')
                    : [...filters.sessionTypes, 'Video'];
                  setFilters({...filters, sessionTypes: updated});
                }}
                className="mr-2"
              />
              Video
            </label>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-2">Rating</h3>
          <div className="space-y-2">
            {[5, 4, 3].map(rating => (
              <label key={rating} className="flex items-center">
                <input 
                  type="radio" 
                  name="rating"
                  checked={filters.minRating === rating}
                  onChange={() => setFilters({...filters, minRating: rating})}
                  className="mr-2"
                />
                {rating}+ <Star size={14} className="ml-1 text-yellow-400 fill-yellow-400" />
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-2">Specialties</h3>
          <div className="space-y-2">
            {specialties.map(specialty => (
              <label key={specialty} className="flex items-center">
                <input 
                  type="checkbox"
                  checked={filters.specialties.includes(specialty)}
                  onChange={() => handleSpecialtyChange(specialty)}
                  className="mr-2"
                />
                {specialty}
              </label>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full text-sm"
          onClick={() => setFilters({
            minRating: 0,
            specialties: [],
            sessionTypes: []
          })}
        >
          Reset Filters
        </Button>
      </CardFooter>
    </Card>
  );
};

const Therapists: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filters, setFilters] = useState<Filters>({
    minRating: 0,
    specialties: [],
    sessionTypes: []
  });
  
  // Mock data - would come from API in a real app
  const therapists: Therapist[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Clinical Psychologist",
      rating: 5,
      reviewCount: 124,
      location: "New York, NY (2 miles away)",
      bio: "Specializing in anxiety disorders and depression with 10+ years of experience using CBT and mindfulness techniques.",
      tags: ["Anxiety", "Depression", "CBT", "Mindfulness"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
      sessionTypes: ["In-person", "Video"]
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Psychiatrist",
      rating: 4,
      reviewCount: 98,
      location: "Online Sessions Available",
      bio: "Board-certified psychiatrist helping patients with stress management, mood disorders, and life transitions.",
      tags: ["Medication Management", "Stress", "Depression", "Anxiety"],
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      sessionTypes: ["Video"]
    },
    {
      id: 3,
      name: "Jessica Martinez, LMFT",
      specialty: "Marriage & Family Therapist",
      rating: 5,
      reviewCount: 87,
      location: "Los Angeles, CA (5 miles away)",
      bio: "Passionate about helping couples and families improve communication and resolve conflicts through collaborative approaches.",
      tags: ["Relationships", "Couples Therapy", "Family Therapy", "Communication"],
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      sessionTypes: ["In-person", "Video"]
    },
    {
      id: 4,
      name: "Dr. Robert Williams",
      specialty: "Trauma Specialist",
      rating: 5,
      reviewCount: 112,
      location: "Chicago, IL (3 miles away)",
      bio: "Experienced in EMDR and trauma-focused therapies, helping clients recover from PTSD and process difficult life experiences.",
      tags: ["Trauma", "PTSD", "EMDR", "Anxiety"],
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      sessionTypes: ["In-person", "Video"]
    },
    {
      id: 5,
      name: "Emily Taylor, LCSW",
      specialty: "Social Worker & Therapist",
      rating: 4,
      reviewCount: 76,
      location: "Boston, MA (1 mile away)",
      bio: "Specializing in self-esteem, life transitions, and women's issues with a warm, client-centered approach.",
      tags: ["Self-esteem", "Life Transitions", "Women's Issues", "Depression"],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      sessionTypes: ["In-person"]
    }
  ];
  
  const filteredTherapists = therapists.filter(therapist => {
    // Search term filter
    const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         therapist.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         therapist.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Rating filter
    const matchesRating = therapist.rating >= filters.minRating;
    
    // Specialties filter
    const matchesSpecialties = filters.specialties.length === 0 || 
                             filters.specialties.some(specialty => therapist.tags.includes(specialty));
    
    // Session type filter
    const matchesSessionTypes = filters.sessionTypes.length === 0 || 
                              filters.sessionTypes.some(type => therapist.sessionTypes.includes(type));
    
    return matchesSearch && matchesRating && matchesSpecialties && matchesSessionTypes;
  });
  
  return (
    <div className="min-h-screen bg-gray-50">
      <AppNavbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Find a Therapist</h1>
            <p className="text-gray-600">Connect with licensed mental health professionals</p>
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Search therapists..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <FilterPanel filters={filters} setFilters={setFilters} />
          </div>
          
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTherapists.length > 0 ? (
                filteredTherapists.map(therapist => (
                  <TherapistCard key={therapist.id} therapist={therapist} />
                ))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <p className="text-gray-500">No therapists found matching your criteria.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSearchTerm('');
                      setFilters({
                        minRating: 0,
                        specialties: [],
                        sessionTypes: []
                      });
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapists; 