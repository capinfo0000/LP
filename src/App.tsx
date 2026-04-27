import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Loading } from './components/Loading';
import { Hero } from './components/Hero';
import { Empathy } from './components/Empathy';
import { Philosophy } from './components/Philosophy';
import { DataSection } from './components/DataSection';
import { RiskSection } from './components/RiskSection';
import { Solution } from './components/Solution';
import { Benefits } from './components/Benefits';
import { Curriculum } from './components/Curriculum';
import { FutureStory } from './components/FutureStory';
import { Offer } from './components/Offer';
import { CTA } from './components/CTA';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (loading) {
    return <Loading onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Empathy />
      <Philosophy />
      <DataSection />
      <RiskSection />
      <Solution />
      <Benefits />
      <Curriculum />
      <FutureStory />
      <Offer />
      <CTA />
    </div>
  );
}

export default App;
