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
        />

        <div className="no-scrollbar swipe-fade -mx-4 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto scroll-px-4 px-4 pb-1 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:gap-4 md:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {protocols.map((p, i) => (
            <div
              key={p.name}
              className="glass group flex w-[82%] shrink-0 snap-center flex-col rounded-2xl p-4 transition duration-300 hover:border-cyan-400/30 sm:w-auto"
              style={{ animation: `fade-up 0.45s ease-out ${i * 55}ms both` }}
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.05] transition group-hover:border-cyan-400/40">
                  <p.icon className={`size-5 ${p.accent}`} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {p.name}
                  </h3>
                  <p className="text-[11px] text-slate-500">{p.tagline}</p>
                </div>
              </div>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-slate-400 lg:line-clamp-4">
                {p.desc}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-slate-300"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div
            className="relative flex w-[82%] shrink-0 snap-center flex-col justify-center overflow-hidden rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-600/10 p-4 sm:w-auto"
            style={{ animation: "fade-up 0.45s ease-out 300ms both" }}
          >
            <h3 className="text-base font-semibold text-white">
              Rumus praktisnya
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              Gunakan <span className="font-semibold text-cyan-300">Wi-Fi</span>{" "}
              untuk kamera &amp; speaker,{" "}
              <span className="font-semibold text-violet-300">Zigbee</span>{" "}
              untuk armada sensor, dan pastikan perangkat baru berlogo{" "}
              <span className="font-semibold text-amber-300">Matter</span>.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Kombinasi ini memberi keseimbangan terbaik antara kecepatan,
              ketahanan baterai, dan masa depan terbuka.
            </p>
          </div>
        </div>

        <p className="text-center text-[11px] text-slate-600 sm:hidden [@media(max-height:600px)]:hidden">
          Geser kartu untuk melihat lainnya &rarr;
        </p>
      </div>
    </section>
  );
}
