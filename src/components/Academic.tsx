import { EDUCATION, RESEARCH_PROJECTS } from '../data';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle, Leaf, Sun } from 'lucide-react';

export default function Academic() {
  return (
    <section id="academic" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Title */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
            Academic Integrity
          </span>
          <h2 className="font-sans text-3xl md:text-5xl text-brand-primary font-extrabold tracking-tight">
            Academics & Research Works
          </h2>
          <p className="text-brand-dark/70 text-lg md:text-xl font-sans mt-4 leading-relaxed font-light">
            Maintained exceptional academic standing (CGPA 3.87/4.00), securing Daffodil's highest pre-admission merit scholarship waiver and conducting localized climate policy and renewable grid infrastructure research.
          </p>
        </div>

        {/* Two Column Layout (Left: Education - Right: Research) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Education Timeline */}
          <div>
            <div className="flex items-center gap-2 mb-8 border-b border-brand-beige pb-4">
              <GraduationCap className="w-5 h-5 text-brand-primary" />
              <h3 className="font-sans text-xl font-bold text-brand-primary">Educational Milestones</h3>
            </div>

            <div className="space-y-10 relative pl-4 border-l border-brand-beige">
              {EDUCATION.map((edu, idx) => (
                <div key={edu.id} className="relative group animate-fade-in">
                  {/* Small Timeline node dot */}
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 bg-brand-gold rounded-full border border-white ring-2 ring-brand-cream" />

                  {/* dates */}
                  <div className="flex items-center gap-2 text-[10px] text-brand-dark/50 font-bold mb-1.5 font-mono uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{edu.dates}</span>
                  </div>

                  {/* Degree Name */}
                  <h4 className="font-sans text-lg md:text-xl font-bold text-brand-primary group-hover:text-brand-gold transition-colors">
                    {edu.degree}
                  </h4>

                  {/* Institution */}
                  <div className="flex items-center gap-1 text-sm font-semibold text-brand-dark/80 mt-1">
                    <span>{edu.institution}</span>
                  </div>

                  {/* Location */}
                  <p className="text-xs text-brand-dark/50 font-semibold flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-brand-gold" />
                    {edu.location}
                  </p>

                  {/* GPA Badging */}
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-brand-primary/5 text-brand-primary rounded-lg text-xs font-bold border border-brand-primary/10">
                    <Award className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{edu.grade}</span>
                  </div>

                  {/* Highlights paragraph */}
                  <p className="font-sans text-xs md:text-sm text-brand-dark/70 leading-relaxed mt-3 font-light">
                    {edu.highlights}
                  </p>

                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Research & Academic Work */}
          <div className="bg-brand-cream/40 p-8 rounded-3xl border border-brand-beige">
            <div className="flex items-center gap-2 mb-8 border-b border-brand-beige pb-4">
              <BookOpen className="w-5 h-5 text-brand-primary" />
              <h3 className="font-sans text-xl font-bold text-brand-primary">Research & Policy Papers</h3>
            </div>

            <div className="space-y-8">
              {RESEARCH_PROJECTS.map((project) => {
                return (
                  <div 
                    key={project.id}
                    className="p-6 rounded-2xl bg-white border border-brand-beige/50 shadow-xs hover:shadow-md transition-all relative overflow-hidden group"
                  >
                    {/* Background icon representing topics */}
                    <div className="absolute right-3 top-3 opacity-10 group-hover:scale-115 transition-transform text-brand-gold">
                      <BookOpen className="w-12 h-12" />
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="text-[10px] font-mono text-brand-gold uppercase tracking-wider font-bold">
                        {project.year}
                      </div>
                      {project.statusBadge && (
                        <span className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-brand-primary/5 text-brand-primary border border-brand-primary/10">
                          {project.statusBadge}
                        </span>
                      )}
                    </div>

                    <h4 className="font-sans text-base md:text-lg font-bold text-brand-primary leading-snug mb-3 hover:text-brand-gold transition-colors">
                      {project.title}
                    </h4>

                    <div className="text-xs text-brand-dark/60 font-semibold mb-3">
                      <span>Conducted at / under: {project.institution}</span>
                    </div>

                    <p className="font-sans text-xs md:text-sm text-brand-dark/75 leading-relaxed mb-4 font-light">
                      {project.description}
                    </p>

                    {/* SDGs Covered inside research */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-brand-beige/50 items-center">
                      <span className="text-[10px] uppercase font-bold text-brand-dark/40 mr-1">Tied Goals:</span>
                      {project.sdgs.map((sdg, sIdx) => (
                        <span 
                          key={sIdx}
                          className="inline-flex items-center text-[9px] font-bold px-2 py-0.5 bg-brand-primary/5 text-brand-primary rounded border border-brand-primary/10"
                        >
                          {sdg}
                        </span>
                      ))}
                    </div>

                  </div>
                );
              })}
            </div>

            {/* General Tuition Support waiver fact indicator */}
            <div className="mt-8 p-4 bg-brand-primary/5 border border-brand-primary/10 rounded-2xl flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5 animate-pulse" />
              <p className="text-xs text-brand-dark/70 font-sans leading-relaxed">
                <strong>Academic Scholarship Support:</strong> Recipient of 85% pre-admission merit tuition waiver on BSc path based on pre-enrollment accomplishments—representing the highest scholarship bracket.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
