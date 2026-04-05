# Next.js UI Component Library

> A modern UI library of reusable components, built to enhance your Next.js applications

> **Thesis Project**: Building Component Libraries for Next.js

## 📚 Overview

The project is a reusable component library designed to support scalable Next.js applications. It includes 25 customizable UI components that enhance the frontend development experience while ensuring consistency and maintainability across applications.

## 🚀 Features

1. **Accessibility First** - WCAG 2.1 AA compliant components
2. **Developer Experience** - Excellent TypeScript support and documentation
3. **Modern Stack** - Latest versions of React, Next.js, and Tailwind CSS
4. **Best Practices** - Comprehensive testing, Storybook documentation, and monorepo architecture

## 🏗️ Architecture

This project uses a **Turborepo monorepo** structure:

```
ui-component-lib/
├── apps/
│   ├── docs/         # Storybook documentation
│   ├── profile/      # Profile demo application
│   └── cv-app/       # CV/Resume demo application
└── packages/
    ├── ui/           # Main component library (published to npm)
    ├── eslint-config # Shared ESLint configuration
    ├── tsconfig/     # Shared TypeScript configurations
    └── tokens/       # Design tokens package
```

## 🚀 Technologies Used

- **React 19** - Latest React with Server Components support
- **Next.js 15** - App Router architecture
- **TypeScript** - Full type safety
- **Tailwind CSS 4.0** - Modern styling with design tokens
- **Radix UI** - Accessible component primitives
- **Turborepo** - High-performance build system
- **pnpm** - Fast, efficient package manager
- **Vitest** - Modern testing framework
- **Storybook 10** - Interactive component documentation
- **jest-axe** - Automated accessibility testing

## 📦 Packages

### @ui-component-lib/ui

The main component library package containing 25 production-ready components.

**Installation:**

```bash
npm install @ui-component-lib/ui
```

[View full documentation →](./packages/ui/README.md)

## 🎨 Components (25 Total)

### Primitives (8)

- Button
- Input
- Textarea
- Badge
- Avatar
- Divider
- Spinner
- Typography

### Forms (4)

- Checkbox
- Radio
- Switch
- Select

### Layout (3)

- Card
- Table
- Skeleton

### Navigation (3)

- Breadcrumb
- Tabs
- DropdownMenu

### Feedback (3)

- Alert
- Toast
- Progress

### Overlays (4)

- Dialog
- Popover
- Tooltip
- Accordion

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm 10+

### Getting Started

1. **Clone the repository**

```bash
git clone <repository-url>
cd ui-component-lib
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Start development**

```bash
# Run all apps in development mode
pnpm dev

# Run Storybook only
pnpm storybook

# Run demo applications
pnpm dev:profile      # Profile app (port 3001)
pnpm dev:cv           # CV app (port 3002)
```

### Available Scripts

```bash
# Development
pnpm dev              # Start all apps in dev mode
pnpm dev:docs         # Start Storybook documentation
pnpm dev:profile      # Start profile demo app (port 3001)
pnpm dev:cv           # Start CV demo app (port 3002)
pnpm dev:all          # Start all demo apps

# Build
pnpm build            # Build all packages and apps
pnpm build:ui         # Build UI package only
pnpm build:docs       # Build Storybook

# Testing
pnpm test             # Run all tests
pnpm test:ui          # Run UI package tests only

# Type Checking
pnpm typecheck        # Type check all packages

# Linting
pnpm lint             # Lint all packages

# Other
pnpm format           # Format code with Prettier
pnpm check            # Run all checks (lint, typecheck, test, build)
```

## 🧪 Testing

Comprehensive test coverage with:

- **Unit Tests** - Component functionality testing
- **Accessibility Tests** - Automated a11y checks with jest-axe
- **Type Safety** - TypeScript strict mode

```bash
cd packages/ui
pnpm test              # Run tests
pnpm test:coverage     # Run with coverage report
```

Current coverage: **26 test files** covering all 25 components

## 📖 Documentation

### Storybook

Interactive component documentation with live examples:

```bash
pnpm dev:docs
# or
pnpm storybook
```

Visit `http://localhost:6006` to explore all components.

### Component API

Each component is fully documented with:

- Props table with TypeScript types
- Multiple usage examples
- Accessibility notes
- Customization guidelines

## 🎓 Thesis Context

This project demonstrates:

1. **Monorepo Architecture** - Using Turborepo for efficient builds
2. **Component API Design** - Composable, flexible component patterns
3. **Accessibility Standards** - WCAG 2.1 AA compliance
4. **Developer Experience** - TypeScript, documentation, testing
5. **Distribution Strategy** - npm publishing, CSS handling
6. **Next.js Integration** - App Router, Server Components, RSC compatibility

### Key Architectural Decisions

- **Radix UI Primitives** - For accessibility and keyboard navigation
- **Tailwind CSS** - Utility-first styling with design tokens
- **Component Composition** - Flexible, composable component patterns
- **TypeScript First** - Full type safety and IntelliSense support
- **Tree-Shakeable** - Import only what you need
- **Framework Agnostic** - Works with any React framework

## 🚢 Publishing

The `@ui-component-lib/ui` package is configured for npm publishing:

```bash
cd packages/ui
pnpm build
npm publish
```

## 📊 Project Stats

- **25 Components** - Comprehensive component coverage
- **26 Test Files** - High test coverage
- **25 Story Files** - Complete Storybook documentation
- **100% TypeScript** - Full type safety
- **Accessibility Tested** - All components tested with jest-axe

## 🙏 Acknowledgments

This project builds upon open-source work:

- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives (MIT License)
- **[shadcn/ui](https://ui.shadcn.com/)** - Design inspiration and component patterns (MIT License)
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework (MIT License)

While inspired by shadcn/ui's Radix + Tailwind approach, this library differs by:
- Publishing as an npm package
- Monorepo architecture with demo applications
- Optimized for Next.js 15 + React 19
- Complete CI/CD pipeline with automated testing and deployment
- Custom semantic design token system

## 📄 License

MIT License - See LICENSE file for details

## 🔗 Links

- [Component Library Package](./packages/ui)
- [Storybook Documentation](https://ivanisaev-12.github.io/UI-Component-Library/) _(Auto-deployed from main branch)_
- [npm Package](https://www.npmjs.com/package/@ui-component-lib/ui)
- [GitHub Repository](https://github.com/IvanIsaev-12/UI-Component-Library)

## 👨‍🎓 Author

Author: Ivan Isaev
University of Pécs – BSc Computer Science

---
