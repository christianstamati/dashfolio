import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<main className="min-h-0 w-full overflow-auto">
			<div className="max-w-2xl">
				{/* Title skeleton */}
				<Skeleton className="mb-6 h-8 w-64" />

				{/* Content skeleton */}
				<div className="space-y-4">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-5/6" />
					<Skeleton className="h-4 w-4/5" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-3/4" />
				</div>

				{/* Subtitle skeleton */}
				<div className="mt-8">
					<Skeleton className="mb-4 h-6 w-40" />
					<div className="space-y-3">
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-5/6" />
						<Skeleton className="h-4 w-4/5" />
					</div>
				</div>

				{/* Card-like skeleton */}
				<div className="mt-8 space-y-3">
					<Skeleton className="h-48 w-full rounded-lg" />
					<Skeleton className="h-48 w-full rounded-lg" />
					<Skeleton className="h-48 w-full rounded-lg" />
				</div>

				{/* List skeleton */}
				<div className="mt-8 space-y-3">
					<Skeleton className="h-6 w-32" />
					<div className="space-y-2">
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-4/5" />
						<Skeleton className="h-4 w-3/4" />
						<Skeleton className="h-4 w-5/6" />
					</div>
				</div>

				{/* Additional content */}
				<div className="mt-8 space-y-4">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-5/6" />
					<Skeleton className="h-4 w-4/5" />
				</div>
			</div>
		</main>
	);
}
