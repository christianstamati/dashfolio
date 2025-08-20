import type { CollectionConfig } from "payload";

export const Teammates: CollectionConfig = {
	slug: "teammates",
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
			name: "role",
			type: "relationship",
			relationTo: "roles",
			hasMany: false,
		},
	],
};
