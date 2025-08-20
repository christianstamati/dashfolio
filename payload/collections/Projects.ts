import type { CollectionConfig } from "payload";
import { blockConfigs } from "../blocks";

export const Projects: CollectionConfig = {
	slug: "projects",
	access: {
		read: () => true,
	},
	admin: {
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
			name: "thumbnail",
			type: "relationship",
			relationTo: "media",
			hasMany: false,
		},
		{
			name: "link",
			type: "text",
		},
		{
			name: "cover",
			type: "relationship",
			relationTo: "media",
			hasMany: false,
		},
		{
			name: "description",
			type: "textarea",
			required: true,
		},
		{
			name: "role",
			type: "relationship",
			relationTo: "roles",
			hasMany: false,
		},
		{
			name: "team",
			type: "relationship",
			relationTo: "teammates",
			hasMany: true,
		},
		{
			name: "category",
			type: "relationship",
			relationTo: "categories",
			hasMany: false,
		},

		{
			name: "company",
			type: "relationship",
			relationTo: "companies",
			hasMany: false,
		},
		{
			name: "layout",
			type: "blocks",
			blocks: blockConfigs,
		},
	],
};
