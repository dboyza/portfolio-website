import { ArrowUpRight, Terminal } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TerminalWindow from '../components/TerminalWindow';
import { aboutParagraphs, profile } from '../data/portfolio';

const About = () => (
  <section id="about" className="section-rule about-section">
    <div className="wide-shell">
      <div className="about-grid">
        <div className="about-portrait reveal-on-scroll" data-reveal>
          <img
            src={profile.avatar}
            alt={`${profile.name} profile portrait`}
            width="480"
            height="580"
            loading="lazy"
          />
          <span className="portrait-caption">
            {profile.name}
            <ArrowUpRight size={17} />
          </span>
        </div>
        <div className="about-copy">
          <SectionHeading title="About Me" />
          <div className="about-paragraphs reveal-on-scroll" data-reveal>
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="about-terminal">
            <h3 className="terminal-label">
              <Terminal size={18} aria-hidden="true" />
              Explore in terminal
            </h3>
            <div className="terminal-panel">
              <TerminalWindow />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
