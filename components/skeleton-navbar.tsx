import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonNavbar() {
	const desktopNavItems = ["home", "projects", "writings", "about", "contact"];
	const mobileNavItems = ["home", "projects", "writings", "about", "more"];

	return (
		<>
			{/* Desktop Skeleton Navbar */}
			<div className="hidden items-center justify-between border-r p-2 lg:flex lg:h-full lg:flex-col">
				<div className="flex flex-1 flex-col items-center justify-center gap-2">
					{/* 5 skeleton nav items */}
					{desktopNavItems.map((item) => (
						<Skeleton
							key={`desktop-nav-${item}`}
							className="size-14 rounded-2xl"
						/>
					))}
				</div>

				{/* Mode toggle skeleton */}
				<Skeleton className="size-14 rounded-2xl" />
			</div>

			{/* Mobile Skeleton Navbar */}
			<div className="fixed right-0 bottom-0 left-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
				<div className="flex items-center justify-around px-2 py-2">
					{/* 5 skeleton mobile nav items */}
					{mobileNavItems.map((item) => (
						<div
							key={`mobile-nav-${item}`}
							className="flex h-auto flex-col items-center gap-1 rounded-lg px-3 py-2"
						>
							<Skeleton className="size-5 rounded" />
							<Skeleton className="h-3 w-8 rounded" />
						</div>
					))}
				</div>
			</div>
		</>
	);
}
