import { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@ui-component-lib/ui";

const meta = {
	title: "Primitives/Input",
	component: Input,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"A text input field with optional label, helper tip, and error message. Supports all standard HTML input attributes.",
			},
		},
	},
	argTypes: {
		label: {
			control: "text",
			description: "Label displayed above the input",
			table: { type: { summary: "string" } },
		},
		placeholder: {
			control: "text",
			description: "Placeholder text shown when the input is empty",
			table: { type: { summary: "string" } },
		},
		tip: {
			control: "text",
			description: "Helper text displayed below the input",
			table: { type: { summary: "string" } },
		},
		error: {
			control: "text",
			description: "Error message replacing the tip when validation fails",
			table: { type: { summary: "string" } },
		},
		disabled: {
			control: "boolean",
			description: "Disables the input field",
			table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
		},
		id: {
			control: "text",
			description: "HTML id attribute — used to associate the label with the input",
			table: { type: { summary: "string" } },
		},
	},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: "Type something...",
	},
	parameters: {
		docs: {
			description: {
				story: "A bare input with only a placeholder — no label or helpers.",
			},
		},
	},
};

export const Label: Story = {
	args: {
		label: "City",
		placeholder: "E.g. Moscow",
		id: "city",
	},
	parameters: {
		docs: {
			description: {
				story: "Input with an associated label to improve accessibility and usability.",
			},
		},
	},
};

export const Tip: Story = {
	args: {
		label: "Password",
		placeholder: "Enter password",
		tip: "Password must contain at least 8 characters",
		id: "password",
	},
	parameters: {
		docs: {
			description: {
				story: "Helper tip shown below the input to guide the user's input.",
			},
		},
	},
};

export const Disabled: Story = {
	args: {
		label: "Disabled",
		disabled: true,
		id: "disabled",
		tip: "You don't have the access!",
	},
	parameters: {
		docs: {
			description: {
				story: "A disabled input that cannot be focused or edited.",
			},
		},
	},
};

export const Error: Story = {
	args: {
		label: "Card Number",
		placeholder: "Enter a number",
		error: "Mandatory field",
		id: "card_number",
	},
	parameters: {
		docs: {
			description: {
				story: "Input in an error state — the error message replaces the helper tip.",
			},
		},
	},
};
