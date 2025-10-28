import { revalidateTag } from "next/cache";
import type { CollectionConfig } from "payload";
import { link } from "../fields/link";

export const Socials: CollectionConfig = {
	slug: "socials",
	access: {
		read: () => true,
	},
	admin: {
		useAsTitle: "label",
	},
	fields: [
		link({
			appearances: false,
			overrides: {
				fields: [
					{
						name: "icon",
						required: true,
						type: "text",
						admin: {
							description: "Use the icon name from the Font Awesome library.",
						},
					},
				],
			},
		}),
	],
	hooks: {
		afterChange: [() => revalidateTag("social-links", "max")],
	},
};
