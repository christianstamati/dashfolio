"use client";

import { Moon, Sun1 } from "iconsax-reactjs";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { IconsaxIcon } from "@/components/iconsax-icon";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Nav } from "@/payload/payload-types";
import MobileNavItem from "./mobile-nav-item";
import { getUrl } from "./utils";

interface MobileNavbarProps {
	links: NonNullable<Nav["links"]>;
}

export function MobileNavbar({ links }: MobileNavbarProps) {
	const [isMoreOpen, setIsMoreOpen] = useState(false);
	const { theme, setTheme } = useTheme();

	// Show first 4 items in main navigation, rest in dropdown
	const mainItems = links.slice(0, 4);
	const extraItems = links.slice(4);

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<div className="fixed right-0 bottom-0 left-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
			<div className="flex items-center justify-around px-2 py-2">
				{mainItems.map((link) => (
					<MobileNavItem key={link.id} link={link} />
				))}

				{extraItems.length > 0 && (
					<DropdownMenu
						modal={false}
						open={isMoreOpen}
						onOpenChange={setIsMoreOpen}
					>
						<DropdownMenuTrigger asChild>
							<Button
								size="sm"
								className="flex h-auto flex-col items-center gap-1 rounded-lg px-3 py-2"
								variant="ghost"
							>
								<IconsaxIcon
									variant="Linear"
									className="size-5 text-muted-foreground"
									name="MoreCircle"
								/>
								<span className="text-muted-foreground text-xs">More</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							side="top"
							align="center"
							className="mb-2 w-48"
						>
							{extraItems.map((link) => {
								const linkUrl = getUrl(link);
								return (
									<DropdownMenuItem key={link.id} asChild>
										<Button
											variant="ghost"
											className="flex h-auto w-full items-center justify-start gap-3 px-3 py-2"
											asChild
										>
											<Link
												href={linkUrl === "/home" ? "/" : (linkUrl ?? "/")}
												prefetch={true}
											>
												<IconsaxIcon
													variant="Linear"
													className="size-4 text-muted-foreground"
													name={link.icon ?? "Home"}
												/>
												<span className="text-sm">{link.label}</span>
											</Link>
										</Button>
									</DropdownMenuItem>
								);
							})}
							<DropdownMenuItem asChild>
								<Button
									variant="ghost"
									onClick={toggleTheme}
									className="flex h-auto w-full items-center justify-start gap-3 px-3 py-2"
								>
									<Sun1
										variant="Linear"
										className="dark:-rotate-90 size-4 rotate-0 scale-100 text-muted-foreground transition-all dark:scale-0"
									/>
									<Moon
										variant="Linear"
										className="absolute size-4 rotate-90 scale-0 text-muted-foreground transition-all dark:rotate-0 dark:scale-100"
									/>
									<span className="text-sm">Toggle Theme</span>
								</Button>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				)}

				{extraItems.length === 0 && (
					<Button
						size="sm"
						onClick={toggleTheme}
						className="flex h-auto flex-col items-center gap-1 rounded-lg px-3 py-2"
						variant="ghost"
					>
						<Sun1
							variant="Linear"
							className="dark:-rotate-90 size-5 rotate-0 scale-100 text-muted-foreground transition-all dark:scale-0"
						/>
						<Moon
							variant="Linear"
							className="absolute size-5 rotate-90 scale-0 text-muted-foreground transition-all dark:rotate-0 dark:scale-100"
						/>
						<span className="text-muted-foreground text-xs">Theme</span>
					</Button>
				)}
			</div>
		</div>
	);
}
