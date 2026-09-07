import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setIsVisible(window.scrollY > 560);
      setProgress(scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <a
      href="#home"
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      onClick={() =>
        document.getElementById('home')?.focus({ preventScroll: true })
      }
      className={`fixed right-5 bottom-5 z-40 grid h-12 w-12 place-items-center rounded-full border-[3px] border-transparent bg-ink-900 text-slate-200 shadow-lg shadow-black/40 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      style={{
        background: `linear-gradient(var(--back-to-top-surface), var(--back-to-top-surface)) padding-box, conic-gradient(#3b82f6 ${
          Math.min(Math.max(progress, 0), 1) * 360
        }deg, var(--back-to-top-track) 0deg) border-box`,
      }}
      aria-label="Back to top"
    >
      <ArrowUp size={22} />
    </a>
  );
};

export default BackToTop;
