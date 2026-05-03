import SectionHeading from '../components/SectionHeading';
import { aboutParagraphs, profile } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="section-rule py-10 sm:py-16">
      <div className="content-shell text-center">
        <SectionHeading title="About Me" />

        <img
          src={profile.aboutAvatar}
          alt="About profile placeholder"
          className="mx-auto mt-6 h-36 w-36 rounded-full border-4 border-gold-500 object-cover"
          loading="lazy"
        />

        <div className="mx-auto mt-7 max-w-2xl space-y-4 text-base font-semibold leading-8 text-slate-500">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
