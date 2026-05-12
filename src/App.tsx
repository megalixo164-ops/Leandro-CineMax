/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import CatalogSection from './components/CatalogSection';
import SeriesSection from './components/SeriesSection';
import DevicesSection from './components/DevicesSection';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="font-sans bg-black-deep text-white-ice min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <CatalogSection />
        <SeriesSection />
        <DevicesSection />
        <Pricing />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
