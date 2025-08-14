export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<div className="bg-primary/5 py-10">
			<div className="flex flex-col items-center justify-center">
				Copyright © {year} Christian Stamati. All rights reserved.
			</div>
		</div>
	);
}
