"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
	Button,
	Avatar,
	Input,
	Switch,
	Divider,
	Badge,
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
	Alert,
} from "@ui-component-lib/ui";

export default function ProfileSettings() {
	const { theme: currentTheme, setTheme: setAppTheme } = useTheme();
	const [openPassword, setOpenPassword] = useState(false);
	const [emailNotifications, setEmailNotifications] = useState(true);
	const [pushNotifications, setPushNotifications] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const [theme, setTheme] = useState("system");
	const [language, setLanguage] = useState("en");
	const [timezone, setTimezone] = useState("utc");
	const [dateFormat, setDateFormat] = useState("mdy");
	const [mounted, setMounted] = useState(false);

	// Sync theme state with next-themes on mount
	useEffect(() => {
		setMounted(true);
		if (currentTheme) {
			setTheme(currentTheme);
		}
	}, [currentTheme]);

	// Function to save preferences and apply theme
	const handleSavePreferences = () => {
		setAppTheme(theme);
		setShowSuccess(true);
		// Auto-hide success message after 3 seconds
		setTimeout(() => setShowSuccess(false), 3000);
	};

	return (
		<div className="min-h-screen bg-background py-8 px-4">
			<div className="w-full max-w-4xl mx-auto space-y-6">
				{/* Header with Avatar and Dropdown */}
				<div className="flex justify-between items-center">
					<div>
						<h1 className="text-3xl font-bold text-foreground">Account Settings</h1>
						<p className="text-sm text-foreground-subtle mt-1">
							Manage your account preferences and settings
						</p>
					</div>

					<DropdownMenu>
						<DropdownMenuTrigger>
							<Avatar fallback="JD" size="md" />
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem>View Profile</DropdownMenuItem>
							<DropdownMenuItem>Account Settings</DropdownMenuItem>
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

				{/* Success Alert */}
				{showSuccess && (
					<Alert variant="success">
						Your changes have been saved successfully!
					</Alert>
				)}

				{/* Tabs */}
				<Tabs defaultValue="profile">
					<TabsList>
						<TabsTrigger value="profile">Profile</TabsTrigger>
						<TabsTrigger value="security">Security</TabsTrigger>
						<TabsTrigger value="notifications">Notifications</TabsTrigger>
						<TabsTrigger value="preferences">Preferences</TabsTrigger>
					</TabsList>

					{/* PROFILE TAB */}
					<TabsContent value="profile">
						<Card>
							<CardHeader>
								<CardTitle>Personal Information</CardTitle>
								<CardDescription>
									Update your personal details and profile information
								</CardDescription>
							</CardHeader>

							<CardContent className="space-y-5">
								<div className="flex items-center gap-4 pb-4 border-b border-border">
									<Avatar fallback="JD" size="lg" />
									<div className="flex-1">
										<h3 className="font-semibold text-foreground">
											Profile Picture
										</h3>
										<p className="text-sm text-foreground-subtle">
											JPG, PNG or GIF. Max size 2MB.
										</p>
									</div>
									<Button variant="outline" size="sm">
										Change
									</Button>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<Input
										label="First Name"
										placeholder="John"
										defaultValue="John"
									/>
									<Input
										label="Last Name"
										placeholder="Doe"
										defaultValue="Doe"
									/>
								</div>

								<Input
									label="Email Address"
									type="email"
									placeholder="john.doe@example.com"
									defaultValue="john.doe@example.com"
									tip="We'll never share your email with anyone else."
								/>

								<Input
									label="Username"
									placeholder="johndoe"
									defaultValue="johndoe"
								/>

								<div>
									<label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 block mb-2">
										Language
									</label>
									<Select value={language} onValueChange={setLanguage}>
										<SelectTrigger>
											<SelectValue placeholder="Select language" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="en">English</SelectItem>
											<SelectItem value="de">German</SelectItem>
											<SelectItem value="hu">Hungarian</SelectItem>
											<SelectItem value="es">Spanish</SelectItem>
											<SelectItem value="fr">French</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<Divider />

								<div className="flex justify-end gap-3">
									<Button variant="outline">Cancel</Button>
									<Button onClick={() => setShowSuccess(true)}>
										Save Changes
									</Button>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					{/* SECURITY TAB */}
					<TabsContent value="security">
						<div className="space-y-4">
							<Card>
								<CardHeader>
									<CardTitle>Password</CardTitle>
									<CardDescription>
										Update your password to keep your account secure
									</CardDescription>
								</CardHeader>

								<CardContent className="space-y-4">
									<div className="flex items-center justify-between p-4 bg-background-muted rounded-lg">
										<div className="flex-1">
											<h3 className="font-medium text-foreground">
												Current Password
											</h3>
											<p className="text-sm text-foreground-subtle">
												Last changed 3 months ago
											</p>
										</div>
										<Button onClick={() => setOpenPassword(true)} size="sm">
											Change Password
										</Button>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>Two-Factor Authentication</CardTitle>
									<CardDescription>
										Add an extra layer of security to your account
									</CardDescription>
								</CardHeader>

								<CardContent className="space-y-4">
									<div className="flex items-center justify-between p-4 bg-background-muted rounded-lg">
										<div className="flex-1">
											<div className="flex items-center gap-2 mb-1">
												<h3 className="font-medium text-foreground">
													Authenticator App
												</h3>
												<Badge variant="neutral" className="text-xs">
													Recommended
												</Badge>
											</div>
											<p className="text-sm text-foreground-subtle">
												Use an authenticator app to generate one-time codes
											</p>
										</div>
										<Button variant="outline" size="sm">
											Enable
										</Button>
									</div>

									<div className="flex items-center justify-between p-4 bg-background-muted rounded-lg">
										<div className="flex-1">
											<h3 className="font-medium text-foreground">SMS</h3>
											<p className="text-sm text-foreground-subtle">
												Receive codes via text message
											</p>
										</div>
										<Button variant="outline" size="sm">
											Enable
										</Button>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>Active Sessions</CardTitle>
									<CardDescription>
										Manage your active sessions across devices
									</CardDescription>
								</CardHeader>

								<CardContent className="space-y-3">
									<div className="flex items-center justify-between p-3 border border-border rounded-lg">
										<div className="flex items-center gap-3">
											<div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
												<span className="text-sm">💻</span>
											</div>
											<div>
												<p className="font-medium text-sm">
													Chrome on MacOS
												</p>
												<p className="text-xs text-foreground-subtle">
													Current session • San Francisco, CA
												</p>
											</div>
										</div>
										<Badge variant="success">Active</Badge>
									</div>

									<div className="flex items-center justify-between p-3 border border-border rounded-lg">
										<div className="flex items-center gap-3">
											<div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
												<span className="text-sm">📱</span>
											</div>
											<div>
												<p className="font-medium text-sm">
													Mobile App
												</p>
												<p className="text-xs text-foreground-subtle">
													Last active 2 days ago • New York, NY
												</p>
											</div>
										</div>
										<Button variant="ghost" size="sm">
											Revoke
										</Button>
									</div>
								</CardContent>
							</Card>
						</div>
					</TabsContent>

					{/* NOTIFICATIONS TAB */}
					<TabsContent value="notifications">
						<Card>
							<CardHeader>
								<CardTitle>Notification Preferences</CardTitle>
								<CardDescription>
									Choose how you want to receive notifications
								</CardDescription>
							</CardHeader>

							<CardContent className="space-y-6">
								<div className="space-y-4">
									<h3 className="font-semibold text-foreground">
										Email Notifications
									</h3>
									<div className="flex items-center justify-between py-3 border-b border-border">
										<div className="flex-1">
											<p className="font-medium text-sm">
												Account activity
											</p>
											<p className="text-sm text-foreground-subtle">
												Get emails about your account activity
											</p>
										</div>
										<Switch
											checked={emailNotifications}
											onCheckedChange={setEmailNotifications}
										/>
									</div>

									<div className="flex items-center justify-between py-3 border-b border-border">
										<div className="flex-1">
											<p className="font-medium text-sm">
												Weekly digest
											</p>
											<p className="text-sm text-foreground-subtle">
												Receive a weekly summary of your activity
											</p>
										</div>
										<Switch />
									</div>

									<div className="flex items-center justify-between py-3 border-b border-border">
										<div className="flex-1">
											<p className="font-medium text-sm">
												Product updates
											</p>
											<p className="text-sm text-foreground-subtle">
												News about product and feature updates
											</p>
										</div>
										<Switch defaultChecked />
									</div>
								</div>

								<Divider />

								<div className="space-y-4">
									<h3 className="font-semibold text-foreground">
										Push Notifications
									</h3>
									<div className="flex items-center justify-between py-3 border-b border-border">
										<div className="flex-1">
											<p className="font-medium text-sm">
												Mobile push
											</p>
											<p className="text-sm text-foreground-subtle">
												Receive push notifications on your mobile device
											</p>
										</div>
										<Switch
											checked={pushNotifications}
											onCheckedChange={setPushNotifications}
										/>
									</div>

									<div className="flex items-center justify-between py-3">
										<div className="flex-1">
											<p className="font-medium text-sm">
												Desktop notifications
											</p>
											<p className="text-sm text-foreground-subtle">
												Show desktop notifications when you're online
											</p>
										</div>
										<Switch />
									</div>
								</div>

								<Divider />

								<div className="flex justify-end gap-3">
									<Button variant="outline">Reset to Default</Button>
									<Button onClick={() => setShowSuccess(true)}>
										Save Preferences
									</Button>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					{/* PREFERENCES TAB */}
					<TabsContent value="preferences">
						<Card>
							<CardHeader>
								<CardTitle>Application Preferences</CardTitle>
								<CardDescription>
									Customize your application experience
								</CardDescription>
							</CardHeader>

							<CardContent className="space-y-6">
								<div>
									<label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 block mb-2">
										Theme
									</label>
									<Select value={theme} onValueChange={setTheme}>
										<SelectTrigger>
											<SelectValue placeholder="Select theme"/>
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="light">☀️ Light</SelectItem>
											<SelectItem value="dark">🌙 Dark</SelectItem>
											<SelectItem value="system">💻 System</SelectItem>
										</SelectContent>
									</Select>
									<p className="text-xs text-foreground-subtle mt-2">
										{mounted && theme === "system" && "Matches your system preference"}
										{mounted && theme === "light" && "Always use light mode"}
										{mounted && theme === "dark" && "Always use dark mode"}
									</p>
								</div>

								<div>
									<label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 block mb-2">
										Timezone
									</label>
									<Select value={timezone} onValueChange={setTimezone}>
										<SelectTrigger>
											<SelectValue placeholder="Select timezone" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="utc">UTC</SelectItem>
											<SelectItem value="est">Eastern Time</SelectItem>
											<SelectItem value="pst">Pacific Time</SelectItem>
											<SelectItem value="cet">Central European Time</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div>
									<label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 block mb-2">
										Date Format
									</label>
									<Select value={dateFormat} onValueChange={setDateFormat}>
										<SelectTrigger>
											<SelectValue placeholder="Select format" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="mdy">MM/DD/YYYY</SelectItem>
											<SelectItem value="dmy">DD/MM/YYYY</SelectItem>
											<SelectItem value="ymd">YYYY-MM-DD</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<Divider />

								<Alert variant="info">
									These preferences will apply across all your devices.
								</Alert>

								<div className="flex justify-end gap-3">
									<Button
										variant="outline"
										onClick={() => {
											// Reset to defaults
											setTheme("system");
											setLanguage("en");
											setTimezone("utc");
											setDateFormat("mdy");
										}}
									>
										Reset
									</Button>
									<Button onClick={handleSavePreferences}>
										Save Preferences
									</Button>
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>

				{/* Password Change Dialog */}
				<Dialog open={openPassword} onOpenChange={setOpenPassword}>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Change Password</DialogTitle>
						</DialogHeader>

						<div className="space-y-4 py-4">
							<Input
								type="password"
								label="Current Password"
								placeholder="Enter current password"
							/>
							<Input
								type="password"
								label="New Password"
								placeholder="Enter new password"
								tip="Must be at least 8 characters"
							/>
							<Input
								type="password"
								label="Confirm New Password"
								placeholder="Confirm new password"
							/>
						</div>

						<DialogFooter className="flex justify-end gap-2">
							<Button variant="outline" onClick={() => setOpenPassword(false)}>
								Cancel
							</Button>
							<Button
								onClick={() => {
									setOpenPassword(false);
									setShowSuccess(true);
								}}
							>
								Update Password
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
}
