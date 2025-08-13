import { useQuery } from "@tanstack/react-query";
import { getSettings } from "@/actions/get-settings";

export const useSettings = () => {
	return useQuery({
		queryKey: ["settings"],
		queryFn: getSettings,
	});
};
