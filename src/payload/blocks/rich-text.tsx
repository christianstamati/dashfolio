import {
  JSXConvertersFunction,
  RichText as RichTextReact,
} from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import CustomBlock from "@/payload/blocks/custom-block/component";
import MediaBlock from "@/payload/blocks/media/component";
import CallToActionBlock from "@/payload/blocks/cta/component";

import React from "react";

const converters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    "custom-block": ({ node }) => (
      <CustomBlock {...(node.fields as any)} blockType={"custom-block"} />
    ),
    media: ({ node }) => (
      <MediaBlock {...(node.fields as any)} blockType={"media"} />
    ),
    "call-to-action": ({ node }) => (
      <CallToActionBlock {...(node.fields as any)} blockType={"cta"} />
    ),
  },
});

export const RichText = ({ data }: { data: SerializedEditorState }) => {
  return <RichTextReact converters={converters} data={data} />;
};