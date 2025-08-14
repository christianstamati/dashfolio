export default async function Project({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	return <div>Project {slug}</div>;
}
