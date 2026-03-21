/// <reference types="@testing-library/jest-dom" />
import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./Tooltip";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Button } from "../Button";

describe("Tooltip", () => {
	it("shows tooltip on hover", async () => {
		const userAction = userEvent.setup();
		render(
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="outline">Hover me</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Add to library</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		);

		const button = screen.getByRole("button", { name: /hover me/i });

		await userAction.hover(button);

		const tooltip = await screen.findByRole("tooltip");
		expect(tooltip).toBeVisible();
		expect(tooltip).toHaveTextContent(/add to library/i);
	});

	it("has no a11y violations", async () => {
		const { container } = render(
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="outline">Hover me</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p>Add to library</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		);

		const result = await axe(container);
		expect(result).toHaveNoViolations();
	});
});
