# Villa Parcodetna Yogyakarta - Web Application

Website resmi dan sistem booking untuk Villa Parcodetna di Yogyakarta dengan integrasi pemesanan Agoda & WhatsApp, galeri foto, peta lokasi, dan ulasan tamu.

---

## 🚀 Cara Menjalankan di Komputer Lokal (Local Setup)

### 1. Prasyarat (Prerequisites)
Pastikan Anda sudah menginstal:
- **Node.js** versi 18 atau 20+ ([Download Node.js](https://nodejs.org/))
- **npm** (otomatis terpasang bersama Node.js) atau **bun** / **yarn** / **pnpm**

### 2. Instalasi Dependensi (Install Dependencies)
Buka terminal di folder proyek ini, lalu jalankan:
```bash
npm install
```

### 3. Menjalankan Server Pengembangan (Run Dev Server)
Jalankan perintah berikut:
```bash
npm run dev
```
Buka browser Anda di `http://localhost:3000`.

### 4. Build untuk Produksi (Production Build)
Untuk membuild file web siap hosting (Vercel, Netlify, cPanel, Cloudflare Pages, dll):
```bash
npm run build
```
File hasil build akan berada di direktori `dist/`.

---

## 🛠️ Tech Stack
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Motion
