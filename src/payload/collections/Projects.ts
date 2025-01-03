import { CollectionConfig } from "payload";
import { formatSlugHook } from "@/payload/hooks/format-slug";

export const Projects: CollectionConfig = {
  slug: "projects",
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
      name: "description",
      type: "textarea",
    },
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
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
