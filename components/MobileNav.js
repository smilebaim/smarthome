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
    <nav className="z-40 shrink-0 border-t border-white/10 bg-[#05070f]/92 pb-[max(env(safe-area-inset-bottom),0.25rem)] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-6 gap-0.5 px-1.5 pt-1">
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
              className="flex min-h-[46px] flex-col items-center justify-center gap-0.5 rounded-xl py-1 transition active:scale-95 active:bg-white/[0.05] sm:min-h-[52px] [@media(max-height:500px)]:min-h-[40px] [@media(max-height:500px)]:py-0.5"
            >
              <span
                className={`relative grid size-8 place-items-center rounded-lg transition [@media(max-height:500px)]:size-7 ${
                  isActive ? "bg-cyan-400/15 text-cyan-300" : "text-slate-500"
                }`}
              >
                <it.icon className="size-[18px]" strokeWidth={isActive ? 2.2 : 1.9} />
                {isMenu && isActive ? (
                  <span className="absolute -top-0.5 right-0.5 size-1.5 rounded-full bg-cyan-300" />
                ) : null}
              </span>
              <span
                className={`text-[10px] leading-none [@media(max-height:500px)]:hidden ${
                  isActive ? "font-semibold text-cyan-300" : "font-medium text-slate-500"
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
