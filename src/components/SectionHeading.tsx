type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

const SectionHeading = ({ eyebrow, title, intro }: SectionHeadingProps) => {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && (
        <p className="mb-3 font-mono text-xs font-semibold tracking-[0.24em] text-gold-500 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-signal-500 to-gold-500" />
      {intro && <p className="mt-5 text-base leading-7 text-slate-400">{intro}</p>}
    </div>
  );
};

export default SectionHeading;
