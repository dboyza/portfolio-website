import SectionHeading from '../components/SectionHeading';
import { aboutParagraphs } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="section-rule py-10 sm:py-16">
      <div className="content-shell text-center">
        <SectionHeading title="About Me" />

        <div
          className="reveal-on-scroll mx-auto mt-7 max-w-2xl space-y-4 text-base font-semibold leading-8 text-slate-500"
          data-reveal
        >
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
