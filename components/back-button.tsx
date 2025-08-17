"use client";

import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function BackButton({ label }: { label?: string }) {
	const router = useRouter();
	return (
		<div className="flex items-center gap-3">
			<Button
				variant={"ghost"}
				size={"sm"}
				type="button"
				onClick={() => router.back()}
				className="flex items-center gap-3 text-gray-300 transition-colors hover:text-gray-100"
			>
				<ChevronLeftIcon size={16} />
			</Button>
			<span className="font-medium text-gray-300">{label || "Back"}</span>
		</div>
	);
}
