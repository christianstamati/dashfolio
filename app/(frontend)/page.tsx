import { getPayloadClient } from "@/payload/client";
import PageTemplate, { generateMetadata } from "./[slug]/page";
export default PageTemplate;
export { generateMetadata };

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
		where: {
			slug: {
				equals: "home",
			},
		},
	});

	const params = pages.docs.map(({ slug }) => {
		return { slug };
	});

	return params;
}
