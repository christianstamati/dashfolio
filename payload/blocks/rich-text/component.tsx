import type { DefaultNodeTypes } from "@payloadcms/richtext-lexical";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import {
	type JSXConvertersFunction,
	RichText as LexicalRichText,
} from "@payloadcms/richtext-lexical/react";

const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({
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

export const RichText = ({ data }: { data: SerializedEditorState }) => {
	return (
		<LexicalRichText
			className="rich-text-content"
			converters={jsxConverters}
			data={data}
		/>
	);
};
