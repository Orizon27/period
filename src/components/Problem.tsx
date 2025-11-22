import { AlertCircle, DollarSign, Users, TrendingDown } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: DollarSign,
      text: "Menstrual products are expensive, unavoidable, and disproportionately burden women."
    },
    {
      icon: Users,
      text: "Students often pay €150–€200/year for essentials."
    },
    {
      icon: TrendingDown,
      text: "Brands waste ad budgets on low-impact impressions."
    },
    {
      icon: AlertCircle,
      text: "No one should pay for a biological necessity."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-period-burgundy mb-6">
            A silent inequality hidden in plain sight.
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Every month, millions of women pay for menstrual products — a recurring, non-negotiable cost that deepens gender inequality. At the same time, brands spend billions on ads that are ignored, wasted, or poorly targeted. These two broken systems coexist, but no one has ever connected them — until now.
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
