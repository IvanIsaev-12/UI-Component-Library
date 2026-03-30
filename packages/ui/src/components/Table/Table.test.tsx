/// <reference types="@testing-library/jest-dom" />
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableFooter,
} from "./Table";
import { axe } from "jest-axe";

describe("Table", () => {
	it("renders table element", () => {
		render(
			<Table className="min-w-[1000px]">
				<TableCaption>A list of employees</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Position</TableHead>
						<TableHead className="text-right">Salary</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">John Doe</TableCell>
						<TableCell>Software Engineer</TableCell>
						<TableCell className="text-right">$95,000</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Jane Smith</TableCell>
						<TableCell>Product Manager</TableCell>
						<TableCell className="text-right">$105,000</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Bob Johnson</TableCell>
						<TableCell>UX Designer</TableCell>
						<TableCell className="text-right">$85,000</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Alice Brown</TableCell>
						<TableCell>DevOps Engineer</TableCell>
						<TableCell className="text-right">$100,000</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		);

		expect(screen.getByRole("table")).toBeInTheDocument();
	});

	it("renders table with caption", () => {
		render(
			<Table className="min-w-[1000px]">
				<TableCaption>A list of employees</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Position</TableHead>
						<TableHead className="text-right">Salary</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">John Doe</TableCell>
						<TableCell>Software Engineer</TableCell>
						<TableCell className="text-right">$95,000</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Jane Smith</TableCell>
						<TableCell>Product Manager</TableCell>
						<TableCell className="text-right">$105,000</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Bob Johnson</TableCell>
						<TableCell>UX Designer</TableCell>
						<TableCell className="text-right">$85,000</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Alice Brown</TableCell>
						<TableCell>DevOps Engineer</TableCell>
						<TableCell className="text-right">$100,000</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		);

		const caption = screen.getByText(/a list of employees/i);
		expect(caption).toBeInTheDocument();
	});

	it("renders table with footer", () => {
		render(
			<Table className="min-w-[1000px]">
				<TableCaption>A list of employees</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Position</TableHead>
						<TableHead className="text-right">Salary</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">John Doe</TableCell>
						<TableCell>Software Engineer</TableCell>
						<TableCell className="text-right">$95,000</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Jane Smith</TableCell>
						<TableCell>Product Manager</TableCell>
						<TableCell className="text-right">$105,000</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Bob Johnson</TableCell>
						<TableCell>UX Designer</TableCell>
						<TableCell className="text-right">$85,000</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Alice Brown</TableCell>
						<TableCell>DevOps Engineer</TableCell>
						<TableCell className="text-right">$100,000</TableCell>
					</TableRow>
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={2}>Average salary</TableCell>
						<TableCell className="text-right">$96,250</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		);

		const footer = screen.getByText(/average salary/i);
		expect(footer).toBeInTheDocument();
		expect(screen.getByText(/\$96,250/i)).toBeInTheDocument();
	});

	it("has no a11y violations", async () => {
		const { container } = render(
			<Table className="min-w-[1000px]">
				<TableCaption>A list of employees</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Position</TableHead>
						<TableHead className="text-right">Salary</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">John Doe</TableCell>
						<TableCell>Software Engineer</TableCell>
						<TableCell className="text-right">$95,000</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Jane Smith</TableCell>
						<TableCell>Product Manager</TableCell>
						<TableCell className="text-right">$105,000</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		);

		const result = await axe(container);
		expect(result).toHaveNoViolations();
	});
});
