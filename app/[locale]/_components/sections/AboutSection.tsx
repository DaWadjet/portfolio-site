import { FC, RefObject } from "react";

const AboutSection: FC<{ ref: RefObject<HTMLElement | null> }> = ({ ref }) => {
  return (
    <section
      ref={ref}
      id="about"
      className="h-screen bg-green-200 flex items-center justify-center"
    >
      <h1>About</h1>
    </section>
  );
};

export default AboutSection;
