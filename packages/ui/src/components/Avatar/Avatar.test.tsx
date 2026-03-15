import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";
import { axe } from "jest-axe";

describe("Avatar", () => {
	it("renders a complete Avatar", () => {
		render(<Avatar alt="Segnor" src="https://i.pravatar.cc/150" />);
		const renderResult = document.querySelector("span");
		expect(renderResult).toBeInTheDocument();
	});

	it("has a fallback message", () => {
		render(
			<Avatar alt="Segnor" src="https://i.pravatar.cc/150" fallback="SR" />
		);
		expect(screen.getByText("SR")).toBeInTheDocument();
	});

	it.each([
		["sm", "h-8"],
		["md", "h-10"],
		["lg", "h-14"],
	])("renders the %s size", (size, expectedClass) => {
		render(<Avatar fallback="CR7" size={size as any} />);
		const fallback = screen.getByText("CR7");
		expect(fallback.parentElement?.className).toContain(expectedClass);
	});

	it("has no a11y violations", async () => {
		const { container } = render(
			<Avatar alt="" src="https://i.pravatar.cc/150" fallback="II" />
		);
		const result = await axe(container);
		expect(result).toHaveNoViolations();
	});
});
