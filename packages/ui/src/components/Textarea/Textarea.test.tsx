import { Textarea } from "./Textarea";
import { screen, render } from "@testing-library/react";
import { axe } from "jest-axe";

describe("Textarea", () => {
    it("renders the textarea", () => {
        render(<Textarea label="Text" id="textarea" />);
        expect(screen.getByLabelText("Text")).toBeInTheDocument();
    });

    it("renders with an error", () => {
        render(<Textarea error="Wrong Input!" label="Error" id="error-textarea" />);
        expect(screen.getByLabelText("Error")).toBeInTheDocument();
    });

    it("has aria-invalid when there is an error", () => {
        render(<Textarea error="Wrong Input!" />);
        const arInput = screen.getByRole("textbox");
        expect(arInput).toHaveAttribute("aria-invalid", "true");
    });

    it("is disabled when disabled prop is present", () => {
        render(<Textarea disabled={true} id="plain-text" label="Text" />);
        const disabledArea = screen.getByLabelText("Text");
        expect(disabledArea).toBeDisabled();
    });

    it("has no a11y violations", async () => {
        const { container } = render(<Textarea label="Text" id="text-area" rows={3} wrap="soft" />);
        expect(await axe(container)).toHaveNoViolations();
    });
});
