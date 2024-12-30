import { Block } from "payload";
import { link } from "@/payload/fields/link";

export const CallToAction: Block = {
  slug: "call-to-action",
  interfaceName: "CallToActionBlock",
  fields: [
    link({ overrides: { name: "primary" }, useIcon: true }),
    link({ overrides: { name: "secondary" }, useIcon: true }),
  ],
};
