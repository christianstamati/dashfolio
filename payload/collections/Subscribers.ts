import type { CollectionConfig } from "payload";

export const Subscribers: CollectionConfig = {
	slug: "subscribers",
	access: {
		create: () => true,
		delete: () => true,
	},
	admin: {
		useAsTitle: "email",
	},
	fields: [
		{
			name: "email",
			type: "email",
			required: true,
			index: true,
		},
	],
};
