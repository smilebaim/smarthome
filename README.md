# SmileHome — Teknologi Rumah Pintar Modern

Website showcase konsep teknologi smart home modern: perangkat pintar untuk membangun rumah cerdas, protokol jaringan (Wi-Fi, Zigbee, Z-Wave, Matter/Thread, Bluetooth), ekosistem platform, perkiraan anggaran, dan panduan membangun rumah pintar langkah demi langkah.

Dibangun dengan [Next.js](https://nextjs.org) (App Router) + [Tailwind CSS](https://tailwindcss.com) + [lucide-react](https://lucide.dev).

## Routing

Setiap halaman adalah route App Router sungguhan (SSG) dengan metadata judul/deskripsi sendiri, jadi bisa dibagikan lewat URL langsung:

| Route | Halaman |
|---|---|
| `/` | Beranda |
| `/fitur` | Keunggulan |
| `/perangkat` | Katalog perangkat |
| `/protokol` | Protokol jaringan |
| `/ekosistem` | Ekosistem platform |
| `/panduan` | Panduan 3 mode |
| `/anggaran` | Paket anggaran |
| `/faq` | FAQ |
| `/kontak` | Kontak |

Navigasi tab (navbar/menu bawah) memakai `router.push`, dan tautan lama berbasis hash (`/#perangkat`) otomatis diarahkan ke route-nya.

## Fitur Halaman

- **Layout ala aplikasi** — setiap halaman tampil satu layar penuh tanpa scroll (tanpa overflow di 320×568 hingga 1920×1080; pada posisi landscape konten dapat digulir), navigasi via tab (desktop: navbar atas 8 tab, mobile: menu bawah 6 item + sheet "Semua Halaman")
- **Responsif di semua ukuran** — semua halaman memakai grid kartu (ponsel 2 kolom, 640–1023 px 3 kolom, desktop 3–4 kolom) tanpa karusel geser; tipografi mengecil dan detail sekunder (deskripsi, chip, catatan) disembunyikan otomatis di layar pendek; paginasi perangkat menyesuaikan lebar layar (4 per halaman di ponsel, 6 tablet, 8 desktop), modal detail menjadi bottom sheet penuh dengan area aman iPhone
- **Ramah genggam** — target sentuh ≥ 44 px, safe-area notch/home-indicator, header & navigasi dipadatkan otomatis di layar pendek/landscape
- **Beranda interaktif** — mockup dashboard kontrol rumah pintar, kartu statistik yang bisa diklik menuju halaman terkait
- **Keunggulan** — 6 manfaat utama smart home dalam grid kartu 2–3 kolom
- **Katalog 20 perangkat** — grid responsif 2 kolom di ponsel (4 per halaman), 3 kolom tablet, 4 kolom desktop; filter 6 kategori (Keamanan, Pencahayaan, Energi & Iklim, Kontrol, Rumah Tangga, Infrastruktur) yang bisa digeser di ponsel, paginasi adaptif, serta modal detail berisi kisaran harga, daya, cara pemasangan, ruangan ideal, dan tips
- **Protokol jaringan** — 5 protokol (Wi-Fi, Zigbee, Z-Wave, Matter/Thread, Bluetooth BLE) dalam grid kartu ringkas plus kartu "rumus praktis"
- **Ekosistem platform** — Google Home, Apple Home, Amazon Alexa, Home Assistant, dan SmartThings dalam grid kartu, ditambah kartu rekomendasi pemilihan
- **Panduan 3 mode** — langkah demi langkah, rekomendasi per ruangan (6 ruangan), dan checklist interaktif 8 poin dengan progres; semuanya berupa grid yang muat satu layar
- **Paket anggaran** — 3 tingkatan (Starter / Comfort / Premium); di ponsel memakai tab tingkatan + satu kartu rincian, di desktop tiga kolom berdampingan
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
