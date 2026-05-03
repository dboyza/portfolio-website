import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  return (
    <a
      href="#home"
      className="fixed right-5 bottom-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-white/18 bg-ink-900 text-slate-200 shadow-lg shadow-black/40 outline outline-4 outline-signal-500/70 transition hover:text-white"
      aria-label="Back to top"
    >
      <ArrowUp size={22} />
    </a>
  );
};

export default BackToTop;
