"use client";

import { useEffect, useState } from "react";
import { House, Menu, X, ArrowRight } from "lucide-react";

const links = [
  { href: "#fitur", label: "Keunggulan" },
  { href: "#perangkat", label: "Perangkat" },
  { href: "#protokol", label: "Protokol" },
  { href: "#panduan", label: "Panduan" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-[#05070f]/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5" aria-label="NexaHome">
          <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 shadow-lg shadow-cyan-500/25">
            <House className="size-5 text-[#05070f]" strokeWidth={2.5} />
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">
            Nexa<span className="text-gradient">Home</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#kontak"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-2.5 text-sm font-semibold text-[#05070f] transition hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Konsultasi Gratis
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="grid size-10 place-items-center rounded-lg border border-white/10 text-slate-200 md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-[#05070f]/95 px-5 pb-6 pt-2 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3.5 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-3 text-sm font-semibold text-[#05070f]"
          >
            Konsultasi Gratis
            <ArrowRight className="size-4" />
          </a>
        </div>
      ) : null}
    </header>
  );
}
