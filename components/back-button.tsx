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
				size={"icon"}
				type="button"
				onClick={() => {
					router.back();
					console.log("back");
				}}
				className="flex items-center gap-3 rounded-full transition-colors"
			>
				<ChevronLeftIcon size={16} />
			</Button>
			<span className="font-medium">{label || "Back"}</span>
		</div>
	);
}
