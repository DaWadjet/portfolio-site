"use client";
import { FileUser, Github, Linkedin, Mail } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { FC } from "react";

const IconLinks: FC = () => {
  const locale = useLocale();

  return (
    <div className="fixed left-0 bottom-0 w-16 flex flex-col gap-4 p-2 items-center bg-red-500">
      <Link href="https://github.com/DaWadjet" target="_blank">
        <Github />
      </Link>
      <Link
        href="https://www.linkedin.com/in/czegl%C3%A9di-levente-3a5155230"
        target="_blank"
      >
        <Linkedin />
      </Link>
      <Link href="mailto:celevicte@gmail.com">
        <Mail />
      </Link>
      <Link
        href={
          locale === "en"
            ? "/cv/CV-LeventeCzegledi-English.pdf"
            : "/cv/CV-CzeglediLevente-magyar.pdf"
        }
        target="_blank"
      >
        <FileUser />
      </Link>
    </div>
  );
};

export default IconLinks;
