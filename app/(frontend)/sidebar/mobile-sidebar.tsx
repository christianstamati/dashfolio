"use client";

import { Moon, More, Sun1 } from "iconsax-reactjs";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Card } from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Nav } from "@/payload/payload-types";

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();

	return (
		<button
			type="button"
			className="w-full"
			onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
		>
			<DropdownMenuItem>
				{theme === "light" ? (
					<Moon variant="Bold" size={20} />
				) : (
					<Sun1 variant="Bold" size={20} />
				)}
				<span className="font-medium text-xs">
					{theme === "light" ? "Dark" : "Light"}
				</span>
			</DropdownMenuItem>
		</button>
	);
};

export function MobileSidebar({ links }: { links: NonNullable<Nav["links"]> }) {
	const items = links;
	// Take first 4 items for the main menu
	const mainLinks = items.slice(0, 4);
	// Remaining items go in the dropdown
	const dropdownLinks = items.slice(4);

	return (
		<Card className="fixed right-0 bottom-0 left-0 z-50 rounded-none border-x-0 border-b-0 bg-background p-0">
			<div className="grid grid-cols-5 items-center px-4 py-2">
				{/* Main menu items */}
				{mainLinks.map((item, index) => (
					<Link
						href={item.href}
						key={`mobile-${item.label}-${index}`}
						className="flex flex-col items-center gap-1 rounded-lg p-2 transition-colors hover:bg-muted"
					>
						<item.icon variant="Bold" size={20} />
						<span className="font-medium text-xs">{item.link.label}</span>
					</Link>
				))}

				{/* More dropdown as the 5th item */}
				{dropdownLinks.length > 0 ? (
					<DropdownMenu modal={false}>
						<DropdownMenuTrigger asChild>
							<button
								type="button"
								className="flex flex-col items-center gap-1 rounded-lg p-2 transition-colors hover:bg-muted"
							>
								<More variant="Outline" size={20} />
								<span className="font-medium text-xs">More</span>
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent side="top">
							<ThemeToggle />
							{dropdownLinks.map((item, index) => (
								<DropdownMenuItem key={`dropdown-${item.label}-${index}`}>
									<Link
										href={item.href}
										className="flex w-full items-center gap-2"
									>
										<item.icon variant="Bold" size={20} />
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
		</Card>
	);
}
