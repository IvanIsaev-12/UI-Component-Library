import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio, Card } from "@ui-component-lib/ui";

const meta: Meta<typeof Radio> = {
    title: "Primitives/Radio",
    component: Radio,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="space-y-3">
            <Radio name="gender" label="Female" size="md" />
            <Radio name="gender" label="Male" size="md" />
            <Radio name="gender" label="Other" size="md" />
        </div>
    )
};

export const DifferentSizes: Story = {
    render: () => (
        <div className="space-y-4">
            <div>
                <h4 className="text-sm font-medium mb-2">Small</h4>
                <div className="space-y-2">
                    <Radio name="size-sm" label="Option 1" size="sm" />
                    <Radio name="size-sm" label="Option 2" size="sm" />
                </div>
            </div>
            <div>
                <h4 className="text-sm font-medium mb-2">Medium</h4>
                <div className="space-y-2">
                    <Radio name="size-md" label="Option 1" size="md" />
                    <Radio name="size-md" label="Option 2" size="md" />
                </div>
            </div>
            <div>
                <h4 className="text-sm font-medium mb-2">Large</h4>
                <div className="space-y-2">
                    <Radio name="size-lg" label="Option 1" size="lg" />
                    <Radio name="size-lg" label="Option 2" size="lg" />
                </div>
            </div>
        </div>
    )
};

export const SubscriptionPlan: Story = {
    render: () => {
        const [plan, setPlan] = React.useState("pro");

        return (
            <div className="max-w-md space-y-3 min-w-[300px]">
                <h3 className="text-lg font-semibold mb-4">Choose your plan</h3>
                <label className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-background-subtle transition-colors">
                    <Radio
                        name="plan"
                        value="free"
                        checked={plan === "free"}
                        onChange={(e) => setPlan(e.target.value)}
                    />
                    <div className="flex-1">
                        <div className="font-medium">Free</div>
                        <div className="text-sm text-foreground-muted">Shuffle play • Ads included</div>
                        <div className="text-sm mt-1">Listen on mobile and desktop</div>
                        <div className="text-xs text-foreground-muted mt-1">Limited skips • No offline listening</div>
                        <div className="text-sm font-semibold mt-1">0 Ft/month</div>
                    </div>
                </label>

                <label className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-background-subtle transition-colors">
                    <Radio
                        name="plan"
                        value="pro"
                        checked={plan === "pro"}
                        onChange={(e) => setPlan(e.target.value)}
                    />
                    <div className="flex-1">
                        <div className="font-medium">Premium Individual</div>
                        <div className="text-sm text-foreground-muted">Ad-free music • Unlimited skips</div>
                        <div className="text-sm mt-1">Download songs and listen offline</div>
                        <div className="text-xs text-foreground-muted mt-1">1 account • High quality audio</div>
                        <div className="text-sm font-semibold mt-1">4490 Ft/month</div>
                    </div>
                </label>

                <label className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-background-subtle transition-colors">
                    <Radio
                        name="plan"
                        value="enterprise"
                        checked={plan === "enterprise"}
                        onChange={(e) => setPlan(e.target.value)}
                    />
                    <div className="flex-1">
                        <div className="font-medium">Premium Family</div>
                        <div className="text-sm text-foreground-muted">Up to 6 accounts • Ad-free music</div>
                        <div className="text-sm mt-1">Family mix playlist • Parental controls</div>
                        <div className="text-xs text-foreground-muted mt-1">Download & offline listening</div>
                        <div className="text-sm font-semibold mt-1">5690 Ft/month</div>
                    </div>
                </label>
                {plan && (
                    <p className="text-sm text-foreground-muted mt-4">
                        Selected: <span className="font-medium text-foreground">{plan}</span>
                    </p>
                )}
            </div>
        );
    }
};