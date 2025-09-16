import { unstable_cache } from "next/cache";
import { ModeToggle } from "@/components/mode-toggle";
import { getPayloadClient } from "@/payload/client";
import { MobileNavbar } from "./mobile-navbar";
import NavItem from "./nav-item";

const getNavbarLinks = unstable_cache(
	async () => {
		const payload = await getPayloadClient();
		const nav = await payload.findGlobal({
			slug: "nav",
		});
		return nav.links;
	},
	["navbar-links"],
	{
		tags: ["navbar-links"],
	},
);

export async function Navbar() {
	const links = await getNavbarLinks();
	return (
		<>
			{/* Desktop Navbar */}
			<div className="hidden items-center justify-between border-r p-2 lg:flex lg:h-full lg:flex-col">
				<div className="flex flex-1 flex-col items-center justify-center">
					{links?.map((link) => (
						<NavItem key={link.id} link={link} />
					))}
				</div>

				<ModeToggle />
			</div>

			{/* Mobile Navbar */}
			{links && <MobileNavbar links={links} />}
		</>
	);
}
