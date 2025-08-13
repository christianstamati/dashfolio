"use server";

import { getPayloadClient } from "@/payload/client";

export async function getSettings() {
	const payload = await getPayloadClient();
	const settings = await payload.findGlobal({
		slug: "settings",
	});
	return settings;
}
