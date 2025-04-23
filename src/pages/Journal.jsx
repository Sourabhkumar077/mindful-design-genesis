
import React, { useState } from 'react';
import AppNavbar from '../components/AppNavbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Book, Calendar, Search, Edit } from 'lucide-react';

const JournalEntry = ({ entry, onView }) => {
  return (
    <Card className="card-hover cursor-pointer" onClick={() => onView(entry)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{entry.title}</CardTitle>
          <span className="text-xs text-gray-500 flex items-center">
            <Calendar size={14} className="mr-1" />
            {entry.date}
          </span>
        </div>
        <CardDescription className="flex items-center gap-1">
          <div className={`w-2 h-2 rounded-full ${entry.mood === 'Happy' ? 'bg-green-400' : entry.mood === 'Neutral' ? 'bg-blue-400' : 'bg-red-400'}`}></div>
          {entry.mood} mood
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm line-clamp-3">{entry.content}</p>
      </CardContent>
    </Card>
  );
};

const JournalEditor = ({ entry, onSave, onCancel }) => {
  const [title, setTitle] = useState(entry?.title || '');
  const [content, setContent] = useState(entry?.content || '');
  const [mood, setMood] = useState(entry?.mood || 'Neutral');

  const handleSave = () => {
    if (!title.trim() || !content.trim()) return;
    
    onSave({
      id: entry?.id || Date.now(),
      title,
      content,
      mood,
      date: entry?.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    });
    
    setTitle('');
    setContent('');
    setMood('Neutral');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Edit size={20} />
          {entry ? 'Edit Journal Entry' : 'New Journal Entry'}
        </CardTitle>
        <CardDescription>
          Write about your thoughts and feelings to track your mental wellbeing
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give your entry a title"
            />
          </div>
          
          <div>
            <label htmlFor="mood" className="block text-sm font-medium text-gray-700 mb-1">
              Mood
            </label>
            <select
              id="mood"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="Happy">Happy</option>
              <option value="Neutral">Neutral</option>
              <option value="Sad">Sad</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Journal Entry
            </label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your thoughts here..."
              rows={8}
            />
          </div>
          
          <div className="flex justify-end space-x-2 pt-2">
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button 
              onClick={handleSave} 
              disabled={!title.trim() || !content.trim()}
              className="bg-lavender hover:bg-opacity-90"
            >
              Save Entry
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Journal = () => {
  // Mock data - would come from API in a real app
  const initialEntries = [
    { 
      id: 1, 
      title: 'Finding my balance', 
      content: 'Today I practiced meditation for 20 minutes and felt more centered afterward. I noticed that my thoughts were less scattered and I could focus better on my work. The guided meditation app suggested some breathing techniques that really helped when I felt stressed in the afternoon meeting.',
      mood: 'Happy',
      date: 'April 21, 2025'
    },
    { 
      id: 2, 
      title: 'Challenging day', 
      content: 'Work was stressful but I managed to use the breathing techniques I learned. I had a disagreement with a colleague but we worked through it. I\'m proud that I didn\'t let my emotions take over.',
      mood: 'Neutral',
      date: 'April 19, 2025'
    },
    { 
      id: 3, 
      title: 'Feeling down', 
      content: 'Today was difficult. I woke up feeling exhausted despite getting enough sleep. The weather was gloomy which didn\'t help my mood. I should remember to use more self-care techniques when I feel this way.',
      mood: 'Sad',
      date: 'April 15, 2025'
    },
  ];

  const [entries, setEntries] = useState(initialEntries);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const filteredEntries = entries.filter(entry => 
    entry.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    entry.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSaveEntry = (entry) => {
    if (isEditing) {
      setEntries(entries.map(e => e.id === entry.id ? entry : e));
      setIsEditing(false);
    } else {
      setEntries([entry, ...entries]);
      setIsCreating(false);
    }
    setSelectedEntry(null);
  };

  const handleViewEntry = (entry) => {
    setSelectedEntry(entry);
    setIsEditing(false);
    setIsCreating(false);
  };

  const handleEditEntry = () => {
    setIsEditing(true);
    setIsCreating(false);
  };

  const handleNewEntry = () => {
    setSelectedEntry(null);
    setIsEditing(false);
    setIsCreating(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsCreating(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AppNavbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Journal</h1>
            <p className="text-gray-600">Record your thoughts and track your mental wellbeing</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search entries..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button onClick={handleNewEntry} className="bg-lavender hover:bg-opacity-90 whitespace-nowrap">
              New Entry
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`md:col-span-1 ${(isEditing || isCreating || selectedEntry) ? 'hidden md:block' : ''}`}>
            <div className="space-y-4">
              {filteredEntries.length > 0 ? (
                filteredEntries.map(entry => (
                  <JournalEntry 
                    key={entry.id} 
                    entry={entry} 
                    onView={handleViewEntry} 
                  />
                ))
              ) : (
                <Card className="p-8 text-center">
                  <Book size={40} className="mx-auto text-gray-300 mb-2" />
                  <p className="text-gray-500">
                    {searchTerm ? 'No entries match your search.' : 'No journal entries yet. Create your first one!'}
                  </p>
                </Card>
              )}
            </div>
          </div>
          
          <div className={`md:col-span-2 ${(isEditing || isCreating || selectedEntry) ? '' : 'hidden md:block'}`}>
            {isEditing ? (
              <JournalEditor entry={selectedEntry} onSave={handleSaveEntry} onCancel={handleCancel} />
            ) : isCreating ? (
              <JournalEditor onSave={handleSaveEntry} onCancel={handleCancel} />
            ) : selectedEntry ? (
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>{selectedEntry.title}</CardTitle>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {selectedEntry.date}
                    </span>
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${
                      selectedEntry.mood === 'Happy' 
                        ? 'bg-green-400' 
                        : selectedEntry.mood === 'Neutral' 
                          ? 'bg-blue-400' 
                          : 'bg-red-400'
                    }`}></div>
                    {selectedEntry.mood} mood
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 whitespace-pre-line">{selectedEntry.content}</p>
                  <div className="mt-6 flex justify-end">
                    <Button onClick={handleEditEntry} variant="outline" className="border-lavender text-lavender hover:bg-light-lavender">
                      Edit Entry
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="p-8 text-center h-64 flex flex-col items-center justify-center">
                <Book size={48} className="text-gray-300 mb-3" />
                <p className="text-gray-500 mb-4">Select a journal entry to view or create a new one</p>
                <Button onClick={handleNewEntry} className="bg-lavender hover:bg-opacity-90">
                  New Entry
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
