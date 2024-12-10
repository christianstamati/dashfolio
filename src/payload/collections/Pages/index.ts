import type { CollectionConfig } from "payload";
import { Test } from "@/payload/blocks/test/config";
import { HeroBlock } from "@/payload/blocks/hero/config";
import { link } from "@/payload/fields/link";

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
              name: "header",
              type: "text",
              required: true,
            },
            {
              name: "description",
              type: "text",
            },
            link({ overrides: { name: "primary" } }),
            link({ overrides: { name: "secondary" } }),
          ],
          label: "Hero",
        },
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
