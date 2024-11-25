import SidebarClient from "@/features/sidebar/index.client";
import { getCachedGlobal } from "@/payload/lib/get-globals";

export default async function Sidebar() {
  const menu = await getCachedGlobal("menu", 1)();
  return <SidebarClient menu={menu} />;
}
