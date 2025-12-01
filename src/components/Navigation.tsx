import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="flex justify-between items-center h-20 px-2 sm:px-4">
        <button onClick={() => scrollToSection('home')} className="flex items-center">
          <img
            src="/whatsapp-image-2.jpeg"
            alt="PERIOD."
            className="h-20 w-20 object-cover cursor-pointer hover:opacity-80 transition-opacity"
          />
        </button>

        <div className="flex-1 flex justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-period-coral transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-period-coral transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-period-coral transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('advertisers')} className="text-gray-700 hover:text-period-coral transition-colors">
              For Advertisers
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-period-coral transition-colors">
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('signup')}
              className="bg-period-coral text-white px-6 py-2.5 rounded-full hover:bg-period-coral-dark transition-all transform hover:scale-105"
            >
              Sign Up
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700">
              About
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left py-2 text-gray-700">
              How It Works
            </button>
            <button onClick={() => scrollToSection('advertisers')} className="block w-full text-left py-2 text-gray-700">
              For Advertisers
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 text-gray-700">
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('signup')}
              className="block w-full bg-period-coral text-white px-6 py-2.5 rounded-full text-center"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
