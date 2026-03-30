import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
	Input,
} from "@ui-component-lib/ui";

const meta = {
	title: "Components/Tabs",
	component: Tabs,
	tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Tabs defaultValue="account" className="">
			<TabsList className="w-[450px]">
				<TabsTrigger value="account" className="flex-1">
					Account
				</TabsTrigger>
				<TabsTrigger value="password" className="flex-1">
					Password
				</TabsTrigger>
			</TabsList>
			<TabsContent value="account" className="space-y-4">
				<div>
					<h3 className="text-lg font-semibold">Account Settings</h3>
					<p className="text-sm text-foreground-muted mt-1">
						Make changes to your account here. Click save when you're done.
					</p>
				</div>
				<Input id="name" label="Name" placeholder="Enter your name" />
				<Input
					id="email"
					label="Email"
					type="email"
					placeholder="Enter your email"
				/>
			</TabsContent>
			<TabsContent value="password" className="space-y-4">
				<div>
					<h3 className="text-lg font-semibold">Password Settings</h3>
					<p className="text-sm text-foreground-muted mt-1">
						Change your password here. After saving, you'll be logged out.
					</p>
				</div>
				<Input
					id="current-password"
					label="Current Password"
					type="password"
					placeholder="Enter current password"
				/>
				<Input
					id="new-password"
					label="New Password"
					type="password"
					placeholder="Enter new password"
				/>
			</TabsContent>
		</Tabs>
	),
};

export const Compact: Story = {
	render: () => (
		<Tabs defaultValue="overview" className="w-[450px]">
			<TabsList className="w-[450px]">
				<TabsTrigger value="overview" className="flex-1">
					Overview
				</TabsTrigger>
				<TabsTrigger value="analytics" className="flex-1">
					Analytics
				</TabsTrigger>
				<TabsTrigger value="reports" className="flex-1">
					Reports
				</TabsTrigger>
			</TabsList>
			<TabsContent value="overview" className="mt-4">
				<p className="text-sm text-foreground-muted">
					Overview dashboard showing key metrics and recent activity.
				</p>
			</TabsContent>
			<TabsContent value="analytics" className="mt-4">
				<p className="text-sm text-foreground-muted">
					Detailed analytics and performance data.
				</p>
			</TabsContent>
			<TabsContent value="reports" className="mt-4">
				<p className="text-sm text-foreground-muted">
					Generate and download custom reports.
				</p>
			</TabsContent>
		</Tabs>
	),
};

export const WithDisabled: Story = {
	render: () => (
		<Tabs defaultValue="available" className="w-full max-w-md">
			<TabsList className="w-full">
				<TabsTrigger value="available" className="flex-1">
					Available
				</TabsTrigger>
				<TabsTrigger value="pending" className="flex-1" disabled>
					Pending
				</TabsTrigger>
				<TabsTrigger value="archived" className="flex-1" disabled>
					Archived
				</TabsTrigger>
			</TabsList>
			<TabsContent value="available" className="mt-4">
				<p className="text-sm text-foreground-muted">
					These items are currently available. Other tabs are disabled.
				</p>
			</TabsContent>
		</Tabs>
	),
};

export const ManyTabs: Story = {
	render: () => (
		<Tabs defaultValue="home" className="w-full max-w-2xl">
			<TabsList>
				<TabsTrigger value="home">Home</TabsTrigger>
				<TabsTrigger value="products">Products</TabsTrigger>
				<TabsTrigger value="services">Services</TabsTrigger>
				<TabsTrigger value="about">About</TabsTrigger>
				<TabsTrigger value="contact">Contact</TabsTrigger>
				<TabsTrigger value="blog">Blog</TabsTrigger>
			</TabsList>
			<TabsContent value="home" className="mt-4">
				<p className="text-sm text-foreground-muted">
					Welcome to our homepage.
				</p>
			</TabsContent>
			<TabsContent value="products" className="mt-4">
				<p className="text-sm text-foreground-muted">
					Browse our product catalog.
				</p>
			</TabsContent>
			<TabsContent value="services" className="mt-4">
				<p className="text-sm text-foreground-muted">Explore our services.</p>
			</TabsContent>
			<TabsContent value="about" className="mt-4">
				<p className="text-sm text-foreground-muted">Learn more about us.</p>
			</TabsContent>
			<TabsContent value="contact" className="mt-4">
				<p className="text-sm text-foreground-muted">Get in touch with us.</p>
			</TabsContent>
			<TabsContent value="blog" className="mt-4">
				<p className="text-sm text-foreground-muted">Read our latest posts.</p>
			</TabsContent>
		</Tabs>
	),
};
