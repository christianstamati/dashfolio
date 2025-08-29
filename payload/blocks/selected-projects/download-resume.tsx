"use client";

import { DocumentDownload } from "iconsax-reactjs";
import { Button } from "@/components/ui/button";

const downloadResume = async (resumeUrl: string, resumeName: string) => {
	const response = await fetch(resumeUrl);
	const blob = await response.blob();
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = `${resumeName}.pdf`;
	a.click();
	URL.revokeObjectURL(url);
};

export default function DownloadResume({
	resumeUrl,
	resumeName,
}: {
	resumeUrl: string;
	resumeName: string;
}) {
	return (
		<Button
			size="lg"
			variant="outline"
			onClick={() => downloadResume(resumeUrl, resumeName)}
		>
			<DocumentDownload variant="Bold" size={24} />
			<p className="text-sm!">Download Resume</p>
		</Button>
	);
}
