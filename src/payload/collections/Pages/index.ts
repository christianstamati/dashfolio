import type { CollectionConfig } from "payload";
import { Test } from "@/payload/blocks/test/config";
import { hero } from "@/payload/features/hero/config";

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
          fields: [hero],
          label: "Hero",
        },
        {
          fields: [
            {
              name: "layout",
              type: "blocks",
              blocks: [Test],
              required: true,
            },
          ],
          label: "Content",
        },
      ],
    },
  ],
};