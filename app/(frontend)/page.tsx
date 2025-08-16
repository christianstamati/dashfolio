import type { Metadata } from "next";
import Socials from "@/components/socials";
import Hero from "./components/hero";
import Newsletter from "./components/newsletter";
import SelectedProjects from "./components/projects";
import Stack from "./components/stack";
import Writings from "./components/writings";

export const metadata: Metadata = {
	title: "Christian Stamati — Software Developer",
	description:
		"Christian Stamati is a software developer with a passion for building web applications that are both functional and aesthetically pleasing.",
};

export default function Home() {
	return (
		<div className="flex flex-col gap-16">
			<Hero />
			<SelectedProjects />
			<Writings />
			<Stack />
			<Newsletter />
			<Socials />
		</div>
	);
}
