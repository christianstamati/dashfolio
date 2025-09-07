import type { Nav } from "@/payload/payload-types";

export const getUrl = (link: NonNullable<Nav["links"]>[number]) => {
	if (link.type === "reference") {
		const ref = link.reference?.value;
		if (ref && typeof ref !== "string") {
			return `/${ref.slug}`;
		}
	}

	if (link.url) {
		return link.url;
	}
};

export const isActive = (pathname: string, linkUrl: string) => {
	const isHome = pathname === "/" && linkUrl === "/home";
	if (isHome) {
		return true;
	}
	return pathname === linkUrl;
};
