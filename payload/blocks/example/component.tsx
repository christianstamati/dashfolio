import type { ExampleProps } from "@/payload/payload-types";

export default function Example({ props }: { props: ExampleProps }) {
	return <div>{props.content}</div>;
}
