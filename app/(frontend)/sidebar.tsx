"use client";

import {
	Folder,
	Home,
	type Icon,
	Layer,
	More,
	PathTool,
	Profile,
	Sms,
} from "iconsax-reactjs";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

type SidebarItem = {
	label: string;
	icon: Icon;
	href: string;
	collapsed?: boolean;
};

type SidebarProps = {
	items: SidebarItem[];
};

const SidebarDesktopItem = ({
	className,
	icon: Icon,
	label,
}: {
	className?: string;
	icon: Icon;
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
				<Icon variant="Bold" size={24} />
			</div>
			<span className="whitespace-nowrap font-semibold text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
				{label}
			</span>
		</div>
	);
};

function Desktop({ items }: SidebarProps) {
	// Separate visible and collapsed items
	const visibleLinks = items.filter((link) => !link.collapsed);
	const collapsedLinks = items.filter((link) => link.collapsed);

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
				<Link href={link.href} key={`${link.label}-${index}`}>
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

function Mobile({ items }: SidebarProps) {
	// Take first 4 items for the main menu
	const mainLinks = items.slice(0, 4);
	// Remaining items go in the dropdown
	const dropdownLinks = items.slice(4);

	return (
		<div className="fixed right-0 bottom-0 left-0 z-50 border-border border-t bg-white">
			<div className="grid grid-cols-5 items-center px-4 py-2">
				{/* Main menu items */}
				{mainLinks.map((item, index) => (
					<Link
						href={item.href}
						key={`mobile-${item.label}-${index}`}
						className="flex flex-col items-center gap-1 rounded-lg p-2 transition-colors hover:bg-neutral-100"
					>
						<item.icon variant="Bold" size={20} />
						<span className="font-medium text-xs">{item.label}</span>
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
								<More variant="Bold" size={20} />
								<span className="font-medium text-xs">More</span>
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							align="center"
							side="top"
							className="mb-2 w-48"
						>
							{dropdownLinks.map((item, index) => (
								<DropdownMenuItem
									key={`dropdown-${item.label}-${index}`}
									asChild
								>
									<Link
										href={item.href}
										className="flex w-full items-center gap-2"
									>
										<item.icon variant="Bold" size={16} />
										{item.label}
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

const links = [
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
];

export function Sidebar() {
	const isMobile = useIsMobile();

	if (isMobile) {
		return <Mobile items={links} />;
	}

	return <Desktop items={links} />;
}
