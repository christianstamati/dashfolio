import { CollectionConfig } from "payload";

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
      required: true,
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
              name: "content",
              type: "richText",
              label: false,
            },
          ],
          label: "Content",
        },
      ],
    },
  ],
};
