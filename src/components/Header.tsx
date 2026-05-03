import { useState } from 'react';
import { navItems } from '../data/portfolio';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/82 backdrop-blur-xl">
      <nav
        className="section-shell flex h-16 items-center justify-between"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-[0.18em] text-signal-400 uppercase"
        >
          portfolio
        </a>

        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-slate-100 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="text-xl">{isOpen ? 'x' : '='}</span>
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="section-shell grid gap-1 pb-4 text-sm text-slate-200 md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-3 transition hover:bg-white/8"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
