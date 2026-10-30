"use client";

import { House, ArrowRight } from "lucide-react";

const tabs = [
  { id: "beranda", label: "Beranda" },
  { id: "perangkat", label: "Perangkat" },
  { id: "protokol", label: "Protokol" },
  { id: "ekosistem", label: "Ekosistem" },
  { id: "panduan", label: "Panduan" },
  { id: "anggaran", label: "Anggaran" },
  { id: "faq", label: "FAQ" },
  { id: "fitur", label: "Fitur" },
];

export default function Navbar({ active, onNavigate }) {
  return (
    <header className="z-40 shrink-0 border-b border-white/10 bg-[#05070f]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 lg:px-8">
        <button
          onClick={() => onNavigate("beranda")}
          className="flex shrink-0 items-center gap-2.5"
          aria-label="NexaHome — kembali ke beranda"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 shadow-lg shadow-cyan-500/25">
            <House className="size-4.5 text-[#05070f]" strokeWidth={2.5} />
          </span>
          <span className="text-base font-semibold tracking-tight text-white">
            Nexa<span className="text-gradient">Home</span>
          </span>
        </button>

        <div className="hidden items-center gap-0.5 md:flex xl:gap-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => onNavigate(t.id)}
              aria-current={active === t.id ? "page" : undefined}
              className={`rounded-full px-2.5 py-1.5 text-xs font-medium transition xl:px-3 xl:text-[13px] ${
                active === t.id
                  ? "bg-white/10 text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => onNavigate("kontak")}
          className="group hidden shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-2 text-[13px] font-semibold text-[#05070f] transition hover:shadow-lg hover:shadow-cyan-500/30 lg:inline-flex"
        >
          Konsultasi
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </nav>
    </header>
  );
}
