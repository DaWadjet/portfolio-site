import { FC, RefObject } from "react";

const ExperienceSection: FC<{ ref: RefObject<HTMLElement | null> }> = ({
  ref,
}) => {
  return (
    <section
      ref={ref}
      id="experience"
      className="h-screen bg-red-200 flex items-center justify-center"
    >
      <h1>Experience</h1>
    </section>
  );
};

export default ExperienceSection;
