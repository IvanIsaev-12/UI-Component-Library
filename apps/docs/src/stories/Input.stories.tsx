import { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@ui-component-lib/ui";

const meta = {
	title: "Primitives/Input",
	component: Input,
	tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: "Type: ",
	},
};
export const Label: Story = {
	args: {
		label: "City",
		placeholder: "E.g. Moscow",
		id: "city",
	},
};
export const Tip: Story = {
	args: {
		label: "Password",
		placeholder: "Enter password",
		tip: "Password must contain at least 8 characters",
		id: "password",
	},
};
export const Disabled: Story = {
	args: {
		label: "Disabled",
		disabled: true,
		id: "disabled",
		tip: "You don't have the access!",
	},
};
export const Error: Story = {
	args: {
		label: "Card Number",
		placeholder: "Enter a number",
		error: "Mandatory field",
		id: "card_number",
	},
};
