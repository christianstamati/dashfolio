export default function Component(props: any) {
  console.log(props);
  return <div className="bg-red-500">{props.content}</div>;
}
