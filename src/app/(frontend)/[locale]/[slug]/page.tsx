import type { Page as PageType } from "@payload-types";
import getPage from "@/payload/lib/get-page";
import { homeStatic } from "@/payload/endpoints/home-static";
import { Blocks } from "@/payload/blocks";

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

  console.log(page);

  return (
    <main>
      <Blocks blocks={layout} />
    </main>
  );
}
