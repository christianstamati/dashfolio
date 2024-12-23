import { Test } from "@/payload/blocks/test/config";
import { link } from "@/payload/fields/link";
import { CollectionConfig } from "payload";
import { lexicalEditor, HeadingFeature, FixedToolbarFeature, InlineToolbarFeature } from "@payloadcms/richtext-lexical";

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
              name: 'richText',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                  ]
                },
              }),
              label: false,
            },
            {
              type: "group",
              name: "hero",
              fields: [
                link({ overrides: { name: "primary" } }),
                link({ overrides: { name: "secondary" } }),
              ]
            }
          ],
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
