import { Wifi, Radio, Waves, Globe, Bluetooth } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

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
    <section id="protokol" className="relative py-24">
      <div className="absolute right-[-180px] top-1/4 h-[380px] w-[380px] rounded-full bg-violet-600/10 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Protokol Jaringan"
            title={
              <>
                Bahasa yang dipakai{" "}
                <span className="text-gradient">rumah pintar</span> untuk
                berbicara
              </>
            }
            description="Rumah pintar modern memadukan beberapa protokol sekaligus — masing-masing punya peran. Pahami mereka sebelum membeli perangkat pertama Anda."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {protocols.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 100} className={i === 4 ? "lg:col-span-1" : ""}>
              <div className="group glass h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                <div className="flex items-center gap-3.5">
                  <span className="grid size-12 place-items-center rounded-xl border border-white/10 bg-white/[0.05] transition group-hover:border-cyan-400/40">
                    <p.icon className={`size-6 ${p.accent}`} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {p.name}
                    </h3>
                    <p className="text-xs text-slate-500">{p.tagline}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {p.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={200}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-600/10 p-6">
              <h3 className="text-lg font-semibold text-white">
                Rumus praktisnya
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Gunakan <span className="font-semibold text-cyan-300">Wi-Fi</span>{" "}
                untuk kamera &amp; speaker,{" "}
                <span className="font-semibold text-violet-300">Zigbee</span>{" "}
                untuk armada sensor, dan pastikan perangkat baru Anda
                berlogo <span className="font-semibold text-amber-300">Matter</span>.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Kombinasi ini memberi keseimbangan terbaik antara kecepatan,
                ketahanan baterai, dan masa depan yang terbuka.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
