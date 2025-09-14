import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tests() {
	return (
		<div className="flex gap-4">
			<FontAwesomeIcon className="size-6" icon={["fab", "x-twitter"]} />
			<FontAwesomeIcon className="size-6" icon={["fab", "instagram"]} />
			<FontAwesomeIcon className="size-6" icon={["fab", "github"]} />
			<FontAwesomeIcon className="size-6" icon={["fab", "linkedin"]} />
		</div>
	);
}
