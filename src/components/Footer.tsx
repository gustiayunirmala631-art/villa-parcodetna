import React from 'react';
import { ExternalLink, MessageCircle, MapPin, Mail, Instagram, ShieldCheck } from 'lucide-react';
import { VILLA_INFO } from '../data/villaData';

interface FooterProps {
  lang: 'ID' | 'EN';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif-luxury text-2xl tracking-[0.2em] font-normal uppercase text-white">
                Villa Parcodetna
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-md">
              {lang === 'ID'
                ? 'Villa privat mewah dengan kolam renang pribadi di kawasan asri Yogyakarta. Dikelola dengan keramahan istimewa untuk momen liburan keluarga, romantis, dan retret ketenangan.'
                : 'A bespoke private sanctuary featuring secluded swimming pools and tranquil surroundings in Yogyakarta, Indonesia.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <a
                href={VILLA_INFO.agodaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-stone-900 border border-[#E8D7BE]/30 text-[#E8D7BE] hover:bg-stone-800 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Agoda Certified Partner</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>

              <a
                href={`https://wa.me/${VILLA_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-950/80 border border-emerald-700/40 text-emerald-300 hover:bg-emerald-900/80 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WA: {VILLA_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E8D7BE] font-semibold">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs font-light text-stone-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Tentang Villa Parcodetna</a></li>
              <li><a href="#villas" className="hover:text-white transition-colors">Pilihan Villa & Suite</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Galeri Foto Eksklusif</a></li>
              <li><a href="#amenities" className="hover:text-white transition-colors">Fasilitas & Layanan Butler</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Peta Google & Akses Wisata</a></li>
              <li><a href="#reservation" className="hover:text-white transition-colors">Formulir Booking WhatsApp</a></li>
            </ul>
          </div>

          {/* Contact & Agoda Direct */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E8D7BE] font-semibold">
              Hubungi Kami & Pemesanan
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#A68352] shrink-0 mt-0.5" />
                <span>{VILLA_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: <strong className="text-white font-mono">{VILLA_INFO.phoneDisplay}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                <span>{VILLA_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-stone-400 shrink-0" />
                <span>{VILLA_INFO.instagram}</span>
              </div>
            </div>

            <div className="pt-3 space-y-2">
              <a
                href={VILLA_INFO.agodaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-[#E8D7BE] hover:bg-[#F3E5CE] text-stone-950 font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 text-center"
              >
                <span>Halaman Pemesanan Agoda</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-3">
          <div>
            © {new Date().getFullYear()} Villa Parcodetna Yogyakarta. Seluruh hak cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-stone-300 transition-colors">Privasi Tamu</a>
            <span>·</span>
            <a href="#terms" className="hover:text-stone-300 transition-colors">Syarat & Ketentuan</a>
            <span>·</span>
            <a href={VILLA_INFO.agodaUrl} target="_blank" rel="noopener noreferrer" className="hover:text-stone-300 transition-colors">
              Agoda Partner Page
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
