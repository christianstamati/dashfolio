"use client";
import { useLocale } from "next-intl";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/routing";
import { i18nConfig } from "@/i18n/i18n.config";
import { Locale } from "@/lib/types";

function LocaleSelect() {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const switchLocale = (locale: string) => {
    router.push(pathName, { locale: locale as Locale });
  };
  return (
    <Select defaultValue={locale} onValueChange={switchLocale}>
      <SelectTrigger className="h-12 rounded-none border-none bg-transparent px-6">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {i18nConfig.locales.map((locale, index) => (
            <SelectItem key={index} value={locale}>
              {locale}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LocaleSelect;
