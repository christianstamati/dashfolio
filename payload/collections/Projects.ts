import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
	slug: "projects",
	access: {
		read: () => true,
	},
	admin: {
		defaultColumns: ["title", "slug", "updatedAt"],
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
		{
			name: "category",
			type: "relationship",
			relationTo: "categories",
			hasMany: false,
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "thumbnail",
			type: "relationship",
			relationTo: "media",
			hasMany: false,
		},
		{
			name: "cover",
			type: "relationship",
			relationTo: "media",
			hasMany: false,
		},
		{
			name: "company",
			type: "relationship",
			relationTo: "companies",
			hasMany: false,
			admin: {
				position: "sidebar",
			},
		},
	],
};
