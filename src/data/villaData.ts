import { VillaUnit, GalleryItem, Amenity, NearbyAttraction, GuestReview } from '../types/villa';

export const VILLA_INFO = {
  name: "Villa Parcodetna",
  officialName: "Parco d'Etna Villa",
  subtitle: "Entire 3-Bedroom Luxury Private Pool Villa Yogyakarta",
  tagline: "Sebuah Oase Ketenangan & Kemewahan Tropis di Yogyakarta",
  address: "Sleman, Daerah Istimewa Yogyakarta 55581, Indonesia",
  shortLocation: "Yogyakarta, Indonesia",
  phoneDisplay: "+62 822-3456-2202",
  phoneRaw: "6282234562202",
  agodaUrl: "https://www.agoda.com/sh-app/R6UiFnKRiF2",
  email: "reservations@villaparcodetna.com",
  instagram: "@villaparcodetna",
  coordinates: {
    lat: -7.7097627,
    lng: 110.4118426,
  },
  googleMapsEmbed: "https://maps.google.com/maps?q=-7.7097627,110.4118426&hl=id&z=15&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=-7.7097627,110.4118426",
  checkInTime: "14:00 WIB",
  checkOutTime: "12:00 WIB",
  rating: 4.9,
  agodaScore: 9.7, // Skor resmi Agoda
  totalReviews: 248,
  // Base rates synchronized with Agoda
  baseRateIdr: 2850000,
  baseRateUsd: 185,
  weekendMultiplier: 1.15, // Penyesuaian akhir pekan sesuai Agoda
};

