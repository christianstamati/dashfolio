import { Block } from "payload";

export const Test: Block = {
  slug: "test",
  interfaceName: "Test Block",
  fields: [
    {
      name: "content",
      type: "text",
    },
  ],
};
