import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Book, Calendar as CalendarIcon, Edit, Trash2 } from 'lucide-react';

interface JournalEntry {
  id: number;
  date: Date;
  content: string;
  mood: string;
}

const Journal = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedMood, setSelectedMood] = useState('neutral');

  const moods = ['😊 Happy', '😔 Sad', '😌 Calm', '😤 Angry', '😟 Anxious'];

  const addEntry = () => {
    if (newEntry.trim()) {
      setEntries([
        ...entries,
        {
          id: Date.now(),
          date: selectedDate,
          content: newEntry,
          mood: selectedMood,
        },
      ]);
      setNewEntry('');
    }
  };

  const deleteEntry = (id: number) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Book className="w-8 h-8 text-primary mr-3" />
          <h1 className="text-4xl font-bold gradient-text">My Journal</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* New Entry Section */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>New Entry</CardTitle>
                <CardDescription>Write your thoughts and feelings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {moods.map((mood) => (
                      <Button
                        key={mood}
                        variant={selectedMood === mood ? "default" : "outline"}
                        onClick={() => setSelectedMood(mood)}
                        className="text-lg"
                      >
                        {mood}
                      </Button>
                    ))}
                  </div>
                  <Textarea
                    placeholder="What's on your mind?"
                    value={newEntry}
                    onChange={(e) => setNewEntry(e.target.value)}
                    className="min-h-[200px]"
                  />
                  <Button onClick={addEntry} className="w-full">
                    Save Entry
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Calendar Section */}
          <Card>
            <CardHeader>
              <CardTitle>Select Date</CardTitle>
              <CardDescription>Choose a date for your entry</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                className="rounded-md border w-full"
              />
            </CardContent>
          </Card>

          {/* Previous Entries */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold mb-4">Previous Entries</h2>
            <div className="space-y-4">
              {entries.map((entry) => (
                <Card key={entry.id} className="hover-scale">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="flex items-center">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          {entry.date.toLocaleDateString()}
                          <span className="ml-2 text-lg">{entry.mood}</span>
                        </CardTitle>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => deleteEntry(entry.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap">{entry.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal; 