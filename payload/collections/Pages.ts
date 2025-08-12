import {
	MetaDescriptionField,
	MetaImageField,
	MetaTitleField,
	OverviewField,
} from "@payloadcms/plugin-seo/fields";
import type { CollectionConfig } from "payload";
import { ExampleBlock } from "../blocks/example-block/config";

export const Pages: CollectionConfig = {
	slug: "pages",
	access: {
		read: () => true,
	},
	defaultPopulate: {
		title: true,
		slug: true,
	},
	admin: {
		defaultColumns: ["title", "slug", "updatedAt"],
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
			admin: {
				position: "sidebar",
			},
		},
		{
			type: "tabs",
			tabs: [
				{
					fields: [
						{
							name: "layout",
							type: "blocks",
							blocks: [ExampleBlock],
							required: true,
						},
					],
					label: "Content",
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
					],
				},
			],
		},
	],
};
