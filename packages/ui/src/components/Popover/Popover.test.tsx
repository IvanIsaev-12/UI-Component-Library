/// <reference types="@testing-library/jest-dom" />
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { axe } from "jest-axe";

describe("Popover", () => {
	it("renders popover trigger", () => {
		render(
			<Popover>
				<PopoverTrigger>Open</PopoverTrigger>
				<PopoverContent>Popover content</PopoverContent>
			</Popover>
		);

		expect(screen.getByRole("button", { name: /open/i })).toBeInTheDocument();
	});

	it("opens popover when trigger is clicked", async () => {
		const user = userEvent.setup();

		render(
			<Popover>
				<PopoverTrigger>Click me</PopoverTrigger>
				<PopoverContent>
					<p>This is the popover content</p>
				</PopoverContent>
			</Popover>
		);

		const trigger = screen.getByRole("button", { name: /click me/i });

		expect(
			screen.queryByText(/this is the popover content/i)
		).not.toBeInTheDocument();

		await user.click(trigger);

		expect(screen.getByText(/this is the popover content/i)).toBeVisible();
	});

	it("renders custom content in popover", async () => {
		const user = userEvent.setup();

		render(
			<Popover>
				<PopoverTrigger>Open</PopoverTrigger>
				<PopoverContent>
					<div>
						<h3>Title</h3>
						<p>Description</p>
						<button>Button</button>
					</div>
				</PopoverContent>
			</Popover>
		);

		await user.click(screen.getByRole("button", { name: /open/i }));

		expect(screen.getByText(/title/i)).toBeVisible();
		expect(screen.getByText(/description/i)).toBeVisible();
		expect(screen.getByRole("button", { name: /button/i })).toBeVisible();
	});

	it("applies custom className to content", async () => {
		const user = userEvent.setup();

		render(
			<Popover>
				<PopoverTrigger>Open</PopoverTrigger>
				<PopoverContent className="custom-class">Custom content</PopoverContent>
			</Popover>
		);

		await user.click(screen.getByRole("button", { name: /open/i }));

		const content = screen.getByText(/custom content/i);
		expect(content).toHaveClass(/custom-class/i);
	});

	it("has no a11y violations", async () => {
		const { container } = render(
			<Popover>
				<PopoverTrigger>Open popover</PopoverTrigger>
				<PopoverContent>
					<p>Popover content for accessibility test</p>
				</PopoverContent>
			</Popover>
		);

		const result = await axe(container);
		expect(result).toHaveNoViolations();
	});
});
