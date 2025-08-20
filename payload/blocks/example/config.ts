import type { Block } from "payload";

export const example: Block = {
	slug: "example", // required
	interfaceName: "ExampleProps", // optional
	fields: [
		{
			name: "content",
			type: "text",
			required: true,
		},
	],
};
