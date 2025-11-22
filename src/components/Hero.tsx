import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-period-burgundy via-period-burgundy-light to-period-coral pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(239,68,108,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              A new model for menstrual access
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-xl">
              free products, funded entirely by brands
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('signup')}
                className="group bg-white text-period-coral px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Sign Up for Your Free Products
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
              >
                Learn How It Works
              </button>
            </div>
          </div>

          <div className="hidden lg:flex justify-start items-center">
            <div className="relative bg-period-burgundy-dark/40 rounded-[2rem] backdrop-blur-sm border border-white/10 overflow-hidden">
              <img
                src="/WhatsApp Image 2025-11-11 at 16.45.13.jpeg"
                alt="PERIOD. Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
