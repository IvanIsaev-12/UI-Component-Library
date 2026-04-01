import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";

describe("Button", () => {
	it("renders a button", () => {
		render(<Button>Click me</Button>);
		expect(
			screen.getByRole("button", { name: /click me/i })
		).toBeInTheDocument();
	});

	it("renders with secondary variant", () => {
		render(<Button variant="secondary">Click me</Button>);
		const button = screen.getByRole("button", { name: /click me/i });
		expect(button.className).toContain("bg-background-muted");
	});

	it("renders in loading state", () => {
		render(<Button isLoading>Click me</Button>);
		const button = screen.getByRole("button");
		expect(button).toHaveAttribute("aria-busy", "true");
		expect(button).toBeDisabled();
		expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();
	});

	it("testing user events", async () => {
		const endUser = userEvent.setup();
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Click me</Button>);
		const button = screen.getByRole("button");
		await endUser.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("can be disabled", () => {
		render(<Button disabled>Click me</Button>);
		const button = screen.getByRole("button", { name: /click me/i });
		expect(button).toBeDisabled();
	});

	it("testing a11y violations", async () => {
		const { container } = render(<Button>Click me</Button>);
		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});

	it("has no a11y violations being disabled", async () => {
		const { container } = render(<Button disabled> Click me</Button>);
		const result = await axe(container);

		expect(result).toHaveNoViolations();
	});

	it("has no a11y violations when loading", async () => {
		const { container } = render(<Button isLoading={true}> Click me</Button>);
		const result = await axe(container);

		expect(result).toHaveNoViolations();
	});
});
