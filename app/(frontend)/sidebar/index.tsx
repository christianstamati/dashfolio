"use client";

import { Folder, Home, PathTool, Profile, Sms } from "iconsax-reactjs";
import { useIsMobile } from "@/hooks/use-mobile";
import type { Nav } from "@/payload/payload-types";
import { DesktopSidebar } from "./desktop-sidebar";
import { MobileSidebar } from "./mobile-sidebar";

export const sidebarData = {
	links: [
		{
			label: "Home",
			icon: Home,
			href: "/",
		},
		{
			label: "About",
			icon: Profile,
			href: "/about",
		},
		{
			label: "Projects",
			icon: Folder,
			href: "/projects",
		},
		{
			label: "Contact",
			icon: Sms,
			href: "/contact",
			collapsed: true,
		},
		{
			label: "Writings",
			icon: PathTool,
			href: "/writings",
			collapsed: true,
		},
	],
};

export function Sidebar({ links }: { links: Nav["links"] }) {
	const isMobile = useIsMobile();

	if (isMobile) {
		return <MobileSidebar />;
	}
	return <DesktopSidebar />;
}
