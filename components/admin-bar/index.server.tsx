import { isDraftMode } from "@/app/(frontend)/is-draft-mode";
import { AdminBar } from "@/components/admin-bar";

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
