import React, { useState, useEffect } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/villaData';
import { GalleryItem } from '../types/villa';
import { ImageWithFallback } from './ImageWithFallback';

interface GalleryProps {
  lang: 'ID' | 'EN';
}

export const PhotoGallery: React.FC<GalleryProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: lang === 'ID' ? 'Semua Foto' : 'All Photos' },
    { id: 'pool', label: lang === 'ID' ? 'Kolam & Taman' : 'Pool & Garden' },
    { id: 'bedroom', label: lang === 'ID' ? 'Kamar Tidur' : 'Bedrooms' },
    { id: 'living', label: lang === 'ID' ? 'Ruang Santai & Teras' : 'Living & Terrace' },
    { id: 'dining', label: lang === 'ID' ? 'Dapur & Makan' : 'Kitchen & Dining' },
    { id: 'bathroom', label: lang === 'ID' ? 'Kamar Mandi' : 'Bathrooms' },
    { id: 'sunset', label: lang === 'ID' ? 'Pemandangan' : 'Views & Surroundings' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const currentLightboxItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-[#FDFBF7] text-stone-900 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A68352] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ID' ? 'Galeri Keindahan' : 'Visual Gallery'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-stone-950">
            {lang === 'ID' ? 'Sudut Pesona Villa Parcodetna Yogyakarta' : 'The Visual Essence of Parcodetna'}
          </h2>
          <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
            {lang === 'ID'
              ? 'Jelajahi setiap sudut keindahan arsitektur tropis, kolam renang pribadi berair jernih, dan ketenangan alami yang menanti Anda.'
              : 'Immerse yourself in our private poolside sanctuaries, teak accents, and open-air botanical spaces.'}
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Control Buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-stone-200/70 rounded-xl max-w-2xl mx-auto mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-white/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-xl overflow-hidden aspect-4/3 bg-stone-900 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-stone-200/80"
            >
              <ImageWithFallback
                src={item.imageUrl}
                alt={item.title}
                fallbackTitle={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                wrapperClassName="w-full h-full"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] tracking-widest uppercase text-[#E8D7BE] font-medium">
                  {item.categoryLabel}
                </span>
                <h4 className="text-base font-serif-luxury text-white mt-1">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-300 line-clamp-2 mt-1 font-light">
                  {item.caption}
                </p>
                <div className="mt-3 flex items-center gap-1 text-[11px] text-[#E8D7BE]">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Perbesar Foto</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {currentLightboxItem && lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200">
          
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between text-white border-b border-stone-800 pb-4 max-w-6xl mx-auto w-full">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#E8D7BE] block">
                {currentLightboxItem.categoryLabel} · Foto {lightboxIndex + 1} dari {filteredItems.length}
              </span>
              <h3 className="text-lg sm:text-xl font-serif-luxury text-white">
                {currentLightboxItem.title}
              </h3>
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
              aria-label="Tutup Galeri"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Center Image & Controls */}
          <div className="relative flex items-center justify-center flex-1 my-4 max-w-5xl mx-auto w-full">
            {/* Prev Button */}
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
                )
              }
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white border border-stone-700/60 transition-colors shadow-lg"
              aria-label="Foto Sebelumnya"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Lightbox Image */}
            <div className="max-h-[70vh] max-w-full rounded-xl overflow-hidden shadow-2xl border border-stone-800">
              <img
                src={currentLightboxItem.imageUrl}
                alt={currentLightboxItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
                )
              }
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white border border-stone-700/60 transition-colors shadow-lg"
              aria-label="Foto Berikutnya"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Footer Caption */}
          <div className="max-w-2xl mx-auto text-center text-xs sm:text-sm text-stone-300 font-light border-t border-stone-800/80 pt-3">
            <p>{currentLightboxItem.caption}</p>
            <div className="mt-2 text-[10px] text-stone-500">
              Gunakan tombol panah keyboard ← → untuk navigasi, ESC untuk keluar
            </div>
          </div>

        </div>
      )}
    </section>
  );
};
