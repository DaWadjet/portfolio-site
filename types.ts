import messages from "@/i18n/messages/en.json";
import { routing } from "@/i18n/routing";

export type Locale = (typeof routing.locales)[number];

declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
    Messages: typeof messages;
  }
}
