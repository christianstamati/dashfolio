import type { Field } from "payload";
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
export const richText: Field = {
  name: "richText",
  type: "richText",
  editor: lexicalEditor({
    features: ({ rootFeatures }) => {
      return [
        ...rootFeatures,
        HeadingFeature({ enabledHeadingSizes: ["h1", "h2", "h3", "h4"] }),
        FixedToolbarFeature(),
        InlineToolbarFeature(),
      ];
    },
  }),
  label: false,
};