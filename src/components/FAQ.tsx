import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why are the products free?",
      answer: "Because advertisers sponsor the cost of your monthly delivery. You never pay."
    },
    {
      question: "Who funds the service?",
      answer: "Brands and local advertisers whose offers are included in your delivery box."
    },
    {
      question: "Are the products safe?",
      answer: "Yes. We only use certified, high-quality products from EU-approved suppliers."
    },
    {
      question: "Can I customize my pack?",
      answer: "Yes — you choose pads, tampons, or a mix, and the flow level."
    },
    {
      question: "Do I need to share personal data?",
      answer: "Only the minimum needed for delivery and product preferences."
    },
    {
      question: "Is my information protected?",
      answer: "Absolutely. PERIOD. complies with GDPR. Sensitive data is encrypted and never shared with advertisers."
    },
    {
      question: "Will advertisers see my name?",
      answer: "No. Advertisers receive aggregated insights, never personal identities."
    },
    {
      question: "Who is PERIOD.?",
      answer: "A Bocconi-founded student startup working to eliminate menstrual inequality through an ad-funded access model."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-period-burgundy mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700">
            Everything you need to know about PERIOD.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:border-period-coral transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="text-period-coral flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-period-coral flex-shrink-0" size={24} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
