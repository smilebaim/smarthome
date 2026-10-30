"use client";

import { House, Cpu, Workflow, Wallet, HelpCircle, LayoutGrid } from "lucide-react";

const items = [
  { id: "beranda", label: "Beranda", icon: House },
  { id: "perangkat", label: "Alat", icon: Cpu },
  { id: "panduan", label: "Panduan", icon: Workflow },
  { id: "anggaran", label: "Anggaran", icon: Wallet },
  { id: "faq", label: "FAQ", icon: HelpCircle },
  { id: "menu", label: "Menu", icon: LayoutGrid, action: "menu" },
];

const sheetPages = ["protokol", "ekosistem", "kontak", "fitur"];

export default function MobileNav({ active, onNavigate, onOpenMenu }) {
  return (
    <nav className="z-40 shrink-0 border-t border-white/10 bg-[#05070f]/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-6">
        {items.map((it) => {
          const isMenu = it.action === "menu";
          const isActive = isMenu
            ? sheetPages.includes(active)
            : active === it.id;
          return (
            <button
              key={it.id}
              onClick={() =>
                isMenu ? onOpenMenu() : onNavigate(it.id)
              }
              aria-current={isActive ? "page" : undefined}
              className="flex flex-col items-center gap-1 py-2.5"
            >
              <span
                className={`relative grid size-8 place-items-center rounded-lg transition ${
                  isActive ? "bg-cyan-400/15 text-cyan-300" : "text-slate-500"
                }`}
              >
                <it.icon className="size-4.5" />
                {isMenu && isActive ? (
                  <span className="absolute -top-0.5 right-0.5 size-1.5 rounded-full bg-cyan-300" />
                ) : null}
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
