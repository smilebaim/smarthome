import {
  ArrowRight,
  Mail,
  Phone,
  Sparkles,
  MessageCircle,
  Clock,
  MapPin,
} from "lucide-react";

const WA_NUMBER = "6281200000000";
const WA_TEXT = encodeURIComponent(
  "Halo NexaHome, saya ingin konsultasi membangun smart home.",
);

export default function Kontak({ onNavigate }) {
  return (
    <section className="no-scrollbar relative h-full overflow-y-auto">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_65%_60%_at_50%_45%,black,transparent)]" />
      <div className="absolute -top-24 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[110px]" />

      <div className="relative mx-auto flex min-h-full w-full max-w-3xl flex-col items-center justify-center gap-4 px-4 py-6 sm:px-6">
        <div className="animate-fade-up relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-[#0a0f1e] to-violet-600/15 px-6 py-7 text-center sm:px-12 sm:py-9">
          <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,black,transparent)]" />
          <div className="absolute -top-20 left-1/2 h-56 w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[100px]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium text-cyan-300">
              <Sparkles className="size-3.5" />
              Gratis konsultasi kebutuhan
            </span>
            <h2 className="mx-auto mt-3.5 max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Siap membangun{" "}
              <span className="text-gradient">rumah pintar</span> Anda?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-400">
              Ceritakan tipe rumah, ruangan prioritas, dan budget Anda — kami
              susun rekomendasi perangkat, protokol, serta tahapan
              pemasangannya.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 px-6 py-3 text-sm font-semibold text-[#05070f] transition hover:shadow-xl hover:shadow-emerald-500/30"
              >
                <MessageCircle className="size-4" />
                Chat via WhatsApp
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:halo@nexahome.id"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/5"
              >
                <Mail className="size-4" />
                Kirim Email
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[11px] text-slate-500">
              <a
                href="tel:+6281200000000"
                className="flex items-center gap-1.5 transition hover:text-cyan-300"
              >
                <Phone className="size-3" /> +62 812-0000-0000
              </a>
              <span className="flex items-center gap-1.5">
                <Mail className="size-3" /> halo@nexahome.id
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3" /> Dibalas &lt; 1 hari kerja
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3" /> Konsultasi online seluruh Indonesia
              </span>
            </div>
          </div>
        </div>

        <footer className="animate-fade-up-delay-1 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
            {[
              { id: "beranda", label: "Beranda" },
              { id: "perangkat", label: "Perangkat" },
              { id: "protokol", label: "Protokol" },
              { id: "ekosistem", label: "Ekosistem" },
              { id: "panduan", label: "Panduan" },
              { id: "anggaran", label: "Anggaran" },
              { id: "faq", label: "FAQ" },
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
