import type { CollectionConfig } from "payload";

export const Writings: CollectionConfig = {
	slug: "writings",
	access: {
		read: () => true,
	},
	admin: {
		defaultColumns: ["title", "slug"],
		useAsTitle: "title",
	},
	fields: [
		{
			name: "slug",
			type: "text",
			required: true,
			unique: true,
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			name: "description",
			type: "textarea",
			required: true,
		},
	],
};
