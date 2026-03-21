/// <reference types="@testing-library/jest-dom" />
import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Switch } from "./Switch";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";

describe("Switch", () => {
	it("renders switch element", () => {
		render(<Switch id="mobile-data" />);

		const switchElement = screen.getByRole("switch");
		expect(switchElement).toBeInTheDocument();
		expect(switchElement).not.toBeChecked();
	});

	it("can be toggled on and off", async () => {
		const user = userEvent.setup();
		render(<Switch id="mobile-data" />);

		const switchElement = screen.getByRole("switch");
		expect(switchElement).not.toBeChecked();

		// Toggle on
		await user.click(switchElement);
		expect(switchElement).toBeChecked();

		// Toggle off
		await user.click(switchElement);
		expect(switchElement).not.toBeChecked();
	});

	it("renders different sizes", () => {
		const { rerender } = render(<Switch id="sm" size="sm" />);
		let switchElement = screen.getByRole("switch");
		expect(switchElement).toHaveClass("h-5", "w-9");

		rerender(<Switch id="md" size="md" />);
		switchElement = screen.getByRole("switch");
		expect(switchElement).toHaveClass("h-6", "w-11");

		rerender(<Switch id="lg" size="lg" />);
		switchElement = screen.getByRole("switch");
		expect(switchElement).toHaveClass("h-8", "w-14");
	});

	it("can be disabled", async () => {
		const user = userEvent.setup();
		render(<Switch id="disabled-off" disabled />);

		const switchElement = screen.getByRole("switch");
		expect(switchElement).toBeDisabled();

		await user.click(switchElement);
		expect(switchElement).not.toBeChecked();
	});

	it("can be disabled and checked", () => {
		render(<Switch id="disabled-on" disabled defaultChecked />);

		const switchElement = screen.getByRole("switch");
		expect(switchElement).toBeDisabled();
		expect(switchElement).toBeChecked();
	});

	it("has no a11y violations", async () => {
		const { container } = render(
			<div className="flex items-center gap-2">
				<Switch id="mobile-data" />
				<label htmlFor="mobile-data" className="text-sm font-medium cursor-pointer">
					Mobile Data
				</label>
			</div>
		);

		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
