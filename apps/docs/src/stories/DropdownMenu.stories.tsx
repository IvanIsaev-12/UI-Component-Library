import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	Button,
} from "@ui-component-lib/ui";

const meta = {
	title: "Components/DropdownMenu",
	component: DropdownMenu,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component: "Displays a list of actions or options to a user, triggered by a button or interactive element.",
			},
		},
	},
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story: "The standard dropdown menu containing a list of basic navigation or action items.",
			},
		},
	},
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">Open Menu</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuItem>Billing</DropdownMenuItem>
				<DropdownMenuItem>Team</DropdownMenuItem>
				<DropdownMenuItem>Subscription</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	),
};

export const WithShortcuts: Story = {
	parameters: {
		docs: {
			description: {
				story: "Displays keyboard shortcuts alongside menu items to aid power users with navigation.",
			},
		},
	},
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">File Menu</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					New File
					<DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					Save
					<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					Open
					<DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					Print
					<DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	),
};

export const WithCheckboxes: Story = {
	parameters: {
		docs: {
			description: {
				story: "Features checkbox items to allow toggling multiple independent settings or visibility options.",
			},
		},
	},
	render: () => {
		const [showStatusBar, setShowStatusBar] = React.useState(true);
		const [showActivityBar, setShowActivityBar] = React.useState(false);
		const [showPanel, setShowPanel] = React.useState(false);

		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline">View Options</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56">
					<DropdownMenuLabel>Appearance</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuCheckboxItem
						checked={showStatusBar}
						onCheckedChange={setShowStatusBar}
						onSelect={(e: Event) => e.preventDefault()}
					>
						Status Bar
					</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem
						checked={showActivityBar}
						onCheckedChange={setShowActivityBar}
						onSelect={(e: Event) => e.preventDefault()}
					>
						Activity Bar
					</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem
						checked={showPanel}
						onCheckedChange={setShowPanel}
						onSelect={(e: Event) => e.preventDefault()}
					>
						Panel
					</DropdownMenuCheckboxItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);
	},
};

export const WithRadioGroup: Story = {
	parameters: {
		docs: {
			description: {
				story: "Uses a radio group to ensure only one option can be selected from a specific set of items.",
			},
		},
	},
	render: () => {
		const [position, setPosition] = React.useState("bottom");

		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline">Panel Position</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56">
					<DropdownMenuLabel>Panel Position</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
						<DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		);
	},
};

export const WithSubmenu: Story = {
	parameters: {
		docs: {
			description: {
				story: "An example of nested menus (submenus) used to categorize and organize secondary actions.",
			},
		},
	},
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">More Actions</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>New Tab</DropdownMenuItem>
				<DropdownMenuItem>New Window</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuSub>
					<DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
					<DropdownMenuSubContent>
						<DropdownMenuItem>Email link</DropdownMenuItem>
						<DropdownMenuItem>Copy link</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Social Media</DropdownMenuItem>
					</DropdownMenuSubContent>
				</DropdownMenuSub>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Settings</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	),
};

export const WithDisabledItems: Story = {
	parameters: {
		docs: {
			description: {
				story: "Demonstrates the visual state and behavior of menu items that are currently unavailable for interaction.",
			},
		},
	},
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">Edit Menu</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>Edit</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					Undo
					<DropdownMenuShortcut>⌘Z</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem disabled>
					Redo
					<DropdownMenuShortcut>⌘Y</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					Cut
					<DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					Copy
					<DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem disabled>
					Paste
					<DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	),
};

export const UserMenu: Story = {
	parameters: {
		docs: {
			description: {
				story: "A complex real-world implementation combining labels, submenus, and destructive actions for user account management.",
			},
		},
	},
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">User Menu</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>john@example.com</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Profile</DropdownMenuItem>
				<DropdownMenuItem>Settings</DropdownMenuItem>
				<DropdownMenuItem>Keyboard shortcuts</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Team</DropdownMenuItem>
				<DropdownMenuSub>
					<DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
					<DropdownMenuSubContent>
						<DropdownMenuItem>Email</DropdownMenuItem>
						<DropdownMenuItem>Message</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>More...</DropdownMenuItem>
					</DropdownMenuSubContent>
				</DropdownMenuSub>
				<DropdownMenuSeparator />
				<DropdownMenuItem>GitHub</DropdownMenuItem>
				<DropdownMenuItem>Support</DropdownMenuItem>
				<DropdownMenuItem disabled>API</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="text-danger-600">
					Log out
					<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	),
};