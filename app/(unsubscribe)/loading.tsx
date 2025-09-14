import { Spinner } from "@/components/spinner";

export default function Loading() {
	return (
		<div className="absolute inset-0 flex items-center justify-center">
			<Spinner size={"lg"} />
		</div>
	);
}
