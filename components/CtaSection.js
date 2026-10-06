import { ArrowRight, Mail, Phone, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export default function CtaSection() {
  return (
    <section id="kontak" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-[#0a0f1e] to-violet-600/15 px-6 py-16 text-center sm:px-16">
            <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,black,transparent)]" />
            <div className="absolute -top-24 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[110px]" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium text-cyan-300">
                <Sparkles className="size-3.5" />
                Gratis konsultasi kebutuhan
              </span>
              <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
                Siap membangun{" "}
                <span className="text-gradient">rumah pintar</span> Anda?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
                Mulai dari satu lampu pintar hingga otomatisasi seluruh rumah —
                kami bantu merancang sistem yang tepat untuk kebutuhan dan
                anggaran Anda.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:halo@nexahome.id"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-7 py-3.5 text-sm font-semibold text-[#05070f] transition hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  <Mail className="size-4" />
                  Mulai Konsultasi
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="tel:+6281200000000"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/5"
                >
                  <Phone className="size-4" />
                  Hubungi Tim Kami
                </a>
              </div>

              <p className="mt-6 font-mono text-xs text-slate-500">
                halo@nexahome.id &middot; +62 812-0000-0000
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
