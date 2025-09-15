"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import InputOTP from "@/components/input-otp";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/payload/payload-types";

export default function PasswordForm({
	password,
	project,
}: {
	password: string;
	project: Project;
}) {
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const enteredPassword = formData.get("password") as string;
		router.push(`/projects/${project.slug}?password=${enteredPassword}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Card className="w-full max-w-sm gap-4 shadow-lg">
				<CardHeader className="space-y-3 pb-0">
					<CardTitle className="text-xl">🔒 Protected Project</CardTitle>
					<CardDescription className="text-base leading-relaxed">
						The project <strong className="uppercase">{project.title}</strong>{" "}
						requires a password to view. Enter the access code below to
						continue.
					</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col items-center justify-center gap-3">
					<InputOTP name="password" />
					{password &&
						password?.length > 0 &&
						password !== project?.password && (
							<p className="text-destructive text-sm">
								The password is incorrect.
							</p>
						)}
				</CardContent>
				<CardFooter className="flex flex-col gap-3 pt-3">
					<Button className="w-full" type="submit">
						Unlock Project
					</Button>
					<Button className="w-full" variant="outline" asChild>
						<Link href="/contact">Request Access</Link>
					</Button>
				</CardFooter>
			</Card>
		</form>
	);
}
