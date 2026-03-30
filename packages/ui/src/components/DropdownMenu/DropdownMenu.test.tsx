/// <reference types="@testing-library/jest-dom" />
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from "./DropdownMenu";
import { axe } from "jest-axe";

describe("DropdownMenu", () => {
	it("renders dropdown menu trigger", () => {
		render(
			<DropdownMenu>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>Item 1</DropdownMenuItem>
					<DropdownMenuItem>Item 2</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);

		expect(
			screen.getByRole("button", { name: /open menu/i })
		).toBeInTheDocument();
	});

	it("renders with label and separator", () => {
		render(
			<DropdownMenu>
				<DropdownMenuTrigger>Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>Actions</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Edit</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);

		expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
	});

	it("renders with custom className on trigger", () => {
		render(
			<DropdownMenu>
				<DropdownMenuTrigger className="custom-trigger">
					Custom Menu
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>Item</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);

		const trigger = screen.getByRole("button", { name: /custom menu/i });
		expect(trigger).toHaveClass("custom-trigger");
	});

	it("has no a11y violations", async () => {
		const { container } = render(
			<DropdownMenu>
				<DropdownMenuTrigger>Accessible Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Profile</DropdownMenuItem>
					<DropdownMenuItem>Settings</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);

		const result = await axe(container);
		expect(result).toHaveNoViolations();
	});
});
