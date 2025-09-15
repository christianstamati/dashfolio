import type { Metadata } from "next";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import { cache } from "react";
import { LivePreviewListener } from "@/components/live-preview-listener";
import RenderBlocks from "@/payload/blocks/render-blocks";
import { getPayloadClient } from "@/payload/client";
import { generateMeta } from "@/payload/utils/generateMeta";
import Footer from "../footer";
import { isDraftMode } from "../is-draft-mode";

// Layer 1: Cross-request caching with unstable_cache
const getCachedPage = (slug: string) =>
	unstable_cache(
		async (draft: boolean) => {
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
		["pages", slug], // cache key includes actual slug value
		{
			revalidate: 3600, // 1 hour cache
			tags: [`pages-${slug}`], // for cache invalidation
		},
	);

// Layer 2: Single-render deduplication with React cache
const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
	const draft = await isDraftMode();
	return await getCachedPage(slug)(draft);
});

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

	const params = pages.docs.map(({ slug }) => {
		return { slug };
	});

	return params;
}

// Layer 1: Cross-request caching for metadata
const getCachedMetadata = (slug: string) =>
	unstable_cache(
		async () => {
			const page = await queryPageBySlug({
				slug,
			});
			if (page?.meta?.disabled) {
				return;
			}
			return generateMeta({ doc: page });
		},
		["metadata", slug], // cache key includes actual slug value
		{
			revalidate: 3600, // 1 hour cache
			tags: [`pages-${slug}`], // for cache invalidation
		},
	);

// Layer 2: Single-render deduplication for metadata
const getMetadataCached = cache(async (slug: string) => {
	return await getCachedMetadata(slug)();
});

export async function generateMetadata({
	params: paramsPromise,
}: Args): Promise<Metadata | undefined> {
	const { slug = "home" } = await paramsPromise;
	return await getMetadataCached(slug);
}

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
	"use memo";
	const [params, searchParams, draft] = await Promise.all([
		args.params,
		args.searchParams,
		isDraftMode(),
	]);

	const { slug = "home" } = params;

	const page = await queryPageBySlug({
		slug,
	});

	if (!page || typeof page === "string") {
		return notFound();
	}

	return (
		<main className="space-y-16">
			{draft && <LivePreviewListener />}
			<RenderBlocks page={page} searchParams={searchParams} />
			<Footer />
		</main>
	);
}
