import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      type: "tabs",
      tabs: [
        {
          fields: [
            {
              name: "title3",
              type: "text",
              required: true,
            },
          ],
          label: "Hero",
        },
        {
          fields: [
            {
              name: "title2",
              type: "text",
              required: true,
            },
          ],
          label: "Content",
        },
        {
          name: "meta",
          label: "SEO",
          fields: [
            {
              name: "title1",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
