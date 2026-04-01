/// <reference types="@testing-library/jest-dom" />
import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Divider } from "./Divider";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";

describe("Divider", () => {
	it("renders divider element", () => {
		render(<Divider />);

		const divider = screen.getByRole("separator");
		expect(divider).toBeInTheDocument();
	});

	it("renders horizontal orientation by default", () => {
		render(<Divider />);

		const divider = screen.getByRole("separator");
		expect(divider).toHaveClass("w-full", "border-t");
		expect(divider).toHaveClass("border-border");
	});

	it("renders vertical orientation", () => {
		render(<Divider orientation="vertical" />);

		const divider = screen.getByRole("separator");
		expect(divider).toHaveClass("h-full", "border-l");
	});

	it("applies custom className", () => {
		render(<Divider className="custom-divider" />);

		const divider = screen.getByRole("separator");
		expect(divider).toHaveClass("custom-divider");
		expect(divider).toHaveClass("border-border");
	});

	it("has no a11y violations", async () => {
		const { container } = render(<Divider />);

		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