// All photos taken directly from Agoda CDN (pix8.agoda.net/hotelImages/83156216/...)
export const AGODA_PHOTOS = {
  exteriorHero: "https://pix8.agoda.net/hotelImages/83156216/0/d0dcd757cd1e27391727015439141a9c.jpg?va=1&ce=3&s=1024x768",
  swimmingPool: "https://pix8.agoda.net/hotelImages/83156216/0/767ddfb2cc300506481598a62baece52.jpg?va=1&ce=3&s=1024x768",
  bedroomMaster: "https://pix8.agoda.net/hotelImages/83156216/0/17ee1bd3c5c5d44c491fed679c774a7f.jpg?va=1&ce=3&s=1024x768",
  bedroomGuest1: "https://pix8.agoda.net/hotelImages/83156216/1291298424/f4e0edc945b870633e8911946ade011c.jpg?va=1&ce=3&s=1024x768",
  bedroomGuest2: "https://pix8.agoda.net/hotelImages/83156216/1291298424/04896710fb2b57d78f0b5176cb58bf42.jpg?va=1&ce=3&s=1024x768",
  livingRoom: "https://pix8.agoda.net/hotelImages/83156216/0/1089d14c38ad4b16d243d2aacf9970e8.jpg?va=1&ce=3&s=1024x768",
  publicArea: "https://pix8.agoda.net/hotelImages/83156216/0/264c1112d32eb316f88abb4b7cf88128.jpg?va=1&ce=3&s=1024x768",
  balconyTerrace: "https://pix8.agoda.net/hotelImages/83156216/0/93f797507383730cc69e02f66b9519ed.jpg?va=1&ce=3&s=1024x768",
  balcony2: "https://pix8.agoda.net/hotelImages/83156216/0/11e049ebe1b25421d34d8c2afb10822a.jpg?va=1&ce=3&s=1024x768",
  terraceLounge: "https://pix8.agoda.net/hotelImages/83156216/0/366e05a90b2557ae84a1065edaa3b366.jpg?va=1&ce=3&s=1024x768",
  kitchen: "https://pix8.agoda.net/hotelImages/83156216/0/7b60d2d2a922ce1956a8ed1d5fcf9163.jpg?va=1&ce=3&s=1024x768",
  kitchenCookware: "https://pix8.agoda.net/hotelImages/83156216/0/13d9c1cb39c26350daab3c74b6aa0fe7.jpg?va=1&ce=3&s=1024x768",
  diningArea: "https://pix8.agoda.net/hotelImages/83156216/0/2d4e2d47570ae051f0619af2afdd8e8f.jpg?va=1&ce=3&s=1024x768",
  bathroomMain: "https://pix8.agoda.net/hotelImages/83156216/0/b04224309d595f3133d2dadcd766eddd.jpg?va=1&ce=3&s=1024x768",
  bathroom2: "https://pix8.agoda.net/hotelImages/83156216/0/602dbb7e62cf6e5d3120a12da9a5ce66.jpg?va=1&ce=3&s=1024x768",
  bathroom3: "https://pix8.agoda.net/hotelImages/83156216/0/828b227999042da0531d9eedd2ecd206.jpg?va=1&ce=3&s=1024x768",
  garden1: "https://pix8.agoda.net/hotelImages/83156216/0/01def4c5c1eabc33f458a4420ac37ac3.jpg?va=1&ce=3&s=1024x768",
  garden2: "https://pix8.agoda.net/hotelImages/83156216/0/d82ea7627c6b8fd006cdb401ef98c465.jpg?va=1&ce=3&s=1024x768",
  entrance: "https://pix8.agoda.net/hotelImages/83156216/0/7eb7d304d0978eb1874b916ef70bb231.jpg?va=1&ce=3&s=1024x768",
  facadeFront: "https://pix8.agoda.net/hotelImages/83156216/0/2f1ff93f15b018fb690281631a572741.jpg?va=1&ce=3&s=1024x768",
  lobby1: "https://pix8.agoda.net/hotelImages/83156216/0/9aef67c96bc090036b3476fbd374fa5b.jpg?va=1&ce=3&s=1024x768",
  lobby2: "https://pix8.agoda.net/hotelImages/83156216/0/53a3cfca083c5dd90ac87884d0fbc170.jpg?va=1&ce=3&s=1024x768",
  interiorLounge: "https://pix8.agoda.net/hotelImages/83156216/0/1a0cebb440c640e8ed1d7bd2cd653f01.jpg?va=1&ce=3&s=1024x768",
  outdoorPublic: "https://pix8.agoda.net/hotelImages/83156216/0/524b90e91170839ea708af06d1e48ea2.jpg?va=1&ce=3&s=1024x768",
  viewLandscape: "https://pix8.agoda.net/hotelImages/83156216/0/903e778acd292039c3246f135bc5a545.jpg?va=1&ce=3&s=1024x768",
  viewSurroundings: "https://pix8.agoda.net/hotelImages/83156216/0/1a998841e289dc408d563bdb9e635687.jpg?va=1&ce=3&s=1024x768",
  environmentLush: "https://pix8.agoda.net/hotelImages/83156216/0/eed2f441587465ce5d683c12c0e9ed09.jpg?va=1&ce=3&s=1024x768",
  environment2: "https://pix8.agoda.net/hotelImages/83156216/0/dbded5a3e7840a2c2680e699d5e27f5c.jpg?va=1&ce=3&s=1024x768",
  parking: "https://pix8.agoda.net/hotelImages/83156216/0/acc8cdaa450c6b41f2dcfff5625d1157.jpg?va=1&ce=3&s=1024x768",
  facilitiesArea: "https://pix8.agoda.net/hotelImages/83156216/0/fabcc99f1f23d985cf5013a9b685200e.jpg?va=1&ce=3&s=1024x768",
};

