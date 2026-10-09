import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AgodaIntegrationBanner } from './components/AgodaIntegrationBanner';
import { AboutSection } from './components/AboutSection';
import { VillaSuites } from './components/VillaSuites';
import { PhotoGallery } from './components/PhotoGallery';
import { AmenitiesSection } from './components/AmenitiesSection';
import { GoogleMapsSection } from './components/GoogleMapsSection';
import { WhatsAppBookingSection } from './components/WhatsAppBookingSection';
import { GuestReviews } from './components/GuestReviews';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [currency, setCurrency] = useState<'IDR' | 'USD'>('IDR');
  const [lang, setLang] = useState<'ID' | 'EN'>('ID');

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-[#C2A374] selection:text-white">
      {/* Strict 3-Zone Navigation */}
      <Navbar
        currency={currency}
        setCurrency={setCurrency}
        lang={lang}
        setLang={setLang}
      />

      <main>
        {/* Cinematic Hero with Search Bar inspired by reference screenshot */}
        <Hero
          lang={lang}
          currency={currency}
        />

        {/* Dedicated Agoda Direct Integration & Trust Banner */}
        <AgodaIntegrationBanner lang={lang} />

        {/* About Villa Parcodetna Yogyakarta */}
        <AboutSection lang={lang} />

        {/* Villa Units & Suites Showcase */}
        <VillaSuites lang={lang} currency={currency} />

        {/* Visual Photo Gallery with Filters and Lightbox */}
        <PhotoGallery lang={lang} />

        {/* Bespoke Amenities & In-Villa Dining */}
        <AmenitiesSection lang={lang} />

        {/* Google Maps Location & Nearby Landmarks */}
        <GoogleMapsSection lang={lang} />

        {/* Direct WhatsApp Reservation Generator */}
        <WhatsAppBookingSection lang={lang} currency={currency} />

        {/* Verified Guest Reviews */}
        <GuestReviews lang={lang} />

        {/* Frequently Asked Questions */}
        <FaqSection lang={lang} />
      </main>

      {/* Quiet Luxury Footer */}
      <Footer lang={lang} />

      {/* Floating WhatsApp Quick Concierge */}
      <FloatingWhatsApp />
    </div>
  );
}
