# @ui-component-lib/ui

A modern, accessible UI component library built with React, TypeScript, Radix UI primitives, and Tailwind CSS.

## Features

- 🎨 **25 Production-Ready Components** - Comprehensive collection of UI primitives and compound components
- ♿ **Accessibility First** - Built on Radix UI with WAI-ARIA compliance and keyboard navigation
- 🎭 **Dark Mode Support** - All components support light and dark themes out of the box
- 📱 **Responsive Design** - Mobile-first approach with responsive variants
- 🔧 **Fully Customizable** - Extend with Tailwind CSS utility classes
- 📦 **Tree-Shakeable** - Import only what you need
- 🎯 **TypeScript Support** - Comprehensive type definitions included
- ⚡ **Next.js 15 Compatible** - Works seamlessly with App Router and Server Components

## Installation

```bash
npm install @ui-component-lib/ui
# or
pnpm add @ui-component-lib/ui
# or
yarn add @ui-component-lib/ui
```

### Peer Dependencies

This library requires React 19+ and Tailwind CSS 4+:

```bash
npm install react@^19.0.0 tailwindcss@^4.0.0
```

## Setup

### 1. Import Styles

Add the component library styles to your app:

```tsx
// app/layout.tsx (Next.js App Router)
import "@ui-component-lib/ui/styles.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
```

### 2. Configure Tailwind

Update your `tailwind.config.js` to scan the component library:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		// Add this line to scan the component library
		"./node_modules/@ui-component-lib/ui/dist/**/*.{js,mjs}",
	],
};
```

### 3. Dark Mode (Optional)

For dark mode support, configure Tailwind with class-based dark mode:

```js
// tailwind.config.js
module.exports = {
	darkMode: "class",
	// ... rest of config
};
```

Then toggle dark mode by adding/removing the `dark` class on the `<html>` element:

```tsx
<html className={isDark ? 'dark' : ''}>
```

## Quick Start

```tsx
import {
	Button,
	Input,
	Card,
	CardHeader,
	CardTitle,
	CardContent,
} from "@ui-component-lib/ui";

export default function LoginForm() {
	return (
		<Card className="w-96">
			<CardHeader>
				<CardTitle>Login</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<Input type="email" label="Email" placeholder="you@example.com" />
				<Input type="password" label="Password" placeholder="••••••••" />
				<Button variant="primary" className="w-full">
					Sign In
				</Button>
			</CardContent>
		</Card>
	);
}
```

## Available Components

### Primitives

- **Button** - Flexible button component with variants
- **Input** - Text input with label and error states
- **Textarea** - Multi-line text input
- **Badge** - Small status indicators
- **Avatar** - User profile images with fallback
- **Divider** - Visual content separator
- **Spinner** - Loading indicator
- **Typography** - Text elements with variants

### Form Components

- **Checkbox** - Checkbox with label
- **Radio** - Radio button groups
- **Switch** - Toggle switch
- **Select** - Dropdown select menu

### Layout

- **Card** - Content container with header, body, and footer
- **Table** - Data table with header and rows
- **Skeleton** - Loading placeholder

### Navigation

- **Breadcrumb** - Hierarchical navigation
- **Tabs** - Tab navigation with panels
- **DropdownMenu** - Context menu with items

### Feedback

- **Alert** - Notification messages
- **Toast** - Temporary notifications
- **Progress** - Progress indicator

### Overlays

- **Dialog** - Modal dialog
- **Popover** - Floating content container
- **Tooltip** - Hover information
- **Accordion** - Collapsible content sections

## Component Examples

### Button Variants

```tsx
import { Button } from '@ui-component-lib/ui'

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Form Components

```tsx
import { Checkbox, Radio, Switch, Select } from '@ui-component-lib/ui'

// Checkbox
<Checkbox
  id="terms"
  label="I agree to the terms and conditions"
  checked={checked}
  onCheckedChange={setChecked}
/>

// Radio Group
<div className="space-y-2">
  <Radio id="option1" name="options" label="Option 1" value="1" />
  <Radio id="option2" name="options" label="Option 2" value="2" />
</div>

// Switch
<Switch
  id="notifications"
  label="Enable notifications"
  checked={enabled}
  onCheckedChange={setEnabled}
/>

// Select
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

### Toast Notifications

```tsx
import { ToastProvider, useToast, Button } from "@ui-component-lib/ui";

function App() {
	return (
		<ToastProvider>
			<MyComponent />
		</ToastProvider>
	);
}

function MyComponent() {
	const { displayToast } = useToast();

	return (
		<Button onClick={() => displayToast("Operation successful!", "success")}>
			Show Toast
		</Button>
	);
}
```

### Dialog (Modal)

```tsx
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	Button,
} from "@ui-component-lib/ui";

<Dialog>
	<DialogTrigger asChild>
		<Button>Open Dialog</Button>
	</DialogTrigger>
	<DialogContent>
		<DialogHeader>
			<DialogTitle>Confirm Action</DialogTitle>
			<DialogDescription>Are you sure you want to proceed?</DialogDescription>
		</DialogHeader>
		{/* Dialog content */}
	</DialogContent>
</Dialog>;
```

## Customization

All components accept a `className` prop for custom styling:

```tsx
<Button className="rounded-full px-8 py-4 text-lg">Custom Styled Button</Button>
```

### Using Tailwind Utilities

```tsx
<Card className="max-w-md mx-auto shadow-2xl">
	<CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500">
		<CardTitle className="text-white">Gradient Header</CardTitle>
	</CardHeader>
	<CardContent className="space-y-4 p-6">{/* Content */}</CardContent>
</Card>
```

## Accessibility

All components follow WAI-ARIA best practices:

- Proper ARIA attributes and roles
- Keyboard navigation support
- Screen reader friendly
- Focus management
- Semantic HTML

## TypeScript

Full TypeScript support with exported types:

```tsx
import type { ButtonProps, InputProps, CardProps } from "@ui-component-lib/ui";

const MyButton: React.FC<ButtonProps> = (props) => {
	return <Button {...props} />;
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Next.js Integration

### Server Components

Most components work with Next.js Server Components:

```tsx
// app/page.tsx (Server Component)
import { Card, CardHeader, CardTitle } from "@ui-component-lib/ui";

export default function Page() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Server Component</CardTitle>
			</CardHeader>
		</Card>
	);
}
```

### Client Components

Interactive components require `'use client'`:

```tsx
"use client";

import { Button, useToast } from "@ui-component-lib/ui";

export default function ClientComponent() {
	const { displayToast } = useToast();

	return (
		<Button onClick={() => displayToast("Clicked!", "success")}>
			Click Me
		</Button>
	);
}
```

## License

MIT

## Contributing

This is a thesis project. For questions or contributions, please open an issue on GitHub.

## Documentation

For full documentation and interactive examples, visit our [Storybook](https://ivanisaev-12.github.io/ui-component-lib/).
