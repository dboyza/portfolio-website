import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 560);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`fixed right-5 bottom-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-white/18 bg-ink-900 text-slate-200 shadow-lg shadow-black/40 outline outline-4 outline-signal-500/70 transition hover:text-white focus-visible:outline-gold-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={22} />
    </a>
  );
};

export default BackToTop;
