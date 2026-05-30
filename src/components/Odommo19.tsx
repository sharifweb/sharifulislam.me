import { ODOMMO_FOUNDING_STORY, ODOMMO_STATS, ODOMMO_PROGRAMMES } from '../data';
import { Leaf, Award, BookOpen, Volume2, ShieldCheck, HeartPulse, Landmark, Calendar, Layers } from 'lucide-react';

export default function Odommo19() {
  // Helper to map program to icons
  const getIcon = (id: string) => {
    switch(id) {
      case 'p1': return <Leaf className="w-6 h-6 text-brand-gold" />;
      case 'p2': return <Volume2 className="w-6 h-6 text-brand-gold" />;
      case 'p3': return <BookOpen className="w-6 h-6 text-brand-gold" />;
      case 'p4': return <BookOpen className="w-6 h-6 text-brand-gold" />;
      case 'p5': return <HeartPulse className="w-6 h-6 text-brand-gold" />;
      case 'p6': return <ShieldCheck className="w-6 h-6 text-brand-gold" />;
      default: return <Award className="w-6 h-6 text-brand-gold" />;
    }
  };

  // Helper to map program ID to nice background styling for the icon backings
  const getIconBg = (id: string) => {
    return 'bg-brand-primary/10 border-brand-primary/10';
  };

  return (
    <section id="odommo" className="py-24 md:py-32 bg-brand-cream/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-5xl">
          <div>
            <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
              Organizational Blueprint
            </span>
            <h2 className="font-sans text-3xl md:text-5xl text-brand-primary font-extrabold tracking-tight">
              Civic Work & Social Impact
            </h2>
            <p className="text-brand-dark/70 text-lg md:text-xl font-sans mt-4 max-w-2xl leading-relaxed font-light">
              From a classroom circle of 16-year-old schoolchildren in Gafargaon to a nationally registered youth NGO driving sustainable community development.
            </p>
          </div>
          <div className="flex flex-col gap-2 bg-white border border-brand-beige p-5 rounded-2xl shadow-xs md:max-w-xs shrink-0">
            <div className="flex items-center gap-2">
              <Landmark className="w-4 h-4 text-brand-gold" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-dark/50">Registration Status</span>
            </div>
            <p className="text-xs text-brand-dark/80 font-semibold leading-normal mt-1">
              Registered with Dept. of Bangladesh Youth Development (Reg. No. mym-147/Gafar-006).
            </p>
          </div>
        </div>

        {/* Story & Founders Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
          
          {/* Left: Interactive Founding Narrative */}
          <div className="lg:col-span-7 bg-white border border-brand-beige/60 p-8 md:p-10 rounded-3xl shadow-xs">
            <h3 className="font-sans text-2xl md:text-3xl text-brand-primary font-bold mb-6">
              {ODOMMO_FOUNDING_STORY.title}
            </h3>
            <div className="space-y-4 font-sans text-brand-dark/80 text-base md:text-lg leading-relaxed font-light">
              <p>{ODOMMO_FOUNDING_STORY.description}</p>
              <p className="pt-4 border-t border-brand-beige font-normal text-brand-dark/70">{ODOMMO_FOUNDING_STORY.statusNow}</p>
            </div>
          </div>

          {/* Right: Leadership & Governance Role Block */}
          <div className="lg:col-span-5 bg-brand-primary text-brand-cream p-8 md:p-10 rounded-3xl shadow-md flex flex-col justify-between h-full min-h-[350px]">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center font-bold font-sans text-lg text-brand-gold">
                  C
                </span>
                <div>
                  <span className="text-brand-cream/60 uppercase tracking-[0.2em] text-[10px] font-bold block">Current Role</span>
                  <h4 className="font-sans text-lg font-bold text-white leading-tight">Co-Founder & Chairman</h4>
                </div>
              </div>
              <h5 className="font-sans text-xl italic text-brand-gold mb-4 leading-normal font-light">
                "Leading from founding onwards — shaping strategy and global networks."
              </h5>
              <p className="font-sans text-sm text-brand-cream/75 leading-relaxed font-light">
                {ODOMMO_FOUNDING_STORY.myRole}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-8 flex items-center justify-between text-xs text-brand-cream/65 font-semibold">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                Oct 2018 – Present
              </span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-brand-gold" />
                4th Committee Council
              </span>
            </div>
          </div>

        </div>

        {/* Visual Stats Band */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-24">
          {ODOMMO_STATS.map((stat, i) => (
            <div 
              key={i} 
              className="bg-white border border-brand-beige/40 p-5 rounded-2xl text-center shadow-xs hover:border-brand-primary/30 transition-all"
            >
              <div className="text-2xl md:text-3xl font-sans font-extrabold text-brand-primary">
                {stat.value}
              </div>
              <div className="text-[11px] font-bold text-brand-dark/70 uppercase tracking-wider mt-1.5 leading-snug">
                {stat.label}
              </div>
              <div className="text-[9px] font-mono text-brand-gold tracking-tighter uppercase mt-1 font-bold">
                {stat.metric}
              </div>
            </div>
          ))}
        </div>

        {/* Signature Programmes */}
        <div>
          <div className="mb-12">
            <span className="text-brand-gold font-mono text-xs uppercase tracking-widest font-bold block mb-2">Sustainable Impact</span>
            <h3 className="font-sans text-2xl md:text-4xl text-brand-primary font-extrabold">Signature Programmes & Initiatives</h3>
            <p className="text-brand-dark/60 text-sm mt-2 max-w-xl font-light">
              All programmes are actively audited and framed to meet United Nations Sustainable Development Goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ODOMMO_PROGRAMMES.map((prog) => (
              <div 
                key={prog.id}
                className="bg-white border border-brand-beige/50 p-8 rounded-3xl shadow-xs hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono text-brand-primary uppercase tracking-widest font-bold bg-brand-cream px-2 py-0.5 rounded border border-brand-beige/40">
                      {prog.category}
                    </span>
                    <div className="w-12 h-12 rounded-2xl border flex items-center justify-center bg-brand-primary/10 border-brand-primary/10 shadow-xs">
                      {getIcon(prog.id)}
                    </div>
                  </div>

                  <h4 className="font-sans text-xl font-bold text-brand-primary mb-4 leading-snug">
                    {prog.title}
                  </h4>

                  <p className="font-sans text-sm text-brand-dark/70 leading-relaxed mb-6 font-light">
                    {prog.description}
                  </p>
                </div>

                {/* SDG Tag Footer */}
                <div className="pt-4 border-t border-brand-beige/50 flex flex-wrap gap-1.5 items-center">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-brand-dark/40 mr-1">Tied Goals:</span>
                  {prog.sdgs.map((sdg, i) => (
                    <span 
                      key={i}
                      className="inline-flex items-center text-[10px] font-extrabold px-2.5 py-1 bg-brand-primary/5 text-brand-primary rounded-full border border-brand-primary/10 hover:bg-brand-gold hover:text-brand-primary hover:border-brand-gold transition-colors cursor-pointer"
                      title={sdg.name}
                    >
                      SDG {sdg.number}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
