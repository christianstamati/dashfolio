"use server";

import { getPayloadClient } from "@/payload/client";

export interface GetWritingsParams {
	page?: number;
	limit?: number;
	search?: string;
	filters?: {
		category?: string | string[];
	};
}

export async function findWritings({
	page = 1,
	limit = 10,
	search,
	filters,
}: GetWritingsParams = {}) {
	const payload = await getPayloadClient();

	// Build query
	const query: any = {};

	// Add search functionality
	if (search) {
		query.or = [
			{
				title: {
					contains: search,
				},
			},
			{
				description: {
					contains: search,
				},
			},
		];
	}

	// Add filters
	if (filters?.category) {
		if (Array.isArray(filters.category)) {
			query.category = {
				in: filters.category,
			};
		} else {
			query.category = {
				equals: filters.category,
			};
		}
	}

	const result = await payload.find({
		collection: "writings",
		where: Object.keys(query).length > 0 ? query : undefined,
		page,
		limit,
		sort: "-year",
	});

	return {
		docs: result.docs,
		hasNextPage: result.hasNextPage,
		hasPrevPage: result.hasPrevPage,
		totalPages: result.totalPages,
		totalDocs: result.totalDocs,
	};
}
