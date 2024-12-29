import React from "react";
import { getGlobal } from "@/payload/lib/get-globals";
import { RichTextFeature } from "@payload-types";
import { RichText } from "@/payload/blocks/rich-text";

async function Page() {
  const { content } = (await getGlobal("rich-text-feature")) as RichTextFeature;
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="mt-[500px] h-full w-full max-w-4xl">
        <RichText data={content} />
      </div>
    </div>
  );
}

export default Page;
