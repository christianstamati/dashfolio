import { getPayload } from "payload";
import configPromise from "@/payload/payload.config";

export const GET = async (request: Request) => {
	const payload = await getPayload({
		config: configPromise,
	});

	return Response.json({
		message: "This is an example of a custom route.",
	});
};
