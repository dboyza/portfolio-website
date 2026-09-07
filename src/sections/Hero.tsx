import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Pause,
  Play,
} from 'lucide-react';
import { useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import { profile } from '../data/portfolio';

const heroSignals = ['MLOps', 'AI/ML Platforms', 'Cloud Infrastructure'];

const Hero = () => {
  const [paused, setPaused] = useState(false);
  const [firstName, ...lastName] = profile.name.split(' ');

  return (
    <section
      id="home"
      className="hero"
      tabIndex={-1}
      onPointerDown={(event) => {
        // Dragging the stars should not start a selection in nearby copy.
        // Text and controls retain their native behavior; touch can still scroll.
        if (
          event.pointerType === 'mouse' &&
          event.target === event.currentTarget
        ) {
          event.preventDefault();
        }
      }}
    >
      <AnimatedBackground paused={paused} />
      <div className="hero-shade" aria-hidden="true" />
      <div className="wide-shell hero-layout">
        <div className="hero-copy">
          <p className="hero-greeting">{profile.greeting}</p>
          <h1 className="hero-title">
            {firstName} <span>{lastName.join(' ')}</span>
          </h1>
          <p className="hero-role">a software engineer at JPMorganChase</p>
          <div className="hero-signals" aria-label="Focus areas">
            {heroSignals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a href={profile.linkedinHref} className="button button-primary">
              Connect with Me! <ArrowUpRight size={17} />
            </a>
            <a
              href={profile.resumeHref}
              download="DYLAN_BOYZA_RESUME.pdf"
              className="button button-secondary"
            >
              Download Resume <Download size={16} />
            </a>
            <a href={`mailto:${profile.email}`} className="hero-email">
              Email Me! <Mail size={16} />
            </a>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-metadata">
            <span>
              <MapPin size={14} />
              {profile.location}
            </span>
            <span>{profile.credentialLine}</span>
            <span>{profile.focus}</span>
          </div>
          <div className="hero-bottom-actions">
            <a href="#about" className="explore-link">
              Explore <ArrowDown size={15} />
            </a>
            <button
              type="button"
              className="animation-toggle"
              onClick={() => setPaused((value) => !value)}
              aria-pressed={paused}
              aria-label={
                paused ? 'Resume star animation' : 'Pause star animation'
              }
              title={paused ? 'Resume star animation' : 'Pause star animation'}
            >
              {paused ? <Play size={14} /> : <Pause size={14} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
