import React, { useState } from 'react';
import { MessageCircle, Send, Calendar, Users, Home, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import { VILLA_INFO, VILLA_SINGLE_UNIT, calculateAgodaLivePrice } from '../data/villaData';

interface WhatsAppProps {
  lang: 'ID' | 'EN';
  currency: 'IDR' | 'USD';
}

export const WhatsAppBookingSection: React.FC<WhatsAppProps> = ({ lang, currency }) => {
  // Today + 2 days default
  const today = new Date();
  const defaultCheckIn = new Date(today.setDate(today.getDate() + 2)).toISOString().split('T')[0];
  const defaultCheckOut = new Date(today.setDate(today.getDate() + 4)).toISOString().split('T')[0];

  const [guestName, setGuestName] = useState('');
  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [adults, setAdults] = useState(4);
  const [children, setChildren] = useState(0);
  const [specialNotes, setSpecialNotes] = useState('');

  // Calculate nights and live price
  const livePrice = calculateAgodaLivePrice(checkIn, checkOut);

  // Generate formatted WhatsApp message (tanpa permintaan tambahan)
  const generateMessage = () => {
    const notesText = specialNotes.trim() ? `\n- Catatan: ${specialNotes.trim()}` : '';

    return `Halo Villa Parcodetna Yogyakarta,\nSaya ingin melakukan reservasi villa:\n*${VILLA_SINGLE_UNIT.name}*\n\n` +
      `- Nama Pemesan: ${guestName.trim() || 'Tamu Calon Menginap'}\n` +
      `- Check-in: ${checkIn}\n` +
      `- Check-out: ${checkOut} (${livePrice.nights} Malam)\n` +
      `- Jumlah Tamu: ${adults} Dewasa${children > 0 ? `, ${children} Anak` : ''}\n` +
      `- Estimasi Total (Sinkron Agoda): ${currency === 'IDR' ? `Rp ${livePrice.totalStayIdr.toLocaleString('id-ID')}` : `$${livePrice.totalStayUsd}`}` +
      notesText +
      `\n\nMohon konfirmasi ketersediaan unit dan panduan pembayarannya. Terima kasih!`;
  };

  const messageText = generateMessage();
  const waUrl = `https://wa.me/${VILLA_INFO.phoneRaw}?text=${encodeURIComponent(messageText)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reservation" className="py-20 bg-stone-100/60 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-emerald-800 font-semibold">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>{lang === 'ID' ? 'Reservasi Langsung WhatsApp' : 'Direct WhatsApp Reservation'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-stone-950">
            {lang === 'ID' ? 'Format Pemesanan Cepat Villa Parcodetna' : 'Quick Reservation via WhatsApp'}
          </h2>
          <p className="text-stone-600 font-light text-sm sm:text-base leading-relaxed">
            {lang === 'ID'
              ? `Kirim detail menginap Anda langsung ke WhatsApp resmi ${VILLA_INFO.phoneDisplay}. Tim kami akan merespons cepat untuk konfirmasi tanggal dan bantuan reservasi.`
              : `Send your stay details directly to our official WhatsApp at ${VILLA_INFO.phoneDisplay} for swift assistance.`}
          </p>
        </div>

        {/* Two-Column Form & Live Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form (Tanpa Permintaan Tambahan) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Unit Info Box (Single Option) */}
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A68352] font-bold block">
                    Pilihan Unit Villa
                  </span>
                  <div className="text-xs font-semibold text-stone-900 mt-0.5">
                    {VILLA_SINGLE_UNIT.name}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    Satu Villa Utuh · 3 Kamar Tidur · Kolam Renang Privat (Max 8 Tamu)
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 shrink-0">
                  100% Privat
                </span>
              </div>

              {/* Guest Name */}
              <div>
                <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                  Nama Lengkap Pemesan <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Rina Rahmawati"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C2A374] focus:border-transparent"
                />
              </div>

              {/* Dates Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                    Tanggal Check-in
                  </label>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-stone-300 bg-white">
                    <Calendar className="w-4 h-4 text-stone-500 shrink-0" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full text-sm text-stone-900 focus:outline-none bg-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                    Tanggal Check-out ({livePrice.nights} Malam)
                  </label>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-stone-300 bg-white">
                    <Calendar className="w-4 h-4 text-stone-500 shrink-0" />
                    <input
                      type="date"
                      min={checkIn}
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full text-sm text-stone-900 focus:outline-none bg-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Guests Count */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                    Dewasa (Adults)
                  </label>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-stone-300 bg-white">
                    <Users className="w-4 h-4 text-stone-500 shrink-0" />
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-full text-sm text-stone-900 focus:outline-none bg-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>{num} Orang</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                    Anak-anak (Children)
                  </label>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-stone-300 bg-white">
                    <Users className="w-4 h-4 text-stone-500 shrink-0" />
                    <select
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="w-full text-sm text-stone-900 focus:outline-none bg-transparent"
                    >
                      {[0, 1, 2, 3, 4].map((num) => (
                        <option key={num} value={num}>{num} Anak</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Notes / Catatan Tambahan (Optional) */}
              <div>
                <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1.5">
                  Catatan Tambahan (Opsional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Misal: Perkiraan waktu tiba pukul 15:00 WIB..."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C2A374] focus:border-transparent resize-none"
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Kirim Format Reservasi ke WhatsApp ({VILLA_INFO.phoneDisplay})</span>
                <Send className="w-4 h-4 ml-1" />
              </button>

            </form>
          </div>

          {/* Right Column: Live WhatsApp Message Preview & Quick Contact */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Message Preview Box */}
            <div className="bg-emerald-950 text-white rounded-2xl border border-emerald-800/80 p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-emerald-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200">
                    Pratinjau Format Pesan WhatsApp
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400">
                  {VILLA_INFO.phoneDisplay}
                </span>
              </div>

              {/* WhatsApp Chat Bubble */}
              <div className="bg-emerald-900/60 rounded-xl p-4 border border-emerald-800/60 font-sans text-xs text-emerald-100 whitespace-pre-wrap leading-relaxed shadow-inner">
                {messageText}
              </div>

              <div className="pt-2 text-[11px] text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Format pesan di atas akan langsung terbuka di WhatsApp Anda.</span>
              </div>
            </div>

            {/* Quick Call / Chat Card */}
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 shadow-sm space-y-4">
              <span className="text-[11px] uppercase tracking-wider text-[#A68352] font-semibold block">
                Pertanyaan Cepat Tanpa Form
              </span>
              
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Ingin langsung bertanya tentang promosi khusus bulan ini atau reservasi menit-terakhir (last-minute booking)? Tim kami siap membalas pesan Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={`https://wa.me/${VILLA_INFO.phoneRaw}?text=${encodeURIComponent(
                    'Halo Villa Parcodetna Yogyakarta, saya ingin bertanya seputar ketersediaan kamar hari ini.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold tracking-wider uppercase text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>Chat Langsung WA</span>
                </a>

                <a
                  href={`tel:${VILLA_INFO.phoneRaw}`}
                  className="py-3 px-4 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 text-xs font-semibold tracking-wider uppercase text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-stone-700" />
                  <span>Telepon</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
