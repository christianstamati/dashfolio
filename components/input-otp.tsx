"use client";

import { OTPInput, type SlotProps } from "input-otp";
import { MinusIcon } from "lucide-react";
import { useId } from "react";
import { cn } from "@/lib/utils";

export default function InputOTP({ name }: { name: string }) {
	const id = useId();
	return (
		<div className="*:not-first:mt-2">
			<OTPInput
				id={id}
				containerClassName="flex items-center gap-3 has-disabled:opacity-50"
				maxLength={6}
				name={name}
				render={({ slots }) => (
					<>
						<div className="flex">
							{slots.slice(0, 3).map((slot, idx) => (
								<Slot key={idx + id} {...slot} />
							))}
						</div>

						<div className="text-muted-foreground/80">
							<MinusIcon size={16} aria-hidden="true" />
						</div>

						<div className="flex">
							{slots.slice(3).map((slot, idx) => (
								<Slot key={idx + id} {...slot} />
							))}
						</div>
					</>
				)}
			/>
		</div>
	);
}

function Slot(props: SlotProps) {
	return (
		<div
			className={cn(
				"-ms-px relative flex size-9 items-center justify-center border border-input bg-background font-medium text-foreground shadow-xs transition-[color,box-shadow] first:ms-0 first:rounded-s-md last:rounded-e-md",
				{ "z-10 border-ring ring-[3px] ring-ring/50": props.isActive },
			)}
		>
			{props.char !== null && <div>{props.char}</div>}
		</div>
	);
}
