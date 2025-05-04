import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Book, MessageSquare, Users, Home, LogOut, User, ClipboardList, FileText } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const AppNavbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold gradient-text">Zenora</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="nav-link">
              <Home className="w-5 h-5" />
            </Link>
            <Link to="/resources" className="nav-link">
              <Book className="w-5 h-5" />
            </Link>
            <Link to="/community" className="nav-link">
              <Users className="w-5 h-5" />
            </Link>
            <Link to="/chat" className="nav-link">
              <MessageSquare className="w-5 h-5" />
            </Link>
            {isAuthenticated && (
              <>
                <Link to="/journal" className="nav-link">
                  <FileText className="w-5 h-5" />
                </Link>
                <Link to="/assessment" className="nav-link">
                  <ClipboardList className="w-5 h-5" />
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="nav-link">
                  <User className="w-5 h-5" />
                </Link>
                <Button variant="ghost" onClick={handleLogout} className="nav-link">
                  <LogOut className="w-5 h-5" />
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="nav-link">Login</Button>
                </Link>
                <Link to="/register">
                  <Button className="btn-primary">Register</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar; 