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
					name: "hero",
					fields: [
						{
							name: "header",
							type: "text",
							required: true,
							admin: {
								condition: (data) => data.hero.type === "header",
							},
						},
						{
							name: "description",
							type: "textarea",
							required: true,
							admin: {
								condition: (data) => data.hero.type === "header",
							},
						},
						{
							name: "type",
							type: "select",
							required: true,
							defaultValue: "none",
							options: [
								{
									label: "None",
									value: "none",
								},
								{
									label: "Header",
									value: "header",
								},
							],
						},
					],
					label: "Hero",
				},
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
