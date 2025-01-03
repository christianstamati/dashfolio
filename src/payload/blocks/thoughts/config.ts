import { Block } from "payload";

export const Thoughts: Block = {
  slug: "thoughts",
  interfaceName: "ThoughtsBlock",
  fields: [
    {
      name: "thoughts",
      type: "array",
      fields: [
        {
          name: "thought",
          type: "relationship",
          relationTo: "thoughts",
        },
      ],
      maxRows: 6,
    },
  ],
};
