import { AdminBar } from "@/components/admin-bar";
import { isDraftMode } from "@/lib/is-draft-mode";

export default async function AdminBarServer() {
	const isEnabled = await isDraftMode();
	return (
		<AdminBar
			adminBarProps={{
				preview: isEnabled,
			}}
		/>
	);
}
