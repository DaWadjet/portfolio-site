import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";
const IntroductionSection: FC = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative w-96 h-96 flex items-center justify-center">
        <div className="absolute top-2 right-2 bg-secondary/70 px-4 py-2 rotate-[24deg]">
          <p className="text-primary text-xl font-bold text-center">
            {t("HomePage.underDevelopment")}
          </p>
        </div>

        <Image
          priority
          src="/profile.webp"
          alt="Levente Czeglédi"
          width={384}
          height={384}
          className="rounded-full object-cover object-[40%] shadow-lg border-2 border-primary aspect-square"
        />
      </div>

      <div className="flex flex-col items-center gap-3 px-6 sm:px-24 max-w-4xl sm:text-center">
        <h1 className="text-2xl sm:text-4xl font-bold">
          {t("Introduction.title")}
        </h1>
        <p className="text-base sm:text-lg font-medium text-muted-foreground">
          {t("Introduction.description")}
        </p>
      </div>
    </div>
  );
};

export default IntroductionSection;
