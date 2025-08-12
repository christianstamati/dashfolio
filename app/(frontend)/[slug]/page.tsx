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
			hero: {
				type: "none",
				header: "Home",
				description: "Home description",
			},
			layout: [],
			title: "Home",
			slug: "home",
		};
	}

	if (!page) {
		return <div>Page not found</div>;
	}

	const { layout, hero } = page;

	return (
		<main className="min-h-screen pt-16 pb-24">
			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				{/* Hero Section */}
				{hero && hero.type !== "none" && (
					<div className="mb-12">
						<h1 className="mb-4 font-bold text-xl sm:text-2xl lg:text-3xl">
							{hero.header || page.title}
						</h1>
						{hero.description && (
							<p className="max-w-2xl text-lg text-muted-foreground leading-relaxed sm:text-xl">
								{hero.description}
							</p>
						)}
					</div>
				)}

				{/* Layout Blocks */}
				<div className="space-y-8">
					{layout.map((block) => (
						<div key={block.id} className="w-full">
							{block.blockType}
						</div>
					))}
				</div>
			</div>
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
