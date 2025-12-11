import { Target, TrendingUp, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Advertisers() {
  const { t } = useLanguage();
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="advertisers" className="py-24 bg-period-burgundy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.advertisers.title}
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            {t.advertisers.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <Target className="text-period-coral mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">{t.advertisers.reach}</h3>
            <p className="text-white/90 leading-relaxed">{t.advertisers.reachDesc}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <TrendingUp className="text-period-coral mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">{t.advertisers.engagement}</h3>
            <p className="text-white/90 leading-relaxed">{t.advertisers.engagementDesc}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <Shield className="text-period-coral mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">{t.advertisers.impact}</h3>
            <p className="text-white/90 leading-relaxed">{t.advertisers.impactDesc}</p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="bg-period-coral text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-period-coral-dark transition-all transform hover:scale-105"
          >
            {t.advertisers.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
