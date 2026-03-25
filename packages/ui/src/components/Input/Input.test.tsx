import { Input } from "./Input";
import { screen, render } from "@testing-library/react";
import { axe } from "jest-axe";

describe("Input", () => {
	it("renders the input field", () => {
		render(<Input placeholder="Email" />);
		expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
	});

	it("renders the label if there is one", () => {
		render(<Input label="Create Account" />);

		expect(screen.getByText(/create account/i)).toBeInTheDocument();
	});

	it("renders with a tip", () => {
		render(<Input tip="The password must contain at least 8 symbols" />);
		expect(
			screen.getByText(/the password must contain at least 8 symbols/i)
		).toBeInTheDocument();
	});

	it("renders with an error message", () => {
		render(<Input error="The field can't be empty" />);
		expect(screen.getByText(/the field can't be empty/i)).toBeInTheDocument();
	});

	it("the input can be disabled", () => {
		render(<Input disabled={true} label="Password" id="password" />);
		const disabledInput = screen.getByLabelText(/password/i);
		expect(disabledInput).toBeDisabled();
	});

	it("has aria-invalid when there is an error", () => {
		render(<Input error="Mandatory field" />);
		const arInput = screen.getByRole("textbox");
		expect(arInput).toHaveAttribute("aria-invalid", "true");
	});

	it("has no a11y violations", async () => {
		const { container } = render(<Input placeholder="Telephone" id="phone" />);

		expect(await axe(container)).toHaveNoViolations();
	});
});
