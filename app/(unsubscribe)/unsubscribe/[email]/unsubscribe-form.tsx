"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { unsubscribe } from "@/app/(unsubscribe)/unsubscribe/[email]/unsubscribe";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const unsubscribeFormSchema = z.object({
	email: z.email("Please enter a valid email address"),
});

type UnsubscribeFormData = z.infer<typeof unsubscribeFormSchema>;

interface UnsubscribeFormProps {
	email: string;
}

export function UnsubscribeForm({ email }: UnsubscribeFormProps) {
	const router = useRouter();

	const form = useForm<UnsubscribeFormData>({
		resolver: zodResolver(unsubscribeFormSchema),
		defaultValues: {
			email: email,
		},
	});

	async function onSubmit(values: UnsubscribeFormData) {
		const unsubscribePromise = unsubscribe(values.email);
		toast.promise(unsubscribePromise, {
			loading: "Unsubscribing...",
			success:
				"Successfully unsubscribed from newsletter. Redirecting to home page...",
			error: "Failed to unsubscribe. Please try again.",
		});

		await unsubscribePromise;
		setTimeout(() => {
			router.push("/");
		}, 1000);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="gap-4">
							<FormLabel>Email address*</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder="your@email.com"
									className="h-10"
									{...field}
									readOnly={true}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="space-y-4">
					<Button
						disabled={form.formState.isSubmitting}
						type="submit"
						size="lg"
						className="w-full"
						variant="destructive"
					>
						{form.formState.isSubmitting ? "Unsubscribing..." : "Unsubscribe"}
					</Button>
					<Button
						type="button"
						size="lg"
						className="w-full"
						variant="outline"
						asChild
					>
						<Link href="/">Return to Home</Link>
					</Button>
				</div>
			</form>
		</Form>
	);
}
