import React from 'react';
import { Sparkles, MapPin, Check, HeartHandshake } from 'lucide-react';
import { AGODA_PHOTOS } from '../data/villaData';
import { ImageWithFallback } from './ImageWithFallback';

interface AboutProps {
  lang: 'ID' | 'EN';
}

export const AboutSection: React.FC<AboutProps> = ({ lang }) => {
  return (
    <section id="about" className="py-20 bg-[#FDFBF7] text-stone-900 border-b border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with 2 Real Agoda Images */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3">
              <ImageWithFallback
                src={AGODA_PHOTOS.swimmingPool}
                alt="Villa Parcodetna Private Swimming Pool - Foto Resmi Agoda"
                fallbackTitle="Villa Parcodetna Yogyakarta"
                className="w-full h-full object-cover"
                wrapperClassName="w-full h-full"
              />
            </div>
            
            {/* Overlapping Secondary Card with Real Bedroom Photo */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 w-1/2 rounded-xl overflow-hidden shadow-xl border-4 border-[#FDFBF7] aspect-4/3 hidden sm:block">
              <ImageWithFallback
                src={AGODA_PHOTOS.bedroomMaster}
                alt="Kamar Tidur Utama Villa Parcodetna - Foto Resmi Agoda"
                fallbackTitle="Master Suite Sanctuary"
                className="w-full h-full object-cover"
                wrapperClassName="w-full h-full"
              />
            </div>

            {/* Badge pill-free overlay */}
            <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-white p-3.5 rounded-lg border border-white/10 text-xs">
              <div className="flex items-center gap-1.5 text-[#E8D7BE]">
                <MapPin className="w-3.5 h-3.5" />
                <span className="font-semibold tracking-wider uppercase text-[11px]">Sleman, Yogyakarta</span>
              </div>
              <p className="text-stone-300 text-[11px] mt-0.5">Suasana Sejuk Dekat Lereng Merapi</p>
            </div>
          </div>


          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A68352] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'ID' ? 'Kisah Villa Parcodetna' : 'The Parcodetna Experience'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-stone-950 tracking-tight leading-tight">
              {lang === 'ID' 
                ? 'Harmoni Kemewahan Kontemporer dan Kehangatan Tradisi Jogja'
                : 'A Harmonious Blend of Tropical Luxury & Javanese Warmth'}
            </h2>

            <p className="text-stone-700 font-light leading-relaxed text-sm sm:text-base">
              {lang === 'ID'
                ? 'Terletak di kawasan asri Yogyakarta yang tenang, Villa Parcodetna diciptakan sebagai tempat peristirahatan privat bagi Anda yang merindukan kedamaian jauh dari hiruk-pikuk kota. Menggabungkan arsitektur paviliun tropis terbuka, kolam renang berair jernih, dan fasilitas modern berkelas dunia.'
                : 'Nestled in the lush, serene corridor of Yogyakarta, Villa Parcodetna offers an exclusive sanctuary designed for discerning travelers. Featuring open-air living pavilions, private swimming pools, and understated luxury surrounded by tropical gardens.'}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-[#E8D7BE]/40 text-stone-900 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-stone-900">
                    {lang === 'ID' ? '100% Privasi untuk Anda & Keluarga' : '100% Absolute Privacy'}
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {lang === 'ID'
                      ? 'Seluruh area villa beserta kolam renang adalah milik Anda pribadi selama masa inap.'
                      : 'Entire villa grounds and swimming pool are exclusively yours during your stay.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-[#E8D7BE]/40 text-stone-900 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-stone-900">
                    {lang === 'ID' ? 'Layanan Keramahan Butler Personal' : 'Personalized Butler Hospitality'}
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {lang === 'ID'
                      ? 'Staf ramah siap membantu floating breakfast, penataan BBQ, hingga pemesanan wisata Merapi.'
                      : 'Attentive team ready to curate floating breakfasts, BBQ nights, and custom city tours.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-[#E8D7BE]/40 text-stone-900 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-stone-900">
                    {lang === 'ID' ? 'Reservasi Mudah via Agoda & WhatsApp' : 'Seamless Agoda & WhatsApp Access'}
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {lang === 'ID'
                      ? 'Pemesanan cepat, verifikasi resmi, dan layanan konsultasi langsung via nomor resmi kami.'
                      : 'Direct reservations with instant vouchers on Agoda and customized WhatsApp support.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#reservation"
                className="px-6 py-3 rounded-lg bg-stone-900 text-white hover:bg-stone-800 text-xs tracking-wider uppercase font-medium transition-colors shadow"
              >
                {lang === 'ID' ? 'Rencanakan Kunjungan' : 'Plan Your Stay'}
              </a>
              <div className="flex items-center gap-2 text-stone-600 text-xs">
                <HeartHandshake className="w-4 h-4 text-[#A68352]" />
                <span>Pelayanan Penuh Kehangatan Khas Jogja</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
