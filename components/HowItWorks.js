"use client";

import { useState } from "react";
import {
  Radar,
  Globe,
  Cable,
  Workflow,
  Sofa,
  CookingPot,
  BedDouble,
  Bath,
  DoorOpen,
  Car,
  Check,
  ListChecks,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    icon: Radar,
    step: "01",
    title: "Audit & Perencanaan",
    desc: "Petakan kebutuhan rumah: titik sensor, jalur listrik, jangkauan Wi-Fi, dan area yang butuh pengawasan kamera.",
  },
  {
    icon: Globe,
    step: "02",
    title: "Pilih Ekosistem",
    desc: "Tentukan platform pusat — Google Home, Apple Home, Alexa, atau Home Assistant — beserta protokol utama rumah Anda.",
  },
  {
    icon: Cable,
    step: "03",
    title: "Instalasi & Koneksi",
    desc: "Pasang perangkat satu per satu, pairing ke hub, lalu susun seluruh kontrol ke dalam satu dashboard rapi.",
  },
  {
    icon: Workflow,
    step: "04",
    title: "Otomasi & Monitoring",
    desc: "Bangun skenario: mode berangkat, mode tidur, notifikasi keamanan — lalu biarkan rumah bekerja untuk Anda.",
  },
];

const rooms = [
  {
    icon: Sofa,
    name: "Ruang Tamu",
    note: "Pusat hiburan & kesan pertama",
    items: ["Lampu pintar", "Gorden motoris", "Speaker", "CCTV dalam"],
  },
  {
    icon: CookingPot,
    name: "Dapur",
    note: "Fokus pada keselamatan",
    items: ["Detektor asap & gas", "Strip LED kabinet", "Smart plug", "Sensor kebocoran"],
  },
  {
    icon: BedDouble,
    name: "Kamar Tidur",
    note: "Nyaman & tidur lebih pulas",
    items: ["Lampu hangat", "IR blaster AC", "Gorden otomatis", "Sensor udara"],
  },
  {
    icon: Bath,
    name: "Kamar Mandi",
    note: "Cegah masalah air",
    items: ["Sensor kebocoran", "Lampu motion", "Exhaust otomatis", "Sensor kelembapan"],
  },
  {
    icon: DoorOpen,
    name: "Pintu Depan",
    note: "Garis pertahanan pertama",
    items: ["Kunci digital", "Bel video", "Sensor pintu", "CCTV teras"],
  },
  {
    icon: Car,
    name: "Taman & Garasi",
    note: "Otomatis saat malam tiba",
    items: ["Smart irrigation", "Lampu taman PIR", "Sensor gerak", "Kamera garasi"],
  },
];

const checklist = [
  "Tentukan platform pusat (Google / Apple / Alexa / HA)",
  "Ukur kekuatan Wi-Fi di setiap ruangan",
  "Pastikan saklar lama punya kabel netral",
  "Siapkan stopkontak untuk hub & router",
  "Pilih perangkat berlabel Matter bila tersedia",
  "Aktifkan 2FA di akun ekosistem & kamera",
  "Buat jaringan Wi-Fi tamu khusus IoT",
  "Catat nama perangkat & skenario",
];

const modes = [
  { key: "langkah", label: "Langkah", icon: Workflow },
  { key: "ruangan", label: "Per Ruangan", icon: Sofa },
  { key: "checklist", label: "Checklist", icon: ListChecks },
];

