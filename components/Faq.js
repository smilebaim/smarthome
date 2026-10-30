"use client";

import { useEffect, useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "Apakah rumah lama harus direnovasi total?",
    a: "Tidak. Sebagian besar perangkat hanya butuh stopkontak dan Wi-Fi. Yang perlu perhatian khusus hanya panel saklar pintar — sebagian membutuhkan kabel netral di dus saklar lama. Bila belum ada, gunakan lampu pintar atau modul yang dipasang di dalam dus.",
  },
  {
    q: "Apa yang terjadi kalau internet mati?",
    a: "Perangkat Zigbee atau Z-Wave yang terhubung ke hub lokal tetap bisa dikontrol dari dalam rumah, dan otomasi berbasis Home Assistant tetap berjalan. Yang berhenti hanya kontrol jarak jauh serta notifikasi ke smartphone.",
  },
  {
    q: "Apakah smart home aman dari peretas?",
    a: "Aman bila praktik dasarnya diikuti: ganti password default, aktifkan 2FA, rutin update firmware, pisahkan perangkat IoT ke jaringan Wi-Fi tamu, dan hindari kamera murah tanpa enkripsi yang menyimpan data di server tidak jelas.",
  },
  {
    q: "Bolehkah mencampur merek perangkat berbeda?",
    a: "Boleh, bahkan dianjurkan. Gunakan Matter sebagai standar lintas merek untuk perangkat baru. Untuk sensor murah, Zigbee dengan satu hub pusat adalah kombinasi paling praktis dan hemat.",
  },
  {
    q: "Berapa tambahan daya listrik yang dibutuhkan?",
    a: "Sensor umumnya memakai baterai (nol beban listrik). Aktuator seperti lampu, gorden, dan kamera rata-rata di bawah 10 W per titik. Total sistem rumah tangga biasanya di bawah 100–150 W — setara satu unit kulkas kecil.",
  },
  {
    q: "Mulai dari mana kalau budget terbatas?",
    a: "Mulai dari yang paling terasa manfaatnya: pencahayaan otomatis, satu kamera, dan sensor pintu (sekitar Rp 2–3 juta). Setelah terbiasa, tambahkan per ruangan setiap bulan — tidak perlu langsung seluruh rumah.",
  },
  {
    q: "Bisakah dipasang bertahap?",
    a: "Sangat bisa, dan itu cara yang disarankan. Kunci suksesnya: tentukan ekosistem serta protokol utama sejak awal, lalu pastikan setiap perangkat baru kompatibel dengan pilihan tersebut.",
  },
  {
    q: "Apakah ada biaya langganan bulanan?",
    a: "Fitur dasar umumnya gratis. Biaya bulanan hanya muncul jika memakai penyimpanan cloud kamera atau layanan AI tertentu. Solusi lokal seperti Home Assistant berjalan 100% tanpa langganan.",
  },
];

export default function Faq({ onNavigate }) {
  const [open, setOpen] = useState(-1);

  useEffect(() => {
    if (window.matchMedia("(min-width: 640px)").matches) setOpen(0);
  }, []);

  return (
    <section className="no-scrollbar relative h-full overflow-y-auto">
      <div className="absolute right-[-160px] top-1/4 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto flex min-h-full w-full max-w-5xl flex-col justify-center gap-4 px-4 py-6 lg:px-8">
        <SectionHeading
          eyebrow="Pertanyaan Umum"
          title={
            <>
              Hal yang paling sering{" "}
              <span className="text-gradient">ditanyakan</span>
            </>
          }
          description="Jawaban singkat untuk keraguan yang paling umum sebelum memulai — dari renovasi hingga keamanan data."
        />

        <div className="grid items-start gap-1.5 sm:grid-cols-2 sm:gap-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-xl border transition ${
                  isOpen
                    ? "border-cyan-400/30 bg-cyan-400/[0.05]"
                    : "border-white/[0.08] bg-white/[0.02] hover:border-white/15"
                }`}
                style={{ animation: `fade-up 0.35s ease-out ${i * 30}ms both` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 px-3.5 py-2 text-left sm:py-2.5"
                >
                  <span className="flex items-start gap-2 text-[11.5px] font-medium leading-snug text-white">
                    <HelpCircle className="mt-0.5 size-3.5 shrink-0 text-cyan-400/70" />
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`size-3.5 shrink-0 text-slate-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-cyan-300" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="animate-page-in px-3.5 pb-3 pl-9 text-[11px] leading-relaxed text-slate-400">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 sm:flex-row">
          <p className="text-[11px] text-slate-500">
            Pertanyaan Anda belum ada di daftar?
          </p>
          <button
            onClick={() => onNavigate?.("kontak")}
            className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-[11px] font-semibold text-cyan-300 transition hover:bg-cyan-400/15"
          >
            <MessageCircle className="size-3.5" />
            Tanya langsung ke tim
          </button>
        </div>
      </div>
    </section>
  );
}
