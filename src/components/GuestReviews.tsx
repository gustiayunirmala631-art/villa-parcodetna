import React from 'react';
import { Star, ShieldCheck, Quote, Sparkles } from 'lucide-react';
import { GUEST_REVIEWS, VILLA_INFO } from '../data/villaData';

interface ReviewsProps {
  lang: 'ID' | 'EN';
}

export const GuestReviews: React.FC<ReviewsProps> = ({ lang }) => {
  return (
    <section className="py-20 bg-[#FDFBF7] text-stone-900 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A68352] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'ID' ? 'Ulasan Tamu Nyata' : 'Guest Reviews & Trust'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-stone-950">
            {lang === 'ID' ? 'Kisah Pengalaman Menginap di Parcodetna' : 'Memories Created at Villa Parcodetna'}
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-stone-600 font-light">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-stone-900">{VILLA_INFO.rating} / 5.0</span>
            <span>·</span>
            <span>{VILLA_INFO.totalReviews}+ Ulasan Terverifikasi Agoda & Google</span>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GUEST_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    <ShieldCheck className="w-3 h-3" />
                    {review.source} Verified
                  </span>
                </div>

                <Quote className="w-6 h-6 text-[#E8D7BE] rotate-180 opacity-60" />

                <h3 className="font-serif-luxury text-base font-semibold text-stone-900">
                  "{review.title}"
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {review.comment}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <div>
                  <div className="font-semibold text-stone-900">{review.author}</div>
                  <div className="text-[11px] text-stone-400">{review.location}</div>
                </div>
                <div className="text-[11px] text-stone-400 font-mono">{review.date}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
