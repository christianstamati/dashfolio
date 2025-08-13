"use client";
import {
	QueryClient,
	QueryClientProvider as TanstackQueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export function QueryClientProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		// Provide the client to your App
		<TanstackQueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</TanstackQueryClientProvider>
	);
}
