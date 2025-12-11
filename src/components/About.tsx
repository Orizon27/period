import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-period-burgundy mb-6">
            {t.about.title}
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-period-burgundy mb-8 text-center">{t.about.mission}</h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8 text-center leading-relaxed">
            {t.about.missionText}
          </p>
        </div>

        <div className="mt-16 bg-period-burgundy/5 p-12 rounded-3xl border-2 border-period-burgundy/10">
          <h3 className="text-3xl font-bold text-period-burgundy mb-8">{t.about.story}</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {t.about.storyText}
          </p>
          <h3 className="text-3xl font-bold text-period-burgundy mb-8">{t.about.team}</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t.about.teamText}
          </p>
        </div>
      </div>
    </section>
  );
}
