import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Bot, User, Send } from 'lucide-react';

const Chat = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Chat Support</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle>Chat with Support</CardTitle>
              <CardDescription>Our AI assistant is here to help you 24/7</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1 bg-muted rounded-lg p-4 mb-4 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Bot className="w-5 h-5 text-primary" />
                    </div>
                    <div className="bg-muted-foreground/10 p-3 rounded-lg">
                      <p>Hello! How can I help you today?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="input flex-1"
                />
                <button className="btn-primary">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Quick Help</CardTitle>
              <CardDescription>Common topics to get started</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <button className="w-full btn-outline text-left">
                  Feeling anxious
                </button>
                <button className="w-full btn-outline text-left">
                  Need to talk
                </button>
                <button className="w-full btn-outline text-left">
                  Self-care tips
                </button>
                <button className="w-full btn-outline text-left">
                  Crisis support
                </button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Emergency Support</CardTitle>
              <CardDescription>If you need immediate help</CardDescription>
            </CardHeader>
            <CardContent>
              <button className="w-full btn-primary">
                Connect with a professional
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat; 