import type { Block } from "payload";

export const contactForm: Block = {
	slug: "contact-form",
	interfaceName: "ContactFormProps",
	fields: [
		{
			name: "about",
			type: "array",
			defaultValue: [
				{
					label: "Other",
				},
			],
			fields: [
				{
					name: "label",
					type: "text",
					required: true,
				},
			],
		},
	],
};
