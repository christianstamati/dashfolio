"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createInquiry } from "./actions";
import { type ContactFormData, contactFormSchema } from "./schema";

export default function ContactForm() {
	const form = useForm<ContactFormData>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	async function onSubmit(values: ContactFormData) {
		const createdInquiryPromise = createInquiry(values);
		toast.promise(createdInquiryPromise, {
			loading: "Sending...",
			success: "Inquiry sent successfully",
			error: "Failed to send inquiry",
		});
		const result = await createdInquiryPromise;
		if (result) {
			form.reset();
		}
	}

	return (
		<Card>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<div className="flex flex-col gap-6 sm:flex-row">
							<FormField
								control={form.control}
								name="firstName"
								render={({ field }) => (
									<FormItem className="w-full gap-4">
										<FormLabel>First name*</FormLabel>
										<FormControl>
											<Input
												placeholder="First name*"
												className="h-10"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="lastName"
								render={({ field }) => (
									<FormItem className="w-full gap-4">
										<FormLabel>Last name*</FormLabel>
										<FormControl>
											<Input
												placeholder="Last name*"
												className="h-10"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem className="gap-4">
									<FormLabel>Email*</FormLabel>
									<FormControl>
										<Input
											placeholder="your@email.com*"
											className="h-10"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="subject"
							render={({ field }) => (
								<FormItem className="gap-4">
									<FormLabel>What is this about?</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger className="h-10! w-full">
												<SelectValue placeholder="What is this about?" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="general">General Inquiry</SelectItem>
											<SelectItem value="project">
												Project Collaboration
											</SelectItem>
											<SelectItem value="work">Work Opportunity</SelectItem>
											<SelectItem value="feedback">Feedback</SelectItem>
											<SelectItem value="other">Other</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem className="gap-4">
									<FormLabel>Message</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Type your message here"
											className="min-h-[150px]"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							disabled={form.formState.isSubmitting}
							type="submit"
							size="lg"
							className="w-full"
						>
							{form.formState.isSubmitting ? "Sending..." : "Send"}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
