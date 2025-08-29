import type { GlobalConfig } from "payload";
import { link } from "../fields/link";

export const Nav: GlobalConfig = {
	slug: "nav",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "links",
			type: "array",
			fields: [
				link({ appearances: false }),
				{
					name: "icon",
					type: "text",
					required: true,
				},
				{
					name: "collapsed",
					type: "checkbox",
					label: "Collapsed",
					admin: {
						description: "If true, the link will be collapsed in the sidebar",
					},
				},
			],
		},
	],
};