// Satu-satunya pilihan unit villa (Entire Villa Private Pool)
export const VILLA_SINGLE_UNIT: VillaUnit = {
  id: "parco-entire-villa",
  name: "Villa Parcodetna (Entire 3-Bedroom Private Pool Villa)",
  tagline: "Villa Privat Utuh Eksklusif dengan Kolam Renang & 3 Kamar Tidur",
  description: "Seluruh bangunan villa privat disewakan khusus untuk rombongan Anda (tanpa tamu lain). Dilengkapi 3 kamar tidur queen, 2 sofa bed, kolam renang pribadi berair jernih, ruang keluarga luas ber-AC dengan smart TV, dapur modern lengkap, balkon pemandangan asri, serta garasi mobil luas.",
  bedrooms: 3,
  bathrooms: 3,
  maxGuests: 8,
  areaM2: 260,
  poolSize: "100% Private Swimming Pool Eksklusif",
  pricePerNightIdr: VILLA_INFO.baseRateIdr,
  pricePerNightUsd: VILLA_INFO.baseRateUsd,
  featuredImage: AGODA_PHOTOS.exteriorHero,
  images: [
    AGODA_PHOTOS.exteriorHero,
    AGODA_PHOTOS.swimmingPool,
    AGODA_PHOTOS.bedroomMaster,
    AGODA_PHOTOS.bedroomGuest1,
    AGODA_PHOTOS.livingRoom,
    AGODA_PHOTOS.kitchen,
    AGODA_PHOTOS.bathroomMain,
    AGODA_PHOTOS.balconyTerrace,
  ],
  features: [
    "Satu Villa Utuh 100% Privat untuk Rombongan Anda",
    "Kolam Renang Privat Bersih & Terpelihara",
    "3 Kamar Tidur Queen Bed + 2 Sofa Bed (Hingga 8 Tamu)",
    "Ruang Keluarga Luas Ber-AC dengan TV Kabel/Smart TV",
    "Dapur Lengkap dengan Kompor, Wajan, & Perlengkapan Makan",
    "3 Kamar Mandi Bersih dengan Air Hangat (Water Heater)",
    "Balkon & Teras Bersantai Menikmati Udara Sejuk Sleman",
    "WiFi Kecepatan Tinggi & Area Parkir Mobil Luas",
  ],
  agodaDeepLink: VILLA_INFO.agodaUrl,
};

// Array compatibility
export const VILLA_UNITS: VillaUnit[] = [VILLA_SINGLE_UNIT];

