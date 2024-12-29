import { Block } from "payload";

export const CustomBlock: Block = {
  slug: "custom-block",
  interfaceName: "CustomBlock",
  fields: [
    {
      name: "content",
      type: "text",
    },
  ],
};
