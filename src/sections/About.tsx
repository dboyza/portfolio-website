import { ArrowUpRight, Terminal } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TerminalWindow from '../components/TerminalWindow';
import { aboutParagraphs, profile } from '../data/portfolio';

const About = () => (
  <section id="about" className="section-rule about-section">
    <div className="wide-shell">
      <div className="about-grid">
        <div className="about-portrait reveal-on-scroll" data-reveal>
          <picture>
            <source
              type="image/avif"
              srcSet="/profile-portrait-480.avif 480w, /profile-portrait-820.avif 820w, /profile-portrait-1254.avif 1254w"
              sizes="(max-width: 760px) calc(100vw - 48px), 410px"
            />
            <source
              type="image/webp"
              srcSet="/profile-portrait-480.webp 480w, /profile-portrait-820.webp 820w, /profile-portrait-1254.webp 1254w"
              sizes="(max-width: 760px) calc(100vw - 48px), 410px"
            />
            <img
              src={profile.avatar}
              srcSet="/profile-portrait-480.jpg 480w, /profile-portrait-820.jpg 820w, /profile-portrait-1254.jpg 1254w"
              sizes="(max-width: 760px) calc(100vw - 48px), 410px"
              alt={`${profile.name} profile portrait`}
              width="1254"
              height="1254"
              loading="lazy"
              decoding="async"
            />
          </picture>
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
