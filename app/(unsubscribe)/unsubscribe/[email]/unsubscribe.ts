"use server";

import { getPayloadClient } from "@/payload/client";

export async function unsubscribe(email: string) {
	const payload = await getPayloadClient();

	try {
		// Find the subscriber
		const existingSubscriber = await payload.find({
			collection: "subscribers",
			where: {
				email: {
					equals: email,
				},
			},
		});

		if (existingSubscriber.docs.length === 0) {
			throw new Error("Subscriber not found");
		}

		// Delete the subscriber
		await payload.delete({
			collection: "subscribers",
			id: existingSubscriber.docs[0].id,
		});
	} catch (error) {
		console.error("Unsubscribe error:", error);
		throw new Error("Failed to unsubscribe");
	}
}
