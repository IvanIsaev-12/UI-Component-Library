/// <reference types="@testing-library/jest-dom" />
import { describe, it, expect } from "vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import { axe } from "jest-axe";

describe("Tabs", () => {
	it("renders tabs element", () => {
		render(
			<Tabs defaultValue="overview" className="w-[450px]">
				<TabsList className="w-[450px]!">
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
					<p className="text-sm text-neutral-600">
						Overview dashboard showing key metrics and recent activity.
					</p>
				</TabsContent>
				<TabsContent value="analytics" className="mt-4">
					<p className="text-sm text-neutral-600">
						Detailed analytics and performance data.
					</p>
				</TabsContent>
				<TabsContent value="reports" className="mt-4">
					<p className="text-sm text-neutral-600">
						Generate and download custom reports.
					</p>
				</TabsContent>
			</Tabs>
		);

		expect(screen.getAllByRole("tab")).toHaveLength(3);
	});

	it("shows correct content when clicking a tab", async () => {
		const user = userEvent.setup();

		render(
			<Tabs defaultValue="overview">
				<TabsList>
					<TabsTrigger value="overview">Overview</TabsTrigger>
					<TabsTrigger value="analytics">Analytics</TabsTrigger>
					<TabsTrigger value="reports">Reports</TabsTrigger>
				</TabsList>
				<TabsContent value="overview">
					Overview dashboard showing key metrics and recent activity.
				</TabsContent>
				<TabsContent value="analytics">
					Detailed analytics and performance data.
				</TabsContent>
				<TabsContent value="reports">
					Generate and download custom reports.
				</TabsContent>
			</Tabs>
		);

		expect(screen.getByText(/overview dashboard/i)).toBeVisible();

		await user.click(screen.getByRole("tab", { name: /analytics/i }));
		expect(screen.getByText(/detailed analytics/i)).toBeVisible();

		await user.click(screen.getByRole("tab", { name: /reports/i }));
		expect(screen.getByText(/generate and download/i)).toBeVisible();
	});

	it("supports keyboard navigation with arrow keys", async () => {
		const user = userEvent.setup();

		render(
			<Tabs defaultValue="overview">
				<TabsList>
					<TabsTrigger value="overview">Overview</TabsTrigger>
					<TabsTrigger value="analytics">Analytics</TabsTrigger>
					<TabsTrigger value="reports">Reports</TabsTrigger>
				</TabsList>
				<TabsContent value="overview">Overview content</TabsContent>
				<TabsContent value="analytics">Analytics content</TabsContent>
				<TabsContent value="reports">Reports content</TabsContent>
			</Tabs>
		);

		const overviewTab = screen.getByRole("tab", { name: /overview/i });
		const analyticsTab = screen.getByRole("tab", { name: /analytics/i });

		await act(async () => {
			overviewTab.focus();
		});
		expect(overviewTab).toHaveFocus();

		await user.keyboard("{ArrowRight}");
		expect(analyticsTab).toHaveFocus();
	});

	it("applies custom className", () => {
		render(
			<Tabs defaultValue="overview" className="custom-class">
				<TabsList>
					<TabsTrigger value="overview">Overview</TabsTrigger>
				</TabsList>
				<TabsContent value="overview">Overview content</TabsContent>
			</Tabs>
		);

		const tabsElement = screen.getByRole("tablist").parentElement;
		expect(tabsElement).toHaveClass("custom-class");
	});

	it("has no a11y violations", async () => {
		const { container } = render(
			<Tabs defaultValue="overview" className="w-[450px]">
				<TabsList className="w-[450px]!">
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
					<p className="text-sm text-neutral-600">
						Overview dashboard showing key metrics and recent activity.
					</p>
				</TabsContent>
				<TabsContent value="analytics" className="mt-4">
					<p className="text-sm text-neutral-600">
						Detailed analytics and performance data.
					</p>
				</TabsContent>
				<TabsContent value="reports" className="mt-4">
					<p className="text-sm text-neutral-600">
						Generate and download custom reports.
					</p>
				</TabsContent>
			</Tabs>
		);

		const result = await axe(container);
		expect(result).toHaveNoViolations();
	});
});
