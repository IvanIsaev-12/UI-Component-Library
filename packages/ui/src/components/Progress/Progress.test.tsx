/// <reference types="@testing-library/jest-dom" />
import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Progress } from "./Progress";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";

describe("Progress", () => {
	it("renders progress element", () => {
		render(
			<Progress
				value={60}
				maximum={100}
				variant="primary"
				size="md"
				aria-label="Progress"
			/>
		);

		const progress = screen.getByRole("progressbar");
		expect(progress).toBeInTheDocument();
		expect(progress).toHaveAttribute("aria-valuenow", "60");
	});

	it("displays correct progress value", () => {
		render(<Progress value={75} maximum={100} />);

		const progress = screen.getByRole("progressbar");
		expect(progress).toHaveAttribute("aria-valuenow", "75");
		expect(progress).toHaveAttribute("aria-valuemin", "0");
		expect(progress).toHaveAttribute("aria-valuemax", "100");
	});

	it("renders different variants", () => {
		const { rerender } = render(<Progress value={50} variant="primary" />);
		let progress = screen.getByRole("progressbar");
		expect(progress).toHaveClass("[&>div]:bg-primary-500");

		rerender(<Progress value={50} variant="success" />);
		progress = screen.getByRole("progressbar");
		expect(progress).toHaveClass("[&>div]:bg-success-500");

		rerender(<Progress value={50} variant="danger" />);
		progress = screen.getByRole("progressbar");
		expect(progress).toHaveClass("[&>div]:bg-danger-500");
	});

	it("renders different sizes", () => {
		const { rerender } = render(<Progress value={50} size="sm" />);
		let progress = screen.getByRole("progressbar");
		expect(progress).toHaveClass("h-1");

		rerender(<Progress value={50} size="md" />);
		progress = screen.getByRole("progressbar");
		expect(progress).toHaveClass("h-2");

		rerender(<Progress value={50} size="lg" />);
		progress = screen.getByRole("progressbar");
		expect(progress).toHaveClass("h-4");
	});

	it("has no a11y violations", async () => {
		const { container } = render(
			<Progress
				value={60}
				maximum={100}
				variant="primary"
				size="md"
				aria-label="Progress"
			/>
		);

		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
