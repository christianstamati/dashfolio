import type { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { unstable_cache } from "next/cache";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getPayloadClient } from "@/payload/client";
import { getServerSideURL } from "@/payload/utils/getURL";

async function getSocials() {
	const payload = await getPayloadClient();
	const socials = await payload.find({
		collection: "socials",
		limit: 5,
	});
	return socials;
}

const getSocialsCached = unstable_cache(getSocials, ["socials"], {
	tags: ["social-links"],
});

export default async function SocialMedia() {
	const socials = await getSocialsCached();
	return (
		<div className="flex justify-center gap-4">
			{socials.docs.map((social) => (
				<Button
					className="size-12 rounded-full p-4"
					key={social.label}
					variant="outline"
					size="icon"
					asChild
				>
					<Link
						href={
							social.type === "custom"
								? (social?.url ?? "")
								: typeof social.reference?.value === "string"
									? "#"
									: `${getServerSideURL()}/${social.reference?.value?.slug}`
						}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={social.label}
					>
						<FontAwesomeIcon
							className="size-5"
							icon={["fab", social.icon as IconName]}
						/>
					</Link>
				</Button>
			))}
		</div>
	);
}
