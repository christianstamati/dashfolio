import { getPayloadClient } from "@/payload/client";
import { Sidebar } from ".";

const getLinks = async () => {
	const payload = await getPayloadClient();
	const nav = await payload.findGlobal({
		slug: "nav",
	});
	return nav.links;
};

export async function SidebarServer() {
	const links = await getLinks();

	if (!links || links.length === 0) {
		return null;
	}

	return <Sidebar links={links} />;
}
