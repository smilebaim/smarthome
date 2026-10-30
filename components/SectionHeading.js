export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[9.5px] font-semibold uppercase tracking-widest text-cyan-300 sm:px-3.5 sm:text-[10px]">
        {eyebrow}
      </span>
      <h2 className="mt-2.5 text-[22px] font-bold leading-tight tracking-tight text-white sm:mt-3 sm:text-2xl lg:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-1.5 max-w-xl text-[13px] leading-relaxed text-slate-400 sm:mt-2 sm:text-sm">
          {description}
        </p>
      ) : null}
    </div>
  );
}
