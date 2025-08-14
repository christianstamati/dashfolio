import type { Metadata } from "next/types";
import type { RequiredDataFromCollectionSlug } from "payload";
import { cache } from "react";
import { RenderBlocks } from "@/payload/blocks/render-blocks";
import { getPayloadClient } from "@/payload/client";
import { generateMeta } from "@/payload/utilities/generate-meta";

const getSettings = cache(async () => {
	const payload = await getPayloadClient();
	const result = await payload.findGlobal({
		slug: "settings",
	});
	return result;
});

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
	const payload = await getPayloadClient();

	const result = await payload.find({
		collection: "pages",
		limit: 1,
		pagination: false,
		where: {
			slug: {
				equals: slug,
			},
		},
	});

	return result.docs?.[0] || null;
});

const queryProjectBySlug = cache(async ({ slug }: { slug: string }) => {
	const payload = await getPayloadClient();

	const result = await payload.find({
		collection: "projects",
		limit: 1,
		pagination: false,
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
		segments?: string[];
	}>;
};

async function RenderPage({ slug }: { slug: string }) {
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

	const { hero } = page;

	return (
		<main className="h-screen overflow-auto pt-16 pb-24">
			<div className="mx-auto max-w-xl px-4 sm:px-6">
				{/* Hero Section */}
				{hero && hero.type !== "none" && (
					<div>
						<h1 className="mb-4 font-bold text-2xl">
							{hero.header || page.title}
						</h1>
						{hero.description && (
							<p className="max-w-2xl text-base text-muted-foreground">
								{hero.description}
							</p>
						)}
					</div>
				)}

				{/* Layout Blocks */}
				<RenderBlocks target={page} />
			</div>
		</main>
	);
}

async function RenderProject({ slug }: { slug: string }) {
	let project: RequiredDataFromCollectionSlug<"projects"> | null;

	project = await queryProjectBySlug({
		slug,
	});

	if (!project) {
		return <div>Project not found</div>;
	}

	const { title } = project;

	return (
		<main className="h-screen overflow-auto pt-16 pb-24">
			<div className="mx-auto max-w-xl px-4 sm:px-6">{title}</div>
		</main>
	);
}

export default async function Page({ params: paramsPromise }: Args) {
	const { segments = ["home"] } = await paramsPromise;

	if (segments?.length <= 1) {
		return <RenderPage slug={segments[0]} />;
	}

	const settings = await getSettings();

	const projectSegment =
		typeof settings?.projectPage === "string"
			? undefined
			: settings.projectPage?.slug;

	if (segments[0] === projectSegment) {
		return <RenderProject slug={segments[1]} />;
	}

	return (
		<main className="h-screen overflow-auto pt-16 pb-24">
			Segment not found
			<pre>{JSON.stringify(segments, null, 2)}</pre>
		</main>
	);
}

export async function generateMetadata({
	params: paramsPromise,
}: Args): Promise<Metadata> {
	const { segments } = await paramsPromise;

	if (segments?.length === 1) {
		const page = await queryPageBySlug({
			slug: segments[0],
		});

		return generateMeta({ doc: page });
	}

	return {
		title: "Invalid",
	};
}
