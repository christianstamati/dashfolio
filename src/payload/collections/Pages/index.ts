import type { CollectionConfig } from "payload";
import { Test } from "@/payload/blocks/test/config";
import { HeroBlock } from "@/payload/blocks/hero/config";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          fields: [
            {
              name: "layout",
              type: "blocks",
              blocks: [Test, HeroBlock],
              required: true,
            },
          ],
          label: "Content",
        },
      ],
    },
  ],
};
