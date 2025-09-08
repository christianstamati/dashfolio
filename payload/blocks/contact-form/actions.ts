"use server";

import { getPayloadClient } from "@/payload/client";
import type { ContactFormData } from "./schema";

export async function createInquiry(data: ContactFormData) {
	const payload = await getPayloadClient();

	try {
		const result = await payload.create({
			collection: "inquiries",
			data,
		});

		if (!result.id) {
			return false;
		}

		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
}
