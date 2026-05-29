import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems } from '../data/portfolio';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', isLightMode);
  }, [isLightMode]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/95 backdrop-blur">
      <div className="page-shell grid h-[3.25rem] grid-cols-[1fr_auto] items-center">
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-start text-slate-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
          aria-expanded={isOpen}
          aria-controls="site-menu"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={30} strokeWidth={2.1} /> : <Menu size={32} strokeWidth={2.1} />}
        </button>

        <a
          href="#home"
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full text-sm font-extrabold text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
          aria-label="Dylan Boyza home"
        >
          <img src="/favicon.svg" alt="" className="h-7 w-7" />
          <span className="hidden sm:inline">Dylan Boyza</span>
        </a>

        <div className="relative hidden justify-end gap-5 text-slate-400 sm:flex">
          <button
            type="button"
            className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
            aria-pressed={isLightMode}
            aria-label={isLightMode ? 'Switch to dark theme' : 'Switch to light theme'}
            onClick={() => setIsLightMode((current) => !current)}
          >
            {isLightMode ? <Moon size={24} /> : <Sun size={25} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          id="site-menu"
          className="absolute left-3 top-14 w-56 rounded-lg border border-white/12 bg-ink-900/98 p-2 shadow-2xl shadow-black/50"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-md px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/6 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
