import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

function ProjectCardSkeleton() {
	return (
		<Card className="relative overflow-hidden p-0">
			{/* Mobile Layout - Vertical */}
			<div className="flex flex-col md:hidden">
				<div className="h-72 w-full">
					<Skeleton className="h-full w-full" />
				</div>
			</div>

			{/* Desktop Layout - Horizontal */}
			<Skeleton className="hidden h-56 md:flex"></Skeleton>
		</Card>
	);
}

type ProjectListSkeletonProps = {
	count?: number;
	className?: string;
};

export function ProjectListSkeleton({
	count = 3,
	className,
}: ProjectListSkeletonProps) {
	return (
		<div className={cn("flex flex-col gap-4", className)}>
			{Array.from({ length: count }, () => (
				<ProjectCardSkeleton key={crypto.randomUUID()} />
			))}
		</div>
	);
}
