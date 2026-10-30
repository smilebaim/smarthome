"use client";

import { House, Sparkles, Cpu, Radio, Workflow, Mail } from "lucide-react";

const items = [
  { id: "beranda", label: "Beranda", icon: House },
  { id: "fitur", label: "Fitur", icon: Sparkles },
  { id: "perangkat", label: "Alat", icon: Cpu },
  { id: "protokol", label: "Protokol", icon: Radio },
  { id: "panduan", label: "Panduan", icon: Workflow },
  { id: "kontak", label: "Kontak", icon: Mail },
];

export default function MobileNav({ active, onNavigate }) {
  return (
    <nav className="z-40 shrink-0 border-t border-white/10 bg-[#05070f]/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-6">
        {items.map((it) => {
          const isActive = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => onNavigate(it.id)}
              aria-current={isActive ? "page" : undefined}
              className="flex flex-col items-center gap-1 py-2.5"
            >
              <span
                className={`grid size-8 place-items-center rounded-lg transition ${
                  isActive
                    ? "bg-cyan-400/15 text-cyan-300"
                    : "text-slate-500"
                }`}
              >
                <it.icon className="size-4.5" />
              </span>
              <span
                className={`text-[9px] font-medium ${
                  isActive ? "text-cyan-300" : "text-slate-500"
                }`}
              >
                {it.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
