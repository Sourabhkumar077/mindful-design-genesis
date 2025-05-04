import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MessageSquare, Calendar, Heart } from 'lucide-react';

const Community = () => {
  const features = [
    {
      title: 'Support Groups',
      description: 'Join supportive communities and share experiences',
      icon: Users,
      color: 'text-purple-500'
    },
    {
      title: 'Discussion Forums',
      description: 'Engage in meaningful conversations',
      icon: MessageSquare,
      color: 'text-blue-500'
    },
    {
      title: 'Events & Workshops',
      description: 'Participate in community events',
      icon: Calendar,
      color: 'text-green-500'
    },
    {
      title: 'Peer Support',
      description: 'Connect with others who understand',
      icon: Heart,
      color: 'text-pink-500'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Community</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="hover-scale">
            <CardHeader>
              <div className={`${feature.color} mb-2`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <button className="btn-primary w-full">Join</button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Community; 