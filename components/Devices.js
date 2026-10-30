"use client";

import { useEffect, useMemo, useState } from "react";
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
  Wifi,
  Wind,
  AirVent,
  Gauge,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Wallet,
  BatteryCharging,
  Wrench,
  Sofa,
  LightbulbOff,
  Check,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const categories = [
  { key: "semua", label: "Semua" },
  { key: "keamanan", label: "Keamanan" },
  { key: "pencahayaan", label: "Pencahayaan" },
  { key: "energi", label: "Energi & Iklim" },
  { key: "kontrol", label: "Kontrol & Kenyamanan" },
  { key: "rumah-tangga", label: "Rumah Tangga" },
  { key: "infrastruktur", label: "Infrastruktur" },
];

const categoryBadge = {
  keamanan: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
  pencahayaan: "border-amber-400/25 bg-amber-400/10 text-amber-300",
  energi: "border-cyan-400/25 bg-cyan-400/10 text-cyan-300",
  kontrol: "border-violet-400/25 bg-violet-400/10 text-violet-300",
  "rumah-tangga": "border-sky-400/25 bg-sky-400/10 text-sky-300",
  infrastruktur: "border-indigo-400/25 bg-indigo-400/10 text-indigo-300",
};

const devices = [
  {
    icon: Cpu,
    name: "Smart Hub / Gateway",
    desc: "Otak rumah pintar — menghubungkan seluruh perangkat lintas protokol menjadi satu pusat kendali dan otomasi.",
    tags: ["Matter", "Zigbee", "Z-Wave"],
    cat: "kontrol",
    price: "Rp 900 rb – 2,5 jt",
    power: "±5 W, adaptor 5 V",
    install: "Colok & play, 10 menit",
    rooms: "Pusat rumah / area Wi-Fi kuat",
    tip: "Letakkan di tengah rumah dan terbuka — jangan di dalam lemari besi atau panel tertutup.",
  },
  {
    icon: Wifi,
    name: "Router Mesh Wi-Fi 6",
    desc: "Fondasi semua perangkat nirkabel: sinyal merata ke seluruh ruangan, stabil untuk puluhan device sekaligus.",
    tags: ["Wi-Fi 6", "Ethernet", "Mesh"],
    cat: "infrastruktur",
    price: "Rp 1,2 – 4 jt (2–3 node)",
    power: "12–18 W per node",
    install: "Siapkan titik listrik & LAN",
    rooms: "1 node per 2 ruangan / per lantai",
    tip: "Sambungkan antar node dengan kabel LAN bila memungkinkan — backbone jauh lebih stabil daripada nirkabel.",
  },
  {
    icon: Lightbulb,
    name: "Lampu Pintar RGBW",
    desc: "16 juta warna dan penyesuaian suhu cahaya; menyala otomatis saat matahari terbenam, meredup saat waktu tidur.",
    tags: ["Wi-Fi", "Zigbee"],
    cat: "pencahayaan",
    price: "Rp 120 – 350 rb / titik",
    power: "9 W (setara 60 W)",
    install: "Ganti bohlam, tanpa teknisi",
    rooms: "Kamar tidur, ruang tamu, teras",
    tip: "Mulai dari 1–2 lampu di ruang yang paling sering dipakai agar manfaat langsung terasa.",
  },
  {
    icon: Zap,
    name: "Panel Saklar Pintar",
    desc: "Ubah saklar lama menjadi pintar — kontrol via aplikasi, suara, jadwal, dan skenario otomatis.",
    tags: ["Zigbee", "Wi-Fi"],
    cat: "pencahayaan",
    price: "Rp 250 – 500 rb / panel",
    power: "<1 W (standby)",
    install: "Perlu instalasi listrik, 20 menit",
    rooms: "Semua ruangan",
    tip: "Cek dulu apakah dus saklar lama memiliki kabel netral — sebagian besar panel pintar membutuhkannya.",
  },
  {
    icon: LightbulbOff,
    name: "Lampu & Strip LED Ambien",
    desc: "Cahaya tidak langsung untuk suasana bioskop, dapur, atau backdrop TV — bisa diatur warna dan intensitasnya.",
    tags: ["Wi-Fi", "Zigbee"],
    cat: "pencahayaan",
    price: "Rp 150 – 400 rb / 5 m",
    power: "12–24 W",
    install: "Tempel (adhesive), 15 menit",
    rooms: "Dapur, backdrop TV, kolong tempat tidur",
    tip: "Pilih strip yang bisa dipotong per 10 cm agar pas mengikuti panjang kabinet.",
  },
  {
    icon: Lock,
    name: "Kunci Pintu Digital",
    desc: "Akses fingerprint, PIN, kartu, dan remote unlock dengan log aktivitas real-time untuk setiap pintu masuk.",
    tags: ["Wi-Fi", "Bluetooth"],
    cat: "keamanan",
    price: "Rp 1,8 – 5 jt",
    power: "4× AA (±6 bulan)",
    install: "Bor pintu, 30–60 menit",
    rooms: "Pintu utama, pintu samping",
    tip: "Simpan satu kunci mekanis cadangan di luar rumah — jangan hanya bergantung pada baterai.",
  },
  {
    icon: Cctv,
    name: "Kamera CCTV AI 4K",
    desc: "Deteksi pintar orang dan kendaraan, penglihatan malam warna, serta rekaman awan yang bisa diakses kapan saja.",
    tags: ["PoE", "Wi-Fi"],
    cat: "keamanan",
    price: "Rp 700 rb – 2,5 jt / unit",
    power: "5–8 W (PoE 12 W)",
    install: "Adaptor atau kabel PoE",
    rooms: "Teras, garasi, ruang tamu",
    tip: "Arahkan ke jalur masuk (pintu/pagar), bukan ke jalan umum — sekaligus menjaga privasi tetangga.",
  },
  {
    icon: BellRing,
    name: "Bel Pintu Video",
    desc: "Lihat dan bicara dengan tamu dari mana saja; rekaman otomatis setiap kunjungan tersimpan aman.",
    tags: ["Wi-Fi"],
    cat: "keamanan",
    price: "Rp 600 rb – 2 jt",
    power: "Baterai atau kabel bel lama",
    install: "Tempel / sambung kabel bel",
    rooms: "Pintu depan",
    tip: "Pilih resolusi minimal 2K dengan night vision — wajah tamu malam hari tetap terbaca.",
  },
  {
    icon: Radar,
    name: "Sensor Gerak PIR",
    desc: "Mata rumah Anda — memicu lampu saat ada pergerakan dan alarm saat mode keamanan berangkat aktif.",
    tags: ["Zigbee"],
    cat: "keamanan",
    price: "Rp 100 – 250 rb",
    power: "CR2032 (1–2 tahun)",
    install: "Tempel di ketinggian 2,1 m",
    rooms: "Lorong, teras, garasi",
    tip: "Hindari mengarah ke jendela, AC, atau sumber panas — bisa memicu alarm palsu.",
  },
  {
    icon: DoorOpen,
    name: "Sensor Pintu & Jendela",
    desc: "Notifikasi instan setiap pintu atau jendela terbuka — terintegrasi penuh dengan mode keamanan rumah.",
    tags: ["Zigbee"],
    cat: "keamanan",
    price: "Rp 80 – 200 rb",
    power: "Baterai (1–2 tahun)",
    install: "Tempel magnet, 5 menit",
    rooms: "Pintu utama, jendela belakang",
    tip: "Jarak magnet ke badan sensor harus di bawah 1 cm saat pintu tertutup.",
  },
  {
    icon: Siren,
    name: "Sirene & Alarm Internal",
    desc: "Suara peringatan 100+ dB di dalam rumah plus notifikasi ke smartphone saat ada penyusup.",
    tags: ["Zigbee", "Wi-Fi"],
    cat: "keamanan",
    price: "Rp 200 – 450 rb",
    power: "Colok listrik / baterai",
    install: "Pasang di dinding lorong",
    rooms: "Lorong tengah, dekat tangga",
    tip: "Pasang di lorong tengah agar suara terdengar merata ke seluruh lantai.",
  },
  {
    icon: Thermometer,
    name: "Termostat Pintar",
    desc: "Mempelajari pola suhu penghuni, menyesuaikan pendingin ruangan, otomatis hemat saat rumah kosong.",
    tags: ["Wi-Fi", "Zigbee"],
    cat: "energi",
    price: "Rp 700 rb – 2,5 jt",
    power: "24 V (kabel termostat)",
    install: "Ganti termostat lama, 30 menit",
    rooms: "Ruang keluarga / area AC sentral",
    tip: "Paling berdampak pada rumah dengan AC sentral; unit split cukup pakai IR blaster.",
  },
  {
    icon: AirVent,
    name: "IR Blaster AC & TV",
    desc: "Jadikan AC dan TV lama pintar tanpa ganti unit — jadwal suhu, otomasi mode tidur, dan kontrol suara.",
    tags: ["Wi-Fi", "Infrared"],
    cat: "energi",
    price: "Rp 200 – 450 rb",
    power: "5 V USB / baterai",
    install: "Tempel dekat AC, 10 menit",
    rooms: "Kamar tidur, ruang keluarga",
    tip: "Pastikan ada garis pandang langsung ke unit AC — infrared tidak menembus dinding.",
  },
  {
    icon: Plug,
    name: "Smart Plug Pengukur Daya",
    desc: "Pantau konsumsi listrik tiap perangkat secara real-time dan jadwalkan on/off untuk memberantas mode standby.",
    tags: ["Wi-Fi"],
    cat: "energi",
    price: "Rp 90 – 250 rb",
    power: "16 A / 1800 W maksimal",
    install: "Colok langsung, 1 menit",
    rooms: "TV, dispenser, mesin cuci",
    tip: "Jangan gunakan untuk beban di atas 1800 W seperti setrika atau pemanas air.",
  },
  {
    icon: Gauge,
    name: "Energy Monitor 3 Fasa",
    desc: "Baca total pemakaian listrik rumah dari panel MCB — lihat biaya harian dan temukan perangkat paling boros.",
    tags: ["Wi-Fi", "CT Clamp"],
    cat: "energi",
    price: "Rp 900 rb – 2 jt",
    power: "Dipasang di dalam panel",
    install: "Wajib teknisi listrik berlisensi",
    rooms: "Panel MCB utama",
    tip: "Pemasangan di panel bertegangan tinggi — jangan pernah dikerjakan sendiri.",
  },
  {
    icon: Wind,
    name: "Sensor Kualitas Udara",
    desc: "Pantau PM2.5, CO₂, suhu, dan kelembapan; picu air purifier otomatis saat udara mulai buruk.",
    tags: ["Wi-Fi", "Matter"],
    cat: "kontrol",
    price: "Rp 350 – 900 rb",
    power: "5 V USB",
    install: "Colok / tempel dinding",
    rooms: "Kamar tidur, ruang anak",
    tip: "Hubungkan ke purifier atau ventilasi lewat otomasi agar udara bersih tanpa perlu dipantau manual.",
  },
  {
    icon: Blinds,
    name: "Gorden Motoris",
    desc: "Buka dan tutup otomatis mengikuti posisi matahari — rumah tetap sejuk tanpa pendingin bekerja keras.",
    tags: ["Zigbee"],
    cat: "kontrol",
    price: "Rp 800 rb – 2,5 jt / rel",
    power: "Adaptor 12 V",
    install: "Rel khusus, 1–2 jam",
    rooms: "Ruang tamu, kamar utama",
    tip: "Ukur panjang rel dan bukaan jendela sebelum memesan — rel biasanya dibuat custom.",
  },
  {
    icon: Speaker,
    name: "Speaker & Asisten Suara",
    desc: "Pusat perintah suara rumah — nyalakan skenario, tanyakan cuaca, dan jalankan rutinitas harian Anda.",
    tags: ["Wi-Fi", "Matter"],
    cat: "kontrol",
    price: "Rp 500 rb – 2,5 jt",
    power: "15–30 W",
    install: "Colok listrik, 10 menit",
    rooms: "Dapur, ruang keluarga",
    tip: "Pilih speaker yang mendukung Matter dan berfungsi sebagai Thread border router.",
  },
  {
    icon: Bot,
    name: "Robot Vacuum LiDAR",
    desc: "Memetakan ruangan dengan presisi, membersihkan sesuai jadwal, dan kembali mengisi daya secara otomatis.",
    tags: ["Wi-Fi"],
    cat: "rumah-tangga",
    price: "Rp 2,5 – 9 jt",
    power: "Dock ±30 W saat mengisi",
    install: "Siapkan dock & area terbuka",
    rooms: "Ruang tamu, lorong, kamar",
    tip: "Letakkan dock di area terbuka dengan sinyal Wi-Fi baik — robot butuh akses pulang yang lancar.",
  },
  {
    icon: Droplets,
    name: "Smart Irrigation",
    desc: "Penyiraman taman cerdas berbasis data cuaca dan sensor kelembapan tanah — tanaman segar tanpa boros air.",
    tags: ["Wi-Fi", "Baterai"],
    cat: "rumah-tangga",
    price: "Rp 400 rb – 1,2 jt",
    power: "Baterai / panel surya kecil",
    install: "Sambung ke keran luar",
    rooms: "Taman, pot besar, kebun mini",
    tip: "Tambahkan sensor hujan agar penyiraman otomatis berhenti saat hujan turun.",
  },
];

