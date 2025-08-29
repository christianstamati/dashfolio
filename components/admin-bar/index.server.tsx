import { draftMode } from "next/headers";
import { AdminBar } from "@/components/admin-bar";

export default async function AdminBarServer() {
	const { isEnabled } = await draftMode();
	return (
		<AdminBar
			adminBarProps={{
				preview: isEnabled,
			}}
		/>
	);
}
