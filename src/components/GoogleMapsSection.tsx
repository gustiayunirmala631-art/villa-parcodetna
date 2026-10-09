import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Copy, Check, ExternalLink, Sparkles, Compass } from 'lucide-react';
import { VILLA_INFO, NEARBY_ATTRACTIONS } from '../data/villaData';

interface MapsProps {
  lang: 'ID' | 'EN';
}

export const GoogleMapsSection: React.FC<MapsProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(VILLA_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 bg-[#FDFBF7] text-stone-900 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A68352] font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === 'ID' ? 'Lokasi & Peta Google' : 'Location & Google Maps'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-stone-950">
            {lang === 'ID' ? 'Temukan Villa Parcodetna di Yogyakarta' : 'Finding Villa Parcodetna Yogyakarta'}
          </h2>
          <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
            {lang === 'ID'
              ? 'Terletak strategis di kawasan asri Sleman - Yogyakarta, dekat dengan destinasi wisata lereng Merapi dan hanya hitungan menit dari jantung kota Jogja.'
              : 'Conveniently situated in the green corridor of Yogyakarta, offering both quiet seclusion and seamless connectivity to iconic cultural landmarks.'}
          </p>
        </div>

        {/* Maps Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Google Map */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden p-3 sm:p-4">
            <div className="relative w-full h-[400px] sm:h-[480px] rounded-xl overflow-hidden border border-stone-200 bg-stone-100">
              {/* Google Maps Embed iframe */}
              <iframe
                title="Google Maps Lokasi Villa Parcodetna Yogyakarta"
                src={VILLA_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              
              {/* Map floating control overlay */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs p-2.5 rounded-lg border border-stone-200 shadow-md flex items-center gap-2 text-xs">
                <MapPin className="w-4 h-4 text-[#A68352]" />
                <div>
                  <div className="font-semibold text-stone-900">Villa Parcodetna</div>
                  <div className="text-[10px] text-stone-500">Yogyakarta, Indonesia</div>
                </div>
              </div>
            </div>

            {/* Bottom map action bar */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 p-2 text-xs">
              <span className="text-stone-500 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#A68352]" />
                Peta interaktif dapat digeser & dizoom
              </span>

              <a
                href={VILLA_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-lg bg-stone-900 text-white hover:bg-stone-800 text-xs font-medium flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-[#E8D7BE]" />
                <span>Buka Petunjuk Arah Google Maps</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Address, Nearby Spots & Distance */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Box */}
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 shadow-sm space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#A68352] font-semibold block">
                    Alamat Lengkap
                  </span>
                  <h3 className="text-lg font-serif-luxury text-stone-950 mt-1">
                    Villa Parcodetna
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {VILLA_INFO.address}
                  </p>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="p-2.5 rounded-lg border border-stone-200 hover:bg-stone-50 text-stone-700 transition-colors shrink-0"
                  title="Salin Alamat"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copied && (
                <div className="text-[11px] text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded border border-emerald-200 animate-in fade-in">
                  Alamat berhasil disalin ke papan klip!
                </div>
              )}

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
                <span>Check-in: <strong>{VILLA_INFO.checkInTime}</strong></span>
                <span>Check-out: <strong>{VILLA_INFO.checkOutTime}</strong></span>
              </div>
            </div>

            {/* Nearby Attractions List */}
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 shadow-sm space-y-3.5">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <span className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                  Destinasi Terdekat di Jogja
                </span>
                <span className="text-[11px] text-stone-500">Waktu Tempuh Kendaraan</span>
              </div>

              <div className="space-y-3">
                {NEARBY_ATTRACTIONS.map((spot) => (
                  <div
                    key={spot.id}
                    className="flex items-start justify-between gap-3 text-xs pb-2 border-b border-stone-50 last:border-b-0 last:pb-0"
                  >
                    <div>
                      <div className="font-semibold text-stone-900">{spot.name}</div>
                      <div className="text-[11px] text-stone-500">{spot.category} · {spot.distance}</div>
                    </div>
                    <div className="flex items-center gap-1 font-mono text-stone-700 bg-stone-100 px-2 py-1 rounded text-[11px] shrink-0">
                      <Clock className="w-3 h-3 text-[#A68352]" />
                      <span>{spot.driveTime}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-light">
                *Tersedia fasilitas antar-jemput mobil bandara / stasiun atas permintaan khusus.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
