import React, { useState } from 'react';
import { Button } from '../components/Button';
import { MachineType } from '../types';

export const Quiz: React.FC = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<any>({});
  
  const handleOption = (key: string, value: string) => {
    setAnswers({ ...answers, [key]: value });
    setStep(step + 1);
  };

  const scrollToRequest = () => {
    const element = document.getElementById('request-machine');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getRecommendation = (): { type: string, desc: string } => {
    if (answers.employees === '100+') return { type: 'Fresh Food & Combo', desc: 'A large facility like yours needs high capacity.' };
    if (answers.type === 'Healthy') return { type: 'Healthy Vending', desc: 'Focusing on organic and low-sugar options.' };
    return { type: 'Combo Snack & Drink', desc: 'The perfect all-in-one solution for your space.' };
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-300">
            <h2 className="text-2xl font-bold text-slate-900">How many people are at your location daily?</h2>
            <div className="grid grid-cols-1 gap-3">
              {['Less than 20', '20 - 50', '50 - 100', '100+'].map((opt) => (
                <button 
                  key={opt}
                  onClick={() => handleOption('employees', opt)}
                  className="p-4 text-left border border-slate-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all font-medium text-slate-700"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-300">
            <h2 className="text-2xl font-bold text-slate-900">What is most important to you?</h2>
            <div className="grid grid-cols-1 gap-3">
              {['Classic Snacks & Soda', 'Healthy Options', 'Mix of Everything'].map((opt) => (
                <button 
                  key={opt}
                  onClick={() => handleOption('type', opt)}
                  className="p-4 text-left border border-slate-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all font-medium text-slate-700"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        const result = getRecommendation();
        return (
          <div className="text-center space-y-6 animate-in fade-in zoom-in duration-300">
            <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
              <span className="text-4xl">🎯</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">We Recommend: {result.type}</h2>
            <p className="text-lg text-slate-600 max-w-md mx-auto">{result.desc}</p>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
              <h3 className="font-semibold mb-2">Why this matters?</h3>
              <p className="text-sm text-slate-500">Based on your employee count ({answers.employees}) and preference for {answers.type}, this machine maximizes satisfaction while ensuring fresh inventory turnover.</p>
            </div>

            <div className="pt-6">
              <Button size="lg" fullWidth onClick={scrollToRequest}>Claim Your Free Machine</Button>
              <button 
                onClick={() => setStep(1)} 
                className="mt-4 text-sm text-slate-500 hover:text-red-600 underline"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 py-12 px-4">
      <div className="max-w-xl w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl">
        <div className="mb-8 flex justify-between items-center">
          <span className="text-xs font-semibold tracking-wider text-red-600 uppercase">Recommendation Engine</span>
          <span className="text-xs text-slate-400">Step {Math.min(step, 3)} of 3</span>
        </div>
        {renderStep()}
      </div>
    </div>
  );
};