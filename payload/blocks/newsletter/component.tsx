"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { NewsletterProps } from "@/payload/payload-types";
import { subscribe } from "./subscribe";

const formSchema = z.object({
	email: z.email(),
});

export default function Newsletter({ title, description }: NewsletterProps) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			const result = await subscribe(values.email);

			if (result.success) {
				toast.success(result.message);
				form.reset();
			} else {
				toast.error(result.message);
			}
		} catch {
			toast.error("Something went wrong. Please try again.");
		}
	}

	return (
		<section>
			<div className="container mx-auto">
				<Card className="mx-auto max-w-2xl">
					<CardHeader>
						<CardTitle className="text-2xl">{title}</CardTitle>
						<CardDescription>{description}</CardDescription>
					</CardHeader>
					<CardContent>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-4"
							>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<div className="flex flex-col space-y-3 sm:flex-row sm:space-x-2 sm:space-y-0">
													<Input
														type="email"
														placeholder="Enter your email"
														className="h-10 flex-1"
														{...field}
													/>
													<Button
														type="submit"
														size="lg"
														className="sm:px-6"
														disabled={form.formState.isSubmitting}
													>
														{form.formState.isSubmitting
															? "Subscribing..."
															: "Subscribe"}
													</Button>
												</div>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</form>
						</Form>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
