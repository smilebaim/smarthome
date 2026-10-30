# NexaHome — Teknologi Rumah Pintar Modern

Website showcase konsep teknologi smart home modern: perangkat pintar untuk membangun rumah cerdas, protokol jaringan (Wi-Fi, Zigbee, Z-Wave, Matter/Thread, Bluetooth), ekosistem platform, perkiraan anggaran, dan panduan membangun rumah pintar langkah demi langkah.

Dibangun dengan [Next.js](https://nextjs.org) (App Router) + [Tailwind CSS](https://tailwindcss.com) + [lucide-react](https://lucide.dev).

## Fitur Halaman

- **Layout ala aplikasi** — setiap halaman tampil satu layar penuh tanpa scroll (tanpa overflow di 320×568 hingga 1920×1080; pada posisi landscape konten dapat digulir), navigasi via tab (desktop: navbar atas 8 tab, mobile: menu bawah 6 item + sheet "Semua Halaman")
- **Responsif di semua ukuran** — ponsel memakai karusel geser dengan tepi memudar dan tipografi fluid (clamp), layar 640–767 px memakai grid 3 kolom, tablet grid 2 kolom, desktop grid 3–4 kolom; paginasi perangkat menyesuaikan lebar layar (6 per halaman di tablet, 8 di desktop), modal detail menjadi bottom sheet penuh dengan area aman iPhone
- **Ramah genggam** — target sentuh ≥ 44 px, safe-area notch/home-indicator, header & navigasi dipadatkan otomatis di layar pendek/landscape
- **Beranda interaktif** — mockup dashboard kontrol rumah pintar, kartu statistik yang bisa diklik menuju halaman terkait
- **Keunggulan** — 6 manfaat utama smart home (karusel geser di mobile)
- **Katalog 20 perangkat** — filter 6 kategori (Keamanan, Pencahayaan, Energi & Iklim, Kontrol, Rumah Tangga, Infrastruktur), paginasi di desktop, serta modal detail berisi kisaran harga, daya, cara pemasangan, ruangan ideal, dan tips
- **Protokol jaringan** — penjelasan Wi-Fi, Zigbee, Z-Wave, Matter/Thread, dan Bluetooth BLE
- **Ekosistem platform** — Google Home, Apple Home, Amazon Alexa, Home Assistant, dan SmartThings beserta rekomendasi pemilihan
- **Panduan 3 mode** — langkah demi langkah, rekomendasi per ruangan (6 ruangan), dan checklist interaktif 8 poin dengan progres
- **Paket anggaran** — 3 tingkatan (Starter / Comfort / Premium) dengan rincian isi, target tipe rumah, dan estimasi penghematan listrik
- **FAQ** — 8 pertanyaan umum dalam akordeon
- **Kontak** — CTA WhatsApp, email, telepon, dan tautan footer
- Desain responsif, dark theme berteknologi, animasi masuk antar halaman

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Build Produksi

```bash
npm run build
npm start
```

## Deploy ke Vercel

Cara termudah — push repo ini ke GitHub, lalu:

1. Buka [vercel.com/new](https://vercel.com/new)
2. Import repository GitHub ini
3. Klik **Deploy** (tanpa konfigurasi tambahan — framework Next.js terdeteksi otomatis)

Atau via Vercel CLI:

```bash
npm i -g vercel
vercel
```
