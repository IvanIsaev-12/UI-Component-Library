/// <reference types="@testing-library/jest-dom" />
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Skeleton } from "./Skeleton";
import { axe } from "jest-axe";

describe("Skeleton", () => {
	it("renders skeleton element", () => {
		render(<Skeleton className="h-4 w-4 rounded-md" />);

		const result = document.querySelector("div");
		expect(result).toBeInTheDocument();
	});
	it("renders with a custom class", () => {
    render(<Skeleton className="h-12 w-12 rounded-full" data-testid="skeleton" />);
    
    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveClass("rounded-full", "h-12", "w-12");
});
	it("has no a11y violations", async () => {
		const { container } = render(
			<div className="flex flex-col space-y-3">
				<Skeleton className="h-[125px] w-[250px] rounded-xl" />
				<div className="space-y-2">
					<Skeleton className="h-4 w-[250px]" />
					<Skeleton className="h-4 w-[200px]" />
				</div>
			</div>
		);

		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
