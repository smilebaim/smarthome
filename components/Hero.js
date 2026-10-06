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
} from "lucide-react";

const quickStats = [
  { value: "15+", label: "Jenis Perangkat" },
  { value: "5", label: "Protokol Standar" },
  { value: "24/7", label: "Monitoring Real-Time" },
  { value: "30%", label: "Potensi Hemat Energi" },
];

const energyBars = [
  { h: "h-8", d: "delay-0" },
  { h: "h-14", d: "delay-100" },
  { h: "h-11", d: "delay-200" },
  { h: "h-20", d: "delay-300" },
  { h: "h-16", d: "delay-[400ms]" },
  { h: "h-24", d: "delay-500" },
  { h: "h-9", d: "delay-[600ms]" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_35%,black,transparent)]" />
      <div className="absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[140px]" />
      <div className="absolute top-40 right-[-120px] h-[380px] w-[380px] rounded-full bg-violet-600/15 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div>
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium text-cyan-300">
            <Sparkles className="size-3.5" />
            Teknologi Rumah Modern &middot; Era IoT 2026
          </div>

          <h1 className="animate-fade-up-delay-1 mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Ubah Rumah Biasa Menjadi{" "}
            <span className="text-gradient">Rumah Pintar</span> Masa Depan
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Kenali perangkat, protokol, dan langkah membangun smart home
            modern — dari lampu pintar dan kunci digital hingga otomatisasi
            penuh yang dikendalikan dari ujung jari Anda.
          </p>

          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#perangkat"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-7 py-3.5 text-sm font-semibold text-[#05070f] transition hover:shadow-xl hover:shadow-cyan-500/30"
            >
              Jelajahi Perangkat
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#panduan"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/5"
            >
              Cara Membangunnya
            </a>
          </div>

          <dl className="animate-fade-up-delay-3 mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {quickStats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-bold text-white">
                  <span className="text-gradient">{s.value}</span>
                </dt>
                <dd className="mt-1 text-xs leading-snug text-slate-500">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-600/20 blur-2xl" />

          <div className="glass animate-float-slow relative rounded-2xl p-5 shadow-2xl shadow-black/40">
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

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3.5">
                <div className="flex items-center justify-between">
                  <Lightbulb className="size-5 text-amber-300" />
                  <span className="rounded-full bg-amber-400/15 px-2 py-0.5 text-[10px] font-semibold text-amber-300">
                    ON
                  </span>
                </div>
                <p className="mt-2.5 text-xs text-slate-400">Ruang Tamu</p>
                <p className="text-sm font-semibold text-white">Terang 80%</p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-amber-300 to-amber-500" />
                </div>
              </div>

              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3.5">
                <Thermometer className="size-5 text-cyan-300" />
                <p className="mt-2.5 text-xs text-slate-400">Suhu Ruang</p>
                <p className="text-sm font-semibold text-white">24&deg;C</p>
                <p className="mt-1 text-[11px] text-emerald-400">
                  Mode Hemat Energi
                </p>
              </div>

              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3.5">
                <Droplets className="size-5 text-sky-300" />
                <p className="mt-2.5 text-xs text-slate-400">Kelembapan</p>
                <p className="text-sm font-semibold text-white">61%</p>
                <p className="mt-1 text-[11px] text-slate-500">Ideal</p>
              </div>

              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3.5">
                <ShieldCheck className="size-5 text-emerald-300" />
                <p className="mt-2.5 text-xs text-slate-400">Keamanan</p>
                <p className="text-sm font-semibold text-white">Berjaga</p>
                <p className="mt-1 text-[11px] text-slate-500">
                  6 sensor aktif
                </p>
              </div>
            </div>

            <div className="mt-3 rounded-xl border border-white/8 bg-white/[0.03] p-3.5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-400">
                  Konsumsi Energi Mingguan
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                  <Leaf className="size-3" /> -18%
                </span>
              </div>
              <div className="mt-3 flex h-24 items-end gap-2">
                {energyBars.map((b, i) => (
                  <div key={i} className="flex-1">
                    <div
                      className={`bar-anim ${b.h} ${b.d} rounded-t-md bg-gradient-to-t from-cyan-500/60 to-cyan-300/90`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 space-y-2">
              {[
                { icon: Moon, text: "Mode Malam", time: "21:00 WIB" },
                { icon: Wifi, text: "Backup jaringan aktif", time: "Selalu" },
              ].map((a) => (
                <div
                  key={a.text}
                  className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.03] px-3.5 py-2.5"
                >
                  <a.icon className="size-4 text-violet-300" />
                  <p className="flex-1 text-xs text-slate-300">{a.text}</p>
                  <span className="text-[10px] text-slate-500">{a.time}</span>
                  <Check className="size-3.5 text-emerald-400" />
                </div>
              ))}
            </div>
          </div>

          <div className="glass animate-float absolute -right-4 -top-8 hidden rounded-xl p-3.5 shadow-xl sm:block lg:-right-8">
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-lg bg-rose-500/15">
                <Camera className="size-4.5 text-rose-300" />
              </span>
              <div>
                <p className="text-xs font-semibold text-white">
                  Kamera Depan
                </p>
                <p className="flex items-center gap-1.5 text-[10px] text-slate-400">
                  <span className="pulse-red size-1.5 rounded-full bg-rose-400" />
                  Merekam &middot; deteksi orang
                </p>
              </div>
            </div>
          </div>

          <div className="glass animate-float absolute -bottom-8 -left-4 hidden rounded-xl p-3.5 shadow-xl sm:block lg:-left-8">
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-lg bg-emerald-500/15">
                <Leaf className="size-4.5 text-emerald-300" />
              </span>
              <div>
                <p className="text-xs font-semibold text-white">
                  Energi Hari Ini
                </p>
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