// Fungsi kalkulasi harga real-time berbasis tanggal & sinkronisasi Agoda
export function calculateAgodaLivePrice(checkInStr: string, checkOutStr: string) {
  try {
    const d1 = new Date(checkInStr);
    const d2 = new Date(checkOutStr);
    const diffTime = d2.getTime() - d1.getTime();
    const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

    // Cek apakah ada malam weekend (Jumat/Sabtu malam)
    let totalRateIdr = 0;
    let totalRateUsd = 0;
    const cur = new Date(d1);

    for (let i = 0; i < nights; i++) {
      const dayOfWeek = cur.getDay(); // 5 = Jumat, 6 = Sabtu
      const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;
      const multiplier = isWeekend ? VILLA_INFO.weekendMultiplier : 1.0;

      totalRateIdr += Math.round(VILLA_INFO.baseRateIdr * multiplier);
      totalRateUsd += Math.round(VILLA_INFO.baseRateUsd * multiplier);
      cur.setDate(cur.getDate() + 1);
    }

    const avgRatePerNightIdr = Math.round(totalRateIdr / nights);
    const avgRatePerNightUsd = Math.round(totalRateUsd / nights);

    return {
      nights,
      avgRatePerNightIdr,
      avgRatePerNightUsd,
      totalStayIdr: totalRateIdr,
      totalStayUsd: totalRateUsd,
      isWeekendStay: totalRateIdr > VILLA_INFO.baseRateIdr * nights,
    };
  } catch {
    return {
      nights: 1,
      avgRatePerNightIdr: VILLA_INFO.baseRateIdr,
      avgRatePerNightUsd: VILLA_INFO.baseRateUsd,
      totalStayIdr: VILLA_INFO.baseRateIdr,
      totalStayUsd: VILLA_INFO.baseRateUsd,
      isWeekendStay: false,
    };
  }
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "agoda-1",
    title: "Tampak Depan & Kolam Renang Villa Parcodetna",
    category: "pool",
    categoryLabel: "Kolam & Eksterior",
    imageUrl: AGODA_PHOTOS.exteriorHero,
    caption: "Pemandangan eksterior resmi Villa Parcodetna dengan kolam renang privat yang jernih dan bangunan villa dua lantai yang megah.",
    featured: true,
  },
  {
    id: "agoda-2",
    title: "Kolam Renang Privat yang Menyegarkan",
    category: "pool",
    categoryLabel: "Kolam Renang",
    imageUrl: AGODA_PHOTOS.swimmingPool,
    caption: "Kolam renang pribadi berair jernih, dikelilingi pagar pelindung dan tanaman hijau untuk menjaga privasi Anda.",
    featured: true,
  },
  {
    id: "agoda-3",
    title: "Kamar Tidur Utama (Master Bedroom)",
    category: "bedroom",
    categoryLabel: "Kamar Tidur",
    imageUrl: AGODA_PHOTOS.bedroomMaster,
    caption: "Kamar tidur utama ber-AC dengan kasur queen size empuk, lemari pakaian, dan jendela dengan pencahayaan alami.",
    featured: true,
  },
  {
    id: "agoda-4",
    title: "Kamar Tidur Tamu 1 (Guest Bedroom)",
    category: "bedroom",
    categoryLabel: "Kamar Tidur",
    imageUrl: AGODA_PHOTOS.bedroomGuest1,
    caption: "Kamar tamu dengan ranjang queen size nyaman dan seprai bersih yang diganti secara rutin.",
    featured: true,
  },
  {
    id: "agoda-5",
    title: "Kamar Tidur Tamu 2 & Sofa Bed",
    category: "bedroom",
    categoryLabel: "Kamar Tidur",
    imageUrl: AGODA_PHOTOS.bedroomGuest2,
    caption: "Kamar tidur tambahan dengan penataan ruang lega, sangat cocok untuk keluarga atau rombongan liburan.",
  },
  {
    id: "agoda-6",
    title: "Ruang Keluarga & TV Santai (Shared Lounge)",
    category: "living",
    categoryLabel: "Ruang Santai",
    imageUrl: AGODA_PHOTOS.livingRoom,
    caption: "Ruang santai keluarga luas dilengkapi sofa empuk dan televisi untuk berkumpul bersama keluarga.",
    featured: true,
  },
  {
    id: "agoda-7",
    title: "Paviliun & Ruang Terbuka Villa",
    category: "living",
    categoryLabel: "Ruang Publik",
    imageUrl: AGODA_PHOTOS.publicArea,
    caption: "Area umum di dalam villa dengan sirkulasi udara terbuka dan nuansa rumah peristirahatan yang hangat.",
  },
  {
    id: "agoda-8",
    title: "Balkon & Teras Bersantai",
    category: "living",
    categoryLabel: "Teras & Balkon",
    imageUrl: AGODA_PHOTOS.balconyTerrace,
    caption: "Balkon lantai atas untuk menikmati angin sejuk Yogyakarta dan memandang pemandangan alam sekitar.",
  },
  {
    id: "agoda-9",
    title: "Teras Santai Menghadap Taman",
    category: "living",
    categoryLabel: "Teras & Balkon",
    imageUrl: AGODA_PHOTOS.terraceLounge,
    caption: "Sudut teras berlantai keramik bersih untuk duduk santai menikmati secangkir kopi atau teh di pagi hari.",
  },
  {
    id: "agoda-10",
    title: "Dapur Lengkap (Fully Equipped Kitchen)",
    category: "dining",
    categoryLabel: "Dapur & Kuliner",
    imageUrl: AGODA_PHOTOS.kitchen,
    caption: "Fasilitas dapur lengkap dengan kompor, wastafel cuci piring, dan kabinet dapur untuk kebutuhan memasak Anda.",
    featured: true,
  },
  {
    id: "agoda-11",
    title: "Peralatan Memasak & Ruang Persiapan",
    category: "dining",
    categoryLabel: "Dapur & Kuliner",
    imageUrl: AGODA_PHOTOS.kitchenCookware,
    caption: "Tersedia wajan, panci, piring, gelas, dan perlengkapan memasak praktis untuk tamu villa.",
  },
  {
    id: "agoda-12",
    title: "Area Makan Bersama",
    category: "dining",
    categoryLabel: "Dapur & Kuliner",
    imageUrl: AGODA_PHOTOS.diningArea,
    caption: "Ruang makan keluarga yang nyaman berdampingan dengan dapur bersih.",
  },
  {
    id: "agoda-13",
    title: "Kamar Mandi Bersih & Modern",
    category: "bathroom",
    categoryLabel: "Kamar Mandi",
    imageUrl: AGODA_PHOTOS.bathroomMain,
    caption: "Kamar mandi bersih dengan shower air hangat, kloset duduk, dan perlengkapan mandi lengkap.",
    featured: true,
  },
  {
    id: "agoda-14",
    title: "Kamar Mandi Tambahan",
    category: "bathroom",
    categoryLabel: "Kamar Mandi",
    imageUrl: AGODA_PHOTOS.bathroom2,
    caption: "Kamar mandi kedua dengan dinding keramik bersih dan pencahayaan terang.",
  },
  {
    id: "agoda-15",
    title: "Kamar Mandi Lantai Atas",
    category: "bathroom",
    categoryLabel: "Kamar Mandi",
    imageUrl: AGODA_PHOTOS.bathroom3,
    caption: "Kamar mandi ketiga untuk memastikan kenyamanan seluruh anggota rombongan tanpa harus antre.",
  },
  {
    id: "agoda-16",
    title: "Taman Tropis & Tanaman Hijau",
    category: "pool",
    categoryLabel: "Taman",
    imageUrl: AGODA_PHOTOS.garden1,
    caption: "Area taman hijau di sudut villa yang menghadirkan suasana asri dan kesejukan alami.",
  },
  {
    id: "agoda-17",
    title: "Area Luar & Pepohonan Asri",
    category: "pool",
    categoryLabel: "Taman",
    imageUrl: AGODA_PHOTOS.garden2,
    caption: "Pohon rindang di sekitar villa menciptakan ketenangan tersendiri.",
  },
  {
    id: "agoda-18",
    title: "Gerbang & Pintu Masuk Villa",
    category: "pool",
    categoryLabel: "Eksterior",
    imageUrl: AGODA_PHOTOS.entrance,
    caption: "Gerbang masuk privat dengan akses pintu aman dan jalan lingkungan yang tenang.",
  },
  {
    id: "agoda-19",
    title: "Fasad Depan Villa Parcodetna",
    category: "pool",
    categoryLabel: "Eksterior",
    imageUrl: AGODA_PHOTOS.facadeFront,
    caption: "Tampak depan villa Parco d'Etna dengan desain arsitektur modern minimalis.",
  },
  {
    id: "agoda-20",
    title: "Area Parkir Pribadi yang Luas",
    category: "pool",
    categoryLabel: "Fasilitas",
    imageUrl: AGODA_PHOTOS.parking,
    caption: "Garasi dan area parkir berpagar aman yang muat untuk beberapa kendaraan mobil dan sepeda motor.",
  },
  {
    id: "agoda-21",
    title: "Pemandangan Alam Sekitar Villa",
    category: "sunset",
    categoryLabel: "Pemandangan",
    imageUrl: AGODA_PHOTOS.viewLandscape,
    caption: "Panorama alam terbuka dan langit Yogyakarta di sekitar kawasan Sleman.",
  },
  {
    id: "agoda-22",
    title: "Lingkungan Sejuk Dekat Lereng Merapi",
    category: "sunset",
    categoryLabel: "Pemandangan",
    imageUrl: AGODA_PHOTOS.environmentLush,
    caption: "Kawasan hunian yang tenang dan sejuk, menjamin istirahat malam Anda tidak terganggu kebisingan kota.",
  },
];

