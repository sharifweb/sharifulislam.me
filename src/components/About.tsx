import { PERSONAL_INFO } from '../data';
import { Camera, Sparkles, Navigation, GraduationCap, Building2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-brand-cream border-b border-brand-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Graphic Portrait Frame (Left Column) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] bg-brand-primary text-brand-cream rounded-2xl overflow-hidden shadow-[0_16px_50px_rgba(59,31,94,0.15)] group p-6 flex flex-col justify-between border border-brand-primary/20">
              
              {/* Corner Accents in Gold */}
              <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-brand-gold" />
              <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-brand-gold" />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-brand-gold" />
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-brand-gold" />

              {/* Graphic Placeholder Concept */}
              <div className="w-full h-full flex flex-col items-center justify-center py-8">
                <div className="relative w-40 h-40 rounded-full border-2 border-brand-gold/30 flex items-center justify-center bg-brand-dark/40 shadow-inner mb-6">
                  {/* Subtle pulsing background layers */}
                  <span className="absolute inset-2 border border-dashed border-brand-gold/20 rounded-full animate-[spin_40s_linear_infinite]" />
                  <span className="absolute inset-4 bg-brand-primary/80 rounded-full" />
                  
                  {/* Icon sitting at intersection */}
                  <Camera className="w-10 h-10 text-brand-gold relative z-10" />
                  
                  <div className="absolute -bottom-1 bg-brand-gold text-brand-primary px-3 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest shadow-md">
                    Portrait
                  </div>
                </div>

                <div className="text-center px-4">
                  <h4 className="font-sans text-xl font-bold text-white">Md. Shariful Islam</h4>
                  <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mt-1">International Scholar & Operations Pro</p>
                  
                  {/* Coordinates for aesthetic framing */}
                  <p className="text-[9px] font-mono text-brand-cream/40 mt-3 tracking-widest">
                    24.4578° N, 90.4190° E
                  </p>
                </div>
              </div>

              {/* Upload Instruction Memo Block */}
              <div className="bg-brand-dark/40 border border-white/10 p-4 rounded-xl text-center">
                <p className="text-[11px] text-brand-cream/70 italic leading-snug">
                  <strong>[Professional Photo — to be uploaded later]</strong><br />
                  Portrait placeholder for formal headshot.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Prose (Right Column) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* All Caps Label */}
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
              MY STORY
            </span>
            
            {/* Title */}
            <h2 className="font-sans text-3xl md:text-5xl text-brand-primary font-extrabold tracking-tight mb-8">
              Grassroots Founding To Global Systems.
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-brand-dark/85 text-base md:text-lg leading-relaxed font-sans font-light">
              <p>
                {PERSONAL_INFO.bioParagraphs[0]}
              </p>
              <p>
                {PERSONAL_INFO.bioParagraphs[1]}
              </p>
              <p>
                {PERSONAL_INFO.bioParagraphs[2]}
              </p>
              <p>
                {PERSONAL_INFO.bioParagraphs[3]}
              </p>
            </div>

            {/* Three Cards as described in Section 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 pt-10 border-t border-brand-beige">
              
              <div className="p-6 rounded-2xl bg-white/80 border border-brand-beige hover:border-brand-gold/40 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 block shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/5 border border-brand-primary/10 flex items-center justify-center text-brand-primary mb-3">
                  <Building2 className="w-5 h-5 text-brand-gold animate-pulse" />
                </div>
                <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-brand-primary mb-1">
                  Organizational
                </h4>
                <p className="text-xs text-brand-dark/70 leading-relaxed font-light">
                  Co-Founder & Chairman, Odommo '19 Youth Foundation (Oct 2018 – Present)
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 border border-brand-beige hover:border-brand-gold/40 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 block shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/5 border border-brand-primary/10 flex items-center justify-center text-brand-primary mb-3">
                  <Navigation className="w-5 h-5 text-brand-gold" />
                </div>
                <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-brand-primary mb-1">
                  Professional
                </h4>
                <p className="text-xs text-brand-dark/70 leading-relaxed font-light">
                  Operations Consultant, Fredocloud · Previously Beige Corp (USA) · 10 Minute School
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 border border-brand-beige hover:border-brand-gold/40 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 block shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/5 border border-brand-primary/10 flex items-center justify-center text-brand-primary mb-3">
                  <GraduationCap className="w-5 h-5 text-brand-gold" />
                </div>
                <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-brand-primary mb-1">
                  Academic
                </h4>
                <p className="text-xs text-brand-dark/70 leading-relaxed font-light">
                  BSc ITM · Erasmus+ Sweden · 5 in-person international programmes
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
