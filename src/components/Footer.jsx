
import React from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Journal', href: '/journal' },
  { label: 'Mood Tracker', href: '/dashboard' },
  { label: 'ChatBot', href: '/chatbot' },
  { label: 'Therapists', href: '/therapists' },
  { label: 'Contact', href: '#contact' }
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - Brand/About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Serrenity</h3>
            <p className="text-gray-400 mb-4">
              AI-powered mental wellness – Therapy, Journaling, Mood Tracking & More.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-lavender transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest features & articles.
            </p>
            <form className="mb-2">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-700 text-white rounded-l-lg px-4 py-2 focus:outline-none w-full"
                />
                <button 
                  type="submit" 
                  className="bg-lavender text-white rounded-r-lg px-4 py-2 hover:bg-opacity-90"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500">
              We respect your privacy.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Serrenity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