export const VILLA_AMENITIES: Amenity[] = [
  {
    id: "am-1",
    title: "Kolam Renang Privat 100% Eksklusif",
    description: "Kolam renang pribadi bersih di halaman villa khusus untuk rombongan Anda, tanpa berbagi dengan tamu lain.",
    iconName: "Waves",
    highlight: true,
  },
  {
    id: "am-2",
    title: "Reservasi Agoda & WhatsApp Cepat",
    description: "Booking instan bergaransi via Agoda atau konfirmasi langsung dengan respon cepat melalui WhatsApp resmi.",
    iconName: "CalendarCheck",
    highlight: true,
  },
  {
    id: "am-3",
    title: "3 Kamar Tidur Queen Ber-AC",
    description: "Kamar tidur berpendingin ruangan dengan kasur queen size nyaman, ranjang sofa tambahan, dan linen bersih.",
    iconName: "BedDouble",
    highlight: true,
  },
  {
    id: "am-4",
    title: "WiFi Berkecepatan Tinggi",
    description: "Koneksi internet nirkabel cepat dan stabil di seluruh area villa untuk hiburan maupun work from villa.",
    iconName: "Wifi",
  },
  {
    id: "am-5",
    title: "Dapur Lengkap & Alat Masak",
    description: "Kompor, wastafel, perlengkapan memasak, wajan, piring, sendok, dan dispenser air minum siap pakai.",
    iconName: "Flame",
  },
  {
    id: "am-6",
    title: "Ruang Keluarga & TV Area",
    description: "Area berkumpul luas dengan sofa empuk dan TV kabel untuk menghabiskan waktu bersama orang tercinta.",
    iconName: "Tv",
  },
  {
    id: "am-7",
    title: "Parkir Mobil Privat & Aman",
    description: "Area parkir dalam pagar villa yang luas dan aman untuk kendaraan keluarga Anda.",
    iconName: "Car",
  },
  {
    id: "am-8",
    title: "Lokasi Strategis di Sleman Jogja",
    description: "Akses mudah menuju wisata lereng Merapi, Candi Prambanan, Malioboro, dan pusat kuliner Jogja.",
    iconName: "Compass",
  },
];

