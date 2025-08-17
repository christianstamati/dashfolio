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
			name: "projectIcon",
			type: "relationship",
			relationTo: "media",
			hasMany: false,
			admin: {
				description: "Icon/logo for the project",
			},
		},
		{
			name: "year",
			type: "number",
			required: true,
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "description",
			type: "textarea",
			required: true,
		},
		{
			name: "role",
			type: "text",
			required: true,
		},
		{
			name: "responsibilities",
			type: "array",
			fields: [
				{
					name: "responsibility",
					type: "text",
					required: true,
				},
			],
		},
		{
			name: "team",
			type: "array",
			fields: [
				{
					name: "name",
					type: "text",
					required: true,
				},
				{
					name: "role",
					type: "text",
					required: true,
				},
			],
		},
		{
			name: "problemCaption",
			type: "textarea",
			admin: {
				description: "Description of the problem this project solves",
			},
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
