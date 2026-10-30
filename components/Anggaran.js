import { Sprout, House, Building2, Check, TrendingDown, Info, ArrowRight, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const tiers = [
  {
    icon: Sprout,
    name: "Starter",
    tagline: "Mulai dari satu ruangan",
    price: "Rp 3,5 – 6 jt",
    target: "Rumah tipe 36–45 · 1–2 ruangan",
    items: [
      "Smart hub / gateway",
      "4 lampu pintar + 1 panel saklar",
      "2 smart plug pengukur daya",
      "1 kamera CCTV indoor",
      "2 sensor pintu & 1 bel video",
    ],
    saving: "Hemat listrik ±10–15%",
    accent: "from-emerald-400 to-teal-500",
    ring: "border-white/10",
  },
  {
    icon: House,
    name: "Comfort",
    tagline: "Rumah pintar menyeluruh",
    price: "Rp 12 – 20 jt",
    target: "Rumah tipe 60–90 · seluruh ruangan",
    items: [
      "Hub + router mesh Wi-Fi 6 (2 node)",
      "10 titik lampu & panel pintar",
      "Kunci pintu digital + bel video",
      "3 kamera CCTV AI + sirene",
      "Sensor gerak, asap, & gas",
      "IR blaster AC + gorden motoris",
    ],
    saving: "Hemat listrik ±20–25%",
    accent: "from-cyan-400 to-blue-600",
    ring: "border-cyan-400/40",
    popular: true,
  },
  {
    icon: Building2,
    name: "Premium",
    tagline: "Otomasi penuh, siap bertahun-tahun",
    price: "Rp 35 – 60 jt",
    target: "Rumah tipe 120+ · 2 lantai",
    items: [
      "Router mesh 3 node + backbone LAN",
      "20+ titik cahaya & skenario ruangan",
      "2 kunci digital + 6 kamera & NVR",
      "Energy monitor 3 fasa + termostat",
      "4 gorden motoris + robot vacuum",
      "Smart irrigation + speaker tiap area",
    ],
    saving: "Hemat listrik ±30%",
    accent: "from-violet-400 to-purple-600",
    ring: "border-white/10",
  },
];

export default function Anggaran({ onNavigate }) {
  return (
    <section className="no-scrollbar relative h-full overflow-y-auto">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/[0.07] blur-[130px]" />
      </div>

      <div className="relative mx-auto flex min-h-full w-full max-w-7xl flex-col justify-center gap-1 px-4 py-2.5 sm:gap-4 sm:py-6 lg:px-8">
        <SectionHeading
          eyebrow="Paket Anggaran"
          title={
            <>
              Berapa biaya membangun{" "}
              <span className="text-gradient">rumah pintar?</span>
            </>
          }
          description="Tiga tingkatan yang bisa dipilih sesuai tipe rumah dan budget — semuanya bisa dicicil bertahap per ruangan."
        />

        <div className="no-scrollbar swipe-fade -mx-4 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto scroll-px-4 px-4 pb-1 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:gap-3.5 sm:overflow-visible sm:px-0 md:grid-cols-3">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className={`relative flex w-[86%] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border bg-white/[0.03] p-3 backdrop-blur-sm transition hover:bg-white/[0.05] sm:w-auto sm:p-4 ${
                t.popular ? "border-cyan-400/40 shadow-lg shadow-cyan-500/10" : t.ring
              }`}
              style={{ animation: `fade-up 0.45s ease-out ${i * 70}ms both` }}
            >
              {t.popular && (
                <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#05070f]">
                  <Star className="size-2.5" fill="currentColor" /> Paling diminati
                </span>
              )}

              <div className="flex items-center gap-2.5">
                <span
                  className={`grid size-10 place-items-center rounded-xl bg-gradient-to-br ${t.accent} shadow-lg`}
                >
                  <t.icon className="size-5 text-[#05070f]" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{t.name}</h3>
                  <p className="text-[10.5px] text-slate-500">{t.tagline}</p>
                </div>
              </div>

              <p className="mt-2.5 text-lg font-bold tracking-tight text-white sm:mt-3 sm:text-xl">
                {t.price}
              </p>
              <p className="text-[10px] text-slate-500 [@media(max-height:600px)]:hidden">
                {t.target}
              </p>

              <ul className="mt-2 flex flex-1 flex-col gap-0.5 sm:mt-3 sm:gap-1.5">
                {t.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-1.5 text-[11px] leading-snug text-slate-300 sm:text-[11.5px] sm:leading-snug"
                  >
                    <Check className="mt-0.5 size-3 shrink-0 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-2 flex items-center gap-1.5 border-t border-white/[0.06] pt-2 text-[10px] font-medium text-lime-300 sm:mt-3 sm:pt-2.5 sm:text-[10.5px]">
                <TrendingDown className="size-3.5" /> {t.saving}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-3.5 py-2 sm:flex-row sm:px-4 sm:py-3">
          <p className="flex items-start gap-2 text-[10px] leading-relaxed text-slate-500 sm:text-[10.5px]">
            <Info className="mt-0.5 size-3.5 shrink-0 text-slate-600" />
            Kisaran harga pasar Indonesia 2026 untuk perangkat, belum termasuk
            jasa instalasi (±10–15%).
          </p>
          <button
            onClick={() => onNavigate?.("kontak")}
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-1.5 text-[11px] font-semibold text-[#05070f] transition hover:shadow-lg hover:shadow-cyan-500/25 sm:py-2 sm:text-xs"
          >
            Minta rincian biaya
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
