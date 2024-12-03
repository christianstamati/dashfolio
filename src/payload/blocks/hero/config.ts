import { Block } from "payload";
import { link } from "@/payload/fields/link";

export const HeroBlock: Block = {
  slug: "hero",
  interfaceName: "HeroBlock",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
    },
    link(),
    link(),
  ],
};