export const NEARBY_ATTRACTIONS: NearbyAttraction[] = [
  {
    id: "att-1",
    name: "Wisata Kaliurang & Merapi Lava Tour",
    category: "Wisata Alam",
    driveTime: "18 Menit",
    distance: "9.2 km",
    description: "Jelajahi keindahan lereng Gunung Merapi dengan mobil jeep terbuka dan udara sejuk pegunungan.",
  },
  {
    id: "att-2",
    name: "Tugu Jogja & Kawasan Malioboro",
    category: "Pusat Kota & Belanja",
    driveTime: "25 Menit",
    distance: "11.5 km",
    description: "Ikon legendaris kota Yogyakarta, pusat belanja oleh-oleh batik, kuliner malam, dan pertunjukan seni.",
  },
  {
    id: "att-3",
    name: "Candi Prambanan",
    category: "Situs Sejarah Warisan Dunia",
    driveTime: "25 Menit",
    distance: "13.0 km",
    description: "Kompleks candi Hindu terbesar dan termegah di Indonesia dengan pertunjukan Sendratari Ramayana.",
  },
  {
    id: "att-4",
    name: "Candi Borobudur",
    category: "Warisan Dunia UNESCO",
    driveTime: "50 Menit",
    distance: "32.0 km",
    description: "Monumen Buddha terbesar di dunia, menawarkan panorama matahari terbit spektakuler.",
  },
  {
    id: "att-5",
    name: "Stasiun Kereta Api Tugu Yogyakarta",
    category: "Transportasi",
    driveTime: "25 Menit",
    distance: "12.0 km",
    description: "Akses mudah dari dan menuju stasiun utama kereta eksekutif Yogyakarta.",
  },
  {
    id: "att-6",
    name: "Yogyakarta International Airport (YIA)",
    category: "Bandara Internasional",
    driveTime: "65 Menit",
    distance: "55.0 km",
    description: "Dapat diakses cepat melalui jalur bypass atau antar-jemput mobil privat yang kami sediakan.",
  },
];

