"use client";

import { Moon, Sun1 } from "iconsax-reactjs";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" className="size-14 rounded-2xl">
					<Sun1
						variant="Bold"
						className="dark:-rotate-90 size-6 rotate-0 scale-100 text-muted-foreground/50 transition-all dark:scale-0"
					/>
					<Moon
						variant="Bold"
						className="absolute size-6 rotate-90 scale-0 text-muted-foreground/50 transition-all dark:rotate-0 dark:scale-100"
					/>
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="start">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
