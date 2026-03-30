"use client";

import { useState } from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Button,
	Avatar,
} from "@ui-component-lib/ui";

// Replace with your actual components
import {
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from "@ui-component-lib/ui";

export default function ProfileSettings() {
	const [openPassword, setOpenPassword] = useState(false);

	return (
		<div className="min-h-screen flex justify-center py-16 px-4">
			<div className="w-full max-w-3xl space-y-6">
				{/* Top bar with dropdown */}
				<div className="flex justify-between items-center">
					<h1 className="text-2xl font-bold">Settings</h1>

					<DropdownMenu>
						<DropdownMenuTrigger>
							<Avatar fallback="JD" />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<DropdownMenuItem>Settings</DropdownMenuItem>
							<DropdownMenuItem
								onClick={() => {
									localStorage.removeItem("auth");
									window.location.href = "/login";
								}}
							>
								Logout
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				{/* Tabs */}
				<Tabs defaultValue="profile">
					<TabsList>
						<TabsTrigger value="profile">Profile</TabsTrigger>
						<TabsTrigger value="security">Security</TabsTrigger>
					</TabsList>

					{/* PROFILE TAB */}
					<TabsContent value="profile">
						<Card>
							<CardHeader>
								<CardTitle>Profile Info</CardTitle>
							</CardHeader>

							<CardContent className="space-y-4">
								<div>
									<label className="text-sm">Name</label>
									<input
										className="w-full border rounded-md p-2 mt-1"
										placeholder="John Doe"
									/>
								</div>

								<div>
									<label className="text-sm">Email</label>
									<input
										className="w-full border rounded-md p-2 mt-1"
										placeholder="john@example.com"
									/>
								</div>

								{/* Select */}
								<div>
									<label className="text-sm">Language</label>
									<Select>
										<SelectTrigger className="mt-1">
											Select language
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="en">English</SelectItem>
											<SelectItem value="de">German</SelectItem>
											<SelectItem value="hu">Hungarian</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<Button>Save Changes</Button>
							</CardContent>
						</Card>
					</TabsContent>

					{/* SECURITY TAB */}
					<TabsContent value="security">
						<Card>
							<CardHeader>
								<CardTitle>Security</CardTitle>
							</CardHeader>

							<CardContent className="space-y-4">
								<Button onClick={() => setOpenPassword(true)}>
									Change Password
								</Button>

								<Button variant="outline">Enable 2FA</Button>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>

				{/* Dialog */}
				<Dialog open={openPassword} onOpenChange={setOpenPassword}>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Change Password</DialogTitle>
						</DialogHeader>

						<div className="space-y-3">
							<input
								type="password"
								placeholder="New password"
								className="w-full border p-2 rounded-md"
							/>
							<input
								type="password"
								placeholder="Confirm password"
								className="w-full border p-2 rounded-md"
							/>
						</div>

						<DialogFooter className="mt-4 flex justify-end gap-2">
							<Button variant="outline" onClick={() => setOpenPassword(false)}>
								Cancel
							</Button>
							<Button onClick={() => setOpenPassword(false)}>Save</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
}
