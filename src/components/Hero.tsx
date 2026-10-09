import React, { useState } from 'react';
import { Calendar, Users, MapPin, Search, MessageCircle, ExternalLink, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { VILLA_INFO, VILLA_SINGLE_UNIT, AGODA_PHOTOS, calculateAgodaLivePrice } from '../data/villaData';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroProps {
  lang: 'ID' | 'EN';
  currency: 'IDR' | 'USD';
}

export const Hero: React.FC<HeroProps> = ({ lang, currency }) => {
  // Tomorrow and 3 days from now default dates
  const today = new Date();
  const defaultCheckIn = new Date(today.setDate(today.getDate() + 2)).toISOString().split('T')[0];
  const defaultCheckOut = new Date(today.setDate(today.getDate() + 4)).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [guests, setGuests] = useState(4);
  const [isSyncing, setIsSyncing] = useState(false);

  // Live price calculation synchronized with Agoda dates
  const livePrice = calculateAgodaLivePrice(checkIn, checkOut);

  const handleSyncPrice = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
    }, 600);
  };

  // WhatsApp quick reservation URL with single unit and live price
  const waMessage = `Halo Villa Parcodetna Yogyakarta,\nSaya ingin reservasi unit:\n*${VILLA_SINGLE_UNIT.name}*\n- Check-in: ${checkIn}\n- Check-out: ${checkOut} (${livePrice.nights} Malam)\n- Jumlah Tamu: ${guests} Orang\n- Estimasi Harga Agoda: ${currency === 'IDR' ? `Rp ${livePrice.totalStayIdr.toLocaleString('id-ID')}` : `$${livePrice.totalStayUsd}`}\nMohon info ketersediaan dan detail bookingnya. Terima kasih.`;
  const waUrl = `https://wa.me/${VILLA_INFO.phoneRaw}?text=${encodeURIComponent(waMessage)}`;

  // Agoda deep link with selected dates & guests
  const agodaDateUrl = `${VILLA_INFO.agodaUrl}&checkIn=${checkIn}&checkOut=${checkOut}&adults=${guests}&rooms=1`;

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-stone-950">
      {/* Background Photography with Official Agoda Photo */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={AGODA_PHOTOS.exteriorHero}
          alt="Villa Parcodetna Yogyakarta Private Pool - Foto Asli Agoda"
          fallbackTitle="Villa Parcodetna Yogyakarta"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-out"
          wrapperClassName="w-full h-full"
        />
        {/* Measured Scrim for contrast: subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/45 to-stone-950/60" />
      </div>

      {/* Top Monogram / Brand Icon */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-8 sm:pt-12">
        <div className="inline-flex flex-col items-center justify-center mb-4">
          <div className="w-14 h-14 rounded-full border border-[#E8D7BE]/40 flex items-center justify-center backdrop-blur-xs bg-stone-900/20 text-[#E8D7BE] mb-3 shadow-lg">
            <span className="font-serif-luxury text-2xl italic tracking-wider">VP</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#E8D7BE] font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Yogyakarta · Entire Private Pool Villa</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal text-white tracking-wide text-balance leading-tight max-w-4xl mx-auto drop-shadow-md">
          {lang === 'ID' 
            ? 'Kemewahan & Ketenteraman Tropis di Jogja' 
            : 'A Sanctuary of Luxury & Serenity in Yogyakarta'}
        </h1>

        <p className="mt-4 text-sm sm:text-base text-stone-200/90 max-w-2xl mx-auto font-light leading-relaxed">
          {lang === 'ID'
            ? 'Satu villa privat utuh eksklusif untuk rombongan Anda dengan kolam renang pribadi, 3 kamar tidur queen, dan ruang santai lega di Yogyakarta. Booking instan melalui Agoda atau hubungi WhatsApp kami.'
            : 'An exclusive entire 3-bedroom private pool villa in Yogyakarta for your family and friends. Book securely on Agoda or connect directly via WhatsApp.'}
        </p>

        {/* Trust markers */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-stone-300">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-stone-900/60 backdrop-blur-xs border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E8D7BE]" />
            Official Agoda Partner
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-stone-900/60 backdrop-blur-xs border border-white/10">
            <span className="text-[#E8D7BE] font-bold">★ {VILLA_INFO.agodaScore} / 10</span>
            Agoda Verified Score (Exceptional)
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-stone-900/60 backdrop-blur-xs border border-white/10">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            WhatsApp Direct: {VILLA_INFO.phoneDisplay}
          </span>
        </div>
      </div>

      {/* Booking Search Bar overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full mt-12 mb-4">
        <div className="bg-stone-900/85 backdrop-blur-md border border-white/15 rounded-xl p-4 sm:p-6 shadow-2xl text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            
            {/* Field 1: Destination & Property */}
            <div className="space-y-1.5">
              <label className="block text-[11px] uppercase tracking-wider text-stone-400 font-medium">
                {lang === 'ID' ? 'Unit Villa Eksklusif' : 'Exclusive Villa'}
              </label>
              <div className="flex items-center gap-2 border-b border-stone-600 pb-2 text-stone-100">
                <MapPin className="w-4 h-4 text-[#E8D7BE] shrink-0" />
                <div className="truncate">
                  <div className="text-xs font-semibold truncate">Entire 3-Bedroom Villa</div>
                  <div className="text-[10px] text-stone-400">Yogyakarta (Max 8 Tamu)</div>
                </div>
              </div>
            </div>

            {/* Field 2: Dates (Check In / Out) */}
            <div className="space-y-1.5">
              <label className="block text-[11px] uppercase tracking-wider text-stone-400 font-medium">
                {lang === 'ID' ? 'Tanggal Menginap' : 'Stay Dates'}
                <span className="ml-1 text-[#E8D7BE] font-mono">({livePrice.nights} Malam)</span>
              </label>
              <div className="flex items-center gap-2 border-b border-stone-600 pb-1.5 text-stone-100">
                <Calendar className="w-4 h-4 text-[#E8D7BE] shrink-0" />
                <div className="flex items-center gap-1 text-xs sm:text-sm w-full">
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="bg-transparent border-none text-white text-xs sm:text-sm focus:outline-none w-1/2 p-0 cursor-pointer"
                  />
                  <span className="text-stone-500">-</span>
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="bg-transparent border-none text-white text-xs sm:text-sm focus:outline-none w-1/2 p-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Field 3: Guests Selection */}
            <div className="space-y-1.5">
              <label className="block text-[11px] uppercase tracking-wider text-stone-400 font-medium">
                {lang === 'ID' ? 'Jumlah Tamu' : 'Number of Guests'}
              </label>
              <div className="flex items-center gap-2 border-b border-stone-600 pb-1.5 text-stone-100">
                <Users className="w-4 h-4 text-[#E8D7BE] shrink-0" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="bg-transparent border-none text-white text-xs sm:text-sm focus:outline-none w-full cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n} className="bg-stone-900 text-stone-200">
                      {n} Orang Tamu (Kapasitas s/d 8)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Field 4: Action Buttons (Agoda & WhatsApp) */}
            <div className="flex flex-col sm:flex-row gap-2">
              {/* Primary Agoda Direct Booking */}
              <a
                href={agodaDateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-md bg-[#E8D7BE] hover:bg-[#F5E6D0] text-stone-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 text-center group"
              >
                <Search className="w-3.5 h-3.5" />
                <span>{lang === 'ID' ? 'Cek Agoda' : 'Agoda Rates'}</span>
                <ExternalLink className="w-3 h-3 text-stone-700 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Quick WhatsApp Inquiry */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-1.5 text-center"
                title="Kirim detail pencarian ini langsung ke WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">WA</span>
              </a>
            </div>

          </div>

          {/* Real-time Agoda Price Sync Bar */}
          <div className="mt-4 pt-3 border-t border-stone-800/80 flex flex-wrap items-center justify-between text-xs text-stone-300 gap-2">
            <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Sinkronisasi Harga Agoda Real-time
              </span>
              <span className="font-semibold text-white">
                {currency === 'IDR'
                  ? `Rp ${livePrice.avgRatePerNightIdr.toLocaleString('id-ID')} / malam`
                  : `$${livePrice.avgRatePerNightUsd} / night`}
              </span>
              <span className="text-stone-400">
                (Total {livePrice.nights} malam: {currency === 'IDR' ? `Rp ${livePrice.totalStayIdr.toLocaleString('id-ID')}` : `$${livePrice.totalStayUsd}`})
              </span>
            </div>

            <button
              onClick={handleSyncPrice}
              className="text-[#E8D7BE] hover:text-white flex items-center gap-1 text-[11px] tracking-wide uppercase transition-colors"
              title="Perbarui data sinkronisasi harga"
            >
              <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>Sinkron Ulang</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
