import { render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";


describe("Checkbox", () => {

    it('renders a default checkbox', () => {
        render(<Checkbox label="Default" id='def' />);
        expect(screen.getByLabelText(/default/i)).toBeInTheDocument();
    })

    it('renders a checkbox without label', () => {
        render(<Checkbox id="id" />);
        const target = document.querySelector("input");
        expect(target).toBeInTheDocument();
    })
    it("renders checkbox as unchecked by default", () => {
        render(<Checkbox label="Option" id="opt" />);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).not.toBeChecked();
    });

    it("renders checkbox as checked when defaultChecked is true", () => {
        render(<Checkbox label="Option" id="opt" defaultChecked />);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toBeChecked();
    });

    it("can be toggled by clicking", async () => {
        const user = userEvent.setup();
        render(<Checkbox label="Toggle me" id="toggle" />);
        const checkbox = screen.getByRole("checkbox");

        expect(checkbox).not.toBeChecked();
        await user.click(checkbox);
        expect(checkbox).toBeChecked();
        await user.click(checkbox);
        expect(checkbox).not.toBeChecked();
    });

    it("can be toggled by clicking the label", async () => {
        const user = userEvent.setup();
        render(<Checkbox label="Click label" id="label-click" />);
        const checkbox = screen.getByRole("checkbox");
        const label = screen.getByText(/click label/i);

        expect(checkbox).not.toBeChecked();
        await user.click(label);
        expect(checkbox).toBeChecked();
    });
    it("has no a11y violations", async () => {
        const { container } = render(
            <Checkbox label="Accessible checkbox" id="a11y" />
        );
        expect(await axe(container)).toHaveNoViolations();
    });

    it("has no a11y violations when checked", async () => {
        const { container } = render(
            <Checkbox label="Checked" id="checked" defaultChecked />
        );
        expect(await axe(container)).toHaveNoViolations();
    });

})
