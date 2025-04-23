
import React, { useState } from 'react';
import AppNavbar from '../components/AppNavbar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile, Meh, Frown, Calendar, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  
  const moods = [
    { name: 'Happy', icon: Smile, color: 'bg-green-100 text-green-500 border-green-200' },
    { name: 'Neutral', icon: Meh, color: 'bg-blue-100 text-blue-500 border-blue-200' },
    { name: 'Sad', icon: Frown, color: 'bg-red-100 text-red-500 border-red-200' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>How are you feeling today?</CardTitle>
        <CardDescription>Track your daily mood to see patterns over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center space-x-4 mb-6">
          {moods.map((mood) => {
            const Icon = mood.icon;
            return (
              <button
                key={mood.name}
                onClick={() => setSelectedMood(mood.name)}
                className={`flex flex-col items-center p-4 border-2 rounded-lg transition-all ${
                  selectedMood === mood.name
                    ? `${mood.color} scale-110`
                    : 'border-gray-200 hover:border-lavender'
                }`}
              >
                <Icon size={40} className={selectedMood === mood.name ? '' : 'text-gray-400'} />
                <span className="mt-2 font-medium">{mood.name}</span>
              </button>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button disabled={!selectedMood} className="bg-lavender hover:bg-opacity-90">
          Save Mood
        </Button>
      </CardFooter>
    </Card>
  );
};

const Dashboard = () => {
  // Mock data - would come from API in a real app
  const recentJournalEntries = [
    { id: 1, date: 'April 21, 2025', title: 'Finding balance', excerpt: 'Today I practiced meditation for 20 minutes and felt more centered afterward...' },
    { id: 2, date: 'April 19, 2025', title: 'Challenging day', excerpt: 'Work was stressful but I managed to use the breathing techniques...' },
  ];

  const weeklyMoodData = [
    { day: 'Mon', mood: 'Happy' },
    { day: 'Tue', mood: 'Happy' },
    { day: 'Wed', mood: 'Neutral' },
    { day: 'Thu', mood: 'Sad' },
    { day: 'Fri', mood: 'Neutral' },
    { day: 'Sat', mood: 'Happy' },
    { day: 'Sun', mood: null },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AppNavbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back, Sarah</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <MoodTracker />
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar size={20} />
                Weekly Mood
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-end h-40 mb-2">
                {weeklyMoodData.map((day, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="h-32 flex flex-col justify-end">
                      {day.mood === 'Happy' && <div className="w-8 h-24 bg-green-200 rounded-t-md"></div>}
                      {day.mood === 'Neutral' && <div className="w-8 h-16 bg-blue-200 rounded-t-md"></div>}
                      {day.mood === 'Sad' && <div className="w-8 h-8 bg-red-200 rounded-t-md"></div>}
                    </div>
                    <span className="text-xs mt-2 text-gray-500">{day.day}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/insights" className="text-lavender hover:underline text-sm flex items-center">
                View detailed insights <ArrowRight size={16} className="ml-1" />
              </Link>
            </CardFooter>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book size={20} />
                  Recent Journal Entries
                </CardTitle>
              </CardHeader>
              <CardContent>
                {recentJournalEntries.map(entry => (
                  <div key={entry.id} className="mb-4 pb-4 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-medium text-gray-800">{entry.title}</h3>
                      <span className="text-sm text-gray-500">{entry.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">{entry.excerpt}</p>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Link to="/journal" className="text-lavender hover:underline text-sm flex items-center">
                  Write in journal <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardFooter>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp size={20} />
                Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Mood Stability</span>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-lavender h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Journaling Streak</span>
                    <span className="text-sm text-gray-500">12 days</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-lavender h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Mindfulness Goals</span>
                    <span className="text-sm text-gray-500">40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-lavender h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-lavender text-lavender hover:bg-light-lavender hover:text-lavender">
                Set New Goals
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
