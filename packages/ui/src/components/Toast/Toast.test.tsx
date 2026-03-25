/// <reference types="@testing-library/jest-dom" />
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Toast } from "./Toast";
import { axe } from "jest-axe";

describe("Toast", () => {

	it("renders toast with message", () => {
		const onClose = vi.fn();
		render(<Toast message="Test" onClose={onClose} />);

		expect(screen.getByText(/test/i)).toBeInTheDocument();
	});

	it("renders different variants", () => {
		const onClose = vi.fn();
		const { rerender } = render(
			<Toast message="Success" variant="success" onClose={onClose} />
		);

		expect(screen.getByText(/success/i)).toBeInTheDocument();

		rerender(<Toast message="Error" variant="error" onClose={onClose} />);
		expect(screen.getByText(/error/i)).toBeInTheDocument();

		rerender(<Toast message="Warning" variant="warning" onClose={onClose} />);
		expect(screen.getByText(/warning/i)).toBeInTheDocument();
	});

	it("renders close button", () => {
		const onClose = vi.fn();

		render(<Toast message="Closable toast" onClose={onClose} />);

		const closeButton = screen.getByRole("button", { name: /close toast/i });
		expect(closeButton).toBeInTheDocument();
	});

	it("has no a11y violations", async () => {
		const onClose = vi.fn();
		const { container } = render(
			<Toast message="Accessible toast" variant="default" onClose={onClose} />
		);

		const result = await axe(container);
		expect(result).toHaveNoViolations();
	});
});
