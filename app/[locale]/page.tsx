"use client";

import IconLinks from "@/app/[locale]/_components/IconLinks";
import Navbar from "@/app/[locale]/_components/Navbar";
import AboutSection from "@/app/[locale]/_components/sections/AboutSection";
import ContactSection from "@/app/[locale]/_components/sections/ContactSection";
import ExperienceSection from "@/app/[locale]/_components/sections/ExperienceSection";
import IntroductionSection from "@/app/[locale]/_components/sections/IntroductionSection";
import ProjectsSection from "@/app/[locale]/_components/sections/ProjectsSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslations } from "next-intl";
import { useMemo, useRef } from "react";

export default function Home() {
  const t = useTranslations();
  const aboutMeRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sections = useMemo(
    () =>
      [
        { name: "about", ref: aboutMeRef },
        { name: "experience", ref: experienceRef },
        { name: "projects", ref: projectsRef },
        { name: "contact", ref: contactRef },
      ] as const,
    [aboutMeRef, experienceRef, projectsRef, contactRef]
  );

  return (
    <>
      <Navbar sections={sections} />

      <ScrollArea className="overflow-y-auto">
        <main className="container mx-auto my-8 max-w-5xl grow px-4 lg:px-16 pb-10">
          <div className="flex flex-col items-stretch gap-8 w-full">
            <IntroductionSection />

            {!process.env.NEXT_PUBLIC_HIDE_NEXT_PHASE && (
              <>
                <AboutSection ref={aboutMeRef} />

                <ExperienceSection ref={experienceRef} />
                <ProjectsSection ref={projectsRef} />
                <ContactSection ref={contactRef} />
              </>
            )}
          </div>
        </main>
      </ScrollArea>
      <IconLinks />
    </>
  );
}
