import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'it' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="flex justify-between items-center h-20 px-2 sm:px-4">
        <button onClick={() => scrollToSection('home')} className="flex items-center">
          <img
            src="/logo-header.jpeg"
            alt="PERIOD."
            className="h-20 w-20 object-cover cursor-pointer hover:opacity-80 transition-opacity"
          />
        </button>

        <div className="flex-1 flex justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-period-coral transition-colors">
              {t.nav.about}
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-period-coral transition-colors">
              {t.nav.howItWorks}
            </button>
            <button onClick={() => scrollToSection('partners')} className="text-gray-700 hover:text-period-coral transition-colors">
              {t.nav.partners}
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-period-coral transition-colors">
              {t.nav.faq}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-period-coral transition-colors">
              {t.nav.contact}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-gray-700 hover:text-period-coral transition-colors"
            >
              <Globe size={20} />
              {language === 'en' ? 'IT' : 'EN'}
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
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700">
              {t.nav.about}
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left py-2 text-gray-700">
              {t.nav.howItWorks}
            </button>
            <button onClick={() => scrollToSection('partners')} className="block w-full text-left py-2 text-gray-700">
              {t.nav.partners}
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 text-gray-700">
              {t.nav.faq}
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700">
              {t.nav.contact}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 py-2 text-gray-700"
            >
              <Globe size={20} />
              {language === 'en' ? 'Italiano' : 'English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
