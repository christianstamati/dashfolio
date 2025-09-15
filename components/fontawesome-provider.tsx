"use client";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

export default function FontAwesomeProvider() {
	useEffect(() => {
		// Lazy load FontAwesome icons
		library.add(fab);
	}, []);

	return null;
}
