import AboutSection from "@/app/[locale]/_components/sections/AboutSection";
import ContactSection from "@/app/[locale]/_components/sections/ContactSection";
import ExperienceSection from "@/app/[locale]/_components/sections/ExperienceSection";
import ProjectsSection from "@/app/[locale]/_components/sections/ProjectsSection";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="h-screen flex items-center justify-center w-full text-4xl font-bold">
        {t("HomePage.underDevelopment")}
      </div>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
