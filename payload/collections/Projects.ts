import { revalidateTag } from "next/cache";
import type { CollectionConfig } from "payload";
import { generatePreviewPath } from "../utils/generate-preview-path";

export const Projects: CollectionConfig = {
	slug: "projects",
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
		livePreview: {
			url: ({ data, req }) => {
				const path = generatePreviewPath({
					slug: typeof data?.slug === "string" ? data.slug : "",
					collection: "projects",
					req,
				});
				return path;
			},
		},
		preview: (data, { req }) =>
			generatePreviewPath({
				slug: typeof data?.slug === "string" ? data.slug : "",
				collection: "projects",
				req,
			}),
	},
	versions: {
		drafts: {
			schedulePublish: true,
			autosave: {
				interval: 500, // We set this interval for optimal live preview
			},
		},
		maxPerDoc: 50,
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
			type: "tabs",
			tabs: [
				{
					label: "Details",
					fields: [
						{
							name: "description",
							type: "textarea",
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
					],
				},
				{
					label: "Content",
					fields: [
						{
							name: "content",
							type: "richText",
						},
					],
				},
			],
		},
		{
			name: "password",
			type: "text",
			admin: {
				position: "sidebar",
			},
			maxLength: 6,
			minLength: 6,
		},
	],
	hooks: {
		afterChange: [
			({ doc }) => {
				const status = doc._status;
				if (status === "published") {
					revalidateTag(`projects-${doc.slug}`);
				}
			},
		],
	},
};
