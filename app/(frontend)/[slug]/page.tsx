import type { Metadata } from "next";
import { unstable_cache } from "next/cache";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { LivePreviewListener } from "@/components/live-preview-listener";
import RenderBlocks from "@/payload/blocks/render-blocks";
import { getPayloadClient } from "@/payload/client";
import { generateMeta } from "@/payload/utils/generateMeta";
import Footer from "../footer";

export const dynamicParams = false;

const queryPageBySlugCached = async ({ slug }: { slug: string }) => {
	return unstable_cache(
		async () => {
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
		[slug],
		{
			tags: ["pages"],
			revalidate: 60,
		},
	)();
};

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
}: Args): Promise<Metadata | undefined> {
	const { slug = "home" } = await paramsPromise;
	const page = await queryPageBySlugCached({
		slug,
	});
	if (page?.meta?.disabled) {
		return;
	}
	return generateMeta({ doc: page });
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
	const { isEnabled: draft } = await draftMode();
	const { slug = "home" } = await args.params;

	const page = await queryPageBySlugCached({
		slug,
	});
	const searchParams = await args.searchParams;

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
