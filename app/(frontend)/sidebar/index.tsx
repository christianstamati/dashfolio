"use client";

import { Folder, Home, Layer, PathTool, Profile, Sms } from "iconsax-reactjs";
import { useIsMobile } from "@/hooks/use-mobile";
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
			label: "Writing",
			icon: PathTool,
			href: "/writing",
			collapsed: true,
		},
		{
			label: "Stack",
			icon: Layer,
			href: "/stack",
			collapsed: true,
		},
		{
			label: "Contact",
			icon: Sms,
			href: "/contact",
			collapsed: true,
		},
	],
};

export function Sidebar() {
	const isMobile = useIsMobile();
	if (isMobile) {
		return <MobileSidebar />;
	}
	return <DesktopSidebar />;
}
