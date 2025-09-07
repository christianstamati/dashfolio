import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<article className="space-y-6 pt-16 pb-24">
			{/* Header skeleton */}
			<div className="space-y-2">
				<Skeleton className="h-8 w-3/4" />
				<Skeleton className="h-4 w-1/2" />
			</div>

			{/* Content skeleton */}
			<div className="space-y-3">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-5/6" />
			</div>

			{/* Card/block skeleton */}
			<div className="space-y-4">
				<Skeleton className="h-32 w-full rounded-lg" />
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<Skeleton className="h-24 w-full rounded-lg" />
					<Skeleton className="h-24 w-full rounded-lg" />
				</div>
			</div>
		</article>
	);
}
