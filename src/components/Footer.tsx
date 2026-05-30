import { Facebook, Linkedin, ArrowUp, Mail, ShieldAlert } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-primary text-brand-cream/80 py-16 border-t border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-6 font-sans">
        
        {/* Upper footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 pb-12 border-b border-white/10">
          <div>
            <h3 className="font-sans text-2xl font-bold text-white tracking-tight">
              Md. Shariful Islam
            </h3>
            <p className="text-xs text-brand-cream/60 font-sans tracking-tight mt-1.5 max-w-sm font-light">
              NGO Co-founder · Operations Leader · Erasmus+ Participant · Sustainable Development & Circular Economy Advocate.
            </p>
          </div>

          {/* Socials & Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-primary hover:border-brand-gold transition-all"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={PERSONAL_INFO.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-primary hover:border-brand-gold transition-all"
              aria-label="Facebook profile"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-primary hover:border-brand-gold transition-all cursor-pointer ml-2"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Lower footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-cream/50 font-bold font-mono">
          <div>
            © 2026 Md. Shariful Islam. Built with intention. Dhaka, Bangladesh.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-brand-cream/80">{PERSONAL_INFO.email}</span>
            </span>
            <span className="text-white/10">|</span>
            <span className="flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-brand-cream/85">Professional Digital Portfolio</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
