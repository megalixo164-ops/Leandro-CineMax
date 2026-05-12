/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const Benefits = lazy(() => import('./components/Benefits'));
const CatalogSection = lazy(() => import('./components/CatalogSection'));
const SeriesSection = lazy(() => import('./components/SeriesSection'));
const DevicesSection = lazy(() => import('./components/DevicesSection'));
const Pricing = lazy(() => import('./components/Pricing'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const FAQ = lazy(() => import('./components/FAQ'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));

const Loader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-8 h-8 border-2 border-neon-purple border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <div className="font-sans bg-black-deep text-white-ice min-h-screen">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<Loader />}>
          <div className="content-auto">
            <Benefits />
            <CatalogSection />
            <SeriesSection />
            <DevicesSection />
            <Pricing />
            <HowItWorks />
            <FAQ />
            <FinalCTA />
          </div>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <div className="content-auto">
          <Footer />
        </div>
        <WhatsAppButton />
      </Suspense>
    </div>
  );
}
