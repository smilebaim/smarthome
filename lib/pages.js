// Sumber tunggal untuk daftar halaman, path App Router, dan metadata SEO.
export const PAGE_IDS = [
  "beranda",
  "fitur",
  "perangkat",
  "protokol",
  "ekosistem",
  "panduan",
  "anggaran",
  "faq",
  "kontak",
];

export const PAGES = {
  beranda: {
    path: "/",
    title: "NexaHome — Teknologi Rumah Pintar Modern",
    description:
      "Panduan lengkap membangun smart home modern: perangkat pintar, protokol Zigbee/Z-Wave/Matter, otomatisasi, keamanan 24/7, dan efisiensi energi.",
  },
  fitur: {
    path: "/fitur",
    title: "Keunggulan — NexaHome",
    description:
      "Enam keunggulan rumah pintar: keamanan, kenyamanan, efisiensi energi, otomatisasi, nilai properti, dan kontrol dari satu aplikasi.",
  },
  perangkat: {
    path: "/perangkat",
    title: "Katalog Perangkat — NexaHome",
    description:
      "20 perangkat smart home dengan rentang harga, daya, cara pemasangan, ruangan ideal, dan tips pemilihan.",
  },
  protokol: {
    path: "/protokol",
    title: "Protokol Jaringan — NexaHome",
    description:
      "Bandingkan Wi-Fi, Zigbee, Z-Wave, Matter/Thread, dan Bluetooth BLE untuk memilih jaringan rumah pintar yang tepat.",
  },
  ekosistem: {
    path: "/ekosistem",
    title: "Ekosistem Platform — NexaHome",
    description:
      "Google Home, Apple Home, Amazon Alexa, Home Assistant, dan SmartThings beserta rekomendasi pemilihan platform.",
  },
  panduan: {
    path: "/panduan",
    title: "Panduan Membangun — NexaHome",
    description:
      "Panduan membangun rumah pintar: langkah demi langkah, rekomendasi per ruangan, dan checklist 8 poin.",
  },
  anggaran: {
    path: "/anggaran",
    title: "Paket Anggaran — NexaHome",
    description:
      "Paket anggaran Starter, Comfort, dan Premium lengkap dengan isi perangkat dan estimasi penghematan listrik.",
  },
  faq: {
    path: "/faq",
    title: "FAQ — NexaHome",
    description:
      "Jawaban pertanyaan umum tentang perangkat, protokol, biaya, dan keamanan rumah pintar.",
  },
  kontak: {
    path: "/kontak",
    title: "Kontak — NexaHome",
    description:
      "Konsultasi gratis kebutuhan rumah pintar via WhatsApp, email, atau telepon.",
  },
};

export const pagePath = (id) => (PAGES[id] ? PAGES[id].path : "/");
