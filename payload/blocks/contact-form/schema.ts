import { z } from "zod";

export const contactFormSchema = z.object({
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	email: z.email("Please enter a valid email"),
	subject: z.string().min(1, "Please select a subject"),
	message: z.string().min(1, "Message is required"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
