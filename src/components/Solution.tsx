import { Package, Target, Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Solution() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Package,
      number: "1",
      title: t.solution.feature1,
      description: t.solution.feature1Desc
    },
    {
      icon: Target,
      number: "2",
      title: t.solution.feature2,
      description: t.solution.feature2Desc
    },
    {
      icon: Truck,
      number: "3",
      title: t.solution.feature3,
      description: t.solution.feature3Desc
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-period-burgundy mb-6">
            {t.solution.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.solution.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-period-coral/5 p-8 rounded-2xl h-full hover:bg-period-coral/10 transition-colors border-2 border-period-coral/20">
                <div className="flex items-center justify-center w-16 h-16 bg-period-coral text-white rounded-full text-2xl font-bold mb-6">
                  {step.number}
                </div>
                <step.icon className="text-period-coral mb-4" size={36} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-period-coral">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
