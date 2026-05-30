import React, { useState } from 'react';
import { GALLERY_MOMENTS } from '../data';
import { Camera, MapPin, Calendar, Maximize2, Tag, Compass, Sparkles, X } from 'lucide-react';

export default function Gallery() {
  const [selectedMoment, setSelectedMoment] = useState<string | null>(null);

  const activeMoment = GALLERY_MOMENTS.find(m => m.id === selectedMoment);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 font-sans">
        
        {/* Descriptive Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
            Visual Quad
          </span>
          <h2 className="font-sans text-3xl md:text-5xl text-brand-primary font-extrabold tracking-tight">
            Journey Highlights
          </h2>
          <p className="text-brand-dark/70 text-lg md:text-xl font-sans mt-4 leading-relaxed font-light">
            Graphic capsules of key international, civic, and academic milestones from global missions. Select an item to view the coordinate briefs.
          </p>
        </div>

        {/* Bento/Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_MOMENTS.map((moment) => {
            return (
              <div 
                key={moment.id}
                onClick={() => setSelectedMoment(moment.id)}
                className="group relative bg-brand-cream/45 border border-brand-beige rounded-3xl p-5 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-brand-primary/30 cursor-pointer flex flex-col justify-between"
              >
                {/* Photo Placeholder Frame */}
                <div className="relative w-full aspect-video rounded-2xl bg-brand-primary/5 border border-brand-primary/10 flex flex-col items-center justify-center p-4 overflow-hidden mb-6 group-hover:scale-[1.01] transition-transform">
                  
                  {/* Visual Blueprint Grid Layout */}
                  <div className="absolute inset-2 border border-dashed border-brand-primary/10 rounded-xl" />
                  
                  {/* Decorative concentric coordinate ring */}
                  <div className="absolute w-24 h-24 rounded-full border border-brand-primary/10 flex items-center justify-center animate-[spin_60s_linear_infinite]">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                  </div>

                  <Camera className="w-8 h-8 text-brand-gold opacity-40 group-hover:opacity-100 transition-opacity relative z-10" />
                  
                  <Maximize2 className="absolute right-4 bottom-4 w-4 h-4 text-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <span className="absolute top-4 left-4 text-[8px] font-mono tracking-widest font-bold uppercase text-brand-primary bg-white px-2 py-0.5 rounded border border-brand-beige">
                    Active Quadrant
                  </span>
                </div>

                {/* Caption Details */}
                <div className="flex flex-col flex-1 justify-between">
                  <p className="font-sans text-sm text-brand-dark/85 leading-relaxed font-semibold italic mb-4">
                    "{moment.caption}"
                  </p>

                  <div className="flex justify-between items-center text-xs text-brand-dark/50 border-t border-brand-beige/50 pt-4 font-bold font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                      {moment.location}
                    </span>
                    <span className="flex items-center gap-1 shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                      {moment.year}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Elegant Micro Notice */}
        <div className="mt-12 text-center text-xs text-brand-dark/50 italic max-w-md mx-auto font-light">
          "Aesthetic placeholders. Regular image URLs can be populated inside the gallery system once photographic assets are available."
        </div>

        {/* Detailed Lightbox Overlay */}
        {selectedMoment && activeMoment && (
          <div className="fixed inset-0 z-50 bg-brand-primary/90 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
            <div className="bg-brand-cream border border-brand-beige max-w-2xl w-full p-8 md:p-10 rounded-3xl relative shadow-xl">
              
              <button 
                onClick={() => setSelectedMoment(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-brand-primary/5 text-brand-primary hover:text-brand-gold hover:bg-brand-primary/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col gap-6">
                
                {/* Immersive placeholder header */}
                <div className="w-full aspect-video bg-white rounded-2xl border border-brand-beige/60 flex flex-col items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-4 border border-dashed border-brand-primary/15 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Sparkles className="w-8 h-8 text-brand-gold mx-auto mb-2 opacity-50" />
                      <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-brand-dark/45 block mb-1">IMAGE FILE TARGET</span>
                      <span className="text-xs text-brand-primary font-bold">{activeMoment.id}.jpg</span>
                    </div>
                  </div>
                  <Compass className="absolute -bottom-8 -right-8 w-32 h-32 text-brand-primary/[0.04] animate-spin" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-3.5 h-3.5 text-brand-gold" />
                    <span className="text-[10px] font-mono text-brand-dark/65 uppercase tracking-widest font-bold">Historical Coordinate Brief</span>
                  </div>

                  <h3 className="font-sans text-2xl font-bold text-brand-primary leading-snug mb-4">
                    {activeMoment.location}
                  </h3>

                  <p className="font-sans text-sm text-brand-dark/80 leading-relaxed font-semibold italic">
                    "{activeMoment.caption}"
                  </p>

                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-brand-dark/50 mt-6 pt-4 border-t border-brand-beige/60">
                    <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Captured in {activeMoment.year}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
