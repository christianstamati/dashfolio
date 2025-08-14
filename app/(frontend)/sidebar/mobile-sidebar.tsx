"use client";

import { More } from "iconsax-reactjs";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { sidebarData } from ".";

export function MobileSidebar() {
	const items = sidebarData.links;
	// Take first 4 items for the main menu
	const mainLinks = items.slice(0, 4);
	// Remaining items go in the dropdown
	const dropdownLinks = items.slice(4);

	return (
		<div className="fixed right-0 bottom-0 left-0 z-50 border-border border-t">
			<div className="grid grid-cols-5 items-center px-4 py-2">
				{/* Main menu items */}
				{mainLinks.map((item, index) => (
					<Link
						href={item.href}
						key={`mobile-${item.label}-${index}`}
						className="flex flex-col items-center gap-1 rounded-lg p-2 transition-colors hover:bg-muted"
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
						<DropdownMenuContent side="top">
							{dropdownLinks.map((item, index) => (
								<DropdownMenuItem
									key={`dropdown-${item.label}-${index}`}
									asChild
								>
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
		</div>
	);
}
