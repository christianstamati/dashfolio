"use client";

import { useState } from "react";

export function WorkInProgressBanner() {
	const [isVisible, setIsVisible] = useState(true);

	if (!isVisible) return null;

	return (
		<div className="fixed top-0 right-0 left-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-white shadow-lg">
			<div className="mx-auto flex max-w-7xl items-center justify-between">
				<div className="flex items-center space-x-2">
					<div className="size-3 min-w-3 animate-pulse rounded-full bg-yellow-400"></div>
					<span className="font-medium text-sm">
						🚧 This site is still a work in progress. Some features may be
						incomplete. You can still take a quick look around and use the
						Contact form. I'll be updating this site as I go along.
					</span>
				</div>
				<button
					type="button"
					onClick={() => setIsVisible(false)}
					className="ml-4 rounded-md p-1 transition-colors hover:bg-white/10"
					aria-label="Close banner"
				>
					<svg
						className="size-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}
