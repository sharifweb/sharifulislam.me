import { SKILL_CATEGORIES } from '../data';
import { Network, Cpu, Users, MessageSquare, Languages, Check, Award } from 'lucide-react';

export default function Skills() {
  
  // Custom Icon selector
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'sk-ops':
        return <Network className="w-5 h-5 text-brand-gold" />;
      case 'sk-tech':
        return <Cpu className="w-5 h-5 text-brand-gold" />;
      case 'sk-civ':
        return <Users className="w-5 h-5 text-brand-gold" />;
      case 'sk-comm':
        return <MessageSquare className="w-5 h-5 text-brand-gold" />;
      default:
        return <Award className="w-5 h-5 text-brand-gold" />;
    }
  };

  const getBorderColor = (id: string) => {
    return 'border-l-4 border-l-brand-gold';
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-brand-cream/40 border-y border-brand-beige">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Heading */}
        <div className="mb-16 md:mb-24">
          <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
            Skills Inventory
          </span>
          <h2 className="font-sans text-3xl md:text-5xl text-brand-primary font-extrabold tracking-tight">
            Professional Competencies & Core Expertise
          </h2>
          <p className="text-brand-dark/70 text-lg md:text-xl font-sans mt-4 max-w-2xl leading-relaxed font-light">
            A comprehensive mapping of operational capacities, administrative tools, technical configurations, and transnational work coordinates.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {SKILL_CATEGORIES.map((category) => (
            <div 
              key={category.id}
              className={`bg-white border border-brand-beige/60 p-8 rounded-3xl shadow-xs hover:border-brand-primary/30 transition-all ${getBorderColor(category.id)}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/5 border border-brand-primary/10 flex items-center justify-center">
                  {getCategoryIcon(category.id)}
                </div>
                <h3 className="font-sans text-xl font-bold text-brand-primary">
                  {category.name}
                </h3>
              </div>

              {/* Tag Chips list */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => {
                  const isSpecial = skill.includes('TOEFL') || skill.includes('SOP') || skill.includes('Scrum');
                  return (
                    <span 
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold leading-relaxed transition-all ${
                        isSpecial
                          ? 'bg-brand-primary/5 text-brand-primary border border-brand-primary/20 font-bold'
                          : 'bg-brand-cream text-brand-dark hover:bg-brand-beige border border-brand-beige/40 font-light'
                      }`}
                    >
                      <Check className={`w-3.5 h-3.5 ${isSpecial ? 'text-brand-gold animate-pulse font-extrabold' : 'text-brand-primary'}`} strokeWidth={3} />
                      {skill}
                    </span>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Languages Block (Subsection) */}
        <div className="bg-white border border-brand-beige/70 p-8 md:p-10 rounded-3xl shadow-xs max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/5 flex items-center justify-center border border-brand-primary/10">
                <Languages className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h4 className="font-sans text-lg font-bold text-brand-primary">Language Assets & Verifications</h4>
                <p className="text-xs text-brand-dark/50 font-sans mt-0.5 font-light">Verified global communication coordinates for transnational workflows.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="bg-brand-cream border border-brand-beige py-2.5 px-4 rounded-xl text-center">
                <span className="text-[10px] font-mono text-brand-gold block font-bold uppercase tracking-wider">English</span>
                <span className="text-xs font-bold text-brand-dark">Expert (TOEFL & Duolingo Certified)</span>
              </div>
              <div className="bg-brand-cream border border-brand-beige py-2.5 px-4 rounded-xl text-center">
                <span className="text-[10px] font-mono text-brand-gold block font-bold uppercase tracking-wider">Bengali</span>
                <span className="text-xs font-bold text-brand-dark">Native / Bilingual</span>
              </div>
              <div className="bg-brand-cream border border-brand-beige py-2.5 px-4 rounded-xl text-center">
                <span className="text-[10px] font-mono text-brand-gold block font-bold uppercase tracking-wider">Hindi</span>
                <span className="text-xs font-bold text-brand-dark">Fluent (Speaking & Listening)</span>
              </div>
              <div className="bg-brand-cream border border-brand-beige py-2.5 px-4 rounded-xl text-center">
                <span className="text-[10px] font-mono text-brand-gold block font-bold uppercase tracking-wider">Swedish</span>
                <span className="text-xs font-bold text-brand-dark">Basic / Conversational (L1)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
