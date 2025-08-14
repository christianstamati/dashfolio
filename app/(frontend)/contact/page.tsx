import PageDescription from "@/components/page-description";
import PageTitle from "@/components/page-title";
import ContactForm from "./contact-form";

export default function Contact() {
	return (
		<div className="flex flex-col gap-8">
			<div>
				<PageTitle>How can I help?</PageTitle>
				<PageDescription>
					Whether you have a question, a project in mind, or just want to say
					hello, I’d love to hear from you.
				</PageDescription>
			</div>
			<ContactForm />
		</div>
	);
}
