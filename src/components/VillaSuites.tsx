import React, { useState } from 'react';
import { BedDouble, Bath, Users, Maximize, Waves, Check, ExternalLink, MessageCircle, Sparkles, RefreshCw, Calendar, ShieldCheck, Zap } from 'lucide-react';
import { VILLA_SINGLE_UNIT, VILLA_INFO, calculateAgodaLivePrice } from '../data/villaData';
import { ImageWithFallback } from './ImageWithFallback';

interface VillaSuitesProps {
  lang: 'ID' | 'EN';
  currency: 'IDR' | 'USD';
}

export const VillaSuites: React.FC<VillaSuitesProps> = ({ lang, currency }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Stay dates for live Agoda rate sync
  const today = new Date();
  const defaultCheckIn = new Date(today.setDate(today.getDate() + 2)).toISOString().split('T')[0];
  const defaultCheckOut = new Date(today.setDate(today.getDate() + 4)).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const livePrice = calculateAgodaLivePrice(checkIn, checkOut);

  const handleRefreshRate = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  const currentImg = VILLA_SINGLE_UNIT.images[activeImageIdx] || VILLA_SINGLE_UNIT.featuredImage;

  // Real-time deep link to Agoda with current dates
  const agodaLiveUrl = `${VILLA_INFO.agodaUrl}&checkIn=${checkIn}&checkOut=${checkOut}&adults=4&rooms=1`;

  // WhatsApp inquiry prefilled with single unit and live calculated stay price
  const waInquiryText = `Halo Villa Parcodetna Yogyakarta,\nSaya ingin reservasi:\n*${VILLA_SINGLE_UNIT.name}*\n- Check-in: ${checkIn}\n- Check-out: ${checkOut} (${livePrice.nights} Malam)\n- Estimasi Harga Sinkron Agoda: ${currency === 'IDR' ? `Rp ${livePrice.totalStayIdr.toLocaleString('id-ID')}` : `$${livePrice.totalStayUsd}`}\nMohon konfirmasi ketersediaan unit untuk tanggal tersebut. Terima kasih.`;
  const waInquiryUrl = `https://wa.me/${VILLA_INFO.phoneRaw}?text=${encodeURIComponent(waInquiryText)}`;

  return (
    <section id="villas" className="py-20 bg-stone-100/70 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A68352] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ID' ? 'Unit Villa Eksklusif' : 'Exclusive Private Villa'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-stone-950">
            {lang === 'ID' ? 'Seluruh Bangunan Villa & Kolam Renang Privat' : 'Entire Private Pool Villa Sanctuary'}
          </h2>
          <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
            {lang === 'ID'
              ? 'Villa Parcodetna disewakan secara menyeluruh untuk menjamin 100% privasi Anda. Kolam renang pribadi, 3 kamar tidur queen, dapur lengkap, dan ruang santai hanya untuk rombongan Anda.'
              : 'Our entire estate is reserved exclusively for your party, featuring an unshared private pool, 3 spacious bedrooms, full kitchen, and serene garden.'}
          </p>
        </div>

        {/* Grand Single Villa Card */}
        <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Photo Showcase Column */}
            <div className="lg:col-span-7 p-4 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="relative rounded-xl overflow-hidden aspect-16/10 bg-stone-900 shadow-inner">
                  <ImageWithFallback
                    src={currentImg}
                    alt={VILLA_SINGLE_UNIT.name}
                    fallbackTitle={VILLA_SINGLE_UNIT.name}
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                    wrapperClassName="w-full h-full"
                  />
                  <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-xs text-[#E8D7BE] text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded flex items-center gap-1.5">
                    <Waves className="w-3.5 h-3.5 text-[#E8D7BE]" />
                    <span>{VILLA_SINGLE_UNIT.poolSize}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-stone-950/70 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded">
                    Foto {activeImageIdx + 1} dari {VILLA_SINGLE_UNIT.images.length} (Resmi Agoda)
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mt-3">
                  {VILLA_SINGLE_UNIT.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative rounded-lg overflow-hidden aspect-16/10 border-2 transition-all ${
                        activeImageIdx === idx
                          ? 'border-[#C2A374] scale-95 shadow-sm'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                        wrapperClassName="w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Specs Bar */}
              <div className="grid grid-cols-4 gap-2 pt-6 mt-6 border-t border-stone-200/80 text-center">
                <div className="space-y-1">
                  <BedDouble className="w-4 h-4 mx-auto text-stone-600" />
                  <div className="text-[11px] text-stone-500 font-medium">Kamar Tidur</div>
                  <div className="text-xs font-semibold text-stone-900">3 Queen Beds + 2 Sofa Beds</div>
                </div>
                <div className="space-y-1">
                  <Bath className="w-4 h-4 mx-auto text-stone-600" />
                  <div className="text-[11px] text-stone-500 font-medium">Kamar Mandi</div>
                  <div className="text-xs font-semibold text-stone-900">3 K. Mandi Air Hangat</div>
                </div>
                <div className="space-y-1">
                  <Users className="w-4 h-4 mx-auto text-stone-600" />
                  <div className="text-[11px] text-stone-500 font-medium">Kapasitas</div>
                  <div className="text-xs font-semibold text-stone-900">Hingga 8 Tamu</div>
                </div>
                <div className="space-y-1">
                  <Maximize className="w-4 h-4 mx-auto text-stone-600" />
                  <div className="text-[11px] text-stone-500 font-medium">Luas Properti</div>
                  <div className="text-xs font-semibold text-stone-900">260 m² (Seluruh Villa)</div>
                </div>
              </div>
            </div>

            {/* Right Information & Real-time Agoda Sync Panel */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-stone-50/50 border-t lg:border-t-0 lg:border-l border-stone-200/80">
              <div className="space-y-5">
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] uppercase tracking-wider text-[#A68352] font-bold">
                      Entire Villa
                    </span>
                    <span className="text-stone-300">·</span>
                    <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                      100% Privat
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif-luxury font-normal text-stone-950">
                    {VILLA_SINGLE_UNIT.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    {VILLA_SINGLE_UNIT.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {VILLA_SINGLE_UNIT.description}
                </p>

                {/* Features List */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold block">
                    Fasilitas Unggulan Villa:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-stone-700">
                    {VILLA_SINGLE_UNIT.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* REAL-TIME AGODA PRICE SYNC WIDGET */}
                <div className="mt-4 p-4 rounded-xl bg-white border border-[#E8D7BE] shadow-xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-900">
                      <Zap className="w-4 h-4 text-emerald-600" />
                      <span>Sinkronisasi Harga Agoda Real-time</span>
                    </div>
                    <button
                      onClick={handleRefreshRate}
                      className="text-[11px] text-stone-500 hover:text-stone-900 flex items-center gap-1 transition-colors"
                      title="Perbarui harga dari Agoda"
                    >
                      <RefreshCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin text-emerald-600' : ''}`} />
                      <span>Sinkron</span>
                    </button>
                  </div>

                  {/* Interactive Date Picker for live price calculation */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <label className="text-[10px] uppercase text-stone-500 block mb-0.5">Check-In</label>
                      <div className="flex items-center gap-1 p-1.5 rounded border border-stone-200 bg-stone-50">
                        <Calendar className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <input
                          type="date"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="bg-transparent text-xs text-stone-800 w-full focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase text-stone-500 block mb-0.5">Check-Out ({livePrice.nights} Malam)</label>
                      <div className="flex items-center gap-1 p-1.5 rounded border border-stone-200 bg-stone-50">
                        <Calendar className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        <input
                          type="date"
                          min={checkIn}
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="bg-transparent text-xs text-stone-800 w-full focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Pricing Output */}
                  <div className="pt-2 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] text-stone-500 block">Rata-rata per malam:</span>
                      <div className="text-xl font-bold font-serif-luxury text-stone-950">
                        {currency === 'IDR'
                          ? `Rp ${livePrice.avgRatePerNightIdr.toLocaleString('id-ID')}`
                          : `$${livePrice.avgRatePerNightUsd}`}
                        <span className="text-xs font-normal text-stone-500 font-sans ml-1">/ malam</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-stone-500 block">Total ({livePrice.nights} malam):</span>
                      <div className="text-base font-bold text-emerald-700 font-mono">
                        {currency === 'IDR'
                          ? `Rp ${livePrice.totalStayIdr.toLocaleString('id-ID')}`
                          : `$${livePrice.totalStayUsd}`}
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] text-stone-400 flex items-center justify-between">
                    <span>*Termasuk pajak & biaya layanan Agoda</span>
                    <span className="text-emerald-700 font-medium">Garansi Harga Terbaik</span>
                  </div>
                </div>

              </div>

              {/* CTAs */}
              <div className="mt-6 pt-4 border-t border-stone-200/80 space-y-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Agoda Direct Button with dynamic stay dates */}
                  <a
                    href={agodaLiveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-lg bg-[#E8D7BE] hover:bg-[#F3E5CE] text-stone-950 font-bold text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow flex items-center justify-center gap-1.5 text-center"
                  >
                    <span>Pesan di Agoda Sekarang</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* WhatsApp Direct Button */}
                  <a
                    href={waInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow flex items-center justify-center gap-1.5 text-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Reservasi via WhatsApp</span>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Konfirmasi instan dan aman melalui kemitraan resmi Agoda</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