const PAGE_SIZE = 8;

export default function Devices() {
  const [active, setActive] = useState("semua");
  const [page, setPage] = useState(0);
  const [detail, setDetail] = useState(null);

  const filtered = useMemo(
    () => (active === "semua" ? devices : devices.filter((d) => d.cat === active)),
    [active],
  );

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pages - 1);
  const visible = filtered.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);

  const changeCategory = (key) => {
    setActive(key);
    setPage(0);
  };

  useEffect(() => {
    if (!detail) return;
    const onKey = (e) => e.key === "Escape" && setDetail(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [detail]);

  return (
    <section className="no-scrollbar relative h-full overflow-y-auto">
      <div className="absolute left-[-200px] top-1/3 h-[360px] w-[360px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative mx-auto flex min-h-full w-full max-w-7xl flex-col justify-center gap-3.5 px-4 py-5 lg:px-8">
        <SectionHeading
          eyebrow="Katalog Perangkat"
          title={
            <>
              Alat-alat pembangun{" "}
              <span className="text-gradient">smart home modern</span>
            </>
          }
          description="20 perangkat paling sering dipakai — lengkap dengan kisaran harga, kebutuhan daya, dan cara pemasangan."
        />

        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-0.5 lg:mx-0 lg:flex-wrap lg:justify-center lg:overflow-visible lg:px-0">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => changeCategory(c.key)}
              aria-pressed={active === c.key}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                active === c.key
                  ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-[#05070f] shadow-lg shadow-cyan-500/25"
                  : "border border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan-400/30 hover:text-white"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Mobile: swipe carousel */}
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto px-4 pb-1 lg:hidden">
          {filtered.map((d, i) => (
            <button
              key={d.name}
              onClick={() => setDetail(d)}
              className="glass group relative flex w-[78%] shrink-0 snap-center flex-col rounded-2xl p-4 text-left transition active:scale-[0.99]"
              style={{ animation: `fade-up 0.4s ease-out ${Math.min(i, 8) * 45}ms both` }}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[0.05]">
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
              <h3 className="mt-3 text-[15px] font-semibold text-white">{d.name}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-400 line-clamp-2">
                {d.desc}
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-white/[0.06] pt-2.5">
                <span className="text-xs font-semibold text-cyan-300">{d.price}</span>
                <span className="flex items-center gap-1 text-[11px] text-slate-500">
                  Detail <ArrowRight className="size-3" />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Desktop: paginated grid */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-3">
            {visible.map((d, i) => (
              <button
                key={d.name}
                onClick={() => setDetail(d)}
                className="glass group relative flex flex-col rounded-2xl p-3.5 text-left transition duration-300 hover:border-cyan-400/30"
                style={{ animation: `fade-up 0.4s ease-out ${i * 35}ms both` }}
              >
                <div className="pointer-events-none absolute -right-12 -top-12 size-28 rounded-full bg-cyan-400 opacity-0 blur-3xl transition duration-500 group-hover:opacity-15" />
                <div className="flex items-center justify-between gap-2">
                  <span className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/[0.05] transition group-hover:border-cyan-400/40">
                    <d.icon className="size-4 text-cyan-300" strokeWidth={1.8} />
                  </span>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[8.5px] font-semibold uppercase tracking-wide ${
                      categoryBadge[d.cat]
                    }`}
                  >
                    {categories.find((c) => c.key === d.cat)?.label}
                  </span>
                </div>
                <h3 className="mt-2.5 text-[13.5px] font-semibold leading-snug text-white">
                  {d.name}
                </h3>
                <p className="mt-1 flex-1 text-[11px] leading-relaxed text-slate-400 line-clamp-2">
                  {d.desc}
                </p>
                <div className="mt-2.5 flex items-center justify-between border-t border-white/[0.06] pt-2">
                  <span className="text-[11px] font-semibold text-cyan-300">{d.price}</span>
                  <ArrowRight className="size-3.5 text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-cyan-300" />
                </div>
              </button>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-[11px] text-slate-500">
              Menampilkan {currentPage * PAGE_SIZE + 1}–
              {Math.min((currentPage + 1) * PAGE_SIZE, filtered.length)} dari {filtered.length} perangkat
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                aria-label="Halaman sebelumnya"
                className="grid size-7 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-cyan-400/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft className="size-4" />
              </button>
              {Array.from({ length: pages }, (_, p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  aria-label={`Halaman ${p + 1}`}
                  aria-current={p === currentPage}
                  className={`size-7 rounded-lg text-[11px] font-semibold transition ${
                    p === currentPage
                      ? "bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-400/40"
                      : "border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white"
                  }`}
                >
                  {p + 1}
                </button>
              ))}
              <button
                onClick={() => setPage(Math.min(pages - 1, currentPage + 1))}
                disabled={currentPage === pages - 1}
                aria-label="Halaman berikutnya"
                className="grid size-7 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-cyan-400/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-[11px] text-slate-600 lg:hidden">
          Geser kartu, ketuk untuk melihat detail &rarr;
        </p>
      </div>

      {detail && <DetailModal device={detail} onClose={() => setDetail(null)} />}
    </section>
  );
}

function DetailModal({ device: d, onClose }) {
  const catLabel = categories.find((c) => c.key === d.cat)?.label;
  const specs = [
    { icon: Wallet, label: "Kisaran harga", value: d.price },
    { icon: Zap, label: "Kebutuhan daya", value: d.power },
    { icon: Wrench, label: "Pemasangan", value: d.install },
    { icon: Sofa, label: "Ruangan ideal", value: d.rooms },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <button
        onClick={onClose}
        aria-label="Tutup detail"
        className="animate-backdrop-in absolute inset-0 bg-black/65 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Detail ${d.name}`}
        className="animate-sheet-up relative max-h-[85dvh] w-full overflow-y-auto rounded-t-3xl border border-white/10 bg-[#0a0f1e] p-5 shadow-2xl sm:animate-modal-in sm:max-w-lg sm:rounded-3xl"
      >
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/15 sm:hidden" />
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/25">
              <d.icon className="size-6 text-[#05070f]" strokeWidth={2} />
            </span>
            <div>
              <span
                className={`rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide ${
                  categoryBadge[d.cat]
                }`}
              >
                {catLabel}
              </span>
              <h3 className="mt-1 text-lg font-semibold leading-tight text-white">
                {d.name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="grid size-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-slate-400 transition hover:text-white"
          >
            <X className="size-4" />
          </button>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-300">{d.desc}</p>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {specs.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-2.5"
            >
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-slate-500">
                <s.icon className="size-3" /> {s.label}
              </div>
              <p className="mt-1 text-[12px] font-medium leading-snug text-slate-200">
                {s.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-xl border border-amber-400/20 bg-amber-400/[0.06] p-3">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-amber-300">
            <BatteryCharging className="size-3" /> Tips pemasangan
          </div>
          <p className="mt-1 text-xs leading-relaxed text-slate-300">{d.tip}</p>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {d.tags.map((t) => (
            <span
              key={t}
              className="flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-slate-400"
            >
              <Check className="size-2.5 text-cyan-400" /> {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
