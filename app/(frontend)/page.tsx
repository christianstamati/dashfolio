import type { Metadata } from "next";
import Socials from "@/components/socials";
import Hero from "./components/hero";
import Newsletter from "./components/newsletter";
import SelectedProjects from "./components/projects";
import Writings from "./components/writings";

export const metadata: Metadata = {
	title: "Christian Stamati — Software Developer",
	description:
		"A Software Developer based out of Italy. I specialize in creating interactive and immersive web experiences, combining 3D and web technologies.",
};

export default function Home() {
	return (
		<div className="flex flex-col gap-16">
			<Hero />
			<SelectedProjects />
			<Writings />
			<Newsletter />
			<Socials />
		</div>
	);
}
