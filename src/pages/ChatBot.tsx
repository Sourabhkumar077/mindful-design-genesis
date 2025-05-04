import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import AppNavbar from '../components/AppNavbar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Info, ArrowRight, ExternalLink, Clock } from 'lucide-react';

interface Resource {
  title: string;
  url: string;
}

interface Message {
  id: number;
  sender: 'user' | 'bot';
  text: string;
  suggestions?: string[];
  resources?: Resource[];
}

interface ChatMessageProps {
  message: Message;
}

interface SuggestionPromptProps {
  onSelectPrompt: (prompt: string) => void;
}

interface ChatHistoryProps {
  onSelectChat: (id: number) => void;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex gap-2 max-w-[80%] ${isUser ? 'flex-row-reverse' : ''}`}>
        <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${isUser ? 'bg-lavender' : 'bg-gray-200'}`}>
          {isUser ? <User size={16} className="text-white" /> : <Bot size={16} className="text-gray-600" />}
        </div>
        <div className={`py-2 px-4 rounded-lg ${isUser ? 'bg-lavender text-white' : 'bg-white border border-gray-200'}`}>
          {message.text.split('\n').map((line, i) => (
            <p key={i} className={`${i > 0 ? 'mt-2' : ''}`}>{line}</p>
          ))}
          {message.suggestions && (
            <div className="mt-3 pt-3 border-t border-gray-200 space-y-2">
              <p className="text-sm font-medium">You might want to try:</p>
              <div className="flex flex-wrap gap-2">
                {message.suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="text-xs text-left py-1 px-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
          {message.resources && (
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-sm font-medium mb-2">Helpful resources:</p>
              <div className="space-y-1">
                {message.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs flex items-center text-blue-500 hover:text-blue-700 hover:underline"
                  >
                    <ExternalLink size={12} className="mr-1" />
                    {resource.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SuggestionPrompt: React.FC<SuggestionPromptProps> = ({ onSelectPrompt }) => {
  const suggestions = [
    "I've been feeling anxious lately",
    "How can I improve my sleep?",
    "I need help with stress management",
    "What are some mindfulness techniques?",
    "I'm feeling overwhelmed at work"
  ];
  
  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Info size={18} className="mr-2 text-lavender" />
          Need some ideas?
        </CardTitle>
        <CardDescription>
          Try one of these conversation starters
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => onSelectPrompt(suggestion)}
              className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-lavender hover:bg-light-lavender transition-all flex justify-between items-center group"
            >
              <span>{suggestion}</span>
              <ArrowRight size={16} className="text-lavender opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const ChatHistory: React.FC<ChatHistoryProps> = ({ onSelectChat }) => {
  const histories = [
    { id: 1, title: "Anxiety discussion", date: "Yesterday", preview: "We discussed breathing techniques for anxiety..." },
    { id: 2, title: "Sleep improvement", date: "Apr 19", preview: "Tips for establishing a better sleep routine..." },
    { id: 3, title: "Work stress", date: "Apr 15", preview: "Strategies for managing workplace stress..." }
  ];
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Clock size={18} className="mr-2 text-lavender" />
          Chat History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {histories.map((chat) => (
            <button
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-lavender hover:bg-light-lavender transition-all"
            >
              <div className="flex justify-between mb-1">
                <span className="font-medium">{chat.title}</span>
                <span className="text-xs text-gray-500">{chat.date}</span>
              </div>
              <p className="text-xs text-gray-600 truncate">{chat.preview}</p>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! I'm Serrenity's AI assistant. I'm here to help you with your mental wellbeing journey. How are you feeling today?",
      suggestions: ["I'm feeling anxious", "I'm feeling down", "I need help with stress", "I'd like some self-care tips"]
    }
  ]);
  const [input, setInput] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: input
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    setShowSuggestions(false);
    
    // Simulate bot response (in a real app, this would be an API call)
    setTimeout(() => {
      let botResponse: Message;
      
      // Simple keyword matching for demo purposes
      if (input.toLowerCase().includes('anxious') || input.toLowerCase().includes('anxiety')) {
        botResponse = {
          id: Date.now() + 1,
          sender: 'bot',
          text: "I understand that anxiety can be challenging. Some techniques that might help include deep breathing exercises, progressive muscle relaxation, and mindfulness meditation.\n\nWould you like me to explain any of these techniques in more detail?",
          suggestions: ["Tell me about deep breathing", "How does mindfulness help?", "What is progressive muscle relaxation?"],
          resources: [
            { title: "Anxiety Management Guide", url: "#" },
            { title: "5-Minute Breathing Exercise", url: "#" }
          ]
        };
      } else if (input.toLowerCase().includes('sleep')) {
        botResponse = {
          id: Date.now() + 1,
          sender: 'bot',
          text: "Good sleep is essential for mental wellbeing. Some tips for better sleep include maintaining a regular sleep schedule, creating a relaxing bedtime routine, and limiting screen time before bed.\n\nIs there a specific sleep issue you're experiencing?",
          suggestions: ["I have trouble falling asleep", "I wake up during the night", "I don't feel rested"],
          resources: [
            { title: "Sleep Hygiene Guide", url: "#" },
            { title: "Bedtime Relaxation Techniques", url: "#" }
          ]
        };
      } else {
        botResponse = {
          id: Date.now() + 1,
          sender: 'bot',
          text: "Thank you for sharing. I'm here to support you on your mental health journey. Would you like some general wellbeing tips, or is there something specific you'd like to discuss?",
          suggestions: ["Wellbeing tips", "Stress management", "Mood improvement", "Talk to a human therapist"]
        };
      }
      
      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };
  
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleSelectPrompt = (prompt: string) => {
    setInput(prompt);
    setShowSuggestions(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AppNavbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">AI Assistant</h1>
              <p className="text-gray-600 text-sm">Chat with our AI to get support and mental health resources</p>
            </div>
            
            {showSuggestions && (
              <SuggestionPrompt onSelectPrompt={handleSelectPrompt} />
            )}
            
            <ChatHistory onSelectChat={() => {}} />
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Info size={18} className="mr-2 text-lavender" />
                  Important Note
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  This AI assistant is not a replacement for professional mental health care. 
                  If you're experiencing a crisis or emergency, please contact a mental health professional or emergency services.
                </p>
                <Button className="w-full mt-3 bg-lavender hover:bg-opacity-90">
                  Find a Therapist
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-3">
            <Card className="h-[calc(100vh-12rem)]">
              <CardHeader className="pb-2">
                <CardTitle>Chat</CardTitle>
                <CardDescription>
                  Ask me anything about mental health and wellbeing
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col h-[calc(100%-8rem)]">
                <div className="flex-1 overflow-y-auto mb-4">
                  {messages.map(message => (
                    <ChatMessage key={message.id} message={message} />
                  ))}
                  <div ref={messagesEndRef} />
                </div>
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} className="bg-lavender hover:bg-opacity-90">
                    <Send size={18} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot; 