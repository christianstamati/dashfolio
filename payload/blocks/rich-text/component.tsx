import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText as LexicalRichText } from "@payloadcms/richtext-lexical/react";
import { converters } from "./converters";

export const RichText = ({
	data,
	className,
}: {
	data: SerializedEditorState;
	className?: string;
}) => {
	return (
		<div className={className}>
			<LexicalRichText
				className="rich-text-content"
				converters={converters}
				data={data}
			/>
		</div>
	);
};
