import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { axe } from "jest-axe";
import {
	Card,
	CardTitle,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
} from "./Card";

describe("Card", () => {
	it.each([
		["Card Title", <CardTitle>Title</CardTitle>, "Title"],
		["Card Content", <CardContent>Content</CardContent>, "Content"],
		["Card Header", <CardHeader>Header</CardHeader>, "Header"],
		[
			"Card Description",
			<CardDescription>Description</CardDescription>,
			"Description",
		],
		["Card Footer", <CardFooter>Footer</CardFooter>, "Footer"],
	])("render %s", (_name, component, text) => {
		render(<Card>{component}</Card>);
		expect(screen.getByText(new RegExp(text, "i"))).toBeInTheDocument();
	});

	it("renders complete Card structure", () => {
		render(
			<Card>
				<CardHeader>
					<CardTitle>Test Title</CardTitle>
					<CardDescription>Test Description</CardDescription>
				</CardHeader>
				<CardContent>Test Content</CardContent>
				<CardFooter>Test Footer</CardFooter>
			</Card>
		);

		expect(screen.getByText(/test title/i)).toBeInTheDocument();
		expect(screen.getByText(/test description/i)).toBeInTheDocument();
		expect(screen.getByText(/test content/i)).toBeInTheDocument();
		expect(screen.getByText(/test footer/i)).toBeInTheDocument();
	});

	it("has no a11y violations with all components", async () => {
		const { container } = render(
			<Card>
				<CardHeader>
					<CardTitle>Accessible Card Title</CardTitle>
					<CardDescription>This is a description</CardDescription>
				</CardHeader>
				<CardContent>Main content goes here</CardContent>
				<CardFooter>Footer content</CardFooter>
			</Card>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it("has no a11y violations with minimal Card", async () => {
		const { container } = render(
			<Card>
				<CardContent>Simple content</CardContent>
			</Card>
		);
		expect(await axe(container)).toHaveNoViolations();
	});
});
