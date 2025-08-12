import { getPayloadClient } from "@/payload/client";

export default async function Footer() {
	const payload = await getPayloadClient();
	const footer = await payload.findGlobal({
		slug: "footer",
	});
	return (
		<div className="bg-primary/5 py-10">
			<div className="flex flex-col items-center justify-center">
				<p>{footer?.copyright}</p>
			</div>
		</div>
	);
}
