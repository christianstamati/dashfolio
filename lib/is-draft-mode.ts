import { draftMode } from "next/headers";
import { cache } from "react";

export const isDraftMode = cache(async () => {
	const result = await draftMode();
	return result.isEnabled;
});
