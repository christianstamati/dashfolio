import { getPayloadClient } from "@/payload/client";
import SidebarItems from "./sidebar-items";

export default async function Sidebar() {
	const payload = await getPayloadClient();
	const global = await payload.findGlobal({
		slug: "menu",
	});
	return <SidebarItems menu={global} />;
}
