/// <reference types="@testing-library/jest-dom" />
import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Radio } from "./Radio";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";

describe("Radio", () => {
	it("renders a radio button with label", () => {
		render(<Radio label="Female" />);

		const radio = screen.getByRole("radio", { name: /female/i });
		expect(radio).toBeInTheDocument();
		expect(radio).not.toBeChecked();
	});

	it("can be checked by clicking", async () => {
		const user = userEvent.setup();
		render(<Radio label="Male" />);

		const radio = screen.getByRole("radio", { name: /male/i });
		expect(radio).not.toBeChecked();

		await user.click(radio);
		expect(radio).toBeChecked();
	});

	it("can be checked by clicking label", async () => {
		const user = userEvent.setup();
		render(<Radio label="Female" />);

		const radio = screen.getByRole("radio", { name: /female/i });
		const label = screen.getByText(/female/i);

		expect(radio).not.toBeChecked();
		await user.click(label);
		expect(radio).toBeChecked();
	});

	it("randers a radio group", async () => {
		const user = userEvent.setup();
		render(
			<div>
				<Radio name="gender" label="Female" />
				<Radio name="gender" label="Male" />
				<Radio name="gender" label="Other" />
			</div>
		);

		const female = screen.getByRole("radio", { name: "Female" });
		const male = screen.getByRole("radio", { name: "Male" });

		await user.click(female);
		expect(female).toBeChecked();
		expect(male).not.toBeChecked();

		await user.click(male);
		expect(female).not.toBeChecked();
		expect(male).toBeChecked();
	});

	it("can be disabled", () => {
		render(<Radio label="Disabled" disabled />);

		const radio = screen.getByRole("radio", { name: /disabled/i });
		expect(radio).toBeDisabled();
	});

	it("renders different sizes", () => {
		const { rerender } = render(<Radio label="Small" size="sm" />);
		let radio = screen.getByRole("radio");
		expect(radio).toHaveClass("h-3", "w-3");

		rerender(<Radio label="Medium" size="md" />);
		radio = screen.getByRole("radio");
		expect(radio).toHaveClass("h-4", "w-4");

		rerender(<Radio label="Large" size="lg" />);
		radio = screen.getByRole("radio");
		expect(radio).toHaveClass("h-5", "w-5");
	});

	it("has no a11y violations", async () => {
		const { container } = render(<Radio label="Accessible radio" />);

		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
