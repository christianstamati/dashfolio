import { getGlobal } from "@/payload/lib/get-globals";
import RichText from "@/payload/components/rich-text";
import { RichTextTesting } from "@payload-types";

export default async function Page() {
  const data: RichTextTesting = await getGlobal("richTextTesting");
  if (!data) {
    return null;
  }
  return (
    <main>
      <RichText
        enableGutter
        enableProse={false}
        content={data.richText!}
      ></RichText>
    </main>
  );
}
