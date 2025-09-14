"use server";

import { getPayloadClient } from "@/payload/client";

export async function subscribe(email: string) {
	const payload = await getPayloadClient();

	const existingSubscriber = await payload.find({
		collection: "subscribers",
		where: {
			email: {
				equals: email,
			},
		},
	});

	if (existingSubscriber.docs.length > 0) {
		return {
			success: false,
			message: "You are already subscribed to the newsletter.",
		};
	}

	await payload.create({
		collection: "subscribers",
		data: { email },
	});

	return {
		success: true,
		message: "You have been subscribed to the newsletter.",
	};
}
