import type { CustomBlock as CustomBlockProps } from "@payload-types";
export default function Component(props: CustomBlockProps) {
  return (
    <div>
      <div>This is my custom block: {props.blockName}</div>
      <div>{props.content}</div>
    </div>
  );
}
