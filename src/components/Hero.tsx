import { ArrowRight, Download, MapPin, GraduationCap, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-brand-primary"
    >
      {/* Visual Abstract Overlay Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="80%" cy="30%" r="250" fill="rgba(201, 168, 76, 0.15)" filter="blur(80px)" />
          <circle cx="20%" cy="70%" r="300" fill="rgba(59, 31, 94, 0.3)" filter="blur(100px)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">

        {/* Name */}
        <h1 className="font-sans text-5xl md:text-8xl tracking-tight text-white mb-8 leading-[1.1] font-extrabold animate-fade-in">
          {PERSONAL_INFO.fullName}
        </h1>

        {/* Tagline Styled as Custom Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 max-w-4xl font-sans">
          {PERSONAL_INFO.tagline.split(' · ').map((keyword, index) => (
            <span 
              key={index} 
              className="px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase bg-white/5 border border-white/10 text-brand-gold backdrop-blur-xs transition-colors hover:bg-white/10"
            >
              {keyword}
            </span>
          ))}
        </div>

        {/* Location Info */}
        <div className="flex items-center justify-center gap-1.5 text-xs md:text-sm text-brand-cream/70 font-semibold mb-12">
          <MapPin className="w-4 h-4 text-brand-gold animate-bounce" />
          <span>{PERSONAL_INFO.location}</span>
        </div>

        {/* Three Hero Stat Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-12">
          {PERSONAL_INFO.quickStats.map((stat, i) => (
            <div 
              key={i} 
              className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs shadow-lg hover:border-brand-gold/30 transition-all duration-300 transform hover:-translate-y-0.5 group text-center"
            >
              <div className="text-lg md:text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-brand-cream/60 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto z-20">
          <button 
            onClick={scrollToAbout}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-brand-primary hover:bg-white hover:text-brand-primary text-sm uppercase tracking-widest font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            Explore My Journey
            <ArrowRight className="w-4.5 h-4.5" />
          </button>
          
          <button 
            onClick={scrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white hover:bg-white/10 border-2 border-white/20 hover:border-white/40 text-sm uppercase tracking-widest font-bold rounded-full transition-all duration-300 hover:scale-[1.02]"
          >
            <Download className="w-4.5 h-4.5 text-brand-gold" />
            Download CV
          </button>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 text-brand-cream/40 hover:text-white transition-colors cursor-pointer group"
        >
          <span className="text-[9px] uppercase tracking-[0.25em] font-bold">Scroll to Journey</span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-brand-gold" />
        </button>
      </div>

      {/* Elegant Side Framing Lines */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
    </section>
  );
}
