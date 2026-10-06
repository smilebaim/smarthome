import {
  Smartphone,
  ShieldCheck,
  Leaf,
  Workflow,
  Speaker,
  Globe,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const features = [
  {
    icon: Smartphone,
    title: "Satu Aplikasi, Semua Kendali",
    desc: "Lampu, kunci, AC, gorden, hingga CCTV — seluruh rumah dalam satu dashboard real-time di smartphone Anda.",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan Berlapis 24/7",
    desc: "Sensor pintu, deteksi gerak, dan kamera AI tetap siaga bahkan saat Anda tertidur atau jauh dari rumah.",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    icon: Leaf,
    title: "Efisiensi Energi Nyata",
    desc: "Matikan otomatis perangkat standby, atur suhu optimal, dan pantau konsumsi listrik per perangkat — hemat hingga 30%.",
    accent: "from-lime-400 to-green-500",
  },
  {
    icon: Workflow,
    title: "Otomasi Skenario Cerdas",
    desc: "Bukan sekadar remote control: sensor memicu aksi tanpa disentuh — lampu menyala saat pintu terbuka, alarm saat ada gerakan mencurigakan.",
    accent: "from-violet-400 to-purple-600",
  },
  {
    icon: Speaker,
    title: "Kendali Bebas Tangan",
    desc: "Perintahkan seluruh rumah lewat suara — terintegrasi dengan asisten suara dan speaker pintar utama.",
    accent: "from-fuchsia-400 to-pink-500",
  },
  {
    icon: Globe,
    title: "Terbuka & Siap Masa Depan",
    desc: "Perangkat berstandar Matter tidak terkunci pada satu vendor — kompatibel lintas ekosistem, aman untuk jangka panjang.",
    accent: "from-amber-400 to-orange-500",
  },
];

export default function Features() {
  return (
    <section id="fitur" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Kenapa Rumah Pintar"
            title={
              <>
                Lebih dari sekadar gadget —{" "}
                <span className="text-gradient">gaya hidup baru</span>
              </>
            }
            description="Rumah pintar modern bukan tentang menumpuk perangkat, melainkan menyatukan mereka agar bekerja otomatis untuk kenyamanan, keamanan, dan penghematan Anda."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 100}>
              <div className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-gradient-to-br ${f.accent} opacity-0 blur-3xl transition duration-500 group-hover:opacity-20`}
                />
                <span
                  className={`relative grid size-12 place-items-center rounded-xl bg-gradient-to-br ${f.accent} shadow-lg`}
                >
                  <f.icon className="size-6 text-[#05070f]" strokeWidth={2} />
                </span>
                <h3 className="relative mt-5 text-lg font-semibold text-white">
                  {f.title}
                </h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-slate-400">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
