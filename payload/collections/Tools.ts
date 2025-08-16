import type { CollectionConfig } from "payload";

export const Tools: CollectionConfig = {
	slug: "tools",
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
			name: "subtitle",
			type: "text",
			required: true,
		},
		{
			name: "description",
			type: "textarea",
			required: true,
		},
		{
			name: "logo",
			type: "relationship",
			relationTo: "media",
			hasMany: false,
		},
		{
			name: "link",
			type: "text",
			required: true,
		},
	],
};
