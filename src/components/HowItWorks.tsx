import { CheckCircle, Package, Target, DollarSign } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Package,
      title: "Select Your Preferences",
      description: "Choose flow levels and product types that match your needs."
    },
    {
      icon: Target,
      title: "Pick Brand Categories",
      description: "Select advertiser categories: beauty, wellness, fashion, lifestyle, or student essentials."
    },
    {
      icon: DollarSign,
      title: "Brands Cover All Costs",
      description: "Simple interactions with brand content redirect advertising budgets to menstrual access."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-period-burgundy mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Three simple steps to free menstrual products
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-period-coral rounded-full flex items-center justify-center">
                    <step.icon className="text-white" size={32} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{step.description}</p>
                </div>
                <div className="flex-shrink-0 hidden md:block">
                  <CheckCircle className="text-period-coral" size={32} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
