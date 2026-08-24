import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (location.pathname !== '/') return;

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

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      closeMenu();
      return;
    }

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
      closeMenu();
    }
  };

  const goToCoolerRewards = () => {
    navigate('/cooler-rewards');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
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
                <Logo className="h-16 w-auto" />
              </div>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-colors font-medium ${location.pathname === '/' && activeSection === link.id ? 'text-red-600' : 'text-slate-600 hover:text-red-600'}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={goToCoolerRewards}
              className={`transition-colors font-medium ${location.pathname === '/cooler-rewards' ? 'text-orange-600' : 'text-slate-600 hover:text-orange-600'}`}
            >
              Cooler Rewards
            </button>
            <Button size="sm" onClick={() => scrollToSection('request-machine')}>Get Free Machine</Button>
          </div>

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
                location.pathname === '/' && activeSection === link.id ? 'bg-red-50 text-red-600' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{link.label}</span>
              <ChevronRight size={20} className="text-slate-300" />
            </button>
          ))}

          <button
            onClick={goToCoolerRewards}
            className={`w-full flex items-center justify-between px-4 py-4 rounded-xl text-lg font-medium transition-colors duration-200 ${
              location.pathname === '/cooler-rewards' ? 'bg-orange-50 text-orange-600' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>Cooler Rewards</span>
            <ChevronRight size={20} className="text-slate-300" />
          </button>

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
