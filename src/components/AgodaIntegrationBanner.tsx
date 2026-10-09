import React from 'react';
import { ExternalLink, ShieldCheck, CheckCircle2, Award, Zap, CreditCard, Lock } from 'lucide-react';
import { VILLA_INFO } from '../data/villaData';

interface AgodaProps {
  lang: 'ID' | 'EN';
}

export const AgodaIntegrationBanner: React.FC<AgodaProps> = ({ lang }) => {
  return (
    <section className="bg-stone-900 text-stone-100 py-12 border-y border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 border border-[#E8D7BE]/30 rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {/* Subtle decorative glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#C2A374]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Agoda Trust Showcase */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#E8D7BE] text-stone-950 font-bold text-xs tracking-wider uppercase">
                  <Award className="w-3.5 h-3.5" />
                  Official Partner on Agoda
                </span>
                <span className="text-stone-400 text-xs font-mono">
                  Rating: <strong className="text-emerald-400">{VILLA_INFO.agodaScore} / 10</strong> Luar Biasa (Exceptional)
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif-luxury font-normal text-white">
                {lang === 'ID' 
                  ? 'Booking Resmi, Praktis & Terpercaya di Agoda' 
                  : 'Official & Seamless Booking via Agoda'}
              </h2>

              <p className="text-sm text-stone-300 max-w-2xl font-light leading-relaxed">
                {lang === 'ID'
                  ? 'Untuk kenyamanan dan efisiensi reservasi Anda, Villa Parcodetna terintegrasi langsung dengan platform Agoda. Dapatkan konfirmasi instan, jaminan harga terbaik, dan berbagai metode pembayaran yang aman.'
                  : 'For utmost security and convenience, Villa Parcodetna is directly integrated with Agoda. Enjoy instant voucher confirmation, best price guarantee, and flexible payment options.'}
              </p>

              {/* 4 Trust Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2 text-stone-300">
                  <Zap className="w-4 h-4 text-[#E8D7BE] shrink-0" />
                  <span>Konfirmasi Instan</span>
                </div>
                <div className="flex items-center gap-2 text-stone-300">
                  <ShieldCheck className="w-4 h-4 text-[#E8D7BE] shrink-0" />
                  <span>Jaminan Harga Resmi</span>
                </div>
                <div className="flex items-center gap-2 text-stone-300">
                  <CreditCard className="w-4 h-4 text-[#E8D7BE] shrink-0" />
                  <span>Bayar Aman & Fleksibel</span>
                </div>
                <div className="flex items-center gap-2 text-stone-300">
                  <Lock className="w-4 h-4 text-[#E8D7BE] shrink-0" />
                  <span>100% Terverifikasi</span>
                </div>
              </div>
            </div>

            {/* Right Column: Prominent Direct Link Box */}
            <div className="lg:col-span-4 flex flex-col items-stretch lg:items-end justify-center">
              <div className="w-full bg-stone-950/70 border border-stone-700/60 rounded-xl p-5 text-center space-y-3.5 backdrop-blur-xs">
                <div className="text-[11px] uppercase tracking-wider text-stone-400">
                  Direct Agoda Reservation
                </div>
                
                <a
                  href={VILLA_INFO.agodaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-lg bg-[#E8D7BE] hover:bg-[#F3E5CE] text-stone-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-center group"
                >
                  <span>Pesan Sekarang di Agoda</span>
                  <ExternalLink className="w-4 h-4 text-stone-900 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <p className="text-[11px] text-stone-400 leading-tight">
                  Tautan aman: <span className="font-mono text-stone-300 break-all text-[10px]">agoda.com/sh-app/R6UiFnKRiF2</span>
                </p>
                
                <div className="pt-2 border-t border-stone-800 flex items-center justify-center gap-1.5 text-[11px] text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Ketersediaan Kamar Terkoneksi Real-Time</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
