"use client";
import DarkModeToggle from "@/app/[locale]/_components/DarkModeToggle";
import LocaleSwitcher from "@/app/[locale]/_components/LocaleSwitcher";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";
import { useMedia } from "react-use";

const sections = ["about", "experience", "projects", "contact"] as const;

const HomeLink: FC = () => {
  const name = useTranslations("Common")("name");
  return (
    <Link
      data-test="navbar-logo"
      href="/"
      className="flex gap-1 items-center hover:text-muted-foreground transition-colors duration-200"
    >
      <h1 className="font-semibold tracking-tight leading-none text-xl">
        {name}
      </h1>
    </Link>
  );
};

const Navbar: FC = () => {
  const t = useTranslations();
  const isMobileView = useMedia("(max-width: 768px)");

  return (
    <nav
      role="navigation"
      className={cn(
        "sticky top-0 z-20 flex gap-6 items-center border-b bg-background",
        isMobileView ? "h-28 px-4" : "h-16 px-6"
      )}
    >
      {isMobileView ? (
        <div className="flex flex-col gap-5 justify-center w-full">
          <div className="flex justify-between items-center">
            <HomeLink />
            <div className="flex gap-3 items-center">
              <DarkModeToggle />
              <LocaleSwitcher />
            </div>
          </div>
          <div className="flex gap-4 items-center justify-around">
            {sections.map((section) => (
              <Link
                href={`#${section}`}
                className="text-foreground text-base hover:text-muted-foreground transition-colors duration-200"
                key={section}
              >
                {t(`Navigation.${section}`)}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <>
          <HomeLink />
          <div className="flex gap-6 items-center ml-auto">
            {sections.map((section) => (
              <Link
                href={`#${section}`}
                className="text-foreground hover:text-muted-foreground transition-colors duration-200"
                key={section}
              >
                {t(`Navigation.${section}`)}
              </Link>
            ))}
            <div className="flex gap-3 items-center pl-4">
              <DarkModeToggle />
              <LocaleSwitcher />
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
