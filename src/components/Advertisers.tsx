import { Target, Users, TrendingUp, Shield, BarChart, CheckCircle } from 'lucide-react';

export default function Advertisers() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    { icon: Users, text: "100% opt-in audience" },
    { icon: Target, text: "High attention environment (products people actually need)" },
    { icon: TrendingUp, text: "Hyper-personalized (AI-powered in later phases)" },
    { icon: Shield, text: "Ethical and mission-aligned" },
    { icon: BarChart, text: "Measurable ROI + closed-loop reporting" },
    { icon: CheckCircle, text: "No wasted impressions" }
  ];

  const adOptions = [
    {
      title: "Physical Inserts (Pilot Phase)",
      description: "Branded cards included in each delivery."
    },
    {
      title: "QR-Driven Offers",
      description: "Promotions, discounts, or links to your landing pages."
    },
    {
      title: "Personalized App Ads (Phase 2)",
      description: "AI-driven ads tailored to the user's interests."
    },
    {
      title: "Surveys + Feedback (Phase 2–3)",
      description: "Targeted opinions collected from students."
    }
  ];

  return (
    <section id="advertisers" className="py-24 bg-period-burgundy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partner With PERIOD. as an Advertiser
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Reach a high-intent, opt-in student audience — responsibly.
          </p>
          <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed mt-4">
            PERIOD. gives brands direct access to a verified, student-led female demographic with clean first-party data, real engagement, and strong brand alignment. Every partnership supports a social cause — menstrual equity — while delivering measurable returns.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl mb-16 border border-white/20">
          <h3 className="text-3xl font-bold mb-8">How It Works</h3>
          <p className="text-lg text-white/90 leading-relaxed">
            Your brand message is included in each monthly pack through a branded insert card. Students scan the QR code, engage with your offer, interact with your campaign, or complete your survey — giving you actionable insights and high-quality, measurable engagement.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Ad Options</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {adOptions.map((option, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h4 className="text-xl font-bold mb-3">{option.title}</h4>
                <p className="text-white/80 leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Why PERIOD. Outperforms Traditional Ads</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <benefit.icon className="text-period-coral flex-shrink-0" size={28} />
                <p className="text-white/90 leading-relaxed">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="bg-period-coral text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-period-coral-dark transition-all transform hover:scale-105"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
}
