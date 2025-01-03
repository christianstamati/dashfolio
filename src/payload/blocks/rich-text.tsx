import {
  JSXConvertersFunction,
  RichText as RichTextReact,
} from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import CustomBlock from "@/payload/blocks/custom-block/component";
import MediaBlock from "@/payload/blocks/media/component";
import CallToActionBlock from "@/payload/blocks/cta/component";
import Projects from "@/payload/blocks/projects/component";

import React from "react";
import Thoughts from "@/payload/blocks/thoughts/component";

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
    projects: ({ node }) => (
      <Projects {...(node.fields as any)} blockType={"projects"} />
    ),
    thoughts: ({ node }) => (
      <Thoughts {...(node.fields as any)} blockType={"thoughts"} />
    ),
  },
});

export const RichText = ({ data }: { data: SerializedEditorState }) => {
  return <RichTextReact converters={converters} data={data} />;
};
