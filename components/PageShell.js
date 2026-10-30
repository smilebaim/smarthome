"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import Hero from "./Hero";
import Features from "./Features";
import Devices from "./Devices";
import Protocols from "./Protocols";
import HowItWorks from "./HowItWorks";
import Kontak from "./Kontak";

const PAGE_IDS = [
  "beranda",
  "fitur",
  "perangkat",
  "protokol",
  "panduan",
  "kontak",
];

export default function PageShell() {
  const [active, setActive] = useState("beranda");

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
    history.replaceState(null, "", id === "beranda" ? "#" : `#${id}`);
    document.title =
      id === "beranda"
        ? "NexaHome — Teknologi Rumah Pintar Modern"
        : `${id.charAt(0).toUpperCase()}${id.slice(1)} — NexaHome`;
  };

  const pages = {
    beranda: <Hero onNavigate={navigate} />,
    fitur: <Features />,
    perangkat: <Devices />,
    protokol: <Protocols />,
    panduan: <HowItWorks />,
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
      <MobileNav active={active} onNavigate={navigate} />
    </div>
  );
}
