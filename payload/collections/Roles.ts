import type { CollectionConfig } from "payload";

export const Roles: CollectionConfig = {
	slug: "roles",
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
			name: "description",
			type: "textarea",
		},
	],
};
