import React, { useState } from 'react';
import { MessageCircle, X, Send, ExternalLink, Sparkles } from 'lucide-react';
import { VILLA_INFO } from '../data/villaData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const textToSend = customMsg.trim() || 'Halo Villa Parcodetna Yogyakarta, saya ingin menanyakan informasi villa.';
    const url = `https://wa.me/${VILLA_INFO.phoneRaw}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setCustomMsg('');
    setIsOpen(false);
  };

  const handleQuickClick = (text: string) => {
    const url = `https://wa.me/${VILLA_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Concierge Popover Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="bg-stone-900 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center font-serif-luxury font-bold text-white shadow">
                  VP
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-stone-900 rounded-full" />
              </div>
              <div>
                <h4 className="text-sm font-semibold">Concierge Villa Parcodetna</h4>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span>● Online</span>
                  <span className="text-stone-400">· Yogyakarta</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-white p-1 rounded-full transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-4 bg-stone-50 space-y-3 max-h-[360px] overflow-y-auto">
            
            {/* Villa greeting bubble */}
            <div className="bg-white p-3.5 rounded-xl rounded-tl-none border border-stone-200 text-xs text-stone-800 leading-relaxed shadow-xs">
              <p className="font-medium text-stone-900 mb-1">
                Halo! Selamat datang di Villa Parcodetna Jogja 🌿
              </p>
              <p className="text-stone-600">
                Ada yang bisa kami bantu? Anda dapat menanyakan ketersediaan kamar, meminta rekomendasi unit villa, atau memesan via Agoda.
              </p>
            </div>

            {/* Quick Action Chips */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">
                Pilih Pertanyaan Cepat:
              </div>
              <div className="flex flex-col gap-1.5">
                <button
                  onClick={() =>
                    handleQuickClick(
                      'Halo Villa Parcodetna, saya ingin cek ketersediaan kamar untuk akhir pekan ini.'
                    )
                  }
                  className="text-left text-xs p-2 rounded-lg bg-white hover:bg-emerald-50 hover:text-emerald-800 border border-stone-200 hover:border-emerald-300 text-stone-700 transition-colors"
                >
                  🗓 Cek Ketersediaan Kamar
                </button>
                <button
                  onClick={() =>
                    handleQuickClick(
                      'Halo Villa Parcodetna, saya ingin menanyakan paket Honeymoon dengan Floating Breakfast.'
                    )
                  }
                  className="text-left text-xs p-2 rounded-lg bg-white hover:bg-emerald-50 hover:text-emerald-800 border border-stone-200 hover:border-emerald-300 text-stone-700 transition-colors"
                >
                  🌸 Paket Romantic & Floating Breakfast
                </button>
                <a
                  href={VILLA_INFO.agodaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left text-xs p-2 rounded-lg bg-[#E8D7BE]/30 hover:bg-[#E8D7BE]/50 border border-[#C2A374]/40 text-stone-900 font-medium transition-colors flex items-center justify-between"
                >
                  <span>🏨 Booking Instan di Agoda Resmi</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Quick Input Bar */}
          <form onSubmit={handleSendCustom} className="p-3 bg-white border-t border-stone-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ketik pertanyaan Anda..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="flex-1 px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600 text-stone-900"
            />
            <button
              type="submit"
              className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shrink-0"
              title="Kirim ke WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Buka WhatsApp Concierge Villa Parcodetna"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6" />
            {/* Green Notification Dot */}
            <span className="absolute top-1 right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
            </span>
          </>
        )}
      </button>

    </div>
  );
};
