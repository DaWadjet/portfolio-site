"use client";
import DarkModeToggle from "@/app/[locale]/_components/DarkModeToggle";
import LocaleSwitcher from "@/app/[locale]/_components/LocaleSwitcher";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { FC, RefObject } from "react";

const Navbar: FC<{
  sections: ReadonlyArray<{
    name: "about" | "experience" | "projects" | "contact";
    ref: RefObject<HTMLElement | null>;
  }>;
}> = ({ sections }) => {
  const t = useTranslations();

  const shouldShowNextPhase = !process.env.NEXT_PUBLIC_HIDE_NEXT_PHASE;

  return (
    <nav
      role="navigation"
      className="flex items-center h-24 px-4 md:h-16 md:px-6"
    >
      {/* Mobile view */}
      <div className="flex flex-col gap-2 justify-center w-full md:hidden">
        <div className="flex justify-between items-center">
          <HomeLink />
          <div className="flex gap-0.5 items-center -mr-2.5">
            <DarkModeToggle />
            <LocaleSwitcher />
          </div>
        </div>
        {shouldShowNextPhase && (
          <div className="flex items-center justify-between w-full">
            {sections.map((section) => (
              <Button
                variant="link"
                onClick={() => {
                  section.ref.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="hover:text-muted-foreground text-sm sm:text-base px-2"
                key={section.name}
              >
                {t(`Navigation.${section.name}`)}
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex gap-6 justify-between w-full">
        <HomeLink />
        <div className="flex gap-2 items-center ml-auto">
          {shouldShowNextPhase &&
            sections.map((section) => (
              <Button
                variant="link"
                onClick={() => {
                  section.ref.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="text-foreground hover:text-muted-foreground text-base pt-2.5"
                key={section.name}
              >
                {t(`Navigation.${section.name}`)}
              </Button>
            ))}
          <div className="flex gap-3 items-center">
            <DarkModeToggle />
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

const HomeLink: FC = () => {
  const name = useTranslations("Common")("name");
  return (
    <h1 className="font-semibold flex items-center justify-center tracking-tight leading-none md:text-xl text-lg">
      {name}
    </h1>
  );
};

export default Navbar;
