import type { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
	slug: "footer",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "copyright",
			type: "text",
			required: true,
		},
	],
};
