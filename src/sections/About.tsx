import SectionHeading from '../components/SectionHeading';
import { aboutParagraphs, profile } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="bg-ink-900/70 py-20">
      <div className="section-shell">
        <SectionHeading title="About Me" />
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <img
            src={profile.avatar}
            alt="About profile placeholder"
            className="mx-auto aspect-square w-full max-w-sm rounded-lg border border-white/12 object-cover shadow-2xl shadow-black/30 lg:mx-0"
          />
          <div className="space-y-6">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-slate-300">
                {paragraph}
              </p>
            ))}
            <div className="grid gap-4 sm:grid-cols-3">
              {['Automate clearly', 'Operate calmly', 'Secure early'].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm font-semibold text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
