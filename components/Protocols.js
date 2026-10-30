import { Wifi, Radio, Waves, Globe, Bluetooth } from "lucide-react";
import SectionHeading from "./SectionHeading";

const protocols = [
  {
    icon: Wifi,
    name: "Wi-Fi",
    tagline: "Backbone berbandwidth tinggi",
    desc: "Ideal untuk perangkat video dan bandwidth tinggi — kamera, speaker, dan hub. Mengandalkan router rumah yang stabil.",
    chips: ["Cepat", "Tanpa hub tambahan", "Boros daya"],
    accent: "text-cyan-300",
  },
  {
    icon: Radio,
    name: "Zigbee",
    tagline: "Mesh hemat daya",
    desc: "Jaringan mesh andal untuk puluhan sensor dan aktuator. Setiap perangkat memperkuat sinyal satu sama lain.",
    chips: ["Mesh network", "Ultra hemat daya", "Butuh coordinator"],
    accent: "text-violet-300",
  },
  {
    icon: Waves,
    name: "Z-Wave",
    tagline: "Mesh terenkripsi eksklusif",
    desc: "Berjalan pada frekuensi khusus di luar band Wi-Fi padat — minim interferensi dan aman untuk rumah besar.",
    chips: ["Terenkripsi", "Frekuensi khusus", "Jangkauan jauh"],
    accent: "text-emerald-300",
  },
  {
    icon: Globe,
    name: "Matter + Thread",
    tagline: "Standar terbuka masa depan",
    desc: "Satu bahasa untuk semua ekosistem — Google, Apple, Amazon, dan Home Assistant. Perangkat Matter tak akan usang.",
    chips: ["Standar global", "Border router", "Future-proof"],
    accent: "text-amber-300",
  },
  {
    icon: Bluetooth,
    name: "Bluetooth BLE",
    tagline: "Koneksi dekat & setup instan",
    desc: "Dipakai untuk pairing pertama dan perangkat jarak dekat — kunci digital, sensor kecil, dan tracker kelembapan.",
    chips: ["Setup instan", "Hemat daya", "Jarak pendek"],
    accent: "text-sky-300",
  },
];

export default function Protocols() {
  return (
    <section className="no-scrollbar relative h-full overflow-y-auto">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-180px] top-1/4 h-[340px] w-[340px] rounded-full bg-violet-600/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto flex min-h-full w-full max-w-7xl flex-col justify-center gap-3 px-4 py-4 sm:gap-4 sm:py-6 lg:px-8">
        <SectionHeading
          eyebrow="Protokol Jaringan"
          title={
            <>
              Bahasa yang dipakai{" "}
              <span className="text-gradient">rumah pintar</span>
            </>
          }
          description="Rumah pintar modern memadukan beberapa protokol sekaligus — masing-masing punya peran. Pahami sebelum membeli perangkat pertama Anda."
          descriptionClassName="[@media(max-height:700px)]:hidden"
        />

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3">
          {protocols.map((p, i) => (
            <div
              key={p.name}
              className="glass group flex flex-col rounded-xl p-2.5 transition duration-300 hover:border-cyan-400/30 sm:rounded-2xl sm:p-4"
              style={{ animation: `fade-up 0.45s ease-out ${i * 55}ms both` }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.05] transition group-hover:border-cyan-400/40 sm:size-10 sm:rounded-xl">
                  <p.icon className={`size-4 sm:size-5 ${p.accent}`} strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-[12.5px] font-semibold text-white sm:text-base">
                    {p.name}
                  </h3>
                  <p className="line-clamp-1 text-[9px] text-slate-500 sm:text-[11px]">{p.tagline}</p>
                </div>
              </div>
              <p className="mt-2 flex-1 text-[10px] leading-relaxed text-slate-400 line-clamp-2 sm:mt-3 sm:text-xs lg:line-clamp-4 [@media(max-height:600px)]:hidden">
                {p.desc}
              </p>
              <div className="mt-2 flex flex-wrap gap-1 sm:mt-3 sm:gap-1.5 [@media(max-height:700px)]:hidden hide-on-short-tablet">
                {p.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-1.5 py-0.5 text-[9px] font-medium text-slate-300 sm:px-2 sm:text-[10px]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div
            className="relative flex flex-col justify-center overflow-hidden rounded-xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-600/10 p-3 sm:rounded-2xl sm:p-4"
            style={{ animation: "fade-up 0.45s ease-out 300ms both" }}
          >
            <h3 className="text-[12.5px] font-semibold text-white sm:text-base">
              Rumus praktisnya
            </h3>
            <p className="mt-1.5 text-[10px] leading-relaxed text-slate-300 sm:mt-2 sm:text-xs">
              Gunakan <span className="font-semibold text-cyan-300">Wi-Fi</span>{" "}
              untuk kamera &amp; speaker,{" "}
              <span className="font-semibold text-violet-300">Zigbee</span>{" "}
              untuk armada sensor, dan pastikan perangkat baru berlogo{" "}
              <span className="font-semibold text-amber-300">Matter</span>.
            </p>
            <p className="mt-2 hidden text-xs leading-relaxed text-slate-400 sm:block">
              Kombinasi ini memberi keseimbangan terbaik antara kecepatan,
              ketahanan baterai, dan masa depan terbuka.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
