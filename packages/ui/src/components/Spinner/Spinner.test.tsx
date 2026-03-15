import { render, screen } from "@testing-library/react";
import { Spinner } from "./Spinner";
import { axe } from "jest-axe";

describe("Spinner", () => {
    it("renders a Spinner", () => {
        render(<Spinner size={"lg"} />);
        const spinner = document.querySelector("svg");
        expect(spinner).toBeInTheDocument();
    });

    it("has a role 'status' ", () => {
        render(<Spinner />);
        expect(screen.getByRole("status")).toBeInTheDocument();
    });
    
    it("has no a11y violations", async () => {
        const { container } = render(<Spinner size={"sm"} />);

        expect(await axe(container)).toHaveNoViolations();
    });
});
