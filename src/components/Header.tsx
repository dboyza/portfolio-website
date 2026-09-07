import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { navItems } from '../data/portfolio';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuButton = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      )
        setIsOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onBreakpoint = () => {
      if (desktop.matches) setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [isOpen]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-15% 0px -65% 0px', threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="wide-shell header-layout">
        <a href="#home" className="wordmark" aria-label="Dylan Boyza home">
          dylan boyza
          <img src="/favicon.svg?v=2" alt="" width="28" height="28" />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={
                activeSection === item.href.slice(1) ? 'location' : undefined
              }
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            ref={menuButton}
            type="button"
            className="icon-button menu-toggle"
            aria-expanded={isOpen}
            aria-controls="site-menu"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav
          id="site-menu"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={
                activeSection === item.href.slice(1) ? 'location' : undefined
              }
              onClick={() => setIsOpen(false)}
            >
              <span aria-hidden="true">0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
