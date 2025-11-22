import { lazy, Suspense } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import StudentVoices from './components/StudentVoices';
import JoinMovement from './components/JoinMovement';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Advertisers from './components/Advertisers';
import SignUp from './components/SignUp';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

const Admin = lazy(() => import('./components/Admin'));

function App() {
  const isAdminRoute = window.location.pathname === '/admin';

  if (isAdminRoute) {
    return (
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Admin />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Problem />
      <StudentVoices />
      <JoinMovement />
      <About />
      <HowItWorks />
      <Advertisers />
      <SignUp />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
