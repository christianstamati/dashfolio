import { Block } from "payload";

export const Projects: Block = {
  slug: "projects",
  interfaceName: "ProjectsBlock",
  fields: [
    {
      name: "projects",
      type: "array",
      fields: [
        {
          name: "project",
          type: "relationship",
          relationTo: "projects",
        },
      ],
      maxRows: 2,
      minRows: 2,
    },
  ],
};
