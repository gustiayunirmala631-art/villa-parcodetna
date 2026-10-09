import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, MessageCircle } from 'lucide-react';
import { VILLA_INFO } from '../data/villaData';

interface NavbarProps {
  currency: 'IDR' | 'USD';
  setCurrency: (c: 'IDR' | 'USD') => void;
  lang: 'ID' | 'EN';
  setLang: (l: 'ID' | 'EN') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currency, setCurrency, lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: lang === 'ID' ? 'Beranda' : 'Home', href: '#hero' },
    { label: lang === 'ID' ? 'Unit Villa' : 'The Villa', href: '#villas' },
    { label: lang === 'ID' ? 'Galeri' : 'Gallery', href: '#gallery' },
    { label: lang === 'ID' ? 'Fasilitas' : 'Amenities', href: '#amenities' },
    { label: lang === 'ID' ? 'Lokasi & Peta' : 'Location', href: '#location' },
    { label: lang === 'ID' ? 'Reservasi' : 'Booking', href: '#reservation' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-900/95 backdrop-blur-md py-3 shadow-lg border-b border-stone-800/80 text-white'
          : 'bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single Text Element) */}
          <a
            href="#hero"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A374]"
          >
            <span className="font-serif-luxury text-xl sm:text-2xl tracking-[0.2em] font-normal uppercase text-white group-hover:text-[#E8D7BE] transition-colors">
              Villa Parcodetna
            </span>
          </a>

          {/* Zone 2: 4–5 Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-widest font-medium uppercase text-stone-200">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C2A374] hover:after:w-full after:transition-all whitespace-nowrap shrink-0"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Controls */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            {/* Currency & Language Toggles */}
            <div className="flex items-center gap-2 text-xs tracking-wider border-r border-stone-700/60 pr-4">
              <button
                onClick={() => setCurrency(currency === 'IDR' ? 'USD' : 'IDR')}
                className="px-2 py-1 rounded hover:bg-white/10 transition-colors text-stone-300 hover:text-white font-mono"
                title="Ganti Mata Uang"
              >
                {currency === 'IDR' ? 'RP' : 'USD'}
              </button>
              <span className="text-stone-600">|</span>
              <button
                onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')}
                className="px-2 py-1 rounded hover:bg-white/10 transition-colors text-stone-300 hover:text-white uppercase"
                title="Ganti Bahasa"
              >
                {lang}
              </button>
            </div>

            {/* Direct Agoda Button */}
            <a
              href={VILLA_INFO.agodaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs tracking-wider uppercase font-semibold text-stone-900 bg-[#E8D7BE] hover:bg-[#F3E5CE] transition-all rounded shadow-sm hover:shadow flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>{lang === 'ID' ? 'Pesan Agoda' : 'Book Agoda'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Direct WhatsApp Callout */}
            <a
              href={`https://wa.me/${VILLA_INFO.phoneRaw}?text=${encodeURIComponent(
                'Halo Villa Parcodetna Yogyakarta, saya ingin menanyakan ketersediaan kamar.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/40 rounded transition-colors"
              title="Chat WhatsApp Langsung"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={VILLA_INFO.agodaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-[11px] font-semibold text-stone-900 bg-[#E8D7BE] rounded"
            >
              Agoda
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-stone-200 hover:text-white hover:bg-stone-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-t border-stone-800 px-4 pt-4 pb-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs">
            <span className="text-stone-400">Pengaturan:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrency(currency === 'IDR' ? 'USD' : 'IDR')}
                className="px-2.5 py-1 rounded bg-stone-800 text-stone-200 font-mono"
              >
                {currency}
              </button>
              <button
                onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')}
                className="px-2.5 py-1 rounded bg-stone-800 text-stone-200 uppercase"
              >
                {lang}
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-200 hover:text-white py-1 text-sm font-medium tracking-wider uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2.5">
            <a
              href={VILLA_INFO.agodaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-center text-xs tracking-wider uppercase font-semibold text-stone-900 bg-[#E8D7BE] rounded flex items-center justify-center gap-2"
            >
              <span>Booking via Agoda (Official)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={`https://wa.me/${VILLA_INFO.phoneRaw}?text=${encodeURIComponent(
                'Halo Villa Parcodetna, saya ingin reservasi villa.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-center text-xs tracking-wider uppercase font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: {VILLA_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
