import { FC, RefObject } from "react";

const ContactSection: FC<{ ref: RefObject<HTMLElement | null> }> = ({
  ref,
}) => {
  return (
    <section
      ref={ref}
      id="contact"
      className="h-screen bg-orange-200 flex items-center justify-center"
    >
      <h1>Contact</h1>
    </section>
  );
};

export default ContactSection;
