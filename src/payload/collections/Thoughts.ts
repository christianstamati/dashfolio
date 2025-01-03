import { CollectionConfig } from "payload";
import { formatSlugHook } from "@/payload/hooks/format-slug";

export const Thoughts: CollectionConfig = {
  slug: "thoughts",
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
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "icon",
      type: "text",
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlugHook("title")],
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
