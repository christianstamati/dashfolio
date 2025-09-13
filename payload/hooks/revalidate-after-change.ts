import { revalidatePath } from "next/cache";
import type { CollectionAfterChangeHook } from "payload";

export const revalidateAfterChange: CollectionAfterChangeHook = ({ doc }) => {
	const status = doc._status;
	if (status === "published") {
		revalidatePath(`/${doc.slug}`);
	}
};
