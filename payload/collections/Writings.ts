import type { CollectionConfig } from "payload";

export const Writings: CollectionConfig = {
	slug: "writings",
	access: {
		read: ({ req }) => {
			if (req.user) return true;
			return {
				_status: {
					equals: "published",
				},
			};
		},
	},
	admin: {
		useAsTitle: "title",
	},

	versions: {
		drafts: true,
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
		{
			name: "cover",
			type: "relationship",
			relationTo: "media",
			hasMany: false,
		},
		{
			name: "content",
			type: "richText",
			required: true,
		},
	],
};
