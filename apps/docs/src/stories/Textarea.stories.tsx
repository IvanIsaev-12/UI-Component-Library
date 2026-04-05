import { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "@ui-component-lib/ui";

const meta = {
	title: "Primitives/Textarea",
	component: Textarea,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"A multi-line text input with an optional label and error message. The resize behaviour can be controlled via the resize prop.",
			},
		},
	},
	argTypes: {
		label: {
			control: "text",
			description: "Label displayed above the textarea",
			table: { type: { summary: "string" } },
		},
		resize: {
			control: "select",
			options: ["resize-none", "resize-y", "resize-x", "resize"],
			description: "Tailwind resize utility applied to the textarea element",
			table: { type: { summary: "string" }, defaultValue: { summary: "resize-none" } },
		},
		error: {
			control: "text",
			description: "Error message shown below the textarea when validation fails",
			table: { type: { summary: "string" } },
		},
		placeholder: {
			control: "text",
			description: "Placeholder text shown when the textarea is empty",
			table: { type: { summary: "string" } },
		},
	},
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Text",
		resize: "resize-none",
	},
	parameters: {
		docs: {
			description: {
				story: "Standard textarea with a label and resize disabled.",
			},
		},
	},
};

export const WithError: Story = {
	args: {
		label: "Text",
		resize: "resize-none",
		error: "Wrong Input!",
	},
	parameters: {
		docs: {
			description: {
				story: "Textarea in an error state — the error message is displayed below the field.",
			},
		},
	},
};
