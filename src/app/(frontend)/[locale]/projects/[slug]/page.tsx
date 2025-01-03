import type { Page as PageType } from "@payload-types";
import { homeStatic } from "@/payload/endpoints/home-static";
import { RichText } from "@/payload/blocks/rich-text";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import getProject from "@/payload/lib/get-project";

type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  const { slug = "home" } = await paramsPromise;

  let page: PageType | null;

  page = await getProject({
    slug,
  });

  // Remove this code once your website is seeded
  if (!page && slug === "home") {
    page = homeStatic;
  }

  if (!page) {
    return <div>Page not found!</div>;
  }

  const { content } = page;

  return (
    <main className="flex items-center justify-center">
      <div className="flex w-full max-w-4xl flex-col gap-16 py-28">
        <RichText data={content as SerializedEditorState} />
      </div>
    </main>
  );
}
