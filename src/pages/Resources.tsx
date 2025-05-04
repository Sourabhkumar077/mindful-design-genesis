import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Brain, Heart, Shield } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: 'Mental Health Articles',
      description: 'Read expert articles on various mental health topics',
      icon: Book,
      color: 'text-blue-500'
    },
    {
      title: 'Mindfulness Exercises',
      description: 'Practice mindfulness with guided exercises',
      icon: Brain,
      color: 'text-green-500'
    },
    {
      title: 'Self-Care Tips',
      description: 'Learn effective self-care strategies',
      icon: Heart,
      color: 'text-pink-500'
    },
    {
      title: 'Crisis Resources',
      description: 'Find immediate help and support',
      icon: Shield,
      color: 'text-red-500'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <Card key={index} className="hover-scale">
            <CardHeader>
              <div className={`${resource.color} mb-2`}>
                <resource.icon className="w-8 h-8" />
              </div>
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <button className="btn-primary w-full">Explore</button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Resources; 