import type { ParagraphProps } from "@/payload/payload-types";

export default function Paragraph({ props }: { props: ParagraphProps }) {
	return (
		<div className="space-y-2">
			{props.title && <h3 className="font-semibold text-lg">{props.title}</h3>}
			{props.content && (
				<div className="prose prose-sm max-w-none">{props.content}</div>
			)}
		</div>
	);
}
