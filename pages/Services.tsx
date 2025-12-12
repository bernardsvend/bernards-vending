import React from 'react';
import { Check, ShieldCheck, Zap, RefreshCw } from 'lucide-react';
import { Button } from '../components/Button';
import { MACHINE_TYPES_INFO } from '../constants';

export const Services: React.FC = () => {
  const scrollToRequest = () => {
    const element = document.getElementById('request-machine');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Full-Service Vending</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From installation to restocking, we handle everything. You just provide the space and power.
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Request", desc: "Fill out our simple form to qualify your location." },
            { step: "02", title: "Install", desc: "We deliver and set up the machine for free." },
            { step: "03", title: "Stock", desc: "We monitor inventory and refill as needed." },
            { step: "04", title: "Enjoy", desc: "Employees and guests enjoy fresh snacks 24/7." }
          ].map((item) => (
            <div key={item.step} className="relative p-6 border-l-4 border-red-100 hover:border-red-500 transition-colors">
              <span className="text-5xl font-black text-slate-100 absolute -top-4 -left-2 -z-10">{item.step}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Machine Details */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Available Machine Types</h2>
          <div className="space-y-16">
            {MACHINE_TYPES_INFO.map((machine, idx) => (
              <div key={machine.id} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
                  <img src={machine.image} alt={machine.name} className="w-full h-64 md:h-80 object-cover" />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{machine.name}</h3>
                  <p className="text-lg text-slate-600 mb-6">{machine.description}</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-slate-700">
                      <Check className="text-red-500 mr-3" size={20} /> Credit Card & Mobile Pay Ready
                    </li>
                    <li className="flex items-center text-slate-700">
                      <Check className="text-red-500 mr-3" size={20} /> Energy Efficient LED Lighting
                    </li>
                    <li className="flex items-center text-slate-700">
                      <Check className="text-red-500 mr-3" size={20} /> Guaranteed Product Delivery Sensors
                    </li>
                  </ul>
                  <Button onClick={scrollToRequest}>Request This Machine</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Free? */}
      <div className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">"Wait, is it really free?"</h2>
          <p className="text-lg text-slate-300 mb-8">
            Yes! Our business model is simple. We profit from the sales of the snacks and drinks. There is zero cost to your business for the machine, delivery, or service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-800 p-6 rounded-lg">
              <ShieldCheck className="text-red-400 mb-4" size={32} />
              <h4 className="font-bold mb-2">No Contracts Required</h4>
              <p className="text-sm text-slate-400">We earn your business every day with great service. Cancel anytime.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <Zap className="text-red-400 mb-4" size={32} />
              <h4 className="font-bold mb-2">Modern Equipment</h4>
              <p className="text-sm text-slate-400">We invest in the latest machines with Apple Pay and remote monitoring.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <RefreshCw className="text-red-400 mb-4" size={32} />
              <h4 className="font-bold mb-2">Automatic Restocking</h4>
              <p className="text-sm text-slate-400">We track sales remotely and refill before the machine goes empty.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};