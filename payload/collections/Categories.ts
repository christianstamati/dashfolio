import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
	slug: "categories",
	access: {
		read: () => true,
	},
	admin: {
		useAsTitle: "name",
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
		},
		{
			name: "icon",
			type: "text",
			required: true,
		},
	],
};
