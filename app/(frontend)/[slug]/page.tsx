import type { Metadata } from "next";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import { LivePreviewListener } from "@/components/live-preview-listener";
import RenderBlocks from "@/payload/blocks/render-blocks";
import { getPayloadClient } from "@/payload/client";
import { generateMeta } from "@/payload/utils/generateMeta";
import { isDraftMode } from "../../../lib/is-draft-mode";
import Footer from "../footer";

type Props = {
	params: Promise<{
		slug?: string;
	}>;
	searchParams?: Promise<{
		query?: string;
	}>;
};

export const experimental_ppr = true;

const queryPageBySlug = (slug: string) =>
	unstable_cache(
		async () => {
			const draft = await isDraftMode();
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
		[`pages-${slug}`],
		{
			tags: [`pages-${slug}`],
		},
	);

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
	return pages.docs
		.filter(({ slug }) => slug !== "home")
		.map(({ slug }) => {
			return { slug };
		});
}

export async function generateMetadata({
	params,
}: Props): Promise<Metadata | undefined> {
	const { slug = "home" } = await params;
	const page = await queryPageBySlug(slug)();
	if (page?.meta?.disabled) {
		return;
	}
	return generateMeta({ doc: page });
}

export default async function Page(props: Props) {
	const [params, searchParams, draft] = await Promise.all([
		props.params,
		props.searchParams,
		isDraftMode(),
	]);

	const { slug = "home" } = params;

	const page = await queryPageBySlug(slug)();

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
