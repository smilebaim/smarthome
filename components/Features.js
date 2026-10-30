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
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 right-[-160px] h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-[-120px] left-[-140px] h-[280px] w-[280px] rounded-full bg-violet-600/10 blur-[110px]" />
      </div>

      <div className="relative mx-auto flex min-h-full w-full max-w-7xl flex-col justify-center gap-3 px-4 py-4 sm:gap-5 sm:py-6 lg:px-8">
        <SectionHeading
          eyebrow="Kenapa Rumah Pintar"
          title={
            <>
              Lebih dari sekadar gadget —{" "}
              <span className="text-gradient">gaya hidup baru</span>
            </>
          }
          description="Rumah pintar modern menyatukan perangkat agar bekerja otomatis untuk kenyamanan, keamanan, dan penghematan Anda."
          descriptionClassName="[@media(max-height:700px)]:hidden"
        />

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass group relative flex flex-col overflow-hidden rounded-xl p-2.5 transition duration-300 hover:border-cyan-400/30 sm:rounded-2xl sm:p-4 lg:p-5"
              style={{ animation: `fade-up 0.5s ease-out ${i * 60}ms both` }}
            >
              <div
                className={`pointer-events-none absolute -right-14 -top-14 size-36 rounded-full bg-gradient-to-br ${f.accent} opacity-0 blur-3xl transition duration-500 group-hover:opacity-20`}
              />
              <span
                className={`relative grid size-8 place-items-center rounded-lg bg-gradient-to-br ${f.accent} shadow-lg sm:size-11 sm:rounded-xl`}
              >
                <f.icon className="size-4 text-[#05070f] sm:size-5" strokeWidth={2} />
              </span>
              <h3 className="relative mt-2 text-[12.5px] font-semibold leading-snug text-white sm:mt-4 sm:text-base">
                {f.title}
              </h3>
              <p className="relative mt-1 text-[10px] leading-relaxed text-slate-400 line-clamp-1 [@media(min-height:700px)]:line-clamp-2 sm:mt-2 sm:text-xs lg:line-clamp-3 [@media(max-height:600px)]:hidden">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
