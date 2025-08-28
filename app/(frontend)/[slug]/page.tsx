import configPromise from "@payload-config";
import { draftMode } from "next/headers";
import { getPayload, type RequiredDataFromCollectionSlug } from "payload";
import { cache } from "react";
import { LivePreviewListener } from "@/components/LivePreviewListener";

export async function generateStaticParams() {
	const payload = await getPayload({ config: configPromise });
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
	const { isEnabled: draft } = await draftMode();
	const { slug = "home" } = await paramsPromise;
	const url = "/" + slug;

	let page: RequiredDataFromCollectionSlug<"pages"> | null;

	page = await queryPageBySlug({
		slug,
	});

	// Remove this code once your website is seeded
	if (!page && slug === "home") {
		page = {
			slug: "home",
			title: "Home",
		};
	}

	// if (!page) {
	// 	return <PayloadRedirects url={url} />;
	// }

	return (
		<article className="pt-16 pb-24">
			{draft && <LivePreviewListener />}
			{page?.title}
		</article>
	);
}

// export async function generateMetadata({
// 	params: paramsPromise,
// }: Args): Promise<Metadata> {
// 	const { slug = "home" } = await paramsPromise;
// 	const page = await queryPageBySlug({
// 		slug,
// 	});

// 	return generateMeta({ doc: page });
// }

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
	const { isEnabled: draft } = await draftMode();

	const payload = await getPayload({ config: configPromise });

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
