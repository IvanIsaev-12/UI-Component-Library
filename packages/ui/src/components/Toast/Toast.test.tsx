/// <reference types="@testing-library/jest-dom" />
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Toast } from "./Toast";
import { axe } from "jest-axe";

describe("Toast", () => {
	it("renders toast element", () => {
		// TODO: Implement test
	});

	it("has no a11y violations", async () => {
		// TODO: Implement accessibility test
	});
});
