import { HONORS_AWARDS } from '../data';
import { Award, Star, Trophy, Sparkles } from 'lucide-react';

export default function Honors() {
  
  // Custom Icon chooser
  const getAwardIcon = (idx: number) => {
    switch (idx) {
      case 0: // Hult Prize
      case 2: // Olympiad
        return <Trophy className="w-5 h-5 text-brand-gold animate-bounce" />;
      case 1: // Scouts Recitation
        return <Star className="w-5 h-5 text-brand-gold" />;
      case 3: // Tuition Waiver
        return <Sparkles className="w-5 h-5 text-brand-gold animate-pulse" />;
      default:
        return <Award className="w-5 h-5 text-brand-gold" />;
    }
  };

  return (
    <section id="honors" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 font-sans">
        
        {/* Editorial Heading */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
            Accolades & Recognition
          </span>
          <h2 className="font-sans text-3xl md:text-5xl text-brand-primary font-extrabold tracking-tight">
            Honors & Accolades
          </h2>
          <p className="text-brand-dark/70 text-lg md:text-xl font-sans mt-4 leading-relaxed font-light">
            Scholarships, national competitions, and leadership selections earned throughout academic and social pathways.
          </p>
        </div>

        {/* Honors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {HONORS_AWARDS.map((honor, idx) => (
            <div 
              key={honor.id}
              className="bg-brand-cream/20 border border-brand-beige p-6 rounded-3xl hover:border-brand-primary/30 hover:bg-white hover:shadow-xs transform hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon & Year */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-brand-beige flex items-center justify-center shadow-xs">
                    {getAwardIcon(idx)}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-brand-primary bg-brand-primary/5 px-2 py-0.5 rounded">
                    {honor.year}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-sans text-base md:text-lg font-bold text-brand-primary leading-snug mb-2 group-hover:text-brand-gold transition-colors">
                  {honor.title}
                </h4>

                {/* Issuer */}
                <div className="text-[10px] font-bold text-brand-dark/50 uppercase tracking-widest mb-3">
                  {honor.issuer}
                </div>
              </div>

              {/* Description */}
              {honor.description && (
                <p className="font-sans text-xs text-brand-dark/70 leading-relaxed border-t border-brand-beige/50 pt-3 mt-3 font-light">
                  {honor.description}
                </p>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
