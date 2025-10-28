import { revalidateTag } from "next/cache";
import type { GlobalConfig } from "payload";

export const SEO: GlobalConfig = {
	slug: "seo",
	label: "SEO",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "favicon",
			type: "upload",
			relationTo: "media",
			label: "Favicon",
			admin: {
				description: "If enabled, the Favicon will be applied to the website.",
			},
		},
	],
	hooks: {
		afterChange: [() => revalidateTag("global-seo", "max")],
	},
};
