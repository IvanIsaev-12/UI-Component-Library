/// <reference types="@testing-library/jest-dom" />
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuGroup,
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuRadioGroup,
} from "./DropdownMenu";
import { axe } from "jest-axe";

describe("DropdownMenu", () => {
	it("renders dropdown menu", () => {
		// TODO: Implement test
	});

	it("opens menu on trigger click", () => {
		// TODO: Implement test
	});

	it("closes menu on item selection", () => {
		// TODO: Implement test
	});

	it("has no a11y violations", async () => {
		// TODO: Implement accessibility test
	});
});
