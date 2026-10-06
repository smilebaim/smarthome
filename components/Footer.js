import { House, ArrowUp } from "lucide-react";

const columns = [
  {
    title: "Jelajahi",
    links: [
      { label: "Keunggulan", href: "#fitur" },
      { label: "Perangkat", href: "#perangkat" },
      { label: "Protokol", href: "#protokol" },
      { label: "Panduan", href: "#panduan" },
    ],
  },
  {
    title: "Perangkat Populer",
    links: [
      { label: "Smart Hub", href: "#perangkat" },
      { label: "Lampu Pintar", href: "#perangkat" },
      { label: "Kunci Digital", href: "#perangkat" },
      { label: "CCTV AI", href: "#perangkat" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Kontak", href: "#kontak" },
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Syarat & Ketentuan", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#04060c]">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600">
                <House className="size-5 text-[#05070f]" strokeWidth={2.5} />
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">
                Nexa<span className="text-gradient">Home</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              Panduan dan galeri teknologi rumah pintar modern — perangkat,
              protokol, dan otomatisasi untuk hunian masa depan Anda.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-slate-500 transition hover:text-cyan-300"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-slate-600">
            &copy; 2026 NexaHome. Dibangun dengan Next.js &amp; Tailwind CSS.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-slate-400 transition hover:border-cyan-400/40 hover:text-white"
          >
            <ArrowUp className="size-3.5" />
            Kembali ke atas
          </a>
        </div>
      </div>
    </footer>
  );
}
