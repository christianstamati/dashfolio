import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<div className="flex flex-col gap-16">
			{/* Hero Section Skeleton */}
			<div className="space-y-4">
				<Skeleton className="h-12 w-3/4" />
				<Skeleton className="h-6 w-full" />
				<Skeleton className="h-6 w-5/6" />
				<Skeleton className="h-6 w-4/5" />
				<div className="flex gap-4 pt-4">
					<Skeleton className="h-10 w-32" />
					<Skeleton className="h-10 w-32" />
				</div>
			</div>

			{/* Selected Projects Section Skeleton */}
			<div className="space-y-6">
				<Skeleton className="h-8 w-48" />
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{[1, 2, 3].map((i) => (
						<div key={i} className="space-y-3">
							<Skeleton className="h-48 w-full rounded-lg" />
							<Skeleton className="h-6 w-3/4" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-2/3" />
						</div>
					))}
				</div>
			</div>

			{/* Writings Section Skeleton */}
			<div className="space-y-6">
				<Skeleton className="h-8 w-32" />
				<div className="space-y-4">
					{[1, 2, 3].map((i) => (
						<div key={i} className="space-y-2">
							<Skeleton className="h-6 w-3/4" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-2/3" />
						</div>
					))}
				</div>
			</div>

			{/* Newsletter Section Skeleton */}
			<div className="space-y-4">
				<Skeleton className="h-8 w-64" />
				<Skeleton className="h-6 w-full" />
				<div className="flex gap-2">
					<Skeleton className="h-10 flex-1" />
					<Skeleton className="h-10 w-24" />
				</div>
			</div>
		</div>
	);
}
