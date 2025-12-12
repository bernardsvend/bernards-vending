import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AiAssistant } from './components/AiAssistant';

// Pages / Sections
import { Home } from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
      <AiAssistant />
    </div>
  );
};

export default App;