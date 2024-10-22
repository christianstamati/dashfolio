import React from "react";
import { Link } from "@/i18n/routing";
import LocaleSelect from "@/components/locale-select";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";
import { getTranslations } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const payload = await getPayloadHMR({ config });
  const locale = (await params).locale;
  const fruits = await payload.find({
    collection: "fruits",
    locale: locale as any,
    fallbackLocale: "en",
  });
  const t = await getTranslations("HomePage");
  return (
    <div className="p-4">
      <LocaleSelect />
      <h1>{t("title")}</h1>
      <Link href="/admin">{t("admin")}</Link>
      <div>
        <div className="pb-2 text-xl font-bold">Fruit (Api)</div>
        {fruits.docs.map((doc, index) => (
          <div key={index}>{doc.id}</div>
        ))}
      </div>
    </div>
  );
}
