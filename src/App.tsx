/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Odommo19 from './components/Odommo19';
import Experience from './components/Experience';
import International from './components/International';
import Academic from './components/Academic';
import Skills from './components/Skills';
import Honors from './components/Honors';
import Volunteering from './components/Volunteering';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark selection:bg-brand-gold selection:text-brand-primary">
      {/* Navigation Layer */}
      <Navigation />

      {/* Main Sections */}
      <main>
        {/* Section 1: Hero Cover */}
        <Hero />

        {/* Section 2: About Me (Narrative Portfolio) */}
        <About />

        {/* Section 3: Professional Experience */}
        <Experience />

        {/* Section 4: Global Journey (International Mobilities) */}
        <International />

        {/* Section 5: Gallery Moments (Visual footprint highlights) */}
        <Gallery />

        {/* Section 6: Academics (Educational Standing & Policy Papers) */}
        <Academic />

        {/* Section 7: Skills Index (Operations, Technical & Languages) */}
        <Skills />

        {/* Section 8: Honors & Recognitions */}
        <Honors />

        {/* Section 9: Civic Work & Odommo '19 Foundations */}
        <Odommo19 />

        {/* Section 10: Extra Volunteering & Engagements */}
        <Volunteering />

        {/* Section 11: Contact Interface */}
        <Contact />
      </main>

      {/* Footer copyright */}
      <Footer />
    </div>
  );
}
