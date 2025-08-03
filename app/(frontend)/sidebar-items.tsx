"use client";

import { Folder, Home, PathTool, Profile, Sms } from "iconsax-reactjs";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Menu, Page } from "@/payload/payload-types";

const icons = {
	home: Home,
	folder: Folder,
	message: Sms,
	writing: PathTool,
	profile: Profile,
};

const SidebarItem = ({
	className,
	icon,
	label,
}: {
	className?: string;
	icon: string;
	label: string;
}) => {
	const Icon = icons[icon as keyof typeof icons] || Home;
	return (
		<div
			className={cn(
				"flex w-full cursor-pointer items-center rounded-2xl text-primary/20 transition-all duration-300 hover:bg-neutral-100 hover:text-foreground",
				className,
			)}
		>
			<div className="flex size-14 flex-shrink-0 items-center justify-center">
				<Icon variant="Bold" size={24} />
			</div>
			<span className="whitespace-nowrap font-semibold text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
				{label}
			</span>
		</div>
	);
};

const extractLink = (link: Menu["links"][0]): string => {
	if (link.type === "page") {
		const page = link.page as Page;
		return `/${page.slug}`;
	}
	return link.href || "";
};

export default function SidebarItems({ links }: { links: Menu["links"] }) {
	// Separate visible and collapsed items
	const visibleLinks = links.filter((link) => !link.collapsed);
	const collapsedLinks = links.filter((link) => link.collapsed);

	// Combine: visible items first, then collapsed items
	const sortedLinks = [...visibleLinks, ...collapsedLinks];

	// Calculate dynamic heights based on filtered links
	const itemHeight = 56; // 14 * 4 = 56px (size-14)
	const padding = 16; // p-2 = 8px top + 8px bottom
	const collapsedHeight = visibleLinks.length * itemHeight + padding;
	const expandedHeight = sortedLinks.length * itemHeight + padding;

	return (
		<div
			className={`-translate-y-1/2 group fixed top-1/2 left-8 z-50 w-[72px] overflow-hidden rounded-[36px] bg-white p-2 shadow-xl/5 ring ring-border transition-all duration-300 ease-in-out hover:w-[200px] hover:rounded-3xl`}
			style={
				{
					height: `${collapsedHeight}px`,
					"--collapsed-height": `${collapsedHeight}px`,
					"--expanded-height": `${expandedHeight}px`,
				} as React.CSSProperties
			}
		>
			{sortedLinks.map((link, index) => (
				<Link href={extractLink(link)} key={`${link.label}-${index}`}>
					<SidebarItem
						icon={link.icon}
						label={link.label}
						className={
							index >= visibleLinks.length ? "hidden group-hover:flex" : ""
						}
					/>
				</Link>
			))}
		</div>
	);
}
