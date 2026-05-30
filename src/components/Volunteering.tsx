import { VOLUNTEERING_EXTRA } from '../data';
import { HeartHandshake } from 'lucide-react';

export default function Volunteering() {
  return (
    <section id="volunteering" className="py-24 md:py-32 bg-brand-cream/40 border-y border-brand-beige">
      <div className="max-w-7xl mx-auto px-6 font-sans">
        
        {/* Editorial Heading */}
        <div className="mb-16 md:mb-20 max-w-4xl">
          <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
            Altruistic Engagement
          </span>
          <h2 className="font-sans text-3xl md:text-5xl text-brand-primary font-extrabold tracking-tight">
            Extra Volunteering & Engagement
          </h2>
          <p className="text-brand-dark/70 text-lg md:text-xl font-sans mt-4 max-w-2xl leading-relaxed font-light">
            Leading local community support initiatives, youth civic development circles, and educational programs to champion basic literacy and social resilience.
          </p>
        </div>

        {/* Roles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {VOLUNTEERING_EXTRA.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-brand-beige/50 p-6 md:p-8 rounded-3xl shadow-xs hover:border-brand-primary/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5 border-b border-brand-beige/60 pb-3">
                  <div className="flex items-center gap-2">
                    <HeartHandshake className="w-4 h-4 text-brand-gold animate-pulse" />
                    <span className="text-[10px] font-mono text-brand-dark/50 font-bold uppercase tracking-wider">CIVIC COMPACT</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-brand-primary bg-brand-primary/5 px-2 py-0.5 rounded">
                    {item.dates}
                  </span>
                </div>

                <h4 className="font-sans text-base md:text-lg font-bold text-brand-primary leading-snug">
                  {item.title}
                </h4>
                <p className="font-sans text-sm font-semibold text-brand-dark/80 mt-1">
                  {item.organization}
                </p>
              </div>

              <p className="font-sans text-xs md:text-sm text-brand-dark/70 leading-relaxed mt-4 font-light">
                {item.details}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
