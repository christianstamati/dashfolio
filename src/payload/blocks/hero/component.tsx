import type { TestBlock as TestBlockProps } from "@payload-types";
export default function Component(props: TestBlockProps) {
  return <div>{props.content}</div>;
}
