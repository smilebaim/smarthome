"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
import { PAGE_IDS, pagePath } from "@/lib/pages";

export default function PageShell({ initialPage = "beranda" }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const active = initialPage;

  // Kompatibilitas tautan lama berbasis hash: /#perangkat -> /perangkat
  useEffect(() => {
    const h = window.location.hash.replace("#", "");
    if (!h || !PAGE_IDS.includes(h)) return;
    const target = pagePath(h);
    if (window.location.pathname !== target) router.replace(target);
  }, [router]);

  const navigate = (id) => {
    if (!PAGE_IDS.includes(id)) return;
    setMenuOpen(false);
    router.push(pagePath(id));
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
