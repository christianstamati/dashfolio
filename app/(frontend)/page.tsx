import Socials from "@/components/socials";
import Hero from "./components/hero";
import Newsletter from "./components/newsletter";
import SelectedProjects from "./components/selected-projects";
import Writings from "./components/writings";

export const dynamic = "force-dynamic";

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
