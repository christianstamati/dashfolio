import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText as LexicalRichText } from "@payloadcms/richtext-lexical/react";
import { converters } from "./converters";

export const RichText = ({ data }: { data: SerializedEditorState }) => {
	return (
		<LexicalRichText
			className="rich-text-content"
			converters={converters}
			data={data}
		/>
	);
};
