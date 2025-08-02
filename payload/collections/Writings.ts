import type { CollectionConfig } from "payload";

export const Writings: CollectionConfig = {
	slug: "writings",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
		},
	],
};
