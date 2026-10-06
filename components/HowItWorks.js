import { Radar, Globe, Cable, Workflow, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

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
    <section id="panduan" className="relative py-24">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Panduan Membangun"
            title={
              <>
                Dari rumah biasa ke rumah pintar dalam{" "}
                <span className="text-gradient">4 langkah</span>
              </>
            }
            description="Anda tidak perlu mengubah semuanya sekaligus. Mulai dari satu ruangan, rasakan manfaatnya, lalu kembangkan."
          />
        </Reveal>

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent lg:block" />
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 120}>
              <div className="group relative h-full">
                <div className="glass relative h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                  <div className="flex items-center justify-between">
                    <span className="relative grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20">
                      <s.icon
                        className="size-7 text-[#05070f]"
                        strokeWidth={2}
                      />
                    </span>
                    <span className="font-mono text-4xl font-bold text-white/10 transition group-hover:text-cyan-400/20">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                    {s.desc}
                  </p>
                </div>
                {i < steps.length - 1 ? (
                  <ArrowRight className="absolute -right-5 top-10 hidden size-5 text-cyan-400/40 lg:block" />
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
