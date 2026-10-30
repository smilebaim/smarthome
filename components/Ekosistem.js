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
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-180px] top-1/3 h-[340px] w-[340px] rounded-full bg-emerald-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto flex min-h-full w-full max-w-7xl flex-col justify-center gap-3 px-4 py-4 sm:gap-4 sm:py-6 lg:gap-3 lg:py-3 lg:px-8">
        <SectionHeading
          eyebrow="Ekosistem Platform"
          title={
            <>
              Pilih <span className="text-gradient">otak rumah</span> yang
              cocok dengan gaya hidup Anda
            </>
          }
          description="Platform adalah tempat semua perangkat bertemu. Yang terbaik adalah yang sesuai dengan ponsel, kebiasaan, dan tingkat kenyamanan teknis Anda."
          descriptionClassName="[@media(max-height:700px)]:hidden"
        />

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3.5 lg:grid-cols-3">
          {platforms.map((p, i) => (
            <div
              key={p.name}
              className="glass group relative flex flex-col rounded-xl p-2.5 transition duration-300 hover:border-cyan-400/30 sm:rounded-2xl sm:p-4 lg:p-3.5"
              style={{ animation: `fade-up 0.45s ease-out ${i * 55}ms both` }}
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.05] transition group-hover:border-cyan-400/40 sm:size-10 sm:rounded-xl">
                  <p.icon className={`size-4 sm:size-5 ${p.accent}`} strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-[12.5px] font-semibold text-white sm:text-[15px]">{p.name}</h3>
                  <p className="line-clamp-1 text-[9px] text-slate-500 sm:text-[10.5px]">{p.tagline}</p>
                </div>
              </div>
              <p className="mt-2 flex-1 text-[10px] leading-relaxed text-slate-400 line-clamp-2 sm:mt-2.5 sm:text-[11.5px] lg:line-clamp-3 [@media(max-height:650px)]:hidden">
                {p.desc}
              </p>
              <div className="mt-2 flex flex-wrap gap-1 sm:mt-2.5 sm:gap-1.5 [@media(max-height:700px)]:hidden hide-on-short-tablet">
                {p.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-1.5 py-0.5 text-[9px] font-medium text-slate-300 sm:text-[9.5px]"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-2 hidden border-t border-white/[0.06] pt-2 text-[9.5px] leading-relaxed text-slate-500 sm:block sm:mt-2.5 sm:text-[10.5px] lg:line-clamp-2 hide-on-short-tablet">
                <span className="text-slate-400">Cocok untuk: </span>
                {p.fit}
              </p>
            </div>
          ))}

          <div
            className="relative flex flex-col overflow-hidden rounded-xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-600/10 p-3 sm:rounded-2xl sm:p-4"
            style={{ animation: "fade-up 0.45s ease-out 280ms both" }}
          >
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-lg bg-cyan-400/15 sm:size-8">
                <Sparkles className="size-3.5 text-cyan-300 sm:size-4" />
              </span>
              <h3 className="text-[12.5px] font-semibold text-white sm:text-[15px]">
                Bingung memilih?
              </h3>
            </div>
            <ul className="mt-2 flex flex-col gap-1.5 text-[10px] leading-relaxed text-slate-300 sm:mt-3 sm:gap-2 sm:text-[11px]">
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
            <p className="mt-auto hidden pt-3 text-[10.5px] leading-relaxed text-slate-400 sm:block">
              Kabar baiknya: berkat{" "}
              <span className="font-semibold text-amber-300">Matter</span>,
              perangkat yang sama bisa dipakai di lebih dari satu platform —
              Anda tidak benar-benar terkunci.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