export default function HowItWorks() {
  const [mode, setMode] = useState("langkah");
  const [checked, setChecked] = useState([]);

  const toggle = (i) =>
    setChecked((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
    );

  const progress = Math.round((checked.length / checklist.length) * 100);

  return (
    <section className="no-scrollbar relative h-full overflow-y-auto">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_50%,black,transparent)]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-full w-full max-w-7xl flex-col justify-center gap-3 px-4 py-4 sm:gap-4 sm:py-6 lg:px-8">
        <SectionHeading
          eyebrow="Panduan Membangun"
          title={
            <>
              Dari rumah biasa ke rumah pintar —{" "}
              <span className="text-gradient">dengan urutan yang benar</span>
            </>
          }
          description="Tidak perlu mengubah semuanya sekaligus. Ikuti langkahnya, periksa per ruangan, atau gunakan checklist sebelum membeli."
        />

        <div className="flex justify-center">
          <div className="flex gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
            {modes.map((m) => (
              <button
                key={m.key}
                onClick={() => setMode(m.key)}
                aria-pressed={mode === m.key}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                  mode === m.key
                    ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-[#05070f] shadow-lg shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <m.icon className="size-3.5" />
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {mode === "langkah" && (
          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className="glass group relative flex w-[70%] shrink-0 snap-center flex-col rounded-2xl p-4 transition duration-300 hover:border-cyan-400/30 sm:w-auto"
                style={{ animation: `fade-up 0.45s ease-out ${i * 70}ms both` }}
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20">
                    <s.icon className="size-6 text-[#05070f]" strokeWidth={2} />
                  </span>
                  <span className="font-mono text-3xl font-bold text-white/10 transition group-hover:text-cyan-400/25">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400 lg:line-clamp-5">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {mode === "ruangan" && (
          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-3">
            {rooms.map((r, i) => (
              <div
                key={r.name}
                className="glass group flex w-[72%] shrink-0 snap-center flex-col rounded-2xl p-4 transition duration-300 hover:border-cyan-400/30 sm:w-auto"
                style={{ animation: `fade-up 0.4s ease-out ${i * 50}ms both` }}
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.05] transition group-hover:border-cyan-400/40">
                    <r.icon className="size-5 text-cyan-300" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white">{r.name}</h3>
                    <p className="text-[10.5px] text-slate-500">{r.note}</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {r.items.map((it) => (
                    <span
                      key={it}
                      className="flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] text-slate-300"
                    >
                      <Check className="size-2.5 text-cyan-400" />
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {mode === "checklist" && (
          <div className="glass mx-auto w-full max-w-4xl rounded-2xl p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.07]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="shrink-0 font-mono text-[11px] text-slate-400">
                {checked.length}/{checklist.length} siap
              </span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-1.5 sm:mt-4 sm:gap-2">
              {checklist.map((item, i) => {
                const on = checked.includes(i);
                return (
                  <button
                    key={item}
                    onClick={() => toggle(i)}
                    aria-pressed={on}
                    className={`flex items-start gap-2 rounded-xl border p-2 text-left transition sm:gap-2.5 sm:p-3 ${
                      on
                        ? "border-cyan-400/30 bg-cyan-400/[0.07]"
                        : "border-white/[0.08] bg-white/[0.02] hover:border-white/15"
                    }`}
                    style={{ animation: `fade-up 0.35s ease-out ${i * 35}ms both` }}
                  >
                    <span
                      className={`mt-0.5 grid size-3.5 shrink-0 place-items-center rounded border transition sm:size-4 ${
                        on
                          ? "border-cyan-400 bg-cyan-400 text-[#05070f]"
                          : "border-white/20 bg-transparent"
                      }`}
                    >
                      {on && <Check className="size-2.5 sm:size-3" strokeWidth={3} />}
                    </span>
                    <span
                      className={`text-[10.5px] leading-snug sm:text-[11.5px] ${
                        on ? "text-slate-400 line-through decoration-slate-600" : "text-slate-200"
                      }`}
                    >
                      {item}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="mt-4 border-t border-white/[0.06] pt-3 text-center text-[10.5px] text-slate-500">
              Klik setiap poin untuk menandai progres Anda — target ideal: semua tercentang sebelum berbelanja.
            </p>
          </div>
        )}

        <p className="text-center text-[11px] text-slate-600 sm:hidden [@media(max-height:700px)]:hidden">
          {mode === "checklist" ? "Ketuk poin untuk menandai progres" : "Geser kartu untuk melihat lainnya →"}
        </p>
      </div>
    </section>
  );
}
