"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import {
	findProjects,
	type GetProjectsParams,
} from "../../actions/find-projects";

export interface UseProjectsInfiniteParams {
	search?: string;
	filters?: GetProjectsParams["filters"];
	limit?: number;
}

export function useProjectsInfinite({
	search,
	filters,
	limit = 2,
}: UseProjectsInfiniteParams = {}) {
	return useInfiniteQuery({
		queryKey: ["projects", "infinite", { search, filters, limit }],
		queryFn: ({ pageParam = 1 }) =>
			findProjects({
				page: pageParam,
				limit,
				search,
				filters,
			}),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			if (!lastPage.hasNextPage) return undefined;
			return allPages.length + 1;
		},
		getPreviousPageParam: (firstPage, allPages) => {
			if (!firstPage.hasPrevPage) return undefined;
			return allPages.length - 1;
		},
		staleTime: 5 * 60 * 1000, // 5 minutes
	});
}
