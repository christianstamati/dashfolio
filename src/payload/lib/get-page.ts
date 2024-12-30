import { cache } from "react";
import getPayload from "@/payload/lib/get-payload";

const getPage = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload();

  const result = await payload.find({
    collection: "pages",
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});

export default getPage;
