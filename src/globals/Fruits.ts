import type { CollectionConfig } from "payload";

export const Fruits: CollectionConfig = {
  slug: "fruits",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      localized: true,
    },
  ],
};
