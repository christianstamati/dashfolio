import type { GlobalConfig } from "payload";

export const Settings: GlobalConfig = {
	slug: "settings",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "homePage",
			type: "relationship",
			relationTo: "pages",
		},
		{
			name: "projectPage",
			type: "relationship",
			relationTo: "pages",
		},
		{
			name: "writingPage",
			type: "relationship",
			relationTo: "pages",
		},
	],
};
