import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/villaData';

interface FaqProps {
  lang: 'ID' | 'EN';
}

export const FaqSection: React.FC<FaqProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-stone-100/50 border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A68352] font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === 'ID' ? 'Informasi Praktis' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-stone-950">
            {lang === 'ID' ? 'Pertanyaan yang Sering Diajukan' : 'Everything You Need to Know'}
          </h2>
          <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
            {lang === 'ID'
              ? 'Rangkuman informasi penting mengenai proses booking Agoda, fasilitas villa, dan reservasi WhatsApp.'
              : 'Clear answers regarding your upcoming stay, Agoda booking, and private amenities.'}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-semibold text-stone-900 font-serif-luxury">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#A68352]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 font-light leading-relaxed border-t border-stone-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
