import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <div className="h-screen flex items-center justify-center w-full text-4xl font-bold">
      {t("HomePage.underDevelopment")}
    </div>
  );
}
