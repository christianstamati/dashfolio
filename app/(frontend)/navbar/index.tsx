import { ModeToggle } from "@/components/mode-toggle";
import { getPayloadClient } from "@/payload/client";
import NavItem from "./nav-item";

const getLinks = async () => {
	const payload = await getPayloadClient();
	const nav = await payload.findGlobal({
		slug: "nav",
	});
	return nav.links;
};

export async function Navbar() {
	const links = await getLinks();
	return (
		<div className="hidden items-center justify-center border-r p-2 lg:flex lg:flex-col">
			{links?.map((link) => (
				<NavItem key={link.id} link={link} />
			))}
			<ModeToggle />
		</div>
	);
}
