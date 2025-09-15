import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";

const payload = cache(() => {
	return getPayload({ config });
});

export const getPayloadClient = () => {
	return payload();
};
