import type { CollectionConfig, Field } from "payload";

export const MyUploadField: Field = {
  // ...
  type: "upload",
  relationTo: "media",
};

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
