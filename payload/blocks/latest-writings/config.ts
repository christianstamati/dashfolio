import type { Block } from "payload";

export const latestWritings: Block = {
	slug: "latest-writings",
	interfaceName: "LatestWritingsProps",
	fields: [
		{
			name: "info",
			type: "text",
			defaultValue: "Latest writings will be automatically populated",
			admin: {
				readOnly: true,
			},
		},
	],
};