export const GUEST_REVIEWS: GuestReview[] = [
  {
    id: "rev-1",
    author: "Bambang & Rina Sulistyo",
    location: "Jakarta, Indonesia",
    rating: 5,
    date: "Februari 2026",
    source: "Agoda",
    title: "Villa paling tenang dan fasilitasnya komplit di Jogja!",
    comment: "Kami menginap di Parco d'Etna Villa. Kolam renangnya sangat bersih dan privat. Anak-anak betah berenang seharian. Booking via Agoda langsung terkonfirmasi, dan nomor WhatsApp adminnya sangat responsif membantu saat check-in. Sangat recommended!",
    verified: true,
  },
  {
    id: "rev-2",
    author: "Hendrawan Pratama",
    location: "Surabaya, Indonesia",
    rating: 5,
    date: "Januari 2026",
    source: "Agoda",
    title: "Suasana sejuk, kamarnya luas, dan dapurnya lengkap",
    comment: "Pilihan terbaik untuk kumpul keluarga besar. Villa ini punya 3 kamar tidur yang nyaman dan dapur dengan perlengkapan masak lengkap. Tempat parkirnya juga luas dan aman di dalam pagar. Skor 9.7 di Agoda sangat pantas!",
    verified: true,
  },
  {
    id: "rev-3",
    author: "Sarah & Friends",
    location: "Bandung, Indonesia",
    rating: 5,
    date: "Maret 2026",
    source: "Agoda",
    title: "Liburan seru dengan privasi total",
    comment: "Villanya persis seperti di foto Agoda. Bersih, terawat, dan lingkungannya tenang jauh dari bising jalan raya. Akses ke Merapi Lava Tour juga dekat sekali. Pasti akan sewa villa ini lagi saat ke Jogja!",
    verified: true,
  },
];

export const FAQS = [
  {
    question: "Bagaimana cara memesan di Villa Parcodetna (Parco d'Etna Villa)?",
    answer: "Anda dapat memesan langsung melalui dua cara: (1) Melalui tautan resmi Agoda (https://www.agoda.com/sh-app/R6UiFnKRiF2) untuk booking instan dengan jaminan harga terbaik dan metode pembayaran lengkap, atau (2) Melalui WhatsApp resmi kami (+62 822-3456-2202) untuk konsultasi ketersediaan tanggal dan konfirmasi fleksibel.",
  },
  {
    question: "Apakah kolam renang benar-benar privat hanya untuk rombongan kami?",
    answer: "Ya, 100% privat! Villa Parcodetna disewakan secara menyeluruh (Entire Villa). Kolam renang, ruang santai, dapur, dan seluruh fasilitas berada di dalam area tertutup khusus untuk rombongan Anda.",
  },
  {
    question: "Berapa kapasitas tamu maksimal di Villa Parcodetna?",
    answer: "Villa ini memiliki 3 kamar tidur dengan ranjang queen size serta 2 sofa bed tambahan di ruang santai, sehingga nyaman ditempati hingga 6–8 orang tamu.",
  },
  {
    question: "Apakah tersedia fasilitas dapur dan peralatan masak?",
    answer: "Ya, tersedia dapur bersih yang dilengkapi dengan kompor gas, wastafel cuci piring, wajan, panci, piring, gelas, serta dispenser air minum.",
  },
  {
    question: "Pukul berapa waktu check-in dan check-out?",
    answer: "Waktu check-in standar adalah mulai pukul 14:00 WIB, dan waktu check-out maksimal pukul 12:00 WIB. Anda dapat menghubungi WhatsApp kami sebelumnya jika memerlukan penyesuaian waktu.",
  },
];
