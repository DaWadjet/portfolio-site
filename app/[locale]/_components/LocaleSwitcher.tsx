"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Locale, useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

const getHash = () =>
  typeof window !== "undefined"
    ? window.location.hash
      ? decodeURIComponent(window.location.hash)
      : ""
    : undefined;

function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(newLocale: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname: pathname + getHash(), params },
        { locale: newLocale }
      );
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span className="sr-only">{t("label")}</span>
          <span className="font-semibold">
            {t(`locale`, {
              locale,
            })}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[120px] min-w-[120px]">
        {routing.locales.map((loc) => (
          <DropdownMenuCheckboxItem
            key={loc}
            checked={loc === locale}
            disabled={isPending}
            onClick={() => onSelectChange(loc)}
          >
            {t(`longLocale`, {
              locale: loc,
            })}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LocaleSwitcher;
