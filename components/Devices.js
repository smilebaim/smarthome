"use client";

import { useState } from "react";
import {
  Cpu,
  Lightbulb,
  Zap,
  Lock,
  Cctv,
  BellRing,
  Radar,
  DoorOpen,
  Siren,
  Thermometer,
  Plug,
  Blinds,
  Speaker,
  Bot,
  Droplets,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const categories = [
  { key: "semua", label: "Semua" },
  { key: "keamanan", label: "Keamanan" },
  { key: "pencahayaan", label: "Pencahayaan" },
  { key: "energi", label: "Energi & Iklim" },
  { key: "kontrol", label: "Kontrol & Kenyamanan" },
  { key: "rumah-tangga", label: "Rumah Tangga" },
];

const categoryBadge = {
  keamanan: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
  pencahayaan: "border-amber-400/25 bg-amber-400/10 text-amber-300",
  energi: "border-cyan-400/25 bg-cyan-400/10 text-cyan-300",
  kontrol: "border-violet-400/25 bg-violet-400/10 text-violet-300",
  "rumah-tangga": "border-sky-400/25 bg-sky-400/10 text-sky-300",
};

const devices = [
  {
    icon: Cpu,
    name: "Smart Hub / Gateway",
    desc: "Otak rumah pintar — menghubungkan seluruh perangkat lintas protokol menjadi satu pusat kendali dan otomasi.",
    tags: ["Matter", "Zigbee", "Z-Wave"],
    cat: "kontrol",
  },
  {
    icon: Lightbulb,
    name: "Lampu Pintar RGBW",
    desc: "16 juta warna dan penyesuaian suhu cahaya; menyala otomatis saat matahari terbenam, meredup saat waktu tidur.",
    tags: ["Wi-Fi", "Zigbee"],
    cat: "pencahayaan",
  },
  {
    icon: Zap,
    name: "Panel Saklar Pintar",
    desc: "Ubah saklar lama menjadi pintar — kontrol via aplikasi, suara, jadwal, dan skenario otomatis.",
    tags: ["Zigbee", "Wi-Fi"],
    cat: "pencahayaan",
  },
  {
    icon: Lock,
    name: "Kunci Pintu Digital",
    desc: "Akses fingerprint, PIN, kartu, dan remote unlock dengan log aktivitas real-time untuk setiap pintu masuk.",
    tags: ["Wi-Fi", "Bluetooth"],
    cat: "keamanan",
  },
  {
    icon: Cctv,
    name: "Kamera CCTV AI 4K",
    desc: "Deteksi pintar orang dan kendaraan, penglihatan malam warna, serta rekaman awan yang bisa diakses kapan saja.",
    tags: ["PoE", "Wi-Fi"],
    cat: "keamanan",
  },
  {
    icon: BellRing,
    name: "Bel Pintu Video",
    desc: "Lihat dan bicara dengan tamu dari mana saja; rekaman otomatis setiap kunjungan tersimpan aman.",
    tags: ["Wi-Fi"],
    cat: "keamanan",
  },
  {
    icon: Radar,
    name: "Sensor Gerak PIR",
    desc: "Mata rumah Anda — memicu lampu saat ada pergerakan dan alarm saat mode keamanan berangkat aktif.",
    tags: ["Zigbee"],
    cat: "keamanan",
  },
  {
    icon: DoorOpen,
    name: "Sensor Pintu & Jendela",
    desc: "Notifikasi instan setiap pintu atau jendela terbuka — terintegrasi penuh dengan mode keamanan rumah.",
    tags: ["Zigbee"],
    cat: "keamanan",
  },
  {
    icon: Siren,
    name: "Detektor Asap & Gas",
    desc: "Alarm dini kebakaran dan kebocoran gas LPG dengan sirene lokal serta notifikasi langsung ke smartphone.",
    tags: ["Zigbee"],
    cat: "keamanan",
  },
  {
    icon: Thermometer,
    name: "Termostat Pintar",
    desc: "Mempelajari pola suhu penghuni, menyesuaikan AC dan pendingin ruangan, otomatis hemat saat rumah kosong.",
    tags: ["Wi-Fi", "Zigbee"],
    cat: "energi",
  },
  {
    icon: Plug,
    name: "Smart Plug Pengukur Daya",
    desc: "Pantau konsumsi listrik tiap perangkat secara real-time dan jadwalkan on/off untuk memberantas mode standby.",
    tags: ["Wi-Fi"],
    cat: "energi",
  },
  {
    icon: Blinds,
    name: "Gorden Motoris",
    desc: "Buka dan tutup otomatis mengikuti posisi matahari — rumah tetap sejuk tanpa AC bekerja keras.",
    tags: ["Zigbee"],
    cat: "kontrol",
  },
  {
    icon: Speaker,
    name: "Speaker & Asisten Suara",
    desc: "Pusat perintah suara rumah — nyalakan skenario, tanyakan cuaca, dan jalankan rutinitas harian Anda.",
    tags: ["Wi-Fi", "Matter"],
    cat: "kontrol",
  },
  {
    icon: Bot,
    name: "Robot Vacuum LiDAR",
    desc: "Memetakan ruangan dengan presisi, membersihkan sesuai jadwal, dan kembali mengisi daya secara otomatis.",
    tags: ["Wi-Fi"],
    cat: "rumah-tangga",
  },
  {
    icon: Droplets,
    name: "Smart Irrigation",
    desc: "Penyiraman taman cerdas berbasis data cuaca dan sensor kelembapan tanah — tanaman segar tanpa boros air.",
    tags: ["Wi-Fi"],
    cat: "rumah-tangga",
  },
];

export default function Devices() {
  const [active, setActive] = useState("semua");
  const filtered =
    active === "semua" ? devices : devices.filter((d) => d.cat === active);

  return (
    <section className="no-scrollbar relative h-full overflow-y-auto">
      <div className="absolute left-[-200px] top-1/3 h-[360px] w-[360px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative mx-auto flex min-h-full w-full max-w-7xl flex-col justify-center gap-4 px-4 py-5 lg:px-8">
        <SectionHeading
          eyebrow="Katalog Perangkat"
          title={
            <>
              Alat-alat pembangun{" "}
              <span className="text-gradient">smart home modern</span>
            </>
          }
          description="Fondasi rumah pintar dibangun dari perangkat tepat guna — pilih berdasarkan kategori kebutuhan Anda."
        />

        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-0.5 lg:mx-0 lg:flex-wrap lg:justify-center lg:overflow-visible lg:px-0">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              aria-pressed={active === c.key}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition ${
                active === c.key
                  ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-[#05070f] shadow-lg shadow-cyan-500/25"
                  : "border border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan-400/30 hover:text-white"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-4 pb-1 lg:mx-0 lg:grid lg:snap-none lg:grid-cols-3 lg:gap-4 lg:overflow-visible lg:px-0 xl:grid-cols-4">
          {filtered.map((d, i) => (
            <div
              key={d.name}
              className="glass group relative flex w-[82%] shrink-0 snap-center flex-col overflow-hidden rounded-2xl p-4 transition duration-300 hover:border-cyan-400/30 lg:w-auto"
              style={{ animation: `fade-up 0.45s ease-out ${i * 45}ms both` }}
            >
              <div className="pointer-events-none absolute -right-14 -top-14 size-36 rounded-full bg-cyan-400 opacity-0 blur-3xl transition duration-500 group-hover:opacity-15" />
              <div className="flex items-start justify-between gap-2">
                <span className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[0.05] transition group-hover:border-cyan-400/40">
                  <d.icon className="size-5 text-cyan-300" strokeWidth={1.8} />
                </span>
                <span
                  className={`rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide ${
                    categoryBadge[d.cat]
                  }`}
                >
                  {categories.find((c) => c.key === d.cat)?.label}
                </span>
              </div>
              <h3 className="mt-3.5 text-[15px] font-semibold text-white">
                {d.name}
              </h3>
              <p className="mt-1.5 flex-1 text-xs leading-relaxed text-slate-400 line-clamp-3">
                {d.desc}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {d.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
