import type { Block, CollectionConfig, Field } from "payload";

export const MyArrayField: Field = {
  name: "slider",
  type: "array",
  label: "Image Slider",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "caption",
      type: "text",
    },
  ],
};

const QuoteBlock: Block = {
  slug: "Quote", // required
  imageURL: "https://google.com/path/to/image.jpg",
  imageAltText: "A nice thumbnail image to show what this block looks like",
  interfaceName: "QuoteBlock", // optional
  fields: [
    // required
    {
      name: "quoteHeader",
      type: "text",
      required: true,
    },
    {
      name: "quoteText",
      type: "text",
    },
  ],
};

/*
 * Blocks Fields
 * */
export const MyBlocksField: Field = {
  name: "layout",
  type: "blocks",
  blocks: [QuoteBlock],
};

/*
 * Code Field
 * */
export const MyCodeField: Field = {
  name: "trackingCode", // required
  type: "code", // required
  required: true,
  admin: {
    language: "javascript",
  },
};

export const Test: CollectionConfig = {
  slug: "tests",
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
          label: "Array",
          fields: [MyArrayField],
        },
        {
          label: "Block",
          fields: [MyBlocksField],
        },
        {
          label: "Checkbox",
          fields: [
            {
              name: "enableCoolStuff", // required
              type: "checkbox", // required
              label: "Click me to see fanciness",
              defaultValue: false,
            },
          ],
        },
        {
          label: "Code",
          fields: [MyCodeField],
        },
      ],
    },
  ],
};
