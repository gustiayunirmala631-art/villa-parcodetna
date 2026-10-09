import React from 'react';
import { Waves, CalendarCheck, Utensils, Wifi, UserCheck, Flame, Compass, Car, Sparkles } from 'lucide-react';
import { VILLA_AMENITIES } from '../data/villaData';

interface AmenitiesProps {
  lang: 'ID' | 'EN';
}

export const AmenitiesSection: React.FC<AmenitiesProps> = ({ lang }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves':
        return <Waves className="w-6 h-6 text-[#A68352]" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-[#A68352]" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-[#A68352]" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-[#A68352]" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#A68352]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#A68352]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#A68352]" />;
      case 'Car':
        return <Car className="w-6 h-6 text-[#A68352]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#A68352]" />;
    }
  };

  return (
    <section id="amenities" className="py-20 bg-stone-100/50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A68352] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ID' ? 'Kenyamanan Istimewa' : 'Resort Amenities'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-stone-950">
            {lang === 'ID' ? 'Fasilitas Eksklusif Villa Parcodetna' : 'Bespoke Amenities & Services'}
          </h2>
          <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
            {lang === 'ID'
              ? 'Segala kebutuhan liburan Anda telah kami persiapkan dengan cermat untuk memastikan kenyamanan tanpa cela selama berada di Yogyakarta.'
              : 'Every element of your stay has been attentively curated to ensure carefree luxury and relaxation in Yogyakarta.'}
          </p>
        </div>

        {/* Bento Grid of Amenities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VILLA_AMENITIES.map((amenity) => (
            <div
              key={amenity.id}
              className={`p-6 rounded-xl border transition-all ${
                amenity.highlight
                  ? 'bg-white border-[#E8D7BE] shadow-sm hover:shadow-md'
                  : 'bg-white/70 border-stone-200/90 hover:bg-white hover:shadow-sm'
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center mb-4 border border-stone-200/60">
                {getIcon(amenity.iconName)}
              </div>
              <h3 className="text-base font-semibold text-stone-900 mb-2">
                {amenity.title}
              </h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Special In-Villa Dining Feature Banner */}
        <div className="mt-12 bg-stone-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] uppercase tracking-widest text-[#E8D7BE] font-semibold">
              Signature Experience
            </span>
            <h3 className="text-xl sm:text-2xl font-serif-luxury">
              Ingin Menikmati Sarapan Terapung (Floating Breakfast)?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light max-w-xl">
              Abadikan momen istimewa Anda di kolam renang dengan baki terapung eksklusif berisi hidangan lezat dan minuman segar. Cukup konfirmasikan ke WhatsApp tim kami saat reservasi.
            </p>
          </div>
          <a
            href="#reservation"
            className="px-6 py-3 rounded-lg bg-[#E8D7BE] hover:bg-[#F3E5CE] text-stone-950 font-semibold text-xs tracking-wider uppercase transition-colors shrink-0 whitespace-nowrap shadow-sm"
          >
            Pesan Pengalaman Ini
          </a>
        </div>

      </div>
    </section>
  );
};
