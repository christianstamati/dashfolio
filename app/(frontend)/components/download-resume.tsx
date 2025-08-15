"use client";

import { DocumentDownload } from "iconsax-reactjs";
import { Button } from "@/components/ui/button";

const downloadResume = async (resume: string) => {
	const response = await fetch(resume);
	const blob = await response.blob();
	const url = window.URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "resume.pdf";
	a.click();
	window.URL.revokeObjectURL(url);
};

export default function DownloadResume({ resume }: { resume: string }) {
	return (
		<Button size="lg" variant="outline" onClick={() => downloadResume(resume)}>
			<DocumentDownload variant="Bold" size={24} />
			<span>Download CV</span>
		</Button>
	);
}
