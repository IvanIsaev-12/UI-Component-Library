import { render, screen } from "@testing-library/react";
import { Typography } from "./Typography";
import { axe } from "jest-axe";

describe("Typography", () => {
	it.each([
		["h1", "Heading 1"],
		["h2", "Heading 2"],
		["h3", "Heading 3"],
		["h4", "Heading 4"],
		["caption", "Caption"],
		["label", "Label"],
		["body", "Body"],
	])("renders %s variant correctly", (variant, text) => {
		render(<Typography variant={variant as any}>{text}</Typography>);
		expect(screen.getByText(new RegExp(text, "i"))).toBeInTheDocument();
	});

	it("has no a11y violations", async () => {
		const { container } = render(
			<Typography variant={"h2"}>Heading 2</Typography>
		);
		const result = await axe(container);
		expect(result).toHaveNoViolations();
	});
});
