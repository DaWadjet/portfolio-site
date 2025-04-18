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
import { useTransition } from "react";

function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();

  function onSelectChange(newLocale: Locale) {
    startTransition(() => {
      router.replace({ pathname }, { locale: newLocale });
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="size-11">
          <span className="sr-only">{t("label")}</span>
          <span className="font-semibold text-xl">
            {t(`locale`, {
              locale,
            })}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[122px] min-w-[122px]">
        {routing.locales.map((loc) => (
          <DropdownMenuCheckboxItem
            key={loc}
            className="whitespace-nowrap"
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
