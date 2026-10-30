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

      <div className="relative mx-auto flex min-h-full w-full max-w-7xl flex-col justify-center gap-2 px-4 py-3 [@media(max-height:650px)]:gap-1.5 [@media(max-height:650px)]:py-2.5 sm:gap-4 sm:py-6 lg:px-8">
        <SectionHeading
          eyebrow="Panduan Membangun"
          title={
            <>
              Dari rumah biasa ke rumah pintar —{" "}
              <span className="text-gradient">dengan urutan yang benar</span>
            </>
          }
          description="Tidak perlu mengubah semuanya sekaligus. Ikuti langkahnya, periksa per ruangan, atau gunakan checklist sebelum membeli."
          descriptionClassName={mode === "checklist" ? "hidden sm:block" : ""}
        />

        <div className="flex w-full justify-center">
          <div className="grid w-full max-w-sm grid-cols-3 gap-0.5 rounded-full border border-white/10 bg-white/[0.03] p-1 sm:flex sm:w-auto sm:max-w-none">
            {modes.map((m) => (
              <button
                key={m.key}
                onClick={() => setMode(m.key)}
                aria-pressed={mode === m.key}
                className={`flex min-h-[36px] items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-[12.5px] font-medium transition active:scale-95 sm:px-3.5 sm:text-xs ${
                  mode === m.key
                    ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-[#05070f] shadow-lg shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <m.icon className="size-3.5 shrink-0" />
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {mode === "langkah" && (
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className="glass group relative flex flex-col rounded-xl p-2.5 transition duration-300 hover:border-cyan-400/30 sm:rounded-2xl sm:p-4"
                style={{ animation: `fade-up 0.45s ease-out ${i * 70}ms both` }}
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20 sm:size-12 sm:rounded-2xl">
                    <s.icon className="size-4 text-[#05070f] sm:size-6" strokeWidth={2} />
                  </span>
                  <span className="font-mono text-xl font-bold text-white/10 transition group-hover:text-cyan-400/25 sm:text-3xl">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-2 text-[12.5px] font-semibold leading-snug text-white sm:mt-4 sm:text-base">
                  {s.title}
                </h3>
                <p className="mt-1 text-[10px] leading-relaxed text-slate-400 line-clamp-1 [@media(min-height:701px)]:line-clamp-2 sm:mt-2 sm:text-[12px] [@media(max-height:600px)]:hidden lg:line-clamp-5">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {mode === "ruangan" && (
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 rooms-3col-short-tablet">
            {rooms.map((r, i) => (
              <div
                key={r.name}
                className="glass group flex flex-col rounded-xl p-2.5 transition duration-300 hover:border-cyan-400/30 [@media(max-height:650px)]:p-2 sm:rounded-2xl sm:p-4"
                style={{ animation: `fade-up 0.4s ease-out ${i * 50}ms both` }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.05] transition group-hover:border-cyan-400/40 sm:size-10 sm:rounded-xl">
                    <r.icon className="size-4 text-cyan-300 sm:size-5" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="room-name truncate text-[12.5px] font-semibold text-white sm:text-[15px]">{r.name}</h3>
                    <p className="room-note line-clamp-1 text-[9px] text-slate-500 sm:text-[10.5px] [@media(max-height:700px)]:hidden">
                      {r.note}
                    </p>
                  </div>
                </div>
                <p className="mt-1.5 text-[9.5px] leading-snug text-slate-400 line-clamp-1 [@media(min-height:701px)]:line-clamp-2 sm:hidden show-on-short-tablet">
                  {r.items.join(" · ")}
                </p>
                <div className="mt-3 hidden flex-wrap gap-1.5 sm:flex hide-on-short-tablet">
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
          <div className="glass mx-auto w-full max-w-4xl rounded-2xl p-3 sm:p-5 [@media(max-height:600px)]:p-2.5">
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

            <div className="mt-2.5 grid grid-cols-2 gap-1 sm:mt-4 sm:gap-2 [@media(max-height:600px)]:mt-1.5 [@media(max-height:600px)]:gap-0.5">
              {checklist.map((item, i) => {
                const on = checked.includes(i);
                return (
                  <button
                    key={item}
                    onClick={() => toggle(i)}
                    aria-pressed={on}
                    className={`flex items-start gap-1.5 rounded-xl border p-1.5 text-left transition active:scale-[0.99] sm:gap-2.5 sm:p-3 [@media(max-height:600px)]:p-1 ${
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
                      className={`text-[10px] leading-snug sm:text-[11.5px] ${
                        on ? "text-slate-400 line-through decoration-slate-600" : "text-slate-200"
                      }`}
                    >
                      {item}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="mt-3 border-t border-white/[0.06] pt-2.5 text-center text-[10.5px] text-slate-500 [@media(max-height:700px)]:hidden sm:mt-4 sm:pt-3">
              Klik setiap poin untuk menandai progres Anda — target ideal: semua tercentang sebelum berbelanja.
            </p>
          </div>
        )}

        {mode === "checklist" && (
          <p className="text-center text-[11px] text-slate-600 sm:hidden [@media(max-height:700px)]:hidden">
            Ketuk poin untuk menandai progres
          </p>
        )}
      </div>
    </section>
  );
}
