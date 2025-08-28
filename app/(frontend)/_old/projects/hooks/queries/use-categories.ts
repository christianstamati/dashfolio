"use client";

import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../actions/get-categories";

export function useCategories() {
	return useQuery({
		queryKey: ["categories"],
		queryFn: () => getCategories(),
	});
}
