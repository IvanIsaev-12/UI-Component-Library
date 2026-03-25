import { Meta, StoryObj} from "@storybook/react-vite";

import { Textarea } from "@ui-component-lib/ui";

const meta = {
    title: "Primitives/Textarea",
    component: Textarea,
    tags: ["autodocs"]
} satisfies Meta<typeof Textarea>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

    args: {
        label: "Text",
        resize: "resize-none"
    }
}

export const WithError: Story = {

    args: {
        label: "Text",
        resize: "resize-none",
        error: "Wrong Input!"
    }
}