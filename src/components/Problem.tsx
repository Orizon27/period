import { AlertCircle, DollarSign, Users, TrendingDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Problem() {
  const { t } = useLanguage();

  const problems = [
    {
      icon: DollarSign,
      text: t.problem.stat1
    },
    {
      icon: Users,
      text: t.problem.stat2
    },
    {
      icon: TrendingDown,
      text: t.problem.stat3
    },
    {
      icon: AlertCircle,
      text: t.problem.description
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-period-burgundy mb-6">
            {t.problem.title}
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t.problem.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <problem.icon className="text-period-coral mb-4" size={40} />
              <p className="text-lg text-gray-800 leading-relaxed">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
