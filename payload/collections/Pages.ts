import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
	slug: "pages",
	access: {
		read: () => true,
	},
	admin: {
		useAsTitle: "title",
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			name: "slug",
			type: "text",
			required: true,
			unique: true,
		},
		{
			name: "content",
			type: "text",
		},
	],
};
