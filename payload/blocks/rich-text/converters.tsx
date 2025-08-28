import type { DefaultNodeTypes } from "@payloadcms/richtext-lexical";
import type { JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";

export const converters: JSXConvertersFunction<DefaultNodeTypes> = ({
	defaultConverters,
}) => ({
	...defaultConverters,
	blocks: {
		// Each key should match your block's slug
		example: ({ node }: { node: any }) => (
			<div>EXAMPLE BLOCK {node.fields.content}</div>
		),
	},
});
