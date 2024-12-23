import type { Page as PageType } from "@payload-types";
import getPage from "@/payload/lib/get-page";
import { homeStatic } from "@/payload/endpoints/home-static";
import { Blocks } from "@/payload/blocks";
import Hero from "@/components/hero";

type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  const { slug = "home" } = await paramsPromise;
  const url = "/" + slug;

  let page: PageType | null;

  page = await getPage({
    slug,
  });

  // Remove this code once your website is seeded
  if (!page && slug === "home") {
    page = homeStatic;
  }

  if (!page) {
    return <div>Page not found!</div>;
  }

  const { layout, hero } = page;

  return (
    <main className="flex items-center justify-center">
      <div className="flex w-full max-w-4xl flex-col gap-16 py-28">
        <Hero hero={hero} />
        <Blocks blocks={layout} />
      </div>
    </main>
  );
}
