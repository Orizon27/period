import { useState } from 'react';
import { Mail, Instagram } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const maxRetries = 3;
    let attempt = 0;

    while (attempt < maxRetries) {
      try {
        const { error } = await supabase
          .from('contact_submissions')
          .insert([formData]);

        if (error) {
          console.error('Supabase error:', error);
          throw error;
        }

        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
        return;
      } catch (error) {
        attempt++;
        console.error(`Attempt ${attempt} failed:`, error);

        if (attempt >= maxRetries) {
          console.error('All retry attempts failed');
          setSubmitStatus('error');
        } else {
          await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        }
      }
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-period-burgundy to-period-burgundy-light text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-white/90">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus === 'success' && (
              <div className="bg-green-500/20 border border-green-500/50 text-white px-4 py-3 rounded-xl">
                {t.contact.success}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-500/20 border border-red-500/50 text-white px-4 py-3 rounded-xl">
                {t.contact.error}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">{t.contact.name}</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-period-coral"
                placeholder={t.contact.namePlaceholder}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">{t.contact.email}</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-period-coral"
                placeholder={t.contact.emailPlaceholder}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">{t.contact.subject}</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-period-coral"
                placeholder={t.contact.subjectPlaceholder}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">{t.contact.message}</label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-period-coral resize-none"
                placeholder={t.contact.messagePlaceholder}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-period-coral text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-period-coral-dark transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t.contact.sending : t.contact.send}
            </button>
          </form>
        </div>

        <div className="mt-12 text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <Mail size={24} />
            <a href="mailto:info@period.it.com" className="text-lg hover:text-period-coral transition-colors">
              info@period.it.com
            </a>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Instagram size={24} />
            <a href="https://instagram.com/period.it" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-period-coral transition-colors">
              @period.it
            </a>
          </div>
          <p className="text-white/70 text-sm mt-8">
            {t.contact.disclaimer}
          </p>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-white/20 text-center">
        <p className="text-white/70">
          {t.contact.footer}
        </p>
      </footer>
    </section>
  );
}
