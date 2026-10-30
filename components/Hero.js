import {
  ArrowRight,
  Lightbulb,
  Thermometer,
  Droplets,
  ShieldCheck,
  Camera,
  Leaf,
  Moon,
  Check,
  Wifi,
  Sparkles,
  Cpu,
  Globe,
  Wallet,
  ChevronRight,
} from "lucide-react";

const quickStats = [
  { icon: Cpu, value: "20", label: "Jenis Perangkat", tone: "text-cyan-300", target: "perangkat" },
  { icon: Globe, value: "5", label: "Ekosistem Platform", tone: "text-violet-300", target: "ekosistem" },
  { icon: Wallet, value: "3", label: "Paket Anggaran", tone: "text-amber-300", target: "anggaran" },
  { icon: Leaf, value: "30%", label: "Potensi Hemat Energi", tone: "text-lime-300", target: "panduan" },
];

const energyBars = ["h-6", "h-10", "h-8", "h-14", "h-11", "h-16", "h-7"];

export default function Hero({ onNavigate }) {
  return (
    <section className="no-scrollbar relative h-full overflow-y-auto">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute -top-32 left-1/2 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[130px]" />
        <div className="absolute bottom-[-100px] right-[-120px] h-[300px] w-[300px] rounded-full bg-violet-600/15 blur-[110px]" />
      </div>

      <div className="relative mx-auto grid min-h-full w-full max-w-7xl content-center gap-5 px-4 py-4 sm:gap-6 sm:px-5 sm:py-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
        <div className="animate-fade-up-delay-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3.5 py-1.5 text-[11px] font-medium text-cyan-300 sm:text-xs">
            <Sparkles className="size-3.5" />
            Teknologi Rumah Modern &middot; Era IoT 2026
          </div>

          <h1 className="mt-3 text-[clamp(24px,7vw,28px)] font-bold leading-[1.12] tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-[2.7rem]">
            Ubah Rumah Biasa Menjadi{" "}
            <span className="text-gradient">Rumah Pintar</span> Masa Depan
          </h1>

          <p className="mt-2.5 max-w-xl text-[13px] leading-relaxed text-slate-400 [@media(max-height:600px)]:hidden sm:mt-3 sm:text-base lg:line-clamp-none line-clamp-3">
            Perangkat, protokol, ekosistem, anggaran, hingga checklist keamanan
            — panduan lengkap membangun smart home modern dari lampu pintar
            sampai otomatisasi penuh.
          </p>

          <div className="mt-4 flex w-full flex-wrap items-center justify-center gap-2.5 sm:mt-5 sm:gap-3 lg:justify-start">
            <button
              onClick={() => onNavigate("perangkat")}
              className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 text-sm font-semibold text-[#05070f] transition active:scale-[0.98] hover:shadow-xl hover:shadow-cyan-500/30"
            >
              Jelajahi Perangkat
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onNavigate("panduan")}
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition active:scale-[0.98] hover:border-cyan-400/40 hover:bg-white/5"
            >
              Cara Membangunnya
            </button>
          </div>

          <div className="mt-4 grid w-full max-w-xl grid-cols-2 gap-2 sm:mt-6 sm:grid-cols-4">
            {quickStats.map((s) => (
              <button
                key={s.label}
                onClick={() => onNavigate(s.target)}
                className="glass group rounded-xl px-3 py-2.5 text-left transition active:scale-[0.98] hover:border-cyan-400/30"
                aria-label={`${s.value} ${s.label} — buka halaman`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <s.icon className={`size-4 ${s.tone}`} />
                    <span className="text-lg font-bold text-white">
                      {s.value}
                    </span>
                  </div>
                  <ChevronRight className="size-3.5 text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-cyan-300" />
                </div>
                <p className="mt-0.5 text-[10px] leading-tight text-slate-500">
                  {s.label}
                </p>
              </button>
            ))}
          </div>

          <div className="mt-3 hidden w-full max-w-xl items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 [@media(min-height:800px)]:flex">
            <div className="flex items-center gap-2">
              <span className="pulse-dot size-1.5 rounded-full bg-emerald-400" />
              <p className="text-[11px] text-slate-300">
                Rumah Utama <span className="text-emerald-300">· online</span>
              </p>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <Thermometer className="size-3 text-cyan-300" /> 24&deg;C
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="size-3 text-emerald-300" /> 6 sensor
              </span>
              <span className="flex items-center gap-1">
                <Leaf className="size-3 text-lime-300" /> -18%
              </span>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-600/20 blur-2xl" />

          <div className="glass animate-float-slow relative rounded-2xl p-4 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Rumah Utama</p>
                <p className="text-xs text-slate-500">Dashboard Kontrol</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <span className="pulse-dot size-1.5 rounded-full bg-emerald-400" />
                Semua Sistem Online
              </span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
                <div className="flex items-center justify-between">
                  <Lightbulb className="size-5 text-amber-300" />
                  <span className="rounded-full bg-amber-400/15 px-2 py-0.5 text-[10px] font-semibold text-amber-300">
                    ON
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-400">Ruang Tamu</p>
                <p className="text-sm font-semibold text-white">Terang 80%</p>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-amber-300 to-amber-500" />
                </div>
              </div>

              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
                <Thermometer className="size-5 text-cyan-300" />
                <p className="mt-2 text-xs text-slate-400">Suhu Ruang</p>
                <p className="text-sm font-semibold text-white">24&deg;C</p>
                <p className="mt-0.5 text-[11px] text-emerald-400">
                  Mode Hemat Energi
                </p>
              </div>

              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
                <Droplets className="size-5 text-sky-300" />
                <p className="mt-2 text-xs text-slate-400">Kelembapan</p>
                <p className="text-sm font-semibold text-white">61%</p>
                <p className="mt-0.5 text-[11px] text-slate-500">Ideal</p>
              </div>

              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
                <ShieldCheck className="size-5 text-emerald-300" />
                <p className="mt-2 text-xs text-slate-400">Keamanan</p>
                <p className="text-sm font-semibold text-white">Berjaga</p>
                <p className="mt-0.5 text-[11px] text-slate-500">6 sensor aktif</p>
              </div>
            </div>

            <div className="mt-2.5 rounded-xl border border-white/8 bg-white/[0.03] p-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-400">
                  Konsumsi Energi Mingguan
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                  <Leaf className="size-3" /> -18%
                </span>
              </div>
              <div className="mt-2 flex h-16 items-end gap-2">
                {energyBars.map((h, i) => (
                  <div key={i} className="flex-1">
                    <div
                      className={`bar-anim ${h} rounded-t-md bg-gradient-to-t from-cyan-500/60 to-cyan-300/90`}
                      style={{ animationDelay: `${i * 90}ms` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2.5 space-y-1.5">
              {[
                { icon: Moon, text: "Mode Malam", time: "21:00 WIB" },
                { icon: Wifi, text: "Backup jaringan aktif", time: "Selalu" },
              ].map((a) => (
                <div
                  key={a.text}
                  className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2"
                >
                  <a.icon className="size-4 text-violet-300" />
                  <p className="flex-1 text-xs text-slate-300">{a.text}</p>
                  <span className="text-[10px] text-slate-500">{a.time}</span>
                  <Check className="size-3.5 text-emerald-400" />
                </div>
              ))}
            </div>
          </div>

          <div className="glass animate-float absolute -right-8 -top-12 hidden rounded-xl p-3 shadow-xl xl:block">
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg bg-rose-500/15">
                <Camera className="size-4 text-rose-300" />
              </span>
              <div>
                <p className="text-xs font-semibold text-white">Kamera Depan</p>
                <p className="flex items-center gap-1.5 text-[10px] text-slate-400">
                  <span className="pulse-red size-1.5 rounded-full bg-rose-400" />
                  Merekam &middot; deteksi orang
                </p>
              </div>
            </div>
          </div>

          <div className="glass animate-float absolute -bottom-12 -left-8 hidden rounded-xl p-3 shadow-xl xl:block">
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg bg-emerald-500/15">
                <Leaf className="size-4 text-emerald-300" />
              </span>
              <div>
                <p className="text-xs font-semibold text-white">Energi Hari Ini</p>
                <p className="text-[10px] text-slate-400">
                  Hemat Rp 12.400 dari target
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
