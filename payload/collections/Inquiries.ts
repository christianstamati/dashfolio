import type { CollectionConfig } from "payload";

export const Inquiries: CollectionConfig = {
	slug: "inquiries",
	access: {
		create: () => true,
	},
	admin: {
		useAsTitle: "email",
	},
	fields: [
		{
			name: "name",
			type: "text",
			required: true,
			admin: {
				readOnly: true,
			},
		},
		{
			name: "email",
			type: "email",
			required: true,
			admin: {
				readOnly: true,
			},
		},
		{
			name: "message",
			type: "textarea",
			required: true,
			admin: {
				readOnly: true,
			},
		},
	],
};
