"use client";

import { useTranslations } from "next-intl";

export default function Error() {
//TODO: add proper error handling instead of a stub
//         {
//   error,
//   reset,
// }: {
//   error: Error & { digest?: string };
//   reset: () => void;
// }
  const t = useTranslations("Error");

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
