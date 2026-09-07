type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
};

const sectionNumbers: Record<string, string> = {
  About: '01 / THE PERSON',
  'About Me': '01 / THE PERSON',
  'Career Direction': '02 / THE DIRECTION',
  Projects: '03 / SELECTED EXPLORATIONS',
  Skills: '04 / THE TOOLKIT',
  Certifications: '05 / CREDENTIALS',
  Education: '06 / FOUNDATIONS',
};

const SectionHeading = ({ title, eyebrow }: SectionHeadingProps) => {
  const label = eyebrow ?? sectionNumbers[title];

  return (
    <div className="reveal-on-scroll" data-reveal>
      {label && <p className="section-eyebrow mb-5">{label}</p>}
      <h2 className="section-heading">{title}</h2>
    </div>
  );
};

export default SectionHeading;
