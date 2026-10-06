# NexaHome — Teknologi Rumah Pintar Modern

Website showcase konsep teknologi smart home modern: perangkat pintar untuk membangun rumah cerdas, protokol jaringan (Wi-Fi, Zigbee, Z-Wave, Matter/Thread, Bluetooth), dan panduan membangun rumah pintar langkah demi langkah.

Dibangun dengan [Next.js](https://nextjs.org) (App Router) + [Tailwind CSS](https://tailwindcss.com) + [lucide-react](https://lucide.dev).

## Fitur Halaman

- **Hero interaktif** — mockup dashboard kontrol rumah pintar dengan animasi
- **Keunggulan** — 6 manfaat utama smart home
- **Katalog 15 perangkat** — dengan filter kategori (Keamanan, Pencahayaan, Energi, Kontrol & Kenyamanan, Rumah Tangga)
- **Protokol jaringan** — penjelasan Wi-Fi, Zigbee, Z-Wave, Matter/Thread, dan Bluetooth BLE
- **Panduan 4 langkah** — dari audit rumah hingga otomasi penuh
- Desain responsif, dark theme berteknologi, animasi scroll reveal

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
