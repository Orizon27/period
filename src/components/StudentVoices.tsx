import { Quote } from 'lucide-react';

export default function StudentVoices() {
  const testimonials = [
    {
      quote: "Finally a solution that actually understands the problem.",
      name: "Student, Bocconi University"
    },
    {
      quote: "I've always wondered why something like this didn't exist already.",
      name: "Student, Bocconi University"
    },
    {
      quote: "This can change the lives of women who can't afford essentials.",
      name: "Student, Bocconi University"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-period-burgundy to-period-burgundy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Backed by Students, Built at Bocconi
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            PERIOD. was created by Bocconi students united by one idea: menstrual access should be a right, not a privilege. Supported by the Bocconi community and entrepreneurship initiatives like TEF Ignition, PERIOD. is beginning with a student pilot designed to scale across Italy and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <Quote className="text-period-coral mb-4" size={32} />
              <p className="text-lg text-white mb-4 leading-relaxed italic">"{testimonial.quote}"</p>
              <p className="text-white/80 font-medium">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
