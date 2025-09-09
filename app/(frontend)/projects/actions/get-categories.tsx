"use server";

import { getPayloadClient } from "@/payload/client";

export async function getCategories() {
	const payload = await getPayloadClient();
	const categories = await payload.find({
		collection: "categories",
		pagination: false,
	});
	return categories.docs;
}
