
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Book, MessageCircle, Users, Home } from 'lucide-react';

const AppNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/dashboard', name: 'Dashboard', icon: Home },
    { path: '/journal', name: 'Journal', icon: Book },
    { path: '/therapists', name: 'Therapists', icon: Users },
    { path: '/chatbot', name: 'Chat Assistant', icon: MessageCircle },
  ];

  return (
    <header className="bg-white shadow-md py-3 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-lavender">Serrenity</Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-8 mr-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                      isActive(item.path) 
                        ? 'bg-light-lavender text-lavender' 
                        : 'text-gray-700 hover:text-lavender'
                    }`}
                  >
                    <Icon size={18} />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link 
            to="/login" 
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${
              isActive('/login') 
                ? 'bg-lavender text-white' 
                : 'text-gray-700 border border-lavender hover:bg-lavender hover:text-white transition-colors'
            }`}
          >
            <User size={18} />
            Login
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="text-lavender" /> : <Menu className="text-lavender" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-5 shadow-lg">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path} className="w-full">
                  <Link 
                    to={item.path} 
                    className={`flex items-center justify-center gap-2 px-3 py-2 mx-4 rounded-md ${
                      isActive(item.path) 
                        ? 'bg-light-lavender text-lavender' 
                        : 'text-gray-700 hover:text-lavender'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon size={18} />
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <li className="w-full pt-2 border-t border-gray-100">
              <Link 
                to="/login" 
                className={`flex items-center justify-center gap-2 mx-4 px-4 py-2 rounded-md ${
                  isActive('/login') 
                    ? 'bg-lavender text-white' 
                    : 'border border-lavender text-gray-700 hover:bg-lavender hover:text-white transition-colors'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <User size={18} />
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default AppNavbar;
