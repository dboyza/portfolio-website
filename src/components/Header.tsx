import { Eye, Globe, Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems, profile } from '../data/portfolio';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isDimmed, setIsDimmed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setIsLanguageOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('comfort-mode', isDimmed);
  }, [isDimmed]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/95 backdrop-blur">
      <div className="page-shell grid h-[3.25rem] grid-cols-[1fr_auto_1fr] items-center">
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

        <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
          <Eye size={14} aria-hidden="true" />
          <span>Views: {profile.views}</span>
        </div>

        <div className="relative hidden justify-end gap-5 text-slate-400 sm:flex">
          <button
            type="button"
            className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
            aria-expanded={isLanguageOpen}
            aria-controls="language-menu"
            aria-label="Language options"
            onClick={() => setIsLanguageOpen((current) => !current)}
          >
            <Globe size={23} />
          </button>
          <button
            type="button"
            className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
            aria-pressed={isDimmed}
            aria-label="Toggle comfort contrast"
            onClick={() => setIsDimmed((current) => !current)}
          >
            {isDimmed ? <Moon size={24} /> : <Sun size={25} />}
          </button>

          {isLanguageOpen && (
            <div
              id="language-menu"
              className="absolute right-9 top-9 w-36 rounded-lg border border-white/12 bg-ink-900/98 p-1 text-sm font-bold shadow-2xl shadow-black/50"
            >
              <button
                type="button"
                className="block w-full rounded-md px-3 py-2 text-left text-slate-200 hover:bg-white/6"
                onClick={() => setIsLanguageOpen(false)}
              >
                English
              </button>
              <button
                type="button"
                className="block w-full rounded-md px-3 py-2 text-left text-slate-400 hover:bg-white/6 hover:text-slate-200"
                onClick={() => setIsLanguageOpen(false)}
              >
                Francais
              </button>
            </div>
          )}
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
