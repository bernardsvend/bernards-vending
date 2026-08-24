import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AiAssistant } from './components/AiAssistant';

// Pages / Sections
import { Home } from './pages/Home';
import { CoolerRewards } from './pages/CoolerRewards';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cooler-rewards" element={<CoolerRewards />} />
        </Routes>
      </main>
      <Footer />
      <AiAssistant />
    </div>
  );
};

export default App;
