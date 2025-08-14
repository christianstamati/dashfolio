import Hero from "./components/hero";
import Newsletter from "./components/newsletter";
import Projects from "./components/projects";
import Socials from "./components/socials";
import Stack from "./components/stack";
import Writings from "./components/writings";

export default function Home() {
	return (
		<div className="flex flex-col gap-16">
			<Hero />
			<Projects />
			<Writings />
			<Stack />
			<Newsletter />
			<Socials />
		</div>
	);
}
