
import { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className={`text-2xl font-bold ${scrolled ? 'text-lavender' : 'text-white'}`}>Serrenity</Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-8 mr-8">
            {['home', 'about', 'services', 'team', 'blog', 'contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollToSection(item)} 
                  className={`nav-link ${scrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
            <li>
              <Link 
                to="/dashboard" 
                className={`nav-link ${scrolled ? 'text-gray-700' : 'text-white'}`}
              >
                Dashboard
              </Link>
            </li>
          </ul>
          <Link 
            to="/login" 
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              scrolled 
                ? 'text-lavender border border-lavender hover:bg-lavender hover:text-white' 
                : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
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
          {mobileMenuOpen ? 
            <X className={`${scrolled ? 'text-lavender' : 'text-white'}`} /> : 
            <Menu className={`${scrolled ? 'text-lavender' : 'text-white'}`} />
          }
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-5 shadow-lg">
          <ul className="flex flex-col items-center space-y-4">
            {['home', 'about', 'services', 'team', 'blog', 'contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollToSection(item)} 
                  className="text-gray-700 hover:text-lavender"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
            <li>
              <Link 
                to="/dashboard" 
                className="text-gray-700 hover:text-lavender"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            </li>
            <li className="pt-2 w-full px-4">
              <Link 
                to="/login" 
                className="flex items-center justify-center gap-2 py-2 rounded-md bg-lavender text-white w-full"
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

export default Navbar;
