"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import MobileMenuSheet from "./MobileMenuSheet";
import Hero from "./Hero";
import Features from "./Features";
import Devices from "./Devices";
import Protocols from "./Protocols";
import Ekosistem from "./Ekosistem";
import HowItWorks from "./HowItWorks";
import Anggaran from "./Anggaran";
import Faq from "./Faq";
import Kontak from "./Kontak";

const PAGE_IDS = [
  "beranda",
  "fitur",
  "perangkat",
  "protokol",
  "ekosistem",
  "panduan",
  "anggaran",
  "faq",
  "kontak",
];

const PAGE_TITLES = {
  beranda: "NexaHome — Teknologi Rumah Pintar Modern",
  fitur: "Keunggulan — NexaHome",
  perangkat: "Katalog Perangkat — NexaHome",
  protokol: "Protokol Jaringan — NexaHome",
  ekosistem: "Ekosistem Platform — NexaHome",
  panduan: "Panduan Membangun — NexaHome",
  anggaran: "Paket Anggaran — NexaHome",
  faq: "FAQ — NexaHome",
  kontak: "Kontak — NexaHome",
};

export default function PageShell() {
  const [active, setActive] = useState("beranda");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.replace("#", "");
      if (PAGE_IDS.includes(h)) setActive(h);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const navigate = (id) => {
    if (!PAGE_IDS.includes(id)) return;
    setActive(id);
    setMenuOpen(false);
    history.replaceState(null, "", id === "beranda" ? "#" : `#${id}`);
    document.title = PAGE_TITLES[id] || "NexaHome";
  };

  const pages = {
    beranda: <Hero onNavigate={navigate} />,
    fitur: <Features />,
    perangkat: <Devices />,
    protokol: <Protocols />,
    ekosistem: <Ekosistem />,
    panduan: <HowItWorks />,
    anggaran: <Anggaran onNavigate={navigate} />,
    faq: <Faq onNavigate={navigate} />,
    kontak: <Kontak onNavigate={navigate} />,
  };

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <Navbar active={active} onNavigate={navigate} />
      <main
        key={active}
        className="animate-page-in relative flex min-h-0 flex-1 flex-col overflow-hidden"
      >
        {pages[active]}
      </main>
      <MobileNav
        active={active}
        onNavigate={navigate}
        onOpenMenu={() => setMenuOpen(true)}
      />
      <MobileMenuSheet
        open={menuOpen}
        active={active}
        onNavigate={navigate}
        onClose={() => setMenuOpen(false)}
      />
    </div>
  );
}
