import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { cache } from "react";
import { LivePreviewListener } from "@/components/live-preview-listener";
import RenderBlocks from "@/payload/blocks/render-blocks";
import { getPayloadClient } from "@/payload/client";
import { generateMeta } from "@/payload/utils/generateMeta";
import Footer from "../footer";

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
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

export async function generateMetadata({
	params: paramsPromise,
}: Args): Promise<Metadata | undefined> {
	const { slug = "home" } = await paramsPromise;
	const page = await queryPageBySlug({
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
	const [params, searchParams, { isEnabled: draft }] = await Promise.all([
		args.params,
		args.searchParams,
		draftMode(),
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
