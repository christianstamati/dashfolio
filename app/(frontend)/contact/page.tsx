import Description from "@/components/description";
import PageTitle from "@/components/title";
import ContactForm from "./contact-form";

export default function Contact() {
	return (
		<div className="flex flex-col gap-8">
			<div>
				<PageTitle>How can I help?</PageTitle>
				<Description>
					Whether you have a question, a project in mind, or just want to say
					hello, I’d love to hear from you.
				</Description>
			</div>
			<ContactForm />
		</div>
	);
}
