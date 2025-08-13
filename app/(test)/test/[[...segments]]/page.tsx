type Args = {
	params: Promise<{
		slug?: string;
		segments?: string[];
	}>;
};

export default async function Page({ params: paramsPromise }: Args) {
	const { segments = [] } = await paramsPromise;

	console.log(segments);

	return (
		<main className="h-screen overflow-auto pt-16 pb-24">
			<pre>{JSON.stringify(segments, null, 2)}</pre>
		</main>
	);
}
