import About from './sections/About';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Degrees from './sections/Degrees';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Footer from './components/Footer';
import Header from './components/Header';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-slate-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Degrees />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
