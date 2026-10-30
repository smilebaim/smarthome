"use client";

import {
  X,
  House,
  Cpu,
  Radio,
  Globe,
  Workflow,
  Wallet,
  HelpCircle,
  Mail,
  Sparkles,
} from "lucide-react";

const pages = [
  { id: "beranda", label: "Beranda", icon: House },
  { id: "perangkat", label: "Perangkat", icon: Cpu },
  { id: "protokol", label: "Protokol", icon: Radio },
  { id: "ekosistem", label: "Ekosistem", icon: Globe },
  { id: "panduan", label: "Panduan", icon: Workflow },
  { id: "anggaran", label: "Anggaran", icon: Wallet },
  { id: "faq", label: "FAQ", icon: HelpCircle },
  { id: "fitur", label: "Keunggulan", icon: Sparkles },
  { id: "kontak", label: "Kontak", icon: Mail },
];

export default function MobileMenuSheet({ open, active, onNavigate, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
      <div
        className="animate-backdrop-in absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="animate-sheet-up absolute inset-x-0 bottom-0 rounded-t-3xl border-t border-white/10 bg-[#0a0f1e] pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-center justify-between px-5 pb-2 pt-3">
          <span className="mx-auto h-1 w-10 rounded-full bg-white/15" />
          <button
            onClick={onClose}
            aria-label="Tutup menu"
            className="absolute right-4 top-3 grid size-8 place-items-center rounded-lg border border-white/10 text-slate-400"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="px-5 pb-6 pt-2">
          <p className="text-sm font-semibold text-white">Semua Halaman</p>
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {pages.map((p) => (
              <button
                key={p.id}
                onClick={() => onNavigate(p.id)}
                className={`flex flex-col items-center gap-2 rounded-xl border px-2 py-3.5 transition ${
                  active === p.id
                    ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                    : "border-white/10 bg-white/[0.03] text-slate-300"
                }`}
              >
                <p.icon className="size-5" />
                <span className="text-[11px] font-medium">{p.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
