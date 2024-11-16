import type { GlobalConfig } from "payload";
import { revalidateMenu } from "@/payload/globals/Menu/hooks/revalidateMenu";

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
          name: "type",
          type: "radio",
          defaultValue: "reference",
          options: [
            {
              label: "Internal link",
              value: "reference",
            },
            {
              label: "Custom URL",
              value: "custom",
            },
          ],
        },
        {
          label: "Custom URL",
          name: "url",
          type: "text",
          admin: {
            condition: (_, siblingData) => siblingData?.type === "custom",
          },
          required: true,
        },
        {
          label: "Document to link to",
          name: "reference",
          type: "relationship",
          admin: {
            condition: (_, siblingData) => siblingData?.type === "reference",
          },
          required: true,
          relationTo: "pages",
          hasMany: false,
          maxDepth: 1,
        },
        {
          name: "newTab",
          type: "checkbox",
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
  hooks: {
    afterChange: [revalidateMenu],
  },
};
