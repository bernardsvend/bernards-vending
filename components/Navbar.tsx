import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle scroll to active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'products', 'resources', 'snack-request'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      closeMenu();
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Shop Products' },
    { id: 'resources', label: 'Blog' },
    { id: 'snack-request', label: 'Client Request' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('home')} 
              className="flex-shrink-0 flex items-center gap-2 focus:outline-none"
            >
              <div className="py-2">
                <Logo className="h-16 w-16" />
              </div>
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-colors font-medium ${activeSection === link.id ? 'text-red-600' : 'text-slate-600 hover:text-red-600'}`}
              >
                {link.label}
              </button>
            ))}
            <Button size="sm" onClick={() => scrollToSection('request-machine')}>Get Free Machine</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-slate-600 hover:text-red-600 focus:outline-none p-2 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-x-0 top-20 bottom-0 bg-white z-40 transition-all duration-300 ease-in-out transform origin-top ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="h-full overflow-y-auto px-4 py-6 pb-24 flex flex-col space-y-2 shadow-inner">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`w-full flex items-center justify-between px-4 py-4 rounded-xl text-lg font-medium transition-colors duration-200 ${
                activeSection === link.id ? 'bg-red-50 text-red-600' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{link.label}</span>
              <ChevronRight size={20} className="text-slate-300" />
            </button>
          ))}
          
          <div className="pt-6 mt-4 border-t border-slate-100">
            <Button fullWidth size="lg" className="shadow-lg shadow-red-200" onClick={() => scrollToSection('request-machine')}>
              Request Free Machine
            </Button>
            <p className="text-center text-xs text-slate-400 mt-6">
              © {new Date().getFullYear()} Bernard's Vending
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};