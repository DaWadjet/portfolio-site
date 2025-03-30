import { FC, RefObject } from "react";

const ProjectsSection: FC<{ ref: RefObject<HTMLElement | null> }> = ({
  ref,
}) => {
  return (
    <section
      ref={ref}
      id="projects"
      className="h-screen bg-yellow-200 flex items-center justify-center"
    >
      <h1>Projects</h1>
    </section>
  );
};

export default ProjectsSection;
