import { Heart, Users, Shield, Leaf } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Dignity",
      description: "Menstrual access should never depend on income."
    },
    {
      icon: Users,
      title: "Equity",
      description: "We design systems that level inequalities, not reinforce them."
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Clear communication and honest data practices."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Responsible sourcing, meaningful partnerships, lasting change."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-period-burgundy mb-6">
            Ending menstrual inequality through access and dignity.
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            PERIOD. eliminates the financial burden of menstrual products by redirecting advertising budgets into free deliveries. We start with students and expand to anyone who needs them.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-period-burgundy mb-8 text-center">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border-2 border-period-coral/20 hover:border-period-coral transition-colors">
                <value.icon className="text-period-coral mb-4" size={40} />
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-period-burgundy/5 p-12 rounded-3xl border-2 border-period-burgundy/10">
          <h3 className="text-3xl font-bold text-period-burgundy mb-8">Founders</h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Derin Kirtman, Co-Founder</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm driven to create ventures that transform creative ideas into tangible impact, from The Washington Script to PERIOD.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Dexter Illing, Co-Founder</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate social entrepreneur with experience building a school café pre-order app, now scaling that problem-solving mindset with PERIOD.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Nadia Diakowska, Co-Founder</h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                After researching women's economic exclusion and period poverty in Southeast Asia, I became committed to building solutions that drive social impact through entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
