"use client";

import { useState } from "react";
import { Sprout, House, Building2, Check, TrendingDown, Info, ArrowRight, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const tiers = [
  {
    icon: Sprout,
    name: "Starter",
    tagline: "Mulai dari satu ruangan",
    price: "Rp 3,5 – 6 jt",
    target: "Rumah tipe 36–45 · 1–2 ruangan",
    items: [
      "Smart hub / gateway",
      "4 lampu pintar + 1 panel saklar",
      "2 smart plug pengukur daya",
      "1 kamera CCTV indoor",
      "2 sensor pintu & 1 bel video",
    ],
    saving: "Hemat listrik ±10–15%",
    accent: "from-emerald-400 to-teal-500",
    ring: "border-white/10",
  },
  {
    icon: House,
    name: "Comfort",
    tagline: "Rumah pintar menyeluruh",
    price: "Rp 12 – 20 jt",
    target: "Rumah tipe 60–90 · seluruh ruangan",
    items: [
      "Hub + router mesh Wi-Fi 6 (2 node)",
      "10 titik lampu & panel pintar",
      "Kunci pintu digital + bel video",
      "3 kamera CCTV AI + sirene",
      "Sensor gerak, asap, & gas",
      "IR blaster AC + gorden motoris",
    ],
    saving: "Hemat listrik ±20–25%",
    accent: "from-cyan-400 to-blue-600",
    ring: "border-cyan-400/40",
    popular: true,
  },
  {
    icon: Building2,
    name: "Premium",
    tagline: "Otomasi penuh, siap bertahun-tahun",
    price: "Rp 35 – 60 jt",
    target: "Rumah tipe 120+ · 2 lantai",
    items: [
      "Router mesh 3 node + backbone LAN",
      "20+ titik cahaya & skenario ruangan",
      "2 kunci digital + 6 kamera & NVR",
      "Energy monitor 3 fasa + termostat",
      "4 gorden motoris + robot vacuum",
      "Smart irrigation + speaker tiap area",
    ],
    saving: "Hemat listrik ±30%",
    accent: "from-violet-400 to-purple-600",
    ring: "border-white/10",
  },
];

export default function Anggaran({ onNavigate }) {
  const [active, setActive] = useState(0);

  return (
    <section className="no-scrollbar relative h-full overflow-y-auto">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/[0.07] blur-[130px]" />
      </div>

      <div className="relative mx-auto flex min-h-full w-full max-w-7xl flex-col justify-center gap-2 px-4 py-2.5 sm:gap-4 sm:py-6 lg:px-8">
        <SectionHeading
          eyebrow="Paket Anggaran"
          title={
            <>
              Berapa biaya membangun{" "}
              <span className="text-gradient">rumah pintar?</span>
            </>
          }
          description="Tiga tingkatan yang bisa dipilih sesuai tipe rumah dan budget — semuanya bisa dicicil bertahap per ruangan."
          descriptionClassName="[@media(max-height:700px)]:hidden"
        />

        {/* Ponsel: pilih tingkatan lalu lihat rinciannya */}
        <div className="grid w-full grid-cols-3 gap-0.5 rounded-full border border-white/10 bg-white/[0.03] p-1 sm:hidden">
          {tiers.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`flex min-h-[34px] items-center justify-center gap-1 rounded-full px-2 py-1 text-[12px] font-medium transition active:scale-95 ${
                active === i
                  ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-[#05070f] shadow-lg shadow-cyan-500/20"
                  : "text-slate-400"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        <div className="sm:hidden">
          <TierCard t={tiers[active]} compact />
        </div>

        <div className="hidden grid-cols-3 gap-3.5 sm:grid">
          {tiers.map((t) => (
            <TierCard key={t.name} t={t} />
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-3.5 py-2 sm:flex-row sm:px-4 sm:py-3">
          <p className="flex items-start gap-2 text-[10px] leading-relaxed text-slate-500 sm:text-[10.5px] [@media(max-height:600px)]:hidden">
            <Info className="mt-0.5 size-3.5 shrink-0 text-slate-600" />
            Kisaran harga pasar Indonesia 2026 untuk perangkat, belum termasuk
            jasa instalasi (±10–15%).
          </p>
          <button
            onClick={() => onNavigate?.("kontak")}
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-1.5 text-[11px] font-semibold text-[#05070f] transition hover:shadow-lg hover:shadow-cyan-500/25 sm:py-2 sm:text-xs"
          >
            Minta rincian biaya
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function TierCard({ t, compact = false }) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden border bg-white/[0.03] backdrop-blur-sm transition hover:bg-white/[0.05] ${
        compact ? "rounded-2xl p-3" : "rounded-2xl p-4"
      } ${t.popular ? "border-cyan-400/40 shadow-lg shadow-cyan-500/10" : t.ring}`}
    >
      {t.popular && (
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#05070f]">
          <Star className="size-2.5" fill="currentColor" /> Paling diminati
        </span>
      )}

      <div className="flex items-center gap-2.5">
        <span
          className={`grid shrink-0 place-items-center rounded-xl bg-gradient-to-br ${t.accent} shadow-lg ${
            compact ? "size-9" : "size-10"
          }`}
        >
          <t.icon className="size-5 text-[#05070f]" strokeWidth={2} />
        </span>
        <div>
          <h3 className={`font-semibold text-white ${compact ? "text-[15px]" : "text-base"}`}>
            {t.name}
          </h3>
          <p className="text-[10.5px] text-slate-500">{t.tagline}</p>
        </div>
      </div>

      <p className="mt-2.5 text-xl font-bold tracking-tight text-white">{t.price}</p>
      <p className="text-[10px] text-slate-500 [@media(max-height:600px)]:hidden">
        {t.target}
      </p>

      <ul className="mt-2.5 flex flex-1 flex-col gap-1">
        {t.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-1.5 text-[11px] leading-snug text-slate-300"
          >
            <Check className="mt-0.5 size-3 shrink-0 text-cyan-400" />
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-2.5 flex items-center gap-1.5 border-t border-white/[0.06] pt-2 text-[10.5px] font-medium text-lime-300">
        <TrendingDown className="size-3.5" /> {t.saving}
      </p>
    </div>
  );
}
