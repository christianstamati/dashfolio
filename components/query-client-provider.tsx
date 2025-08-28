"use client";
import {
	QueryClient,
	QueryClientProvider as TanstackQueryClientProvider,
} from "@tanstack/react-query";
import dynamic from "next/dynamic";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000, // 1 minute
			gcTime: 10 * 60 * 1000, // 10 minutes
		},
	},
});

// Only load devtools in development
const ReactQueryDevtools = dynamic(
	() =>
		import("@tanstack/react-query-devtools").then((mod) => ({
			default: mod.ReactQueryDevtools,
		})),
	{
		ssr: false,
		loading: () => null,
	},
);

export function QueryClientProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		// Provide the client to your App
		<TanstackQueryClientProvider client={queryClient}>
			{children}
			{process.env.NODE_ENV === "development" && (
				<ReactQueryDevtools initialIsOpen={false} />
			)}
		</TanstackQueryClientProvider>
	);
}
