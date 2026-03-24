/// <reference types="@testing-library/jest-dom" />
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Table } from "./Table";
import { axe } from "jest-axe";

describe("Table", () => {
	it("renders table element", () => {
		// TODO: Implement test
	});

	it("has no a11y violations", async () => {
		// TODO: Implement accessibility test
	});
});
