import { Radar, Globe, Cable, Workflow } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    icon: Radar,
    step: "01",
    title: "Audit & Perencanaan",
    desc: "Petakan kebutuhan rumah: titik sensor, jalur listrik, jangkauan Wi-Fi, dan area yang butuh pengawasan kamera.",
  },
  {
    icon: Globe,
    step: "02",
    title: "Pilih Ekosistem",
    desc: "Tentukan platform pusat — Google Home, Apple Home, Alexa, atau Home Assistant — beserta protokol utama rumah Anda.",
  },
  {
    icon: Cable,
    step: "03",
    title: "Instalasi & Koneksi",
    desc: "Pasang perangkat satu per satu, pairing ke hub, lalu susun seluruh kontrol ke dalam satu dashboard rapi.",
  },
  {
    icon: Workflow,
    step: "04",
    title: "Otomasi & Monitoring",
    desc: "Bangun skenario: mode berangkat, mode tidur, notifikasi keamanan — lalu biarkan rumah bekerja untuk Anda.",
  },
];

export default function HowItWorks() {
  return (
    <section className="no-scrollbar relative h-full overflow-y-auto">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_50%,black,transparent)]" />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto flex min-h-full w-full max-w-7xl flex-col justify-center gap-5 px-4 py-6 lg:px-8">
        <SectionHeading
          eyebrow="Panduan Membangun"
          title={
            <>
              Dari rumah biasa ke rumah pintar dalam{" "}
              <span className="text-gradient">4 langkah</span>
            </>
          }
          description="Tidak perlu mengubah semuanya sekaligus. Mulai dari satu ruangan, rasakan manfaatnya, lalu kembangkan."
        />

        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto px-4 pb-1 lg:mx-0 lg:grid lg:snap-none lg:grid-cols-4 lg:gap-4 lg:overflow-visible lg:px-0">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="glass group relative flex w-[70%] shrink-0 snap-center flex-col rounded-2xl p-4 transition duration-300 hover:border-cyan-400/30 sm:w-[46%] lg:w-auto"
              style={{ animation: `fade-up 0.45s ease-out ${i * 70}ms both` }}
            >
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20">
                  <s.icon className="size-6 text-[#05070f]" strokeWidth={2} />
                </span>
                <span className="font-mono text-3xl font-bold text-white/10 transition group-hover:text-cyan-400/25">
                  {s.step}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400 lg:line-clamp-5">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-slate-600 lg:hidden">
          Geser kartu untuk melihat langkah lainnya &rarr;
        </p>
      </div>
    </section>
  );
}
