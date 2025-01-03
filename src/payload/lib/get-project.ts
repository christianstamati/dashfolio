import { cache } from "react";
import getPayload from "@/payload/lib/get-payload";

const getProject = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload();

  const result = await payload.find({
    collection: "projects",
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});

export default getProject;
