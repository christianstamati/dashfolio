import type { GlobalConfig } from "payload";
import { revalidateMenu } from "@/payload/globals/Menu/hooks/revalidate-menu";
import { link } from "@/payload/fields/link";

export const Menu: GlobalConfig = {
  slug: "menu",
  fields: [
    {
      name: "links",
      type: "array",
      fields: [
        link({
          useIcon: true,
          disableLabel: false,
          appearances: false,
        }),
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateMenu],
  },
};
