import React, { useState } from 'react';
import { EXCHANGE_PROGRAMS } from '../data';
import { Globe, MapPin, Milestone, Calendar, Compass, Lightbulb, GraduationCap } from 'lucide-react';

export default function International() {
  const [activeTab, setActiveTab] = useState<string>(EXCHANGE_PROGRAMS[0].id);

  const selectedProgram = EXCHANGE_PROGRAMS.find(p => p.id === activeTab) || EXCHANGE_PROGRAMS[0];

  // Coordinates roughly representing positions of states on a stylized mercator plane
  const countryPins = [
    { id: 'exc-sweden', name: 'Sweden', x: '51%', y: '23%', flag: '🇸🇪' },
    { id: 'exc-poland', name: 'Poland', x: '52%', y: '29%', flag: '🇵🇱' },
    { id: 'exc-hungary', name: 'Hungary', x: '53%', y: '33%', flag: '🇭🇺' },
    { id: 'exc-usa', name: 'United States', x: '24%', y: '37%', flag: '🇺🇸' },
    { id: 'exc-egypt', name: 'Egypt', x: '56%', y: '46%', flag: '🇪🇬' },
    { id: 'exc-malaysia-v', name: 'Malaysia (Virtual)', x: '78%', y: '58%', flag: '🇲🇾', isVirtual: true },
    { id: 'exc-russia-v', name: 'Russia (Virtual)', x: '63%', y: '22%', flag: '🇷🇺', isVirtual: true }
  ];

  return (
    <section id="international" className="py-24 md:py-32 bg-brand-cream border-y border-brand-beige">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="mb-16 md:mb-20 max-w-4xl">
          <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
            Transnational Footprint
          </span>
          <h2 className="font-sans text-3xl md:text-5xl text-brand-primary font-extrabold tracking-tight">
            International Mobility & Academic Exchanges
          </h2>
          <p className="text-brand-dark/70 text-lg md:text-xl font-sans mt-4 max-w-2xl leading-relaxed font-light">
            Completed credit exchange semesters, public advocacy simulations, and training in circular economies across Europe, North America, and North Africa.
          </p>
        </div>

        {/* Master Map and Timelines Card Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch mb-16">
          
          {/* Left Column: Visual Global Pins Map (7 Columns) */}
          <div className="lg:col-span-7 bg-white border border-brand-beige p-6 md:p-8 rounded-3xl shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-brand-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-dark/50 font-sans">Geographic Coordinates</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-brand-gold uppercase bg-brand-primary/5 px-2.5 py-1 rounded">
                  Explored 13 Countries
                </span>
              </div>

              {/* Stylized Vector Map representation */}
              <div className="relative w-full aspect-[2/1] bg-brand-cream/40 border border-brand-beige/50 rounded-2xl overflow-hidden mb-6 flex items-center justify-center select-none">
                
                {/* Visual grid lines for geographic feeling */}
                <svg className="absolute inset-0 w-full h-full text-brand-primary/[0.04]" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Abstract overlay */}
                <div className="absolute inset-4 opacity-50 flex items-center justify-center font-sans text-[12vw] text-brand-primary/[0.015] font-extrabold italic pointer-events-none">
                  Global Citizen
                </div>

                {/* Pins Overlay */}
                {countryPins.map((pin) => {
                  const isActive = activeTab === pin.id;
                  return (
                    <button
                      key={pin.id}
                      onClick={() => setActiveTab(pin.id)}
                      className="absolute group transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-20"
                      style={{ left: pin.x, top: pin.y }}
                    >
                      {/* Radiating gold rings */}
                      <span className={`absolute -inset-1.5 rounded-full bg-brand-gold/20 animate-ping duration-1000 ${
                        isActive ? 'scale-150 inline-block bg-brand-gold/30' : 'hidden group-hover:inline-block'
                      }`} />

                      <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full shadow-md text-xs font-bold transition-all ${
                        isActive 
                          ? 'bg-brand-primary text-white scale-110 z-30 ring-2 ring-brand-gold' 
                          : 'bg-white text-brand-dark hover:bg-brand-cream scale-100'
                      }`}>
                        <span>{pin.flag}</span>
                        <span className="hidden sm:inline max-w-[0px] overflow-hidden group-hover:max-w-[124px] duration-500 font-sans tracking-tight">
                          {pin.name}
                        </span>
                      </div>
                    </button>
                  );
                })}

                <div className="absolute bottom-2 left-3 text-[8px] font-mono text-brand-dark/30 flex gap-4 uppercase select-none">
                  <span>Equator Plane: 0° 00'</span>
                  <span>Grid Projection: Aligned</span>
                </div>
              </div>
            </div>

            {/* Micro horizontal timeline list of countries */}
            <div className="border-t border-brand-beige/60 pt-6">
              <span className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-widest block mb-3 font-sans">
                Select a country below to review programs and academic outcomes
              </span>
              <div className="flex flex-wrap gap-2">
                {EXCHANGE_PROGRAMS.map((prog) => {
                  const isActive = activeTab === prog.id;
                  return (
                    <button
                      key={prog.id}
                      onClick={() => setActiveTab(prog.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-bold transition-all ${
                        isActive 
                          ? 'bg-brand-primary text-white border-brand-primary shadow-xs' 
                          : 'bg-brand-cream/50 text-brand-dark border-brand-beige/80 hover:bg-white hover:border-brand-primary/30'
                      }`}
                    >
                      <span className="text-sm">{prog.flag}</span>
                      <span>{prog.country}</span>
                      {prog.isVirtual && (
                        <span className="text-[9px] font-bold text-brand-gold uppercase tracking-wider">Virtual</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Program Information Panel (5 Columns) */}
          <div className="lg:col-span-5 bg-brand-primary text-brand-cream p-8 md:p-10 rounded-3xl shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-brand-cream/60 uppercase tracking-widest text-[9px] font-bold font-mono">
                  Program Brief & Outcomes
                </span>
                <span className="text-2xl">{selectedProgram.flag}</span>
              </div>

              {/* Program Header */}
              <div className="mb-6">
                <span className="text-xs font-bold text-brand-gold bg-white/10 px-2.5 py-1 rounded inline-block mb-3 border border-white/5">
                  {selectedProgram.country}
                </span>
                <h3 className="font-sans text-2xl font-bold leading-snug text-white">
                  {selectedProgram.programName}
                </h3>
                <h4 className="font-sans text-sm text-brand-cream/80 font-semibold mt-1">
                  {selectedProgram.institution}
                </h4>
              </div>

              {/* Description / Coverage */}
              <div className="space-y-4 text-sm text-brand-cream/80 font-sans leading-relaxed pt-5 border-t border-white/10 font-light">
                <p>{selectedProgram.coverage}</p>
              </div>
            </div>

            {/* Outcome Highlight Box */}
            <div className="mt-8 bg-white/5 border border-white/10 p-5 rounded-2xl">
              <div className="flex items-center gap-2 mb-2 text-brand-gold font-sans font-bold text-xs">
                <Lightbulb className="w-4 h-4 text-brand-gold animate-pulse" />
                <span>Core Impact / Outcome</span>
              </div>
              <p className="font-sans text-xs text-brand-cream/90 leading-relaxed italic font-light">
                "{selectedProgram.outcome}"
              </p>
            </div>
          </div>

        </div>

        {/* Global Travel Stats Footer */}
        <div className="bg-white border border-brand-beige/50 p-6 rounded-2xl text-center shadow-xs flex flex-col sm:flex-row items-center justify-around gap-4 text-sm font-semibold text-brand-dark/70">
          <div className="flex items-center gap-2.5">
            <Milestone className="w-4 h-4 text-brand-gold" />
            <span>Academic Focus: Multi-Regional Governance & Circular Economics</span>
          </div>
          <span className="hidden sm:inline text-brand-beige">|</span>
          <div className="flex items-center gap-2.5">
            <GraduationCap className="w-4 h-4 text-brand-primary" />
            <span>ECTS Score Passed: 30 Swedish Credits (80% Top Mark)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
