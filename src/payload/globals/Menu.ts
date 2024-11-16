import type { GlobalConfig } from "payload";

export const Menu: GlobalConfig = {
  slug: "menu",
  fields: [
    {
      name: "links",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
          localized: true,
        },
        {
          name: "icon",
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
