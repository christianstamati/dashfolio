"use client";

import type { Icon } from "iconsax-reactjs";
import { Moon, Sun1 } from "iconsax-reactjs";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Card } from "@/components/ui/card";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";
import { sidebarData } from ".";

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const mounted = useMounted();

	if (!mounted) {
		return null;
	}

	return (
		<button
			type="button"
			className="w-full"
			onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
		>
			<SidebarItem
				icon={theme === "light" ? Moon : Sun1}
				label={theme === "light" ? "Dark" : "Light"}
			/>
		</button>
	);
};

const SidebarItem = ({
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
				"flex w-full cursor-pointer items-center rounded-2xl text-primary/30 transition-all duration-300 hover:bg-muted/50 hover:text-foreground",
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

export function DesktopSidebar() {
	const items = sidebarData.links;

	// Separate visible and collapsed items
	const visibleLinks = items.filter((link) => !link.collapsed);
	const collapsedLinks = items.filter((link) => link.collapsed);

	// Combine: visible items first, then collapsed items
	const sortedLinks = [...visibleLinks, ...collapsedLinks];

	// Calculate dynamic heights based on filtered links
	const itemHeight = 56; // 14 * 4 = 56px (size-14)
	const padding = 16; // p-2 = 8px top + 8px bottom
	const collapsedHeight = visibleLinks.length * itemHeight + padding;
	const expandedHeight = sortedLinks.length * itemHeight + padding + 56;

	return (
		<Card
			className={`-translate-y-1/2 group fixed top-1/2 left-8 z-50 w-[72px] gap-0 overflow-hidden rounded-[36px] p-2 shadow-xl/5 transition-all duration-300 ease-in-out hover:w-[200px] hover:rounded-3xl`}
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
					<SidebarItem
						icon={link.icon}
						label={link.label}
						className={
							index >= visibleLinks.length
								? "opacity-0 group-hover:opacity-100"
								: ""
						}
					/>
				</Link>
			))}
			<ThemeToggle />
		</Card>
	);
}
