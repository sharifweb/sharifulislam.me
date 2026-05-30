import { EXPERIENCE_TIMELINE } from '../data';
import { Briefcase, Calendar, MapPin, Clock, ChevronRight, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Heading */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
            Professional Evolution
          </span>
          <h2 className="font-sans text-3xl md:text-5xl text-brand-primary font-extrabold tracking-tight">
            Professional Experience
          </h2>
          <p className="text-brand-dark/70 text-lg md:text-xl font-sans mt-4 leading-relaxed font-light">
            Providing remote operations consultancy, pipeline management, and workflow automation for agencies and scaling startups across the Middle East, the United States, and local sectors.
          </p>
        </div>

        {/* Alternate Timeline Wrapper */}
        <div className="relative">
          
          {/* Centered Vertical Line (Desktop only) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-[2px] bg-brand-primary/10 hidden lg:block" />

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-20 relative">
            {EXPERIENCE_TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div 
                  key={item.id} 
                  className={`flex flex-col lg:flex-row items-stretch w-full ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left Column (Card Panel) */}
                  <div className="w-full lg:w-1/2 flex justify-start lg:justify-end lg:px-12">
                    <div 
                      className="w-full max-w-2xl bg-brand-cream/30 border border-brand-beige p-6 md:p-8 rounded-3xl shadow-xs hover:shadow-md transition-all duration-300 relative group hover:border-brand-primary/30"
                    >
                      {/* Brand Label Accent Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <span className="text-[10px] font-mono text-brand-primary bg-brand-primary/5 px-2.5 py-1 rounded-full border border-brand-primary/10 font-bold uppercase tracking-wider">
                          {item.type}
                        </span>
                        {item.hoursPerWeek && (
                          <span className="flex items-center gap-1 text-xs text-brand-dark/50 font-semibold font-mono">
                            <Clock className="w-3.5 h-3.5 text-brand-gold" />
                            {item.hoursPerWeek} Hrs / wk
                          </span>
                        )}
                      </div>

                      {/* Main Title & Company */}
                      <h3 className="font-sans text-xl md:text-2xl font-bold text-brand-primary group-hover:text-brand-gold transition-colors leading-tight">
                        {item.role}
                      </h3>
                      <h4 className="font-sans text-base font-semibold text-brand-dark/80 mt-1">
                        {item.company}
                      </h4>

                      {/* Meta stats */}
                      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-dark/50 mt-3 mb-6">
                        <span className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-lg border border-brand-beige">
                          <Calendar className="w-3.5 h-3.5 text-brand-primary" />
                          {item.startDate} – {item.endDate}
                        </span>
                        <span className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-lg border border-brand-beige">
                          <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                          {item.location}
                        </span>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-3 font-sans text-sm text-brand-dark/75 mb-6 leading-relaxed font-light">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Custom Tags Applied in this Career State */}
                      <div className="pt-5 border-t border-brand-beige/50 flex flex-wrap gap-1.5">
                        {item.skills.map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 bg-brand-primary/5 rounded border border-brand-primary/10 text-brand-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Visual Timeline Marker Ball Indicator (Overlayed for Desktop) */}
                      <div 
                        className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-brand-primary rounded-full ring-4 ring-brand-cream/80 border border-white z-20 hidden lg:block ${
                          isEven 
                            ? 'left-0 -translate-x-[42px]' 
                            : 'right-0 translate-x-[42px]'
                        }`}
                      />

                    </div>
                  </div>

                  {/* Right Column / Space buffer container (Desktop only) */}
                  <div className="hidden lg:block lg:w-1/2 lg:px-12" />
                </div>
              );
            })}
          </div>

        </div>

        {/* Secondary Promotions Achievements Memo */}
        <div className="mt-16 bg-brand-cream/40 border border-brand-beige hover:border-brand-primary/10 p-8 rounded-3xl max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-brand-gold" />
            <h4 className="font-sans text-lg font-bold text-brand-primary">National Promotions & Performance Badges</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-bold uppercase tracking-wider text-brand-dark/70">
            <div className="bg-white p-4 rounded-xl border border-brand-beige text-center shadow-xs">
              <span className="text-brand-gold block text-sm font-bold mb-1">PROMOTION</span>
              Gold Affiliate Team
            </div>
            <div className="bg-white p-4 rounded-xl border border-brand-beige text-center shadow-xs">
              <span className="text-brand-gold block text-sm font-bold mb-1 flex justify-center items-center gap-1">BADGE</span>
              Top Academic Best Seller
            </div>
            <div className="bg-white p-4 rounded-xl border border-brand-beige text-center shadow-xs">
              <span className="text-brand-gold block text-sm font-bold mb-1">PROMOTION</span>
              Premier Affiliate Status
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
