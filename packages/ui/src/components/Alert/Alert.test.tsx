import { axe } from "jest-axe";
import { Alert, AlertTitle } from "./Alert";
import { render, screen } from "@testing-library/react";

describe("Alert", () => {
	it.each([
		["info", "bg-primary-50"],
		["success", "bg-success-100"],
		["warning", "bg-warning-100"],
		["danger", "bg-danger-100"],
	])("renders the %s variant", (variant, expectedClass) => {
		render(
			<Alert variant={variant as any}>
				<AlertTitle>Alert</AlertTitle>
			</Alert>
		);
		const title = screen.getByText(/alert/i);
		expect(title.parentElement?.className).toContain(expectedClass);
	});

	it("has no a11y violations", async () => {
		const { container } = render(
			<Alert variant="info">
				<AlertTitle>Info</AlertTitle>
			</Alert>
		);
		expect(await axe(container)).toHaveNoViolations();
	});
});
