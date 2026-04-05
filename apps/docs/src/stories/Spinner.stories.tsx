import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner, Button, Card } from "@ui-component-lib/ui";

const meta = {
	title: "Feedback/Spinner",
	component: Spinner,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"An animated loading indicator used to communicate that content or data is being fetched. Available in small, medium, and large sizes.",
			},
		},
	},
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "The size of the spinner",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "md" },
			},
		},
	},
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
	render: () => {
		return (
			<div className="flex items-center gap-4 text-primary-600">
				<Spinner size="sm" />
				<Spinner size="md" />
				<Spinner size="lg" />
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story: "All three available sizes shown side by side: small, medium, and large.",
			},
		},
	},
};

export const LoadingButton: Story = {
	render: () => {
		const [isLoading, setIsLoading] = React.useState(false);

		const handleClick = () => {
			setIsLoading(true);
			setTimeout(() => {
				setIsLoading(false);
			}, 3000);
		};

		return (
			<div className="flex flex-col gap-4 items-start">
				<Button
					onClick={handleClick}
					disabled={isLoading}
					className="min-w-[120px]"
				>
					{isLoading ? (
						<div className="flex items-center gap-2">
							<Spinner size="sm" />
							<span>Loading...</span>
						</div>
					) : (
						"Submit"
					)}
				</Button>
				<p className="text-sm text-neutral-600 dark:text-neutral-400">
					Click the button to see the loading state
				</p>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story: "Spinner embedded inside a button to indicate an async operation is in progress.",
			},
		},
	},
};

export const DataFetching: Story = {
	render: () => {
		const [isLoading, setIsLoading] = React.useState(true);
		const [data, setData] = React.useState<string | null>(null);

		React.useEffect(() => {
			const timer = setTimeout(() => {
				setData("Your data has been loaded successfully!");
				setIsLoading(false);
			}, 3000);

			return () => clearTimeout(timer);
		}, []);

		const handleRefresh = () => {
			setIsLoading(true);
			setData(null);
			setTimeout(() => {
				setData("Data refreshed at " + new Date().toLocaleTimeString());
				setIsLoading(false);
			}, 1500);
		};

		return (
			<Card className="p-6 max-w-md">
				<h3 className="text-lg font-semibold mb-4">Dashboard Data</h3>
				{isLoading ? (
					<div className="flex flex-col items-center justify-center py-8 gap-3">
						<Spinner size="lg" className="text-primary-600" />
						<p className="text-sm text-neutral-600 dark:text-neutral-400">
							Fetching data...
						</p>
					</div>
				) : (
					<div className="space-y-4">
						<p className="text-neutral-700 dark:text-neutral-300">{data}</p>
						<Button onClick={handleRefresh} variant="outline" size="sm">
							Refresh Data
						</Button>
					</div>
				)}
			</Card>
		);
	},
	parameters: {
		docs: {
			description: {
				story: "Full card loading pattern — spinner replaces content while data is fetched, then reveals the result.",
			},
		},
	},
};
