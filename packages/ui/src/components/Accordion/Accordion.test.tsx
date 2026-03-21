/// <reference types="@testing-library/jest-dom" />
import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";

describe("Accordion", () => {
	it('renders the accordion', async () => {
		const userAction = userEvent.setup();
		render(
			<Accordion type="single" collapsible className="w-[600px]">
				<AccordionItem value="item-1">
					<AccordionTrigger>
						Are you a real person?
					</AccordionTrigger>
					<AccordionContent>
						No, I am an autonomous robot called <b>Hailee</b>, programmed by my father Eric Johnson, the Senior Engineer of WER Technologies, to help people with their troubles.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		)
		await userAction.click(screen.getByRole("button"));
		expect(screen.getByText(/autonomous robot/i)).toBeVisible();
	})

	it('renders the accordion with multiple items', async () => {
		const userAction = userEvent.setup();
		render(
			<Accordion type="multiple" className="w-[600px]">
				<AccordionItem value="item-1">
					<AccordionTrigger>
						Are you a real person?
					</AccordionTrigger>
					<AccordionContent>
						No, I am an autonomous robot called <b>Hailee</b>, programmed by my father Eric Johnson, the Senior Engineer of WER Technologies, to help people with their troubles.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>
						What is hidden there?
					</AccordionTrigger>
					<AccordionContent>
						A simple text
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		)
		const trigger1 = screen.getByRole("button", { name: /are you a real person/i });
		const trigger2 = screen.getByRole("button", { name: /what is hidden there/i });

		await userAction.click(trigger1);
		await userAction.click(trigger2); 
		
		expect(screen.getByText(/a simple text/i)).toBeVisible();
	});

	it('supports keyboard navigation', async () => {
		const userAction = userEvent.setup();
		render(
			<Accordion type="single" collapsible className="w-[600px]">
				<AccordionItem value="item-1">
					<AccordionTrigger>
						Are you a real person?
					</AccordionTrigger>
					<AccordionContent>
						No, I am an autonomous robot called <b>Hailee</b>, programmed by my father Eric Johnson, the Senior Engineer of WER Technologies, to help people with their troubles.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		);

		const trigger = screen.getByRole("button");
		trigger.focus();

		await userAction.keyboard("{Enter}");
		expect(screen.getByText(/autonomous robot/i)).toBeVisible();
		
		await userAction.keyboard("{Enter}");
		expect(screen.queryByText(/autonomous robot/i)).not.toBeInTheDocument();
	})

	it('has no accessibility violations', async () => {
		const { container } = render(
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>Question</AccordionTrigger>
					<AccordionContent>Answer</AccordionContent>
				</AccordionItem>
			</Accordion>
		);

		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
})