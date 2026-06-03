import { useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './sections/About';
import CareerDirection from './sections/CareerDirection';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Degrees from './sections/Degrees';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const observedItems = new WeakSet<HTMLElement>();

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.16 },
    );

    const observeRevealItem = (item: HTMLElement) => {
      if (observedItems.has(item) || item.classList.contains('is-visible')) {
        return;
      }

      observedItems.add(item);
      observer.observe(item);
    };

    revealItems.forEach(observeRevealItem);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) {
            return;
          }

          if (node.matches('[data-reveal]')) {
            observeRevealItem(node);
          }

          node.querySelectorAll<HTMLElement>('[data-reveal]').forEach(observeRevealItem);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-950 text-slate-100">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <CareerDirection />
        <Projects />
        <Skills />
        <Certifications />
        <Degrees />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
}

export default App;
