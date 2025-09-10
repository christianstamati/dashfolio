import {
	MetaDescriptionField,
	MetaImageField,
	MetaTitleField,
	OverviewField,
	PreviewField,
} from "@payloadcms/plugin-seo/fields";
import { revalidatePath } from "next/cache";
import type { CollectionConfig } from "payload";

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
				{
					name: "meta",
					label: "SEO",
					fields: [
						OverviewField({
							titlePath: "meta.title",
							descriptionPath: "meta.description",
							imagePath: "meta.image",
						}),
						MetaTitleField({
							hasGenerateFn: true,
						}),
						MetaImageField({
							relationTo: "media",
						}),
						MetaDescriptionField({}),
						PreviewField({
							// if the `generateUrl` function is configured
							hasGenerateFn: true,

							// field paths to match the target field for data
							titlePath: "meta.title",
							descriptionPath: "meta.description",
						}),
					],
				},
			],
		},
	],
	hooks: {
		afterChange: [
			({ doc }) => {
				const status = doc._status;
				if (status === "published") {
					revalidatePath(`/${doc.slug}`);
				}
			},
		],
	},
};
