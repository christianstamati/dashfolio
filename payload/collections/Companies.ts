import type { CollectionConfig } from "payload";

export const Companies: CollectionConfig = {
	slug: "companies",
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
			name: "logo",
			type: "upload",
			relationTo: "media",
		},
	],
};
