import type { GlobalConfig } from "payload";
import iconsaxField from "../fields/iconsax-field";

export const Menu: GlobalConfig = {
	slug: "menu",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "links",
			type: "array",
			required: true,
			fields: [
				{
					name: "label",
					type: "text",
					required: true,
				},
				{
					name: "collapsed",
					type: "checkbox",
					required: false,
					defaultValue: false,
				},
				iconsaxField(),
				{
					name: "type",
					type: "select",
					defaultValue: "page",
					options: [
						{
							label: "Page",
							value: "page",
						},
						{
							label: "External",
							value: "external",
						},
					],
				},
				{
					name: "page",
					type: "relationship",
					relationTo: "pages",
					required: true,
					admin: {
						condition: (data, siblingData) => siblingData?.type === "page",
					},
				},
				{
					name: "href",
					type: "text",
					required: true,
					admin: {
						condition: (data, siblingData) => siblingData?.type === "external",
					},
				},
			],
		},
	],
};
