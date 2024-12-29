import type { GlobalConfig } from "payload";
export const RichTextFeature: GlobalConfig = {
  slug: "rich-text-feature",
  fields: [
    {
      name: "content",
      type: "richText",
      label: false,
      required: true,
    },
  ],
};
