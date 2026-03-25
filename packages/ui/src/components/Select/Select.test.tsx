/// <reference types="@testing-library/jest-dom" />
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./Select";
import { axe } from "jest-axe";

describe("Select", () => {
	it("renders select element", () => {
		render(
			<Select>
				<SelectTrigger>
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="orange">Orange</SelectItem>
				</SelectContent>
			</Select>
		);

		expect(screen.getByRole("combobox")).toBeInTheDocument();
		expect(screen.getByText(/select a fruit/i)).toBeInTheDocument();
	});

	it("renders with default value", () => {
		render(
			<Select defaultValue="banana">
				<SelectTrigger>
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="orange">Orange</SelectItem>
				</SelectContent>
			</Select>
		);

		expect(screen.getByText(/banana/i)).toBeInTheDocument();
	});

	it("renders trigger with placeholder", () => {
		render(
			<Select>
				<SelectTrigger>
					<SelectValue placeholder="Choose option" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="1">Option 1</SelectItem>
					<SelectItem value="2">Option 2</SelectItem>
					<SelectItem value="3">Option 3</SelectItem>
				</SelectContent>
			</Select>
		);

		expect(screen.getByText(/choose option/i)).toBeInTheDocument();
	});

	it("applies custom className to trigger", () => {
		render(
			<Select>
				<SelectTrigger className="custom-select">
					<SelectValue placeholder="Select" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="test">Test</SelectItem>
				</SelectContent>
			</Select>
		);

		const trigger = screen.getByRole("combobox");
		expect(trigger).toHaveClass("custom-select");
	});

	it("has no a11y violations", async () => {
		const { container } = render(
			<Select defaultValue="apple">
				<SelectTrigger aria-label="Select a fruit">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
				</SelectContent>
			</Select>
		);

		const result = await axe(container);
		expect(result).toHaveNoViolations();
	});
});
