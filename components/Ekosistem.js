import {
  Smartphone,
  Apple,
  Speaker,
  Cpu,
  Boxes,
  Sparkles,
  Check,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const platforms = [
  {
    icon: Smartphone,
    name: "Google Home",
    tagline: "Paling mudah untuk pemula",
    desc: "Asisten Google memahami perintah sehari-hari dengan natural. Integrasi Nest, Chromecast, dan ribuan perangkat Matter berjalan mulus di Android maupun iOS.",
    chips: ["Android & Nest", "Perintah suara natural", "Setup cepat"],
    accent: "text-cyan-300",
    fit: "Keluarga yang ingin langsung pakai tanpa banyak setting.",
  },
  {
    icon: Apple,
    name: "Apple Home",
    tagline: "Privasi lokal maksimal",
    desc: "Otomasi berjalan di rumah lewat HomePod atau Apple TV sebagai hub — rekaman kamera diproses lokal (HomeKit Secure Video) tanpa dikirim ke cloud.",
    chips: ["HomeKit Secure Video", "Thread border router", "Shortcuts"],
    accent: "text-slate-200",
    fit: "Pengguna iPhone yang mengutamakan privasi data.",
  },
  {
    icon: Speaker,
    name: "Amazon Alexa",
    tagline: "Ekosistem perangkat terluas",
    desc: "Ribuan skill dan produk kompatibel, rutinitas berbasis suara yang kaya, serta speaker Echo terjangkau di setiap ruangan.",
    chips: ["Skill terbanyak", "Echo murah", "Rutinitas fleksibel"],
    accent: "text-sky-300",
    fit: "Rumah dengan banyak perangkat lintas merek.",
  },
  {
    icon: Cpu,
    name: "Home Assistant",
    tagline: "100% lokal & tak terbatas",
    desc: "Open source dan berjalan di server mini di rumah. Semua otomasi tetap hidup tanpa internet, dashboard bisa dikustom total, dan integrasi mencapai ribuan merek.",
    chips: ["Tanpa cloud", "Open source", "Sangat fleksibel"],
    accent: "text-emerald-300",
    fit: "Yang nyaman dengan sedikit konfigurasi teknis.",
  },
  {
    icon: Boxes,
    name: "SmartThings",
    tagline: "Seimbang & ramah Samsung",
    desc: "Pusat kendali dari Samsung yang mendukung Matter, terintegrasi dengan TV dan peralatan rumah tangga Samsung, serta mudah dipakai anggota keluarga.",
    chips: ["Matter native", "Integrasi Samsung TV", "Multi-pengguna"],
    accent: "text-violet-300",
    fit: "Rumah dengan TV atau peralatan Samsung.",
  },
];

export default function Ekosistem() {
  return (
    <section className="no-scrollbar relative h-full overflow-y-auto">
      <div className="absolute right-[-180px] top-1/3 h-[340px] w-[340px] rounded-full bg-emerald-500/10 blur-[130px]" />

      <div className="relative mx-auto flex min-h-full w-full max-w-7xl flex-col justify-center gap-4 px-4 py-6 lg:px-8">
        <SectionHeading
          eyebrow="Ekosistem Platform"
          title={
            <>
              Pilih <span className="text-gradient">otak rumah</span> yang
              cocok dengan gaya hidup Anda
            </>
          }
          description="Platform adalah tempat semua perangkat bertemu. Yang terbaik adalah yang sesuai dengan ponsel, kebiasaan, dan tingkat kenyamanan teknis Anda."
        />

        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory items-stretch gap-3.5 overflow-x-auto px-4 pb-1 lg:mx-0 lg:grid lg:snap-none lg:grid-cols-3 lg:gap-4 lg:overflow-visible lg:px-0">
          {platforms.map((p, i) => (
            <div
              key={p.name}
              className="glass group relative flex w-[82%] shrink-0 snap-center flex-col rounded-2xl p-4 transition duration-300 hover:border-cyan-400/30 lg:w-auto"
              style={{ animation: `fade-up 0.45s ease-out ${i * 55}ms both` }}
            >
              <div className="flex items-center gap-2.5">
                <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.05] transition group-hover:border-cyan-400/40">
                  <p.icon className={`size-5 ${p.accent}`} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-white">{p.name}</h3>
                  <p className="text-[10.5px] text-slate-500">{p.tagline}</p>
                </div>
              </div>
              <p className="mt-2.5 flex-1 text-[11.5px] leading-relaxed text-slate-400 line-clamp-4">
                {p.desc}
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {p.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-1.5 py-0.5 text-[9.5px] font-medium text-slate-300"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-2.5 border-t border-white/[0.06] pt-2 text-[10.5px] leading-relaxed text-slate-500">
                <span className="text-slate-400">Cocok untuk: </span>
                {p.fit}
              </p>
            </div>
          ))}

          <div
            className="relative flex w-[82%] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-600/10 p-4 lg:w-auto"
            style={{ animation: "fade-up 0.45s ease-out 280ms both" }}
          >
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg bg-cyan-400/15">
                <Sparkles className="size-4 text-cyan-300" />
              </span>
              <h3 className="text-[15px] font-semibold text-white">
                Bingung memilih?
              </h3>
            </div>
            <ul className="mt-3 flex flex-col gap-2 text-[11px] leading-relaxed text-slate-300">
              {[
                "Pakai iPhone? Mulai dari Apple Home.",
                "Ingin serba lokal tanpa cloud? Home Assistant.",
                "Butuh paling simpel? Google Home atau Alexa.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-1.5">
                  <Check className="mt-0.5 size-3 shrink-0 text-cyan-300" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-3 text-[10.5px] leading-relaxed text-slate-400">
              Kabar baiknya: berkat{" "}
              <span className="font-semibold text-amber-300">Matter</span>,
              perangkat yang sama bisa dipakai di lebih dari satu platform —
              Anda tidak benar-benar terkunci.
            </p>
          </div>
        </div>

        <p className="text-center text-[11px] text-slate-600 lg:hidden">
          Geser kartu untuk melihat platform lainnya &rarr;
        </p>
      </div>
    </section>
  );
}
