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
			name: "firstName",
			type: "text",
			required: true,
			admin: {
				readOnly: true,
			},
		},
		{
			name: "lastName",
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
			name: "subject",
			type: "text",
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
