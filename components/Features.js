import {
  Smartphone,
  ShieldCheck,
  Leaf,
  Workflow,
  Speaker,
  Globe,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

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
    <section className="no-scrollbar relative h-full overflow-y-auto">
      <div className="absolute -top-24 right-[-160px] h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-[-120px] left-[-140px] h-[280px] w-[280px] rounded-full bg-violet-600/10 blur-[110px]" />

      <div className="relative mx-auto flex min-h-full w-full max-w-7xl flex-col justify-center gap-5 px-4 py-6 lg:px-8">
        <SectionHeading
          eyebrow="Kenapa Rumah Pintar"
          title={
            <>
              Lebih dari sekadar gadget —{" "}
              <span className="text-gradient">gaya hidup baru</span>
            </>
          }
          description="Rumah pintar modern menyatukan perangkat agar bekerja otomatis untuk kenyamanan, keamanan, dan penghematan Anda."
        />

        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory items-center gap-4 overflow-x-auto px-4 pb-1 lg:mx-0 lg:grid lg:snap-none lg:grid-cols-3 lg:items-stretch lg:gap-5 lg:overflow-visible lg:px-0">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass group relative flex w-[78%] shrink-0 snap-center flex-col overflow-hidden rounded-2xl p-4 transition duration-300 hover:border-cyan-400/30 lg:w-auto lg:p-5"
              style={{ animation: `fade-up 0.5s ease-out ${i * 60}ms both` }}
            >
              <div
                className={`pointer-events-none absolute -right-14 -top-14 size-36 rounded-full bg-gradient-to-br ${f.accent} opacity-0 blur-3xl transition duration-500 group-hover:opacity-20`}
              />
              <span
                className={`relative grid size-11 place-items-center rounded-xl bg-gradient-to-br ${f.accent} shadow-lg`}
              >
                <f.icon className="size-5 text-[#05070f]" strokeWidth={2} />
              </span>
              <h3 className="relative mt-4 text-base font-semibold text-white">
                {f.title}
              </h3>
              <p className="relative mt-2 text-xs leading-relaxed text-slate-400 lg:line-clamp-3">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-slate-600 lg:hidden">
          Geser kartu untuk melihat lainnya &rarr;
        </p>
      </div>
    </section>
  );
}
