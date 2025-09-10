"use client";

import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function BackButton({ label }: { label?: string }) {
	const router = useRouter();
	return (
		<Button
			variant={"ghost"}
			type="button"
			onClick={() => {
				router.back();
			}}
			className="rounded-full"
		>
			<ChevronLeftIcon size={16} />
			{label || "Back"}
		</Button>
	);
}
