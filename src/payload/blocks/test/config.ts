import { Block } from "payload";

export const Test: Block = {
  slug: "test",
  interfaceName: "TestBlock",
  fields: [
    {
      name: "content",
      type: "text",
    },
  ],
};
