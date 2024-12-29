import { Block } from "payload";

export const Media: Block = {
  slug: "media",
  interfaceName: "MediaBlock",
  fields: [
    {
      name: "media",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "caption",
      type: "text",
      required: false,
    },
  ],
};
