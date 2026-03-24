import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverTrigger, PopoverContent, Button, Checkbox } from "@ui-component-lib/ui";

const meta = {
    title: "Components/Popover",
    component: Popover,
    tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="space-y-2">
                    <h4 className="font-medium text-sm">Popover Title</h4>
                    <p className="text-sm text-neutral-600">
                        This is a popover with some content. You can put any content you want here.
                    </p>
                </div>
            </PopoverContent>
        </Popover>
    ),
};

export const WithForm: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Update dimensions</Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="space-y-4">
                    <div>
                        <h4 className="font-medium text-sm mb-2">Dimensions</h4>
                        <p className="text-xs text-neutral-600 mb-3">
                            Set the dimensions for the layer.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex gap-2 items-center">
                            <label htmlFor="width" className="text-sm w-16">Width</label>
                            <input
                                id="width"
                                type="number"
                                defaultValue="100"
                                className="flex-1 h-8 rounded-md border border-neutral-300 px-2 text-sm"
                            />
                        </div>
                        <div className="flex gap-2 items-center">
                            <label htmlFor="height" className="text-sm w-16">Height</label>
                            <input
                                id="height"
                                type="number"
                                defaultValue="100"
                                className="flex-1 h-8 rounded-md border border-neutral-300 px-2 text-sm"
                            />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    ),
};

export const DifferentSides: Story = {
    render: () => (
        <div className="flex gap-4 items-center justify-center h-64">
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Top</Button>
                </PopoverTrigger>
                <PopoverContent side="top">
                    <p className="text-sm">Content appears on top</p>
                </PopoverContent>
            </Popover>

            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Right</Button>
                </PopoverTrigger>
                <PopoverContent side="right">
                    <p className="text-sm">Content appears on right</p>
                </PopoverContent>
            </Popover>

            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Bottom</Button>
                </PopoverTrigger>
                <PopoverContent side="bottom">
                    <p className="text-sm">Content appears on bottom</p>
                </PopoverContent>
            </Popover>

            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Left</Button>
                </PopoverTrigger>
                <PopoverContent side="left">
                    <p className="text-sm">Content appears on left</p>
                </PopoverContent>
            </Popover>
        </div>
    ),
};

export const CustomWidth: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Wide Popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-96">
                <div className="space-y-2">
                    <h4 className="font-medium text-sm">Custom Width</h4>
                    <p className="text-sm text-neutral-600">
                        This popover has a custom width applied using className. You can make it as wide or narrow as you need for your content.
                    </p>
                </div>
            </PopoverContent>
        </Popover>
    ),
};
export const WithCheckbox: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Checkbox</Button>
            </PopoverTrigger>
            <PopoverContent className="w-96">
                <div className="space-y-3">
                    <Checkbox label="Candidate 1"/>
                    <Checkbox label="Candidate 2"/>
                    <Checkbox label="Candidate 3" />
                </div>
            </PopoverContent>
        </Popover>
    ),
};

export const WithList: Story = {
    render: () => (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">View Options</Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="space-y-2">
                    <h4 className="font-medium text-sm mb-2">Quick Actions</h4>
                    <ul className="space-y-1">
                        <li className="text-sm p-2 hover:bg-neutral-100 rounded cursor-pointer">
                            Edit profile
                        </li>
                        <li className="text-sm p-2 hover:bg-neutral-100 rounded cursor-pointer">
                            Account settings
                        </li>
                        <li className="text-sm p-2 hover:bg-neutral-100 rounded cursor-pointer">
                            Notifications
                        </li>
                        <li className="text-sm p-2 hover:bg-neutral-100 rounded cursor-pointer text-danger-600">
                            Sign out
                        </li>
                    </ul>
                </div>
            </PopoverContent>
        </Popover>
    ),
};
