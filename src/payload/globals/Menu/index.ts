import type { GlobalConfig } from "payload";
import { revalidateMenu } from "@/payload/globals/Menu/hooks/revalidate-menu";
import { Link } from "@/payload/fields/link";

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
        Link(),
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateMenu],
  },
};
