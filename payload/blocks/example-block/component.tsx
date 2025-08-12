import type { ExampleBlock as ExampleBlockProps } from "@payload-types";
import type React from "react";

export const ExampleBlock: React.FC<ExampleBlockProps> = (props) => {
	const { id, content } = props;
	return (
		<div className="my-16" id={`block-${id}`}>
			<h1>Example Block: {content}</h1>
		</div>
	);
};
