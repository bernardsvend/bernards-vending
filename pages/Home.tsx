import React from 'react';
import { Truck, Wrench, Clock } from 'lucide-react';
import { Button } from '../components/Button';

// Import Section Components
import { Services } from './Services';
import { RequestMachine } from './RequestMachine';
import { Products } from './Products';
import { Resources } from './Resources';
import { SnackRequest } from './SnackRequest';
import { Quiz } from './Quiz';
import { About } from './About';
import { Contact } from './Contact';

export const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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

  return (
    <div className="flex flex-col">
      {/* --- ID: HOME (Hero & Benefits) --- */}
      <div id="home">
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1625650484478-113df657f20e?q=80&w=2070&auto=format&fit=crop" 
              alt="Office Vending" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                Free Vending Machines <br/><span className="text-red-400">For Your Business</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                Bernard's Vending provides the machine, installation, stocking, and maintenance at absolutely no cost to you. Boost employee morale with convenient snacks and drinks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto font-bold" onClick={() => scrollToSection('request-machine')}>
                  Request Free Machine
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-slate-400 text-white hover:bg-white/10 hover:border-white"
                  onClick={() => scrollToSection('quiz')}
                >
                  Take Qualification Quiz
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Why Choose Bernard's?</h2>
              <p className="mt-4 text-lg text-slate-600">A completely hands-off experience for business owners.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Truck className="h-10 w-10 text-red-600" />, title: "Free Delivery & Install", desc: "We handle all the logistics. You just point to where you want it." },
                { icon: <Clock className="h-10 w-10 text-red-600" />, title: "Regular Restocking", desc: "Our telemetry systems tell us when you're low, so we restock before you run out." },
                { icon: <Wrench className="h-10 w-10 text-red-600" />, title: "24/7 Maintenance", desc: "Machine jammed? Coin mechanism stuck? We fix any issues within 24 hours." },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4 bg-white inline-block p-3 rounded-xl shadow-sm">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* --- ID: ABOUT --- */}
      <div id="about">
        <About />
      </div>

      {/* --- ID: SERVICES --- */}
      <div id="services">
        <Services />
      </div>

      {/* --- ID: QUIZ --- */}
      <div id="quiz" className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
           <h2 className="text-3xl font-bold text-slate-900">Not Sure What You Need?</h2>
           <p className="text-slate-600 mt-2">Take our quick qualification quiz to find the perfect machine.</p>
        </div>
        <Quiz />
      </div>

      {/* --- ID: REQUEST MACHINE --- */}
      <div id="request-machine">
        <RequestMachine />
      </div>

      {/* --- ID: PRODUCTS --- */}
      <div id="products">
        <Products />
      </div>

      {/* --- ID: RESOURCES --- */}
      <div id="resources">
        <Resources />
      </div>

      {/* --- ID: SNACK REQUEST --- */}
      <div id="snack-request">
        <SnackRequest />
      </div>

      {/* --- ID: CONTACT --- */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};