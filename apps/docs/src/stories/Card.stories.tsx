import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@ui-component-lib/ui";

const meta = {
    title: "Components/Card",
    component: Card,
    tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
    render: () => (
        <div className="max-w-md">
            <Card>
                <CardHeader>
                    <CardTitle>Title</CardTitle>
                    <CardDescription>Description</CardDescription>
                </CardHeader>
                <CardContent>
                    Our analytics dashboard provides real-time insights into your business performance. Track key metrics, visualize trends, and make data-driven decisions to grow your business.
                </CardContent>
                <CardFooter>
                    Text
                </CardFooter>
            </Card>
        </div>
    )
}
export const NoFooter: Story = {
    render: () => (
        <div className="max-w-md">
            <Card>
                <CardHeader>
                    <CardTitle>Notification</CardTitle>
                    <CardDescription>You have 3 unread messages</CardDescription>
                </CardHeader>
                <CardContent>
                    Check your inbox for new messages from your team. Your monthly report is ready for review.
                </CardContent>
            </Card>
        </div>
    )
}

export const Grid: Story = {
    render: () => (
        <div className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Total Users</CardTitle>
                        <CardDescription>Active users this month</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">2,543</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Revenue</CardTitle>
                        <CardDescription>Total earnings</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">$12,584</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Growth</CardTitle>
                        <CardDescription>Month over month</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">+23%</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
export const WithButton: Story = {
    render: () => (
        <div className="max-w-md">
            <Card>
                <CardHeader>
                    <CardTitle>Deploy Project</CardTitle>
                    <CardDescription>Deploy your project to production</CardDescription>
                </CardHeader>
                <CardContent>
                    Your project is ready to be deployed. Click below to start the deployment process.
                </CardContent>
                <CardFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button variant="primary">Deploy Now</Button>
                </CardFooter>
            </Card>
        </div>
    )
}