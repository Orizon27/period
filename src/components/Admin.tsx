import { useState, useEffect } from 'react';
import { supabase, ContactSubmission } from '../lib/supabase';
import { Lock, Mail, Calendar, CheckCircle, Circle, RefreshCw, Archive, Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Admin() {
  const { t } = useLanguage();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showArchived, setShowArchived] = useState(false);

  const ADMIN_PASSWORD = 'period2025';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      loadSubmissions();
    } else {
      setError(t.admin.incorrectPassword);
    }
  };

  const loadSubmissions = async () => {
    setLoading(true);
    setError('');

    const maxRetries = 3;
    let attempt = 0;

    while (attempt < maxRetries) {
      try {
        const { data, error } = await supabase
          .from('contact_submissions')
          .select('*')
          .eq('archived', showArchived)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setSubmissions(data || []);
        setLoading(false);
        return;
      } catch (err) {
        attempt++;
        console.error(`Load attempt ${attempt} failed:`, err);

        if (attempt >= maxRetries) {
          console.error('All retry attempts failed');
          setError(t.admin.loadError);
        } else {
          await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        }
      }
    }

    setLoading(false);
  };

  const toggleRead = async (id: string, currentStatus: boolean) => {
    const maxRetries = 3;
    let attempt = 0;

    while (attempt < maxRetries) {
      try {
        const { error } = await supabase
          .from('contact_submissions')
          .update({ read: !currentStatus })
          .eq('id', id);

        if (error) throw error;
        loadSubmissions();
        return;
      } catch (err) {
        attempt++;
        console.error(`Toggle read attempt ${attempt} failed:`, err);

        if (attempt < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        }
      }
    }
  };

  const toggleArchive = async (id: string, currentStatus: boolean) => {
    const maxRetries = 3;
    let attempt = 0;

    while (attempt < maxRetries) {
      try {
        const { error } = await supabase
          .from('contact_submissions')
          .update({ archived: !currentStatus })
          .eq('id', id);

        if (error) throw error;
        loadSubmissions();
        return;
      } catch (err) {
        attempt++;
        console.error(`Toggle archive attempt ${attempt} failed:`, err);

        if (attempt < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        }
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadSubmissions();
    }
  }, [showArchived]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-period-burgundy to-period-burgundy-light flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 w-full max-w-md">
          <div className="text-center mb-8">
            <Lock className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-2">{t.admin.title}</h1>
            <p className="text-white/80">{t.admin.subtitle}</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-period-coral"
              />
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-white px-4 py-2 rounded-xl text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-period-coral text-white px-6 py-3 rounded-full font-semibold hover:bg-period-coral-dark transition-all transform hover:scale-105"
            >
              {t.admin.login}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-period-burgundy to-period-burgundy-light p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">{t.admin.contactSubmissions}</h1>
          <div className="flex gap-3">
            <button
              onClick={() => { setShowArchived(!showArchived); }}
              className="bg-white/20 text-white px-6 py-2 rounded-full hover:bg-white/30 transition-all flex items-center gap-2"
            >
              {showArchived ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              {showArchived ? t.admin.showActive : t.admin.showArchived}
            </button>
            <button
              onClick={loadSubmissions}
              className="bg-white/20 text-white px-6 py-2 rounded-full hover:bg-white/30 transition-all flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              {t.admin.refresh}
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-white/20 text-white px-6 py-2 rounded-full hover:bg-white/30 transition-all"
            >
              {t.admin.logout}
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/50 text-white px-6 py-4 rounded-2xl mb-6 flex items-center justify-between">
            <span>{error}</span>
            <button
              onClick={loadSubmissions}
              className="bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-all"
            >
              {t.admin.retry}
            </button>
          </div>
        )}

        {loading ? (
          <div className="text-center text-white text-xl py-12">{t.admin.loading}</div>
        ) : submissions.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl border border-white/20 text-center text-white">
            <Mail className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-xl">{t.admin.noSubmissions}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <div
                key={submission.id}
                className={`bg-white/10 backdrop-blur-sm p-6 rounded-2xl border ${
                  submission.read ? 'border-white/10' : 'border-period-coral/50'
                } hover:bg-white/15 transition-all`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{submission.name}</h3>
                      <button
                        onClick={() => toggleRead(submission.id, submission.read)}
                        className="text-white/70 hover:text-white transition-colors"
                        title={submission.read ? t.admin.markUnread : t.admin.markRead}
                      >
                        {submission.read ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <Circle className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    <p className="text-white/80 mb-1">{submission.email}</p>
                    <p className="text-sm text-white/60 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(submission.created_at).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleArchive(submission.id, showArchived)}
                    className="bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all flex items-center gap-2"
                    title={showArchived ? t.admin.unarchive : t.admin.archive}
                  >
                    <Archive className="w-4 h-4" />
                    {showArchived ? t.admin.unarchive : t.admin.archive}
                  </button>
                </div>

                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-white/70 mb-1">{t.admin.subject}</h4>
                  <p className="text-white font-semibold">{submission.subject}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white/70 mb-1">{t.admin.message}</h4>
                  <p className="text-white whitespace-pre-wrap">{submission.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
