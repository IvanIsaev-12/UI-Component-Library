import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
	SelectSeparator,
} from "@ui-component-lib/ui";

const meta = {
	title: "Components/Select",
	component: Select,
	tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-[280px]" aria-label="Select a fruit">
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="apple">Apple</SelectItem>
				<SelectItem value="banana">Banana</SelectItem>
				<SelectItem value="orange">Orange</SelectItem>
				<SelectItem value="grape">Grape</SelectItem>
				<SelectItem value="mango">Mango</SelectItem>
			</SelectContent>
		</Select>
	),
};

export const WithGroups: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-[280px]" aria-label="Select a timezone">
				<SelectValue placeholder="Select a timezone" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>North America</SelectLabel>
					<SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
					<SelectItem value="cst">Central Standard Time (CST)</SelectItem>
					<SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
					<SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
				</SelectGroup>
				<SelectSeparator />
				<SelectGroup>
					<SelectLabel>Europe</SelectLabel>
					<SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
					<SelectItem value="cet">Central European Time (CET)</SelectItem>
					<SelectItem value="eet">Eastern European Time (EET)</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};

export const WithDefaultValue: Story = {
	render: () => (
		<Select defaultValue="banana">
			<SelectTrigger className="w-[280px]" aria-label="Select a fruit">
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="apple">Apple</SelectItem>
				<SelectItem value="banana">Banana</SelectItem>
				<SelectItem value="orange">Orange</SelectItem>
				<SelectItem value="grape">Grape</SelectItem>
			</SelectContent>
		</Select>
	),
};

export const Disabled: Story = {
	render: () => (
		<Select disabled>
			<SelectTrigger className="w-[280px]" aria-label="Select a fruit">
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="apple">Apple</SelectItem>
				<SelectItem value="banana">Banana</SelectItem>
				<SelectItem value="orange">Orange</SelectItem>
			</SelectContent>
		</Select>
	),
};

export const WithDisabledItems: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-[280px]" aria-label="Select a fruit">
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="apple">Apple</SelectItem>
				<SelectItem value="banana" disabled>
					Banana (Out of stock)
				</SelectItem>
				<SelectItem value="orange">Orange</SelectItem>
				<SelectItem value="grape" disabled>
					Grape (Out of stock)
				</SelectItem>
				<SelectItem value="mango">Mango</SelectItem>
			</SelectContent>
		</Select>
	),
};

export const FormExample: Story = {
	render: () => {
		const [country, setCountry] = React.useState("");

		return (
			<div className="space-y-4 w-[280px]">
				<div>
					<label htmlFor="country-select" className="text-sm font-medium mb-2 block">Country</label>
					<Select value={country} onValueChange={setCountry}>
						<SelectTrigger id="country-select">
							<SelectValue placeholder="Select your country" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="us">United States</SelectItem>
							<SelectItem value="uk">United Kingdom</SelectItem>
							<SelectItem value="ca">Canada</SelectItem>
							<SelectItem value="au">Australia</SelectItem>
							<SelectItem value="de">Germany</SelectItem>
							<SelectItem value="fr">France</SelectItem>
						</SelectContent>
					</Select>
				</div>
				{country && (
					<p className="text-sm text-neutral-600">Selected: {country}</p>
				)}
			</div>
		);
	},
};

export const LongList: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-[280px]" aria-label="Select a country">
				<SelectValue placeholder="Select a country" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="us">United States</SelectItem>
				<SelectItem value="uk">United Kingdom</SelectItem>
				<SelectItem value="ca">Canada</SelectItem>
				<SelectItem value="au">Australia</SelectItem>
				<SelectItem value="de">Germany</SelectItem>
				<SelectItem value="fr">France</SelectItem>
				<SelectItem value="jp">Japan</SelectItem>
				<SelectItem value="cn">China</SelectItem>
				<SelectItem value="in">India</SelectItem>
				<SelectItem value="br">Brazil</SelectItem>
				<SelectItem value="mx">Mexico</SelectItem>
				<SelectItem value="es">Spain</SelectItem>
				<SelectItem value="it">Italy</SelectItem>
				<SelectItem value="ru">Russia</SelectItem>
				<SelectItem value="za">South Africa</SelectItem>
			</SelectContent>
		</Select>
	),
};

export const MultipleSelects: Story = {
	render: () => (
		<div className="space-y-4">
			<div className="w-[280px]">
				<label htmlFor="size-select" className="text-sm font-medium mb-2 block">Size</label>
				<Select defaultValue="m">
					<SelectTrigger id="size-select">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="xs">Extra Small</SelectItem>
						<SelectItem value="s">Small</SelectItem>
						<SelectItem value="m">Medium</SelectItem>
						<SelectItem value="l">Large</SelectItem>
						<SelectItem value="xl">Extra Large</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className="w-[280px]">
				<label htmlFor="color-select" className="text-sm font-medium mb-2 block">Color</label>
				<Select defaultValue="blue">
					<SelectTrigger id="color-select">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="red">Red</SelectItem>
						<SelectItem value="blue">Blue</SelectItem>
						<SelectItem value="green">Green</SelectItem>
						<SelectItem value="black">Black</SelectItem>
						<SelectItem value="white">White</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className="w-[280px]">
				<label htmlFor="quantity-select" className="text-sm font-medium mb-2 block">Quantity</label>
				<Select defaultValue="1">
					<SelectTrigger id="quantity-select">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="1">1</SelectItem>
						<SelectItem value="2">2</SelectItem>
						<SelectItem value="3">3</SelectItem>
						<SelectItem value="4">4</SelectItem>
						<SelectItem value="5">5</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	),
};
