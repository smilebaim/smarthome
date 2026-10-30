import { ArrowRight, Mail, Phone, Sparkles } from "lucide-react";

export default function Kontak({ onNavigate }) {
  return (
    <section className="no-scrollbar relative h-full overflow-y-auto">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_65%_60%_at_50%_45%,black,transparent)]" />
      <div className="absolute -top-24 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[110px]" />

      <div className="relative mx-auto flex min-h-full w-full max-w-3xl flex-col items-center justify-center gap-4 px-4 py-6 sm:px-6">
        <div
          className="animate-fade-up relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-[#0a0f1e] to-violet-600/15 px-6 py-8 text-center sm:px-12 sm:py-10"
        >
          <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,black,transparent)]" />
          <div className="absolute -top-20 left-1/2 h-56 w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[100px]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium text-cyan-300">
              <Sparkles className="size-3.5" />
              Gratis konsultasi kebutuhan
            </span>
            <h2 className="mx-auto mt-4 max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Siap membangun{" "}
              <span className="text-gradient">rumah pintar</span> Anda?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-400">
              Dari satu lampu pintar hingga otomatisasi seluruh rumah — kami
              bantu merancang sistem yang tepat untuk kebutuhan dan anggaran
              Anda.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:halo@nexahome.id"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 text-sm font-semibold text-[#05070f] transition hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <Mail className="size-4" />
                Mulai Konsultasi
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+6281200000000"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/5"
              >
                <Phone className="size-4" />
                Hubungi Tim Kami
              </a>
            </div>

            <p className="mt-5 font-mono text-[11px] text-slate-500">
              halo@nexahome.id &middot; +62 812-0000-0000
            </p>
          </div>
        </div>

        <footer
          className="animate-fade-up-delay-1 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
            {[
              { id: "beranda", label: "Beranda" },
              { id: "perangkat", label: "Perangkat" },
              { id: "protokol", label: "Protokol" },
              { id: "panduan", label: "Panduan" },
            ].map((l) => (
              <button
                key={l.id}
                onClick={() => onNavigate(l.id)}
                className="text-slate-500 transition hover:text-cyan-300"
              >
                {l.label}
              </button>
            ))}
            <span className="text-slate-700">&middot;</span>
            <span className="text-slate-600">Kebijakan Privasi</span>
            <span className="text-slate-700">&middot;</span>
            <span className="text-slate-600">Syarat &amp; Ketentuan</span>
          </div>
          <p className="mt-2.5 text-center text-[11px] text-slate-600">
            &copy; 2026 NexaHome. Dibangun dengan Next.js &amp; Tailwind CSS.
          </p>
        </footer>
      </div>
    </section>
  );
}
