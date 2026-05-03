type SectionHeadingProps = {
  title: string;
};

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
      {title}
    </h2>
  );
};

export default SectionHeading;
