import { draftMode } from "next/headers";
import type { Metadata } from "next/types";
import type { RequiredDataFromCollectionSlug } from "payload";
import { cache } from "react";
import { getPayloadClient } from "@/payload/client";
import { generateMeta } from "@/payload/utilities/generate-meta";

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

	const params = pages.docs
		?.filter((doc) => {
			return doc.slug !== "home";
		})
		.map(({ slug }) => {
			return { slug };
		});

	return params;
}

type Args = {
	params: Promise<{
		slug?: string;
	}>;
};

export default async function Page({ params: paramsPromise }: Args) {
	const { slug = "home" } = await paramsPromise;

	let page: RequiredDataFromCollectionSlug<"pages"> | null;

	page = await queryPageBySlug({
		slug,
	});

	// Remove this code once your website is seeded
	if (!page && slug === "home") {
		page = {
			layout: [],
			title: "Home",
			slug: "home",
		};
	}

	if (!page) {
		return <div>Page not found</div>;
	}

	const { layout } = page;

	return (
		<main className="pt-16 pb-24">
			{layout.map((block) => (
				<div key={block.id}>{block.blockType}</div>
			))}
		</main>
	);
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
