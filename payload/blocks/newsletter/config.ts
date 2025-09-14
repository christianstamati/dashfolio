import type { Block } from "payload";

export const newsletter: Block = {
	slug: "newsletter",
	interfaceName: "NewsletterProps",
	fields: [
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
	],
};
