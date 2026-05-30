import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setIsSubmitting(true);
    
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-cream/40 border-y border-brand-beige">
      <div className="max-w-7xl mx-auto px-6 font-sans">
        
        {/* Editorial Heading */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <span className="text-brand-gold uppercase tracking-[0.25em] text-xs font-bold mb-3 block">
            Direct Communications
          </span>
          <h2 className="font-sans text-3xl md:text-5xl text-brand-primary font-extrabold tracking-tight">
            Initiate a Dialogue
          </h2>
          <p className="text-brand-dark/70 text-lg md:text-xl font-sans mt-4 leading-relaxed font-light">
            Reach out regarding master's scholarship fellowships, NGO partnerships with Odommo '19, or consultation contracts on operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct info nodes (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-brand-beige p-8 rounded-3xl shadow-xs space-y-6">
              
              <h3 className="font-sans text-xl font-bold text-brand-primary border-b border-brand-beige pb-3 mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand-gold" />
                Connection Coordinates
              </h3>

              {/* Email node */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-primary/5 rounded-xl flex items-center justify-center border border-brand-primary/10 shrink-0">
                  <Mail className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-brand-dark/45 uppercase tracking-wider font-bold block">Primary Email</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm md:text-base font-semibold text-brand-dark hover:text-brand-gold transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                  <span className="block text-[11px] font-medium text-brand-dark/40 mt-0.5">Available for correspondence</span>
                </div>
              </div>

              {/* Phone node */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-primary/5 rounded-xl flex items-center justify-center border border-brand-primary/10 shrink-0">
                  <Phone className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-brand-dark/45 uppercase tracking-wider font-bold block">Direct Mobile & WhatsApp</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm md:text-base font-semibold text-brand-dark hover:text-brand-gold transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                  <span className="block text-[11px] font-medium text-brand-dark/40 mt-0.5">WhatsApp enabled for roaming schedules</span>
                </div>
              </div>

              {/* LinkedIn handle */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-primary/5 rounded-xl flex items-center justify-center border border-brand-primary/10 shrink-0">
                  <Linkedin className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-brand-dark/45 uppercase tracking-wider font-bold block">Professional Registry</span>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-semibold text-brand-primary hover:text-brand-gold transition-colors underline decoration-brand-gold/40">
                    linkedin.com/in/sharif-link
                  </a>
                  <span className="block text-[11px] font-medium text-brand-dark/40 mt-0.5">Verify credentials and endorsements</span>
                </div>
              </div>

              {/* Location Node */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-primary/5 rounded-xl flex items-center justify-center border border-brand-primary/10 shrink-0">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-brand-dark/45 uppercase tracking-wider font-bold block">Current Coordinates</span>
                  <span className="text-sm md:text-base font-bold text-brand-dark block">{PERSONAL_INFO.location}</span>
                  <span className="text-[11px] font-medium text-brand-dark/40">Daffodil Smart City, Savar, Dhaka, Bangladesh</span>
                </div>
              </div>

            </div>

            {/* Note block */}
            <div className="bg-brand-primary text-brand-cream p-6 rounded-2xl shadow-xs text-xs leading-relaxed font-sans font-light">
              <strong>Immediate Response SLA:</strong> Standard inquiry emails are reviewed within 12 business hours. If coordinating high-priority summit panel details, please initiate text communications via WhatsApp or direct roaming connections.
            </div>
          </div>

          {/* Right Column: Contact Form (7 Columns) */}
          <div className="lg:col-span-7 bg-white border border-brand-beige p-8 md:p-10 rounded-3xl shadow-xs">
            
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 bg-brand-primary/5 rounded-full border border-brand-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10 text-brand-gold" />
                </div>
                <h3 className="font-sans text-2xl font-bold text-brand-primary">Draft Transmission Initialized!</h3>
                <p className="text-sm text-brand-dark/70 font-sans max-w-md leading-relaxed mt-1 font-light">
                  Thank you for your message. A connection draft has been cached locally. I will cross-reference this notification with my direct incoming channels immediately.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-brand-primary text-white hover:bg-brand-primary/95 rounded-full text-xs font-bold transition-all"
                >
                  Prepare another transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="form_name" className="block text-xs font-bold text-brand-dark/65 uppercase tracking-wider mb-2 font-mono">
                    Full Identification / Name
                  </label>
                  <input 
                    type="text" 
                    id="form_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your professional name"
                    className="w-full px-4 py-3 bg-brand-cream/40 border border-brand-beige hover:border-brand-primary/40 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl font-sans text-sm tracking-tight text-brand-dark outline-none transition-all placeholder-brand-dark/30"
                  />
                </div>

                <div>
                  <label htmlFor="form_email" className="block text-xs font-bold text-brand-dark/65 uppercase tracking-wider mb-2 font-mono">
                    Electronic Mail Address
                  </label>
                  <input 
                    type="email" 
                    id="form_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="e.g. sender@organization.org"
                    className="w-full px-4 py-3 bg-brand-cream/40 border border-brand-beige hover:border-brand-primary/40 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl font-sans text-sm tracking-tight text-brand-dark outline-none transition-all placeholder-brand-dark/30"
                  />
                </div>

                <div>
                  <label htmlFor="form_message" className="block text-xs font-bold text-brand-dark/65 uppercase tracking-wider mb-2 font-mono">
                    Correspondence / Message Proposal
                  </label>
                  <textarea 
                    id="form_message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    placeholder="Detail the scope of your partnership, research engagement, or operational contract requirements..."
                    className="w-full px-4 py-3 bg-brand-cream/40 border border-brand-beige hover:border-brand-primary/40 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary rounded-xl font-sans text-sm tracking-tight text-brand-dark outline-none transition-all placeholder-brand-dark/30 resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary text-white hover:bg-brand-primary/95 text-sm font-bold rounded-xl transition-all duration-300 shadow-xs cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Transmitting details...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-brand-gold animate-pulse" />
                      <span>Initialize Transmission</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
