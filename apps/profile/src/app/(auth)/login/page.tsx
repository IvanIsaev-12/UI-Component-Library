"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Button,
} from "@ui-component-lib/ui";

export default function LoginPage() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	function handleLogin() {
		setLoading(true);

		localStorage.setItem("auth", "true");

		setTimeout(() => {
			router.push("/profile");
		}, 500);
	}

	return (
		<div className="min-h-screen flex items-center justify-center">
			<Card className="w-full max-w-sm">
				<CardHeader>
					<CardTitle>Login</CardTitle>
				</CardHeader>

				<CardContent className="space-y-4">
					<input className="w-full border p-2 rounded-md" placeholder="Email" />

					<input
						type="password"
						className="w-full border p-2 rounded-md"
						placeholder="Password"
					/>

					<Button onClick={handleLogin} disabled={loading}>
						{loading ? "Signing in..." : "Sign In"}
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
