"use client";

import { useState } from "react";

export function WorkInProgressBanner() {
	const [isVisible] = useState(true);

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
			</div>
		</div>
	);
}
