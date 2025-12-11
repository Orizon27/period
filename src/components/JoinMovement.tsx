import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function JoinMovement() {
  const { t } = useLanguage();

  const scrollToSignUp = () => {
    const element = document.getElementById('signup');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-period-coral">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          {t.joinMovement.subtitle}
        </h2>
        <button
          onClick={scrollToSignUp}
          className="group bg-white text-period-coral px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 inline-flex items-center"
        >
          {t.hero.cta}
          <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
        </button>
      </div>
    </section>
  );
}
