import * as React from "react";

export function useMounted() {
	const [mounted, setMounted] = React.useState<boolean | undefined>(undefined);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	return mounted;
}
