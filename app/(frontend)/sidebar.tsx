"use client";

import Link from "next/link";
import Iconsax from "@/components/iconsax";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import type { Menu, Page } from "@/payload/payload-types";

type SidebarProps = {
	menu: Menu;
};

const SidebarDesktopItem = ({
	className,
	icon,
	label,
}: {
	className?: string;
	icon: string;
	label: string;
}) => {
	return (
		<div
			className={cn(
				"flex w-full cursor-pointer items-center rounded-2xl text-primary/20 transition-all duration-300 hover:bg-neutral-100 hover:text-foreground",
				className,
			)}
		>
			<div className="flex size-14 flex-shrink-0 items-center justify-center">
				<Iconsax icon={icon} variant="Bold" size={24} />
			</div>
			<span className="whitespace-nowrap font-semibold text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
				{label}
			</span>
		</div>
	);
};

const extractLink = (
	link: Menu["links"][0],
	homePage: Menu["homePage"],
): string => {
	if (link.type === "page") {
		const page = link.page as Page;

		if (
			typeof homePage !== "string" &&
			page.slug &&
			page.slug !== homePage?.slug
		) {
			return `/${page.slug}`;
		}

		return "/";
	}
	return link.href || "";
};

function SidebarDesktop({ menu }: SidebarProps) {
	const { links, homePage } = menu;
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
				<Link href={extractLink(link, homePage)} key={`${link.label}-${index}`}>
					<SidebarDesktopItem
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

function SidebarMobile({ menu }: SidebarProps) {
	const { links, homePage } = menu;

	// Take first 4 items for the main menu
	const mainLinks = links.slice(0, 4);
	// Remaining items go in the dropdown
	const dropdownLinks = links.slice(4);

	return (
		<div className="fixed right-0 bottom-0 left-0 z-50 border-border border-t bg-white">
			<div className="grid grid-cols-5 items-center px-4 py-2">
				{/* Main menu items */}
				{mainLinks.map((link, index) => (
					<Link
						href={extractLink(link, homePage)}
						key={`mobile-${link.label}-${index}`}
						className="flex flex-col items-center gap-1 rounded-lg p-2 transition-colors hover:bg-neutral-100"
					>
						<Iconsax icon={link.icon} variant="Bold" size={20} />
						<span className="font-medium text-xs">{link.label}</span>
					</Link>
				))}

				{/* More dropdown as the 5th item */}
				{dropdownLinks.length > 0 ? (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<button
								type="button"
								className="flex flex-col items-center gap-1 rounded-lg p-2 transition-colors hover:bg-neutral-100"
							>
								<Iconsax icon="more" size={20} />
								<span className="font-medium text-xs">More</span>
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							align="center"
							side="top"
							className="mb-2 w-48"
						>
							{dropdownLinks.map((link, index) => (
								<DropdownMenuItem
									key={`dropdown-${link.label}-${index}`}
									asChild
								>
									<Link
										href={extractLink(link, homePage)}
										className="flex w-full items-center gap-2"
									>
										<Iconsax icon={link.icon} variant="Bold" size={16} />
										{link.label}
									</Link>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				) : (
					// Empty div to maintain grid layout when no dropdown is needed
					<div />
				)}
			</div>
		</div>
	);
}

export function Sidebar(props: SidebarProps) {
	const isMobile = useIsMobile();

	if (isMobile) {
		return <SidebarMobile {...props} />;
	}

	return <SidebarDesktop {...props} />;
}
