import type { GlobalConfig } from "payload";

export const Sidebar: GlobalConfig = {
  slug: "sidebar",
  fields: [
    {
      name: "links",
      type: "array",
      localized: true,
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "href",
          type: "text",
          required: true,
        },
        {
          name: "page",
          type: "relationship",
          required: true,
          relationTo: ["pages"],
        },
        {
          name: "icon",
          type: "text",
          required: true,
        },
        {
          name: "shortcut",
          type: "text",
        },
        {
          name: "group",
          type: "text",
        },
      ],
    },
  ],
};
