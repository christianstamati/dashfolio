import type { Metadata } from "next";
import { unstable_cache } from "next/cache";
import { draftMode } from "next/headers";
import { LivePreviewListener } from "@/components/live-preview-listener";
import RenderBlocks from "@/payload/blocks/render-blocks";
import { getPayloadClient } from "@/payload/client";
import { generateMeta } from "@/payload/utils/generateMeta";

export async function generateStaticParams() {
	const payload = await getPayloadClient();
	const pages = await payload.find({
		collection: "pages",
		draft: false,
		limit: 1000,
		overrideAccess: false,
		pagination: false,
		select: {
			slug: true,
		},
	});

	const params = pages.docs
		?.filter((doc) => {
			return doc.slug !== "home";
		})
		.map(({ slug }) => {
			return { slug };
		});

	return params;
}

export async function generateMetadata({
	params: paramsPromise,
}: Args): Promise<Metadata> {
	const { slug = "home" } = await paramsPromise;
	const page = await queryPageBySlug({
		slug,
	});
	return generateMeta({ doc: page });
}

const queryPageBySlug = unstable_cache(
	async ({ slug }: { slug: string }) => {
		const { isEnabled: draft } = await draftMode();
		const payload = await getPayloadClient();
		const result = await payload.find({
			collection: "pages",
			draft,
			limit: 1,
			pagination: false,
			overrideAccess: draft,
			where: {
				slug: {
					equals: slug,
				},
			},
		});
		return result.docs?.[0] || null;
	},
	["queryPageBySlug"],
	{
		tags: ["pages"],
	},
);

export type SearchParams = {
	query?: string;
};

type Args = {
	params: Promise<{
		slug?: string;
	}>;
	searchParams?: Promise<SearchParams>;
};

export default async function Page(args: Args) {
	const startTime = performance.now();
	console.log(
		`[Page] Starting render for slug: ${(await args.params).slug || "home"}`,
	);

	const { isEnabled: draft } = await draftMode();
	const { slug = "home" } = await args.params;

	const dataFetchStart = performance.now();
	const page = await queryPageBySlug({
		slug,
	});
	const searchParams = await args.searchParams;
	const dataFetchEnd = performance.now();

	console.log(
		`[Page] Data fetch took: ${(dataFetchEnd - dataFetchStart).toFixed(2)}ms`,
	);

	const endTime = performance.now();
	console.log(
		`[Page] Total render time: ${(endTime - startTime).toFixed(2)}ms`,
	);

	return (
		<article>
			{draft && <LivePreviewListener />}
			<RenderBlocks page={page} searchParams={searchParams} />
		</article>
	);
}
