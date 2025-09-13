import { revalidateTag } from "next/cache";
import type { GlobalConfig } from "payload";
import { link } from "../fields/link";

export const Nav: GlobalConfig = {
	slug: "nav",
	label: "NAV",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "links",
			type: "array",
			fields: [
				...link({
					appearances: false,
					overrides: {
						fields: [
							{
								name: "icon",
								type: "text",
							},
						],
					},
				}).fields,
			],
		},
	],
	hooks: {
		afterChange: [
			() => {
				revalidateTag("navbar-links");
			},
		],
	},
};
