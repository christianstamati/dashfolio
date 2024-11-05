import React from "react";
import LocaleSelect from "@/components/locale-select";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Home() {
  const t = await getTranslations("HomePage");
  return (
    <div className="p-4">
      <LocaleSelect />
      <h1>{t("title")}</h1>
      <Link href="/admin">{t("admin")}</Link>
      <div>
        <div className="pb-2 text-xl font-bold">Fruit (Api)</div>
      </div>
    </div>
  );
}
