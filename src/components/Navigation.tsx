import React, { useState, useEffect } from 'react';
import { Menu, X, Landmark, Compass, Briefcase, GraduationCap, Award, Mail } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { id: 'about', label: 'About', icon: <Compass className="w-4 h-4" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'international', label: 'Global Journey', icon: <Compass className="w-4 h-4" /> },
    { id: 'academic', label: 'Academics', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'odommo', label: 'Civic Work', icon: <Landmark className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active observer
      const sections = ['hero', 'about', 'experience', 'international', 'academic', 'odommo', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-brand-primary text-brand-cream/90 border-b border-white/10 ${
        isScrolled 
          ? 'py-3 shadow-md bg-brand-primary/95 backdrop-blur-md' 
          : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Name */}
        <button 
          onClick={() => scrollToSection('hero')} 
          className="group text-left"
        >
          <span className="font-sans text-2xl font-black uppercase text-white group-hover:text-brand-gold transition-colors block tracking-widest">
            sha<span className="text-brand-gold font-serif italic lowercase font-light">R</span>if
          </span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-brand-gold border-b-2 border-brand-gold font-bold'
                  : 'text-brand-cream/80 hover:text-white hover:bg-white/5 rounded'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="ml-4 px-5 py-2 text-xs uppercase tracking-widest font-bold text-brand-primary bg-brand-gold hover:bg-white hover:text-brand-primary rounded-full shadow-md transition-all duration-200 hover:scale-[1.02]"
          >
            Get In Touch
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden space-x-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-white/5 text-brand-cream hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-primary border-b border-white/10 shadow-lg py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-left text-sm uppercase tracking-widest font-bold transition-colors ${
                  activeSection === item.id
                    ? 'bg-white/10 text-brand-gold'
                    : 'text-brand-cream/85 hover:bg-white/5'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-center px-5 py-3 text-sm uppercase tracking-widest font-bold text-brand-primary bg-brand-gold hover:bg-white rounded-xl transition-all"
              >
                Contact Me Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
