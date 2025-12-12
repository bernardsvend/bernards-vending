import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
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
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 mb-4 focus:outline-none">
              <Logo className="h-20 w-auto" />
            </button>
            <p className="text-sm text-slate-400 mb-4">
              Providing premium, free vending solutions to businesses across the region. Reliable, stocked, and hassle-free.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-red-500 transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-red-500 transition-colors">Our Services</button></li>
              <li><button onClick={() => scrollToSection('resources')} className="hover:text-red-500 transition-colors">Blog & Resources</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-red-500 transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('request-machine')} className="hover:text-red-500 transition-colors">Free Machine Request</button></li>
              <li><button onClick={() => scrollToSection('products')} className="hover:text-red-500 transition-colors">Office Pantry Supplies</button></li>
              <li><button onClick={() => scrollToSection('snack-request')} className="hover:text-red-500 transition-colors">Product Requests</button></li>
              <li><button onClick={() => scrollToSection('quiz')} className="hover:text-red-500 transition-colors">Qualification Quiz</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-red-500 flex-shrink-0" />
                <span>630-474-5101</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-red-500 flex-shrink-0" />
                <span>bernardsvending@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-red-500 flex-shrink-0 mt-1" />
                <span>P.O. Box 7804<br/>Westchester, IL, United States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Bernard's Vending. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};